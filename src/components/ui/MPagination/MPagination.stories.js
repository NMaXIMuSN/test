import MPagination from './MPagination.vue'

export default {
  title: 'Pagination List',
  component: MPagination,
}

const Template = (args) => ({
  components: { MPagination },
  data() {
    return {
      page: 1,
    }
  },
  setup() {
    return { args }
  },
  template: '{{page}}<MPagination v-model="page" v-bind="args"></MPagination>',
})

export const Default = Template.bind({})
Default.args = {
  pageCount: 10,
}

