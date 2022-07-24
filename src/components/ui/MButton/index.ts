import MButton from './MButton.vue'
import { App } from 'vue'

MButton.install = (Vue: App) => {
  Vue.component('MButton', MButton)
}

export default MButton