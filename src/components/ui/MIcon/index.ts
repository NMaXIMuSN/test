import MIcon from './MIcon.vue'
import { App } from 'vue'

MIcon.install = (Vue: App) => {
  Vue.component('MIcon', MIcon)
}

export default MIcon