import fs from "fs"
import fm from "front-matter"
import yaml from "js-yaml"

function slicePages(posts, perPage) {
    const pages = []
    let page = []
    for (let i = 0; i < posts.length; i++) {
        if (page.length >= perPage) {
            pages.push(page)
            page = []
        }
        page.push({
            id: posts[i].meta.id,
            title: posts[i].meta.title,
            date: posts[i].meta.date,
            abstract: posts[i].meta.abstract,
        })
    }
    if (page.length > 0) {
        pages.push(page)
    }
    return pages
}

const POST_DIR = "./posts/"
const API_DIR = "./public/api/"

const files = fs.readdirSync(POST_DIR)

const postFiles = files.filter((file) => {
    return file.endsWith(".md") && !file.endsWith("about.md")
})
const configFile = files.filter((file) => file.endsWith(".yml"))
const aboutFiles = files.filter((file) => file.endsWith("about.md"))

// ensure post file names are valid
postFiles.forEach((file) => {
    const fileName = file.split(".")[0]
    if (!fileName.match(/^[a-z0-9-_]+$/)) {
        throw new Error(`Invalid file name: ${fileName}`)
    }
})

// ensure config file name is valid & only one config file
if (configFile.length !== 1) {
    throw new Error("Invalid config file")
}

configFile.forEach((file) => {
    const fileName = file.split(".")[0]
    if (fileName !== "config") {
        throw new Error(`Invalid config file name: ${fileName}`)
    }
})

let posts = postFiles.map((file) => {
    const data = fs.readFileSync(POST_DIR + file, "utf8")
    const content = fm(data)
    return {
        meta: {
            ...content.attributes,
            id: file.split(".")[0],
        },
        content: content.body,
    }
})

const about = aboutFiles.map((file) => {
    const data = fs.readFileSync(POST_DIR + file, "utf8")
    const content = fm(data)
    return {
        content: content.body,
    }
})

posts = posts.sort((a, b) => {
    return new Date(b.meta.date) - new Date(a.meta.date)
})

let config = yaml.load(fs.readFileSync(POST_DIR + configFile[0], "utf8"))

const pages = slicePages(posts, config.postsPerPage)

config = {...config, totPage: pages.length}

// clean up API_DIR
if (fs.existsSync(API_DIR)) {
    fs.rmSync(API_DIR, { recursive: true })
}

// create API_DIR, API_DIR/page, API_DIR/post, API_DIR/config
fs.mkdirSync(API_DIR)
fs.mkdirSync(API_DIR + "page")
fs.mkdirSync(API_DIR + "post")

// API_DIR/config
fs.writeFileSync(API_DIR + "config", JSON.stringify(config))

// API_DIR/page/*
pages.forEach((page, index) => {
    fs.writeFileSync(API_DIR + `page/${index + 1}`, JSON.stringify(page))
})

// API_DIR/post/*
posts.forEach((post) => {
    fs.writeFileSync(API_DIR + `post/${post.meta.id}`, JSON.stringify(post))
})

// API_DIR/about
about.forEach((about) => {
    fs.writeFileSync(API_DIR + "about", JSON.stringify(about))
})