import MPopup from './MPopup.vue'
import {color} from '@/assets/utils/ColorClassConfig'


export default {
  title: 'Popup',
  component: MPopup,
  argTypes: {
    colorTitle: {
      options: Object.keys(color),
      control: { type: 'select' },
    },
    bgColor: {
      options: Object.keys(color),
      control: { type: 'select' },
    },
    brightnessTitle: {
      options: ['900', '500', '100', '50'],
      control: { type: 'select' },
    },
    bgBrightness: {
      options: ['900', '500', '100', '50'],
      control: { type: 'select' },
    },
  },
}

const Template = (args) => ({
  components: { 
    MPopup,
  },
  data() {
    return {
      isOpen: false,
      target: null,
    }
  },
  mounted() {
    this.target = this.$refs.target
  },
  setup() {
    return { args }
  },
  template: `
	<div
	  @click="isOpen = true"
		ref="target"
	>open</div>
	<m-popup v-model="isOpen" v-bind="args">
	<div>
	<p>test</p>
	<p>test</p>
	<p>test</p>
	<p>test</p>
	<p>test</p>
	<p>test</p>
	<p>test</p>
	<p>test</p>
	<p>test</p>
	<p>test</p>
	<p>test</p>
	<p>test</p>
	<p>test</p>
	<p>test</p>
	<p>test</p>
	<p>test</p>
	<p>test</p>
	<p>test</p>
	<p>test</p>
	<p>test</p>
	<p>test</p>
	<p>test</p>
	<p>test</p>
	<p>test</p>
	<p>test</p>
	</div>
	</m-popup>`,
})

export const Default = Template.bind({})
Default.args = {
  colorTitle: 'red',
  brightnessTitle: '100',
  title: 'Добавление бонусов на баланс',
}