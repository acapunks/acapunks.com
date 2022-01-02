import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/tailwind.css'
import '@/assets/scss/main.scss'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faBars,
  faDog,
  faCat,
  faDove,
  faSpider,
  faHorseHead,
  faFish,
  faRobot
} from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons'

library.add(
  faTwitter,
  faDiscord,
  faBars,
  faDog,
  faCat,
  faDove,
  faSpider,
  faHorseHead,
  faFish,
  faRobot
)

createApp(App)
  .use(store)
  .use(router)
  .component('fa', FontAwesomeIcon)
  .mount('#app')
