import MButton from './MButton.vue'
import LoadingIcon from '@/components/icon/LoadingIcon/LoadingIcon.vue'
import { colorType, brightness } from '@/assets/utils/storybookTypes/typesArgs.js'


export default {
  title: 'Button',
  component: MButton,
  argTypes: {
    color: colorType,
    colorText: colorType,
    brightness,
    brightnessText: brightness,
  },
}

const Template = (args) => ({
  components: { MButton },
  setup() {
    return { args }
  },
  template: '<m-button v-bind="args">Применить</m-button>',
})

const TemplateFromIcon = (args) => ({
  components: {
    LoadingIcon,
    MButton,
  },
  setup() {
    return { args }
  },
  template: `
  <m-button v-bind="args" class="text-primary-900">
    <template #prepend-icon>
      <LoadingIcon />
    </template> 
    Применить
  </m-button>`,
})

export const Default = Template.bind({})

export const WithIcon = TemplateFromIcon.bind({})
WithIcon.args = {
  brightness: '100',
  colorText: 'primary',
  brightnessText: '900',
}
