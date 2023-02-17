import md from 'markdown-it'
import mk from 'markdown-it-katex'
import hljs from 'highlight.js'


const renderer = md({
    html: true,
    linkify: true,
    typographer: true,
    highlight: function (str, lang) {
        return hljs.highlightAuto(str).value
    }
}).use(mk)

export function renderMd(str) {
    return renderer.render(str)
}