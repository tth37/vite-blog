import { createApp } from "vue"
import { createRouter, createWebHistory } from "vue-router"
import { createPinia } from "pinia"
import { useConfigStore } from "./stores/config"
import { useScrollStore } from "./stores/scroll"
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { faClock, faFolderOpen, faLocationDot, faTag } from "@fortawesome/free-solid-svg-icons"
import App from "./App.vue"
import "./index.css"
import "github-markdown-css/github-markdown-light.css"

// Create Vue.js Application
const app = createApp(App)

// Create Pinia Store
const pinia = createPinia()
app.use(pinia)

// Initialize Font Awesome Icons
library.add([faLocationDot, faClock, faFolderOpen, faTag])
app.component("font-awesome-icon", FontAwesomeIcon)

// Create Vue.js Router
const scroll = useScrollStore()
const routes = [
    { path: "/", component: () => import("./pages/Home.vue") },
    { path: "/page/:curPage", component: () => import("./pages/Home.vue"), props: true },
    { path: "/post/:id", component: () => import("./pages/Post.vue"), props: true },
    { path: "/tags", component: () => import("./pages/Tags.vue") },
    { path: "/tag/:tag", component: () => import("./pages/Tag.vue"), props: true },
    { path: "/tag/:tag/page/:curPage", component: () => import("./pages/Tag.vue"), props: true },
    { path: "/categories", component: () => import("./pages/Categories.vue") },
    { path: "/category/:category", component: () => import("./pages/Category.vue"), props: true },
    { path: "/category/:category/page/:curPage", component: () => import("./pages/Category.vue"), props: true },
    { path: "/about", component: () => import("./pages/About.vue") },
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
