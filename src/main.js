
import './styles.scss'
import './theme.css'
import '../public/asset-styles.css'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

import { createApp } from 'vue'

import App from './App.vue'
import router from './router.js'


const app = createApp(App)
app.use(router)

app.mount('#app')
