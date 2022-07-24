import MAlert from './MAlert.vue'
import { colorType, brightness } from '@/assets/utils/storybookTypes/typesArgs.js'

export default {
  title: 'Alert',
  component: MAlert,
  argTypes: {
    bgIcon: colorType,
    brightness,
  },
}

const Template = (args) => ({
  components: { MAlert },
  setup() {
    return { args }
  },
  template: '<m-alert v-bind="args"></m-alert>',
})

export const Default = Template.bind({})
Default.args = {
  items: [
    'Поле «имя» обязательно для заполнения.',
    'Поле «фамилия» обязательно для заполнения.',
    'Поле «телефон» обязательно для заполнения.',
  ],
  bgIcon: 'red',
  listStyle: true,
}
