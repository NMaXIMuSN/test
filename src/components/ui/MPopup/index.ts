import MPopup from './MPopup.vue'
import { App } from 'vue'

MPopup.install = (Vue : App) => {
  Vue.component('MPopup', MPopup)
}

export default MPopup