import { createApp } from 'vue'
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'
import './index.css'
import Home from './Home.vue'
import App from './App.vue'
import { useConfigStore } from './stores/config'

const routes = [
  { path: '/', component: Home },
  { path: '/page/:curPage', component: Home, props: true },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

const pinia = createPinia()

const app = createApp(App)
app.use(router)
app.use(pinia)

const config = useConfigStore()
config.init().then(() => {
  app.mount('#app')
})

