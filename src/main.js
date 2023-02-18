import { createApp } from 'vue'
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'
import Home from './Home.vue'
import App from './App.vue'
import { useConfigStore } from './stores/config'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faLocationDot, faUserSecret } from '@fortawesome/free-solid-svg-icons'

import './index.css'
import 'katex/dist/katex.min.css';
import 'highlight.js/styles/github.css';
import 'github-markdown-css/github-markdown-light.css';


library.add(faLocationDot)

const routes = [
  { path: '/', component: Home },
  { path: '/page/:curPage', component: Home, props: true },
  { path: '/post/:id', component: () => import('./Post.vue'), props: true },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const pinia = createPinia()

const app = createApp(App)

app.use(router)
app.use(pinia)
app.component('font-awesome-icon', FontAwesomeIcon)

const config = useConfigStore()

config.init().then(() => {
  app.mount('#app')
})
