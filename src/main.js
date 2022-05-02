/* Creating a new Vue app and mounting it to the #app element in the index.html file. */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')

