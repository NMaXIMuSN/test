import MAlert from './MAlert.vue'
import { App } from 'vue'

MAlert.install = (Vue: App) => {
  Vue.component('MAlert', MAlert)
}

export default MAlert