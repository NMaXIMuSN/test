import MSearch from './MSearch.vue'
import { App } from 'vue'

MSearch.install = (Vue : App) => {
  Vue.component('MSearch', MSearch)
}

export default MSearch