import MTitle from './MTitle.vue'
import { App } from 'vue'

MTitle.install = (Vue: App) => {
  Vue.component('MTitle', MTitle)
}

export default MTitle