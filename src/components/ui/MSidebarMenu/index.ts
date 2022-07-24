import MSidebarMenu from './MSidebarMenu.vue'
import { App } from 'vue'

MSidebarMenu.install = (Vue : App) => {
  Vue.component('MSidebarMenu', MSidebarMenu)
}

export default MSidebarMenu