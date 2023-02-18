import { createApp } from 'vue'
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'
import Home from './Home.vue'
import App from './App.vue'
import { useConfigStore } from './stores/config'
import { useScrollStore } from './stores/scroll'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faLocationDot, faUserSecret } from '@fortawesome/free-solid-svg-icons'

import './index.css'
import 'katex/dist/katex.min.css';
import 'highlight.js/styles/github.css';
import 'github-markdown-css/github-markdown-light.css';


library.add(faLocationDot)



const pinia = createPinia()

const app = createApp(App)

app.use(pinia)
app.component('font-awesome-icon', FontAwesomeIcon)

const config = useConfigStore()
const scroll = useScrollStore()

const routes = [
  { path: '/', component: Home },
  { path: '/page/:curPage', component: Home, props: true },
  { path: '/post/:id', component: () => import('./Post.vue'), props: true },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    scroll.setPosition(savedPosition)
  }
})

app.use(router)

config.init().then(() => {
  app.mount('#app')
})
