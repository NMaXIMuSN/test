<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  currentMonth: {
    type: Number,
    required: true,
  },
})

const emits = defineEmits(['newMounth'])

const months = [
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

const newMounth = (month: string) => {
  emits('newMounth', months.indexOf(month))
}

</script>

<template>
  <div class="w-[100%] h-[100%] py-[24px] grid gap-[10px] grid-cols-3">
    <div
      v-for="mounth in months"
      :key="mounth"
      class="text-base flex items-center justify-center p-[10px] rounded-sm  text-center cursor-pointer"
      @click="newMounth(mounth)"
      :class="{
        'text-primary-900 font-semibold bg-background-color-900': mounth === months[props.currentMonth],
        'text-black-500 hover:text-primary-900 hover:bg-background-color-900 transition duration-300 ease': mounth !== months[props.currentMonth],
      }"
    >
      {{mounth}}
    </div>
  </div>
</template>
