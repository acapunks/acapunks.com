import App from '@/App.vue'
import '@/assets/css/tailwind.css'
import '@/assets/scss/main.scss'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons'
import {
  faBars,
  faCat,
  faDog,
  faDove,
  faFish,
  faHorseHead,
  faRobot,
  faSpider
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { createApp } from 'vue'

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
