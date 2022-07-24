import MTabs from './MTabs.vue'
import { App } from 'vue'

MTabs.install = (Vue: App) => {
  Vue.component('MTabs', MTabs)
}

export default MTabs