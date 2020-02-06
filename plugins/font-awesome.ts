import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-regular-svg-icons'

library.add(faSun, faMoon)

Vue.component('fa-icon', FontAwesomeIcon)
