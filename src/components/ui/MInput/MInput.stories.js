import MInput from './MInput.vue'
import { ref } from 'vue'

export default {
  title: 'Input',
  component: MInput,
  argTypes: {
    appendIconOptions: {
      name: 'appendIconOptions',
      type: { name: 'object', required: false },
      defaultValue: () => ({
        bgColor: Boolean,
        border: Boolean,
      }),
      description: 'объект для включения стилий у append icon',
      control: {
        type: 'object',
      },
    },
  },
}

const Template = (args) => ({
  components: { MInput },
  setup() {
    const refArgs = ref(args)

    return { refArgs }
  },
  template: '<m-input v-model="refArgs.value" v-bind="refArgs"> Имя </m-input>',
})

export const Default = Template.bind({})
Default.args = {
  value: '',
  clearable: true,
}

export const InputError = Template.bind({})
InputError.args = {
  value: '',
  clearable: true,
  errorMessage: 'ошибка',
}
