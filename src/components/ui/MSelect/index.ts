import MSelect from './MSelect.vue'
import { App } from 'vue'

MSelect.install = (Vue: App) => {
  Vue.component('MSelect', MSelect)
}

export default MSelect