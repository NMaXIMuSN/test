import MSearch from './MSearch.vue'
import {ref} from 'vue'


export default {
  title: 'Search',
  component: MSearch,
}

const Template = (args) => ({
  components: { 
    MSearch,
  },
  setup() {
    const argsM = ref(args)

    return { argsM }
  },
  template: `<m-search v-model="argsM.test" v-model:currentSearchItem="argsM.currentSearchItem" v-bind="argsM"></m-search>`,
})

export const Default = Template.bind({})
Default.args = {
  test: '',
  searchItems: [
    {
      title: "по ID",
      value: "id",
    },
    {
      title: "по имени",
      value: "name",
    },
    {
      title: "по почте",
      value: "email",
    },
  ],
  currentSearchItem: {
    title: "по ID",
    value: "id",
  },
}