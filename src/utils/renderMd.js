import hljs from 'highlight.js'
import md from 'markdown-it'
import mk from 'markdown-it-katex'

const renderer = md({
  html: true,
  linkify: true,
  typographer: true,
  highlight: function (str, lang) {
    return hljs.highlightAuto(str, [lang]).value
  },
}).use(mk)

export function renderMd(str) {
  return renderer.render(str)
}
