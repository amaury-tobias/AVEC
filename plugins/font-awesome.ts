import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserCircle } from '@fortawesome/free-regular-svg-icons'
import { faHome, faCog } from '@fortawesome/free-solid-svg-icons'

config.autoAddCss = false
library.add(faHome, faCog, faUserCircle)

Vue.component('fa-icon', FontAwesomeIcon)
