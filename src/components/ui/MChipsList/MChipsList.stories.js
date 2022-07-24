import MChipsList from './MChipsList.vue'

export default {
  title: 'Chips List',
  component: MChipsList,
}

const Template = (args) => ({
  components: { MChipsList },
  data() {
    return {
      items: [
        {
          title: 'Редкий',
        },
        {
          title: 'Новинки',
        },
        {
          title: 'Подборка Meet',
        },
      ],
    }
  },
  setup() {
    return { args }
  },
  template: '<m-chips-list v-model="items" v-bind="args"></m-chips-list>',
})

export const Default = Template.bind({})


