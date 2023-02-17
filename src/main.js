import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { createPinia } from 'pinia'
import './index.css'
import Home from './Home.vue'
import App from './App.vue'
import { useConfigStore } from './stores/config'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faLocationDot, faUserSecret } from '@fortawesome/free-solid-svg-icons'

library.add(faLocationDot)

const routes = [
  { path: '/', component: Home },
  { path: '/page/:curPage', component: Home, props: true },
  { path: '/post/:id', component: () => import('./Post.vue'), props: true },
]

const router = createRouter({
  history: createWebHashHistory(),
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
