import MChip from './MChip.vue'
import { App } from 'vue'

MChip.install = (Vue: App) => {
  Vue.component('MChip', MChip)
}

export default MChip