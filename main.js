import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import Home from '/pages/Home.vue'
import Folio from '/pages/Folio.vue'

const app = createApp(App)
const router = new createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/', component: Home },
      { path: '/folio', component: Folio }
    ]
  })

app.use(router)
app.mount('#app')
