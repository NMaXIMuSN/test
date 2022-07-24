import MList from './MList.vue'
import MListItemButton from './MListItemButton.vue'
import MListItemDefault from './MListItemDefault.vue'
import CalendarIcon from '@/components/icon/CalendarIcon.vue'


export default {
  title: 'List',
  component: MList,
}

const Template = (args) => ({
  components: { 
    MList,
    MListItemButton,
    MListItemDefault,
    CalendarIcon,
  },
  data() {
    return {
      currentValue: {
        value: 'shoes',
        title: 'Обувь',
      },
    }
  },
  setup() {
    return { args }
  },
  template: `
  <m-list v-model="currentValue" v-bind="args">
    <template #actions>
      <m-list-item-button>
        <template #prepend-icon>
          <calendar-icon 
            class="mr-[8px] w-[24px] h-[24px] transition duration-300 stroke-black-900"
          />
        </template>
        Выбрать диапазон
      </m-list-item-button>
    </template>
  </m-list>
  `,
})

export const Default = Template.bind({})
Default.args = {
  items: [
    {
      value: 'shoes',
      title: 'Обувь',
    },
    {
      value: 'clothes',
      title: 'Одежда',
    },
    {
      value: 'asessuiry',
      title: 'Аксессуары',
      isButton: true,
    },
  ],
}

