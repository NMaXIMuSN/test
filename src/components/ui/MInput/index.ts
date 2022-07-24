import MInput from './MInput.vue'
import { App } from 'vue'

MInput.install = (Vue: App) => {
  Vue.component('MInput', MInput)
}

export default MInput