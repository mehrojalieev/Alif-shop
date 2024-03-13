import "./main.scss"
import { createApp } from 'vue'
import App from './App.vue'
import routes from "@/router/index.js"
import store from "./store/store"

    const app = createApp(App)
    app.use(routes)
    app.use(store)
    app.mount('#app')

