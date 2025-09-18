import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
//import { createPinia } from 'pinia'
import router from './router'

import ButtonsGlobal from './components/ButtonsGlobal.vue' // ✅ import

//create vue app instance
const app = createApp(App)

app.component('ButtonsGlobal', ButtonsGlobal) // ✅ register globally

//use pinia and router
//app.use(createPinia())
app.use(router)

// mount app
app.mount('#app') 


//   => main entry file
//   Pinia and router yesma connect hunxa
