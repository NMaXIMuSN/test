import MIcon from './MIcon.vue'
import CalendarIcon from '../../icon/CalendarIcon.vue'
import { colorType, brightness } from '@/assets/utils/storybookTypes/typesArgs.js'

export default {
  title: 'Icon',
  component: MIcon,
  argTypes: {
    bgColor: colorType,
    brightness,
  },
}

const Template = (args) => ({
  components: { 
    MIcon,
    CalendarIcon,
  },
  setup() {
    return { args }
  },
  template: '<m-icon v-bind="args"><CalendarIcon fill="#FCFCFC" /></m-icon>',
})

export const Default = Template.bind({})
