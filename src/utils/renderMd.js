import hljs from "highlight.js"
import md from "markdown-it"
import mk from "./markdown-it-katex"
import anchor from "markdown-it-anchor"

const renderer = md({
    html: true,
    linkify: true,
    typographer: true,
    highlight: function (str, lang) {
        return hljs.highlightAuto(str, [lang]).value
    },
}).use(mk, {
    throwOnError: true,
    errorColor: " #cc0000",
}).use(anchor, {
    permalink: true,
    permalinkBefore: true,
    permalinkSymbol: "¶",
    level: [1, 2]
})

export function renderMd(str) {
    return renderer.render(str)
}
