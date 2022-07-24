import MCheckbox from './MCheckbox.vue'

export default {
  title: 'Checkbox',
  component: MCheckbox,
}

const Template = (args) => ({
  components: { MCheckbox },
  data() {
    return {
      value: false,
    }
  },
  setup() {
    return { args }
  },
  template: '<m-checkbox v-model="value" v-bind="args">Применить</m-checkbox>',
})

export const Default = Template.bind({})
Default.args = {
  id: 'checkbox',
}

