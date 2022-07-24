import MCalendar from './MCalendar.vue'

export default {
  title: 'Calendar',
  component: MCalendar,
}

const Template = (args) => ({
  components: { MCalendar },
  data() {
    return {
      data: {
        startDate: '',
        finishDate: '',
      },
    }
  },
  setup() {
    return { args }
  },
  template: '<m-calendar v-model="data" v-bind="args"></m-calendar>',
})

export const Default = Template.bind({})


