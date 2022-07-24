import MDragList from './MDragList.vue'
import { App } from 'vue'

MDragList.install = (Vue: App) => {
  Vue.component('MDragList', MDragList)
}

export default MDragList