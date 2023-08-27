import './assets/scss/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import "material-design-icons-iconfont"

import App from './App.vue'
import router from './router/router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
