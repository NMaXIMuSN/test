import MTable from './MTable.vue'
import { App } from 'vue'

MTable.install = (Vue : App) => {
  Vue.component('MTable', MTable)
}

export default MTable