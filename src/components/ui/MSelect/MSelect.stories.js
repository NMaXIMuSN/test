import MSelect from './MSelect.vue'
import CalendarIcon from '@/components/icon/CalendarIcon.vue'
import MList from '@/components/ui/MList/MList.vue'
import MListItemButton from '@/components/ui/MList/MListItemButton.vue'
import MListItemDefault from '@/components/ui/MList/MListItemDefault.vue'
import MCalendar from '@/components/ui/MCalendar/MCalendar.vue'

export default {
  title: 'Select',
  component: MSelect,
}

const Template = (args) => ({
  components: {
    MSelect,
    CalendarIcon,
    MListItemButton,
    MList,
    MListItemDefault,
    MCalendar,
  },
  data() {
    return {
      select: {
        value: '',
        title: '',
      },
    }
  },
  setup() {
    return { args }
  },
  template: `
  <m-select v-model="select" v-bind="args">      
    <template #label>
      По товарам
    </template>

		<template #actions="{on}">
			<m-list-item-button
			  @click="on.click"
			>
				<template #prepend-icon>
					<calendar-icon 
						class="mr-[8px] w-[24px] h-[24px] transition duration-300 stroke-black-900"
					/>
				</template>
				{{ select.isDate ? select.title : 'Выбрать диапазон'}}
			</m-list-item-button>
		</template>
		<template #next-list>
		  <MCalendar v-model="select"></MCalendar>
		</template>
  </m-select>

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
    },
  ],
  namesNextSlots: ['next-list'],
}

const TemplateMulti = (args) => ({
  components: {
    MSelect,
  },
  data() {
    return {
      select: [],
    }
  },
  setup() {
    return { args }
  },
  template: `
  <m-select v-model="select" v-bind="args">      
    <template #label>
			Добавьте свойства
    </template>
  </m-select>

  `,
})


export const Multi = TemplateMulti.bind({})
Multi.args = {
  items: [
    {
      value: 'new',
      title: 'Новинки',
    },
    {
      value: 'sale',
      title: 'Акции',
    },
    {
      value: 'meet',
      title: 'Подборка Meet',
    },
    {
      value: 'recomendet',
      title: 'Рекомендованные',
    },
    {
      value: 'new1',
      title: 'Новинки',
    },
    {
      value: 'sal1e',
      title: 'Акции',
    },
    {
      value: 'meet1',
      title: 'Подборка Meet',
    },
    {
      value: 'recomendet1',
      title: 'Рекомендованные',
    },
    {
      value: 'new2',
      title: 'Новинки',
    },
    {
      value: 'sale2',
      title: 'Акции',
    },
    {
      value: 'meet2',
      title: 'Подборка Meet',
    },
    {
      value: 'recomendet2',
      title: 'Рекомендованные',
    },
  ],
  multiple: true,
}