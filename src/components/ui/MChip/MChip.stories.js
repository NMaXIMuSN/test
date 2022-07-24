import MChip from './MChip.vue'

export default {
  title: 'Chip',
  component: MChip,
}

const Template = (args) => ({
  components: {
    MChip,
  },
  setup() {
    return { args }
  },
  template: '<m-chip :titile="args.titile" v-bind="args"></m-chip>',
})

export const Default = Template.bind({})
Default.args = {
  title: 'Добавьте свойства',
}

