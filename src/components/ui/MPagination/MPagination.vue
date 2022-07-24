<script setup lang="ts">
import { defineProps, computed, defineEmits, ref, watch } from 'vue'
import type { Ref } from 'vue'

import { TPageItem } from './type'
import './MPagination.scss'

const props = defineProps({
  modelValue: {
    type: Number,
    required: true,
  },
  pageCount: {
    type: Number,
    required: true,
  },
  pageRange: {
    type: Number,
    default: 5,
  },
  prevText: {
    type: String,
    default: "Назад",
  },
  nextText: {
    type: String,
    default: "Дальше",
  },
  isNavigationIcon: Boolean,
})

const emits = defineEmits(['update:modelValue'])

const selected: Ref<number> = ref(+props.modelValue)

const pages = computed((): TPageItem => {
  const items: TPageItem = {}

  if (+props.pageCount <= +props.pageRange) {
    for (let index = 0; index < +props.pageCount; index++) {
      let page = {
        index: index,
        content: index + 1,
        selected: index === (selected.value - 1),
      }
      items[index] = page
    }
  }
  else {
    const halfPageRange = Math.floor(+props.pageRange / 2)

    let setPageItem = (index: number) => {
      let page = {
        index: index,
        content: index + 1,
        selected: index === (selected.value - 1),
      }

      items[index] = page
    }

    let selectedRangeLow = 0
	
    if (selected.value - halfPageRange > 0) {
      selectedRangeLow = selected.value - 1 - halfPageRange
    }

    let selectedRangeHigh = selectedRangeLow + props.pageRange - 1

    if (selectedRangeHigh >= props.pageCount) {
      selectedRangeHigh = props.pageCount - 1
      selectedRangeLow = selectedRangeHigh - props.pageRange + 1
    }

    for (let i = selectedRangeLow; i <= selectedRangeHigh && i <= props.pageCount - 1; i++) {
      setPageItem(i)
    }
  }

  return items
})

const firstPageSelected = computed((): boolean =>{
  return selected.value === 1
})
const lastPageSelected = computed((): boolean =>{
  return (selected.value === +props.pageCount) || (+props.pageCount === 0)
})

const visiblePrevThreeDot = computed((): boolean =>{
  return !pages.value[0]
})
const visibleNextThreeDot = computed((): boolean =>{
  return !pages.value[props.pageCount - 1]
})

const incrementValue = (): void => {
  ++selected.value
}

const decrementValue = (): void => {
  --selected.value
}

watch(selected, (newValue) => {
  emits('update:modelValue', newValue)
})

</script>

<template>
  <div
    class="pagination flex not:last:bg-red-900"
  >
    <template
      v-if="!firstPageSelected"
    >
      <div
        @click="decrementValue"
        class="select-none font-semibold touch-none pagination__navigation pagination__navigation__prev text-sm h-[32px] cursor-pointer flex items-center px-[10px] rounded-base border-[2px] border-balck-50"
      >
        {{ props.prevText }}
      </div>
    </template>
    <div
      v-if="visiblePrevThreeDot"
      class="pagination__item font-semibold w-[32px] h-[32px] flex items-center justify-center text-[14px] leading-[140%] text-black-500"
    >
      ...
    </div>
    <template
      v-for="page in pages"
      :key="page"
    >
      <div
        @click="selected = page.content"
        class="pagination__item w-[32px] h-[32px] font-semibold rounded-base transition ease duration-300 flex items-center justify-center text-[14px] leading-[140%] cursor-pointer hover:border-[2px] hover:border-black-50"
        :class="{
          'border-[2px] border-black-50 text-black-900': page.selected,
          'text-black-500 hover:text-black-900': !page.selected,
        }"
      >
        {{ page.content }}
      </div>
    </template>
    <div
      v-if="visibleNextThreeDot"
      class="pagination__item w-[32px] h-[32px] font-semibold flex items-center justify-center text-[14px] leading-[140%] text-black-500"
    >
      ...
    </div>
    <template
      v-if="!lastPageSelected"
    >
      <div
        @click="incrementValue"
        class="select-none font-semibold touch-none pagination__navigation pagination__navigation__next text-sm h-[32px] cursor-pointer flex items-center px-[10px] rounded-base border-[2px] border-balck-50"
      >
        {{ props.nextText }}
      </div>
    </template>
  </div>
</template>