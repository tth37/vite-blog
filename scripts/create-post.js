import fs from "fs"

const postFile = process.argv[2]

const POST_DIR = "./posts/"

// ensure post file name is valid
if (!postFile.match(/^[a-z0-9-_]+$/)) {
    throw new Error(`Invalid file name: ${postFile}`)
}

// ensure post file not already exists
if (fs.existsSync(POST_DIR + postFile + ".md")) {
    throw new Error(`File already exists: ${postFile}`)
}

// create post file
fs.writeFileSync(
    POST_DIR + postFile + ".md",
    `---\ntitle: ${postFile}\ndate: ${new Date().toString()}\nabstract: \n---\n`
)
