import MTabs from './MTabs.vue'

export default {
  title: 'Tabs',
  component: MTabs,
}

const Template = (args) => ({
  components: { MTabs },
  data() {
    return {
      value: {
        title: 'Главная информация',
        value: 'main',
      },
    }
  },
  setup() {
    return { args }
  },
  template: `
  <m-tabs v-model="value" v-bind="args" />
  `,
})

export const Default = Template.bind({})
Default.args = {
  tabs: [
    {
      title: 'Главная информация',
      value: 'main',
    },
    {
      title: 'История заказов',
      value: 'history',
    },
  ],
}

