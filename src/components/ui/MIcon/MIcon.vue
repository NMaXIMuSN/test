<script setup lang="ts">
import { defineProps, computed, useAttrs } from 'vue'
import type { PropType } from 'vue'

import { colorClass, Color, Brightness } from '@/assets/utils/utils'


const props = defineProps({
  padding: {
    type: String,
    default: '10px',
  },
  bgColor: {
    type: String as PropType<Color>,
    default: 'red',
  },
  brightness: {
    type: String as PropType<Brightness>,
    default: '900',
  },
})

const attrs = useAttrs()

const colorClassBg = computed((): string => {
  return colorClass(props.bgColor, 'red', props.brightness, '900', 'bgColor')
})
</script>

<template>
  <div
    v-bind="attrs"
    class="rounded-base w-[max-content] flex justify-center items-center transition ease"
    :class="[
      colorClassBg
    ]"
    :style="{
      padding: props.padding,
    }"
  >
    <slot />
  </div>
</template>
