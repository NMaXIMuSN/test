import MDragList from './MDragList.vue'

export default {
  title: 'Drag List',
  component: MDragList,
}

const Template = (args) => ({
  components: { MDragList },
  data() {
    return {
    }
  },
  setup() {
    return { args }
  },
  template: `
  <m-drag-list v-bind="args">
    <template #item="props">
      {{props}}
    </template>
  </m-drag-list>`,
})

export const Default = Template.bind({})
Default.args = {
  items: [
    {
      id: 0,
      title: 'Заказы',
      count: 110,
      order: 0,
      color: '#e3e3e3',
    },
    {
      id: 1,
      title: 'Возвраты',
      count: 12,
      order: 1,
      color: '#000',
    },
    {
      id: 2,
      title: 'Обмены',
      count: 19,
      order: 2,
      color: '#FFEBA5',
    },
    {
      id: 3,
      title: 'Оборот товаров',
      count: 736940,
      order: 3,
      color: '#83D6E8',
    },
  ],
}


