<script setup lang="ts">
import { defineProps, defineEmits, computed, onMounted, ref } from 'vue'
import type { Ref } from 'vue'

const props = defineProps({
  currentYear: {
    type: Number,
    required: true,
  },
})

const emits = defineEmits(['newYear'])

const yersPicker: Ref<HTMLElement|null> = ref(null)
const currentYearElement: Ref<HTMLElement|null> = ref(null)

const firstYear = ref(props.currentYear - 100)
const lastYear = ref(props.currentYear + 100)

const yearsRange = computed(() => {
  return Array.from({length: lastYear.value - firstYear.value}, (_, i) => firstYear.value + i)
})

const currentYear = (year: number) => year === props.currentYear
  ? 'currentYearElement'
  : undefined

const newYear = (year: number) => {
  emits('newYear', year)
}

const scroll = (e: Event) => {
  const scrollTop = e.target.scrollTop
  const scrollHeight = e.target.scrollHeight

  if (scrollTop < 500) {
    firstYear.value = Math.max(1, firstYear.value - 100)
  }

  if (scrollHeight - scrollTop < 500) {
    lastYear.value = lastYear.value + 100
  }
}

const getCurrentYearElement = computed(() => {
  return currentYearElement.value[0]
})


onMounted(() => {
  if (yersPicker.value) {
    const offsetTop = getCurrentYearElement.value.offsetTop
    const yersPickerClientHeight = yersPicker.value.clientHeight
    const currentYearElementHeight = getCurrentYearElement.value.clientHeight
    yersPicker.value.scroll({
      top: offsetTop - yersPickerClientHeight / 2 + currentYearElementHeight / 2,
    })
  }
})
</script>

<template>
  <div
    ref="yersPicker"
    class="w-[100%] h-[100%] overflow-y-auto scroll-y"
    @scroll="scroll"
  >
    <div
      v-for="year in yearsRange"
      :key="year"
      class="flex justify-center py-[8px] cursor-pointer"
      :class="{
        'font-semibold bg-background-color-900 text-primary-900 text-[16px]': year === props.currentYear,
        'text-base text-black-500 hover:bg-background-color-900 hover:text-primary-900 transition duration-300 ease': year !== props.currentYear,
      }"
      :ref="currentYear(year)"
      @click="newYear(year)"
    >
      {{year}}
    </div>
  </div>
</template>