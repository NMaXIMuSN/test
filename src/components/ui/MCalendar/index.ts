import MCalendar from './MCalendar.vue'
import { App } from 'vue'

MCalendar.install = (Vue: App) => {
  Vue.component('MCalendar', MCalendar)
}

export default MCalendar