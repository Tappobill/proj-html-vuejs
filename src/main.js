import Vue from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret, faClock, faPhone, faEnvelope, faChevronDown, faPlay, faNetworkWired, faBriefcase, faChartSimple, faPlaneUp, faGlobe, faFolderOpen, faArrowRight, faQuoteRight, faLocationDot, faAngleRight} from '@fortawesome/free-solid-svg-icons'
/*Import icone regular */
import { faFaceSmile, faUser, faCopyright } from '@fortawesome/free-regular-svg-icons'

import { faFacebookF, faTwitter, faLinkedinIn} from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faClock, faPhone, faEnvelope, faChevronDown, faPlay, faQuoteRight, faLocationDot, faAngleRight, faCopyright)

/* add icons to the library */
library.add(faFaceSmile, faFacebookF, faTwitter, faLinkedinIn, faUser, faNetworkWired, faBriefcase, faChartSimple, faPlaneUp, faGlobe, faFolderOpen, faArrowRight)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
