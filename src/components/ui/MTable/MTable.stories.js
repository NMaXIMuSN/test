import MTable from './MTable.vue'

export default {
  title: 'Table',
  component: MTable,
}

const Template = (args) => ({
  components: { 
    MTable,
  },
  setup() {
    return { args }
  },
  template: `<m-table v-bind="args"></m-table>`,
})

export const Default = Template.bind({})
Default.args = {
  headers: [
    {
      name: 'Имя',
      value: 'name',
      maxWidth: '78px',
      sortable: true,
    },
    {
      name: 'Дата',
      value: 'date',
      maxWidth: '178px',
      sortable: true,

    },
    {
      name: 'Цвет',
      value: 'color',
    },
    {
      name: 'Имя1',
      value: 'name1',
    },
    {
      name: 'Дата1',
      value: 'date1',
    },
    {
      name: 'Цвет1',
      value: 'color1',
    },
    {
      name: 'Имя2',
      value: 'name2',
    },
    {
      name: 'Дата2',
      value: 'date2',
      ellipsis: true,
    },
    {
      name: 'Цвет2',
      value: 'color2',
    },
    {
      name: 'Имя3',
      value: 'name3',
    },
    {
      name: 'Дата3',
      value: 'date3',
    },
    {
      name: 'Цвет3',
      value: 'color3',
    },
    {
      name: 'Цена',
      value: 'price',
    },
    {
      name: 'Количесво',
      value: 'count',
    },
  ],
  items: [
    {
      name: 'adidas',
      date: '11.10.2021',
      color: 'черный',
      name1: 'adidas',
      date1: '11.10.2021',
      color1: 'черный',
      name2: 'adidas',
      date2: '11.10.2021',
      color2: 'черный',
      name3: 'adidas',
      date3: '11.10.2021',
      color3: 'черный',
      price: '10000',
      count: '10',
    },
    {
      name: 'YEEZY',
      date: '11.10.2021',
      color: 'беженый',
      name1: 'YEEZY',
      date1: '11.10.2021',
      color1: 'беженый',
      name2: 'YEEZY',
      date2: '11.10.2021',
      color2: 'беженый',
      name3: 'YEEZY',
      date3: '11.10.2021',
      color3: 'беженый',
      price: '120000',
      count: '100',
    },
  ],
}

export const LastOrder = Template.bind({})
LastOrder.args = {
  headers: [
    {
      name: 'ID',
      value: 'id',
      maxWidth: '72px',
    },
    {
      name: 'Cтатус заказа',
      value: 'statusOrder',
      maxWidth: '228px',
    },
    {
      name: 'Дата доставки',
      value: 'dateDelivery',
    },
    {
      name: 'Ожидает возврата',
      value: 'return',
    },
  ],
  items: [
    {
      id: 10533,
      statusOrder: 'Готовится на отправку от п...',
      dateDelivery: '18.04.2022',
      return: 'Ожидает',
    },
    {
      id: 10534,
      statusOrder: 'Готовится на отправку от п...',
      dateDelivery: '18.04.2022',
      return: 'Ожидает',
    },
    {
      id: 10535,
      statusOrder: 'Готовится на отправку от п...',
      dateDelivery: '18.04.2022',
      return: 'Ожидает',
    },
    {
      id: 10536,
      statusOrder: 'Готовится на отправку от п...',
      dateDelivery: '18.04.2022',
      return: 'Ожидает',
    },
  ],
  paddingRow: '12px',
  gapRows: '0px',
  borderHeader: true,
  borderRows: true,
}