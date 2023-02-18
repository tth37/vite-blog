import { createApp } from "vue"
import { createRouter, createWebHistory } from "vue-router"
import { createPinia } from "pinia"
import { useConfigStore } from "./stores/config"
import { useScrollStore } from "./stores/scroll"
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"
import App from "./App.vue"
import "./index.css"
import "katex/dist/katex.min.css"
import "highlight.js/styles/github.css"
import "github-markdown-css/github-markdown-light.css"

// Create Vue.js Application
const app = createApp(App)

// Create Pinia Store
const pinia = createPinia()
app.use(pinia)

// Initialize Font Awesome Icons
library.add(faLocationDot)
app.component("font-awesome-icon", FontAwesomeIcon)

// Create Vue.js Router
const scroll = useScrollStore()
const routes = [
    { path: "/", component: () => import("./pages/Home.vue") },
    { path: "/page/:curPage", component: () => import("./pages/Home.vue"), props: true },
    { path: "/post/:id", component: () => import("./pages/Post.vue"), props: true },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        scroll.setPosition(savedPosition)
    }
})
app.use(router)

// Bootstrap after config is loaded
const config = useConfigStore()
config.init().then(() => {
    app.mount("#app")
})
