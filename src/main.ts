import './lib/wheel.scss'
import './index.scss'
import { createApp } from 'vue'
import App from './App.vue'
import 'github-markdown-css'
import Markdown from './components/Markdown.vue'
import Demo from './components/Demo.vue'

import { router } from './router'
const app = createApp(App)
app.use(router)
app.mount('#app')
app.component('Markdown',Markdown)
app.component('Demo',Demo)