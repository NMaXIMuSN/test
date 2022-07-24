import MList from './MList.vue'
import MListItemButton from './MListItemButton.vue'
import MListItemDefault from './MListItemDefault.vue'
import { App } from 'vue'

MList.install = (Vue: App) => {
  Vue.component("MList", MList)
  Vue.component("MListItemButton", MListItemButton)
  Vue.component("MListItemDefault", MListItemDefault)
}

export default MList