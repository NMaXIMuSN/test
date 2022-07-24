<script setup lang="ts">
import { defineProps, defineEmits, ref, computed, watch, onMounted } from 'vue'
import type { PropType, Ref } from 'vue'

import { prettierNumeric } from '@/assets/utils/utils.ts'
import type { ModelValue, IDataValue, ICurrentDate } from './type'
import './MCalendar.scss'

import MButton from '@/components/ui/MButton/MButton.vue' 
import ConfirmIcon from '@/components/icon/ConfirmIcon.vue'
import ChewronDownIcon from '@/components/icon/ChewronDownIcon.vue'
import MMonthPicer from './MMonthPicker.vue'
import MYearsPicer from './MYearsPicker.vue'

const props = defineProps({
  modelValue: {
    type: Object as PropType<ModelValue>,
    required: true,
  },
  datePicker: Boolean,
})

const emit = defineEmits(['update:modelValue'])

const currentData = ref<number>(Date.now())
const calendar = ref<HTMLElement | null>(null)
const isSelectMounth: Ref<boolean> = ref(false)
const isSelectYear: Ref<boolean> = ref(false)

const nameWeekDay = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"]
const dataFormat = /[0-9]{2}.[0-9]{2}.[0-9]{4}-[0-9]{2}.[0-9]{2}.[0-9]{4}/gm

const getDate = computed((): Date => {
  return new Date(currentData.value)
})

const getCurrentDate = computed((): ICurrentDate => {
  return {
    mouthNow: getDate.value.getMonth(),
    yaerNow: getDate.value.getFullYear(),
  }
})

const justifyAcrions = computed((): string => {
  let justifyClass = 'justify-start'

  if (selectedData.value.startDate || selectedData.value.finishDate) {
    justifyClass = 'justify-between'
  }

  return justifyClass
})

const currentDays = computed((): Date[] => {
  const { mouthNow: mouth, yaerNow: yaer } = getCurrentDate.value
  const lastDay: number = new Date(yaer, mouth + 1, 0).getDate()
  const arrayDays: Array<Date> = []

  for (let day = 1; day < lastDay + 1; day++) {
    arrayDays.push(new Date(new Date(yaer, mouth, day)))
  }

  return arrayDays
})

const currentMonth = computed((): string => {
  const mouths: Array<string> = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ]

  return mouths[getCurrentDate.value.mouthNow]
})

const currentYear = computed((): string|number => {
  return getCurrentDate.value.yaerNow
})

const activeApplyButton = computed((): boolean => {
  return (!!selectedData.value.startDate && !!selectedData.value.finishDate) || (!!selectedData.value.startDate && props.datePicker)
})

const formatStringToDate = (dateString: string): Date => {
  const [day, mouth, yaer] = dateString.split('.')

  return new Date(+yaer, +mouth, +day)
}

const selectedData: Ref<{
	startDate: Date | null,
	finishDate: Date | null,
}> = ref({
  startDate: null,
  finishDate: null,
})

const selectData = (day: Date): void => {
  if (selectedData.value.startDate === null || props.datePicker) {
    selectedData.value.startDate = day
  } 
  else if (selectedData.value.finishDate === null && selectedData.value.startDate !== day) {
    selectedData.value.finishDate = day
  } 
  else {
    selectedData.value.startDate = day
    selectedData.value.finishDate = null
  }	
}

const formatDateToString = (date: IDataValue) => {
  const startDate = prettierNumeric('##', '0', date.startDate.getDate())
  const startMounth = prettierNumeric('##', '0', date.startDate.getMonth() + 1)
  const startMounthValue = prettierNumeric('##', '0', date.startDate.getMonth() )
  const startYear = date.startDate.getFullYear()

  if (!props.datePicker) {		
    const finishDate = prettierNumeric('##', '0', date.finishDate.getDate())
    const finishMounth = prettierNumeric('##', '0', date.finishDate.getMonth() + 1)
    const finishMounthValue = prettierNumeric('##', '0', date.finishDate.getMonth())
    const finishYear = date.finishDate.getFullYear()

    return {
      value: `${startDate}.${startMounthValue}.${startYear}-${finishDate}.${finishMounthValue}.${finishYear}`,
      title: `${startDate}.${startMounth}.${String(startYear).slice(2)} - ${finishDate}.${finishMounth}.${String(finishYear).slice(2)}`,
    }
  }

  return {
    value: `${startDate}.${startMounth}.${startYear}`,
    title: `${startDate}.${startMounth}.${String(startYear).slice(2)}`,
  } 
}

const applyDate = (): void => {
  if (selectedData.value.startDate &&
	selectedData.value.finishDate &&
	selectedData.value.startDate.getTime() > selectedData.value.finishDate.getTime()) {
    [selectedData.value.startDate, selectedData.value.finishDate] = [selectedData.value.finishDate, selectedData.value.startDate]
  }

  const newValue = formatDateToString(selectedData.value)	

  emit('update:modelValue',  {
    ...newValue,
    isDate: true,
  })
}


const clearSelectedDate = (): void => {
  [selectedData.value.startDate, selectedData.value.finishDate] = [null, null] 
}

const classFromSelectDay = (day: Date): string => {
  const { startDate, finishDate } = selectedData.value
	
  if ((startDate && day.getTime() === startDate.getTime()) || (finishDate && day.getTime() === finishDate.getTime())) {
    return 'bg-primary-900 text-white-900'
  }

  if (startDate && finishDate && ((day.getTime() > startDate.getTime() && day.getTime() < finishDate.getTime()) || (day.getTime() < startDate.getTime() && day.getTime() > finishDate.getTime()))) {
    return 'bg-primary-100 text-black-900 hover:bg-primary-100'
  }

  return 'text-black-900 hover:bg-primary-100'
}

const numberWeekDay = (date: Date): number => {
  return date.getDay() === 0
    ? 7
    : date.getDay()
}

const girdColumnFromDay = (date: Date): object => {
  return {
    gridColumnStart: numberWeekDay(date),
    gridColumnEnd: numberWeekDay(date),
  }
}

const ininSelectedDate = (date: string) => {
  selectedData.value.startDate = formatStringToDate(date.split('-')[0])

  if (!props.datePicker) {
    selectedData.value.finishDate = formatStringToDate(date.split('-')[1])
  }
}

const closeSelect = () => {
  isSelectMounth.value = false
  isSelectYear.value = false
}

const updateMounth = (mounth: number) => {
  currentData.value = new Date(
    getCurrentDate.value.yaerNow,
    mounth
  ).getTime()

  isSelectMounth.value = false
}

const updateYear = (year: number) => {
  currentData.value = new Date(
    year,
    getCurrentDate.value.mouthNow
  ).getTime()

  isSelectYear.value = false
}

const prevMonth = (): void => {
  currentData.value = new Date(
    getCurrentDate.value.yaerNow,
    getCurrentDate.value.mouthNow - 1
  ).getTime()
}

const nextMonth = (): void => {
  currentData.value = new Date(
    getCurrentDate.value.yaerNow,
    getCurrentDate.value.mouthNow + 1
  ).getTime()
}

onMounted(() => {
  if (dataFormat.test(props.modelValue?.value)) {
    ininSelectedDate(props.modelValue.value)
  }
})

watch(() => props.modelValue, (newValue) => {
  if (!newValue.isDate) {
    selectedData.value = {
      startDate: null,
      finishDate: null,
    }
  }
})

watch(isSelectMounth, (newValue) => {
  if (newValue) {
    isSelectYear.value = false
  }
})

watch(isSelectYear, (newValue) => {
  if (newValue) {
    isSelectMounth.value = false
  }
})
</script>

<template>
  <div
    class="m-calendar--wrap rounded-base bg-white-900 p-[24px] w-[max-content]"
    ref="calendar"
  >
    <div class="m-calendar__header flex justify-between items-center pb-[24px] border-b-black-50 border-b border-solid">
      <div
        class="flex items-center cursor-pointer justify-center bg-background-color-900 rounded-[8px] w-[36px] h-[36px] rotate-90"
        :class="{
          'opacity-80 pointer-events-none': isSelectMounth || isSelectYear
        }"
        @click="prevMonth"
      >
        <chewron-down-icon 
          width="24px"
          height="24px"
          :fill="
            isSelectMounth || isSelectYear
              ? '#9A9FA5'
              : '#1A1D1F'
          "
        />
      </div>
      <div class="m-calendar__header-title flex justify-center items-center font-[20px] text-black-900 font-semibold">
        <div
          @click="isSelectMounth = true"
          class="cursor-pointer"
        >
          {{currentMonth}}
        </div>
				&nbsp;
        <div
          @click="isSelectYear = true"
          class="cursor-pointer"
        >
          {{currentYear}}
        </div>
      </div>
      <div
        class="flex items-center cursor-pointer justify-center bg-background-color-900 rounded-[8px] w-[36px] h-[36px] -rotate-90"
        :class="{
          'opacity-80 pointer-events-none': isSelectMounth || isSelectYear
        }"
        @click="nextMonth"
      >
        <chewron-down-icon 
          width="24px"
          height="24px"
          :fill="
            isSelectMounth || isSelectYear
              ? '#9A9FA5'
              : '#1A1D1F'
          "
        />
      </div>
    </div>
    <div class="m-calendar__body relative pb-[24px] border-b-black-50 border-b border-solid">
      <m-month-picer
        v-if="isSelectMounth"
        :current-month="getCurrentDate.mouthNow"
        class="absolute bg-white-900"
        @new-mounth="updateMounth"
      />

      <m-years-picer
        v-if="isSelectYear"
        :current-year="getCurrentDate.yaerNow"
        class="absolute bg-white-900"
        @new-year="updateYear"
      />

			
      <div class="m-calendar__body-week grid gap-[20px] grid-cols-7 mb-[12px]">
        <div
          class="calendar__week-day w-[32px] h-[32px] text-black-500 text-sm flex items-center justify-center"
          v-for="name in nameWeekDay"
          :key="name"
        >
          {{ name }}
        </div>
      </div>
      <div class="m-calendar__body-days grid gap-x-[20px] gap-y-[12px] grid-cols-7">
        <div
          class="calendar__week-day w-[32px] h-[32px] rounded-[8px] transition ease duration-300 cursor-pointer text-black-900 text-sm flex items-center justify-center"
          v-for="day in currentDays"
          :class="[
            classFromSelectDay(day)
          ]"
          :key="String(day)"
          :style="{
            ...girdColumnFromDay(day),
          }
          "
          @click="selectData(day)"
        >
          {{ day.getDate() }}
        </div>
      </div>
    </div>
    <div
      class="m-calendar__actions pt-[24px] flex"
      :class="[
        justifyAcrions
      ]"
    >
      <template v-if="!isSelectMounth && !isSelectYear">
        <m-button
          :is-disabled="!activeApplyButton"
          class="acept"
          @click="applyDate"
        >
          <template #prepend-icon>				
            <confirm-icon
              class="fill-[transparent]"
              fill="#FCFCFC"
            />
          </template>
          Применить
        </m-button>
        <m-button
          v-if="selectedData.startDate || selectedData.finishDate"
          @click="clearSelectedDate"
          class="hover:border-primary-500 transition ease duration-300"
          outline
          color="black"
          brightness="50"
        >
          Очистить
        </m-button>
      </template>
      <template v-else>
        <m-button
          @click="closeSelect"
          class="hover:border-primary-500 transition ease duration-300 ml-auto"
          outline
          color="black"
          brightness="50"
        >
          Отменить
        </m-button>
      </template>
    </div>
  </div>
</template>
