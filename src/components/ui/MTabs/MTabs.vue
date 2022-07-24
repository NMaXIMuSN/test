<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import type { PropType } from 'vue'

import { ITabs } from './type'
import './MTabs.scss'

const props = defineProps({
  modelValue: {
    type: Object,
    required: true,
  },
  tabs: {
    type: Array as PropType<Array<ITabs>>,
    required: true,
  },
  scrollable: Boolean,
})

const emit = defineEmits(['update:modelValue']) 

const updateModelValue = (item: ITabs): void => {
  emit('update:modelValue', item)
}

const classTabsText = (elementValue: string ): string => {
  if (elementValue === props.modelValue.value) {
    return 'active text-black-900 bg-black-50 tracking-wider'
  }
  else {
    return 'text-black-500 hover:text-black-900 tracking-[0px]'
  }
} 
</script>

<template>
  <div
    class="m-tabs--wrap flex"
    :class="{
      'flew-wrap': !props.scrollable,
    }"
  >
    <div
      v-for="item in tabs"
      :key="item.value"
      class="rounded-base py-[10px] m-[4px] whitespace-nowrap px-[12px] cursor-pointer w-[max-content] transition-[letter-spacing] transition duration-300 ease"
      :class="[
        classTabsText(item.value),
      ]"
      @click="updateModelValue(item)"
    >
      <slot
        name="item"
        v-bind="({
          item: item,
          on: {
            updateModelValue
          },
        })"
      >
        {{ item.title }}
      </slot>
    </div>
  </div>
</template>
