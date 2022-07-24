import MPagination from './MPagination.vue'
import { App } from 'vue'

MPagination.install = (Vue: App) => {
  Vue.component('MPagination', MPagination)
}

export default MPagination