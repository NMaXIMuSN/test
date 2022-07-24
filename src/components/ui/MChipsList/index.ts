import MChipsList from './MChipsList.vue'
import { App } from 'vue'

MChipsList.install = (Vue: App) => {
  Vue.component('MChipsList', MChipsList)
}

export default MChipsList