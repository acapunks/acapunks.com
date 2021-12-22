import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/tailwind.css'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons'

library.add(faTwitter, faDiscord, faBars)

createApp(App)
  .use(store)
  .use(router)
  .component('fa', FontAwesomeIcon)
  .mount('#app')
