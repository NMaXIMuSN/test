import MCheckbox from './MCheckbox.vue'
import { App } from 'vue'

MCheckbox.install = (Vue: App) => {
  Vue.component('MCheckbox', MCheckbox)
}

export default MCheckbox