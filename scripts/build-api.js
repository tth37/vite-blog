import fs from 'fs'
import fm from 'front-matter'
import yaml from 'js-yaml'

function slicePages(posts, perPage) {
  const pages = []
  let page = []
  for (let i = 0; i < posts.length; i++) {
    if (page.length >= perPage) {
      pages.push(page)
      page = []
    }
    page.push({
      meta: posts[i].meta,
    })
  }
  if (page.length > 0) {
    pages.push(page)
  }
  return pages
}

const POST_DIR = './posts/'
const API_DIR = './public/api/'

const files = fs.readdirSync(POST_DIR)

const postFiles = files.filter((file) => {
  return file.endsWith('.md') && !file.endsWith('about.md')
})
const configFile = files.filter((file) => file.endsWith('.yml'))
const aboutFiles = files.filter((file) => file.endsWith('about.md'))

// ensure post file names are valid
postFiles.forEach((file) => {
  const fileName = file.split('.')[0]
  if (!fileName.match(/^[a-z0-9-_]+$/)) {
    throw new Error(`Invalid file name: ${fileName}`)
  }
})

// ensure config file name is valid & only one config file
if (configFile.length !== 1) {
  throw new Error('Invalid config file')
}

configFile.forEach((file) => {
  const fileName = file.split('.')[0]
  if (fileName !== 'config') {
    throw new Error(`Invalid config file name: ${fileName}`)
  }
})

let posts = postFiles.map((file) => {
  const data = fs.readFileSync(POST_DIR + file, 'utf8')
  const content = fm(data)
  return {
    meta: {
      ...content.attributes,
      id: file.split('.')[0],
    },
    content: content.body,
  }
})

const about = aboutFiles.map((file) => {
  const data = fs.readFileSync(POST_DIR + file, 'utf8')
  const content = fm(data)
  return {
    content: content.body,
  }
})

posts = posts.sort((a, b) => {
  return new Date(b.meta.date) - new Date(a.meta.date)
})

let config = yaml.load(fs.readFileSync(POST_DIR + configFile[0], 'utf8'))

const pages = slicePages(posts, config.postsPerPage)

config = { ...config, totPage: pages.length, tagTotPage: {}, categoryTotPage: {} }

const tags = {}
const categories = {}

posts.forEach((post) => {
  if (post.meta.tags) {
    post.meta.tags.forEach((tag) => {
      if (tags[tag]) {
        tags[tag].push({meta: post.meta})
      } else {
        tags[tag] = [{meta: post.meta}]
      }
    })
  }
  if (post.meta.category) {
    if (categories[post.meta.category]) {
      categories[post.meta.category].push({meta: post.meta})
    } else {
      categories[post.meta.category] = [{meta: post.meta}]
    }
  }
})


// clean up API_DIR
if (fs.existsSync(API_DIR)) {
  fs.rmSync(API_DIR, { recursive: true })
}

// create API_DIR, API_DIR/page, API_DIR/post, API_DIR/config
fs.mkdirSync(API_DIR)
fs.mkdirSync(API_DIR + 'page')
fs.mkdirSync(API_DIR + 'post')
fs.mkdirSync(API_DIR + 'tag')
fs.mkdirSync(API_DIR + 'category')

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
  fs.writeFileSync(API_DIR + 'about', JSON.stringify(about))
})

// API_DIR/tag/tags
fs.writeFileSync(API_DIR + 'tags', JSON.stringify(Object.keys(tags)))

// API_DIR/tag/*
Object.keys(tags).forEach((tag) => {
  fs.mkdirSync(API_DIR + `tag/${tag}`)
  const tagPages = slicePages(tags[tag], config.postsPerPage)
  tagPages.forEach((page, index) => {
    fs.writeFileSync(API_DIR + `tag/${tag}/${index + 1}`, JSON.stringify(page))
  })
  config.tagTotPage[tag] = tagPages.length
})

// API_DIR/category/categories
fs.writeFileSync(API_DIR + 'categories', JSON.stringify(Object.keys(categories)))

// API_DIR/category/*
Object.keys(categories).forEach((category) => {
  fs.mkdirSync(API_DIR + `category/${category}`)
  const categoryPages = slicePages(categories[category], config.postsPerPage)
  categoryPages.forEach((page, index) => {
    fs.writeFileSync(API_DIR + `category/${category}/${index + 1}`, JSON.stringify(page))
  })
  config.categoryTotPage[category] = categoryPages.length
})

// API_DIR/config
fs.writeFileSync(API_DIR + 'config', JSON.stringify(config))