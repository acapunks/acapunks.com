import { faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons'
import {
  faBars,
  faCat,
  faDog,
  faDove,
  faFish,
  faHorseHead,
  faRobot,
  faSpider,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '@/App.vue'
import router from '@/router'
import '@/assets/css/tailwind.css'

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
  faRobot,
  faEnvelope
)

const pinia = createPinia()

createApp(App)
  .use(router)
  .use(pinia)
  .component('fa', FontAwesomeIcon)
  .mount('#app')
