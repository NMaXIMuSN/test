<script setup lang="ts">
import { defineProps } from 'vue'
import type { PropType } from 'vue'
import { Color, Brightness } from '@/assets/utils/ColorClassConfig'
import { colorClass } from '@/assets/utils/utils'

const props = defineProps({
  color: {
    type: String as PropType<Color>,
    required: true,
  },
  brightness: {
    type: String as PropType<Brightness>,
    default: '900',
  },
})

const classColor = colorClass(props.color, 'red', props.brightness, '900', 'bgColor') 

</script>

<template>
  <div
    class="title flex"
  >
    <span
      :class="[
        classColor,
      ]"
      class="inline-flex w-[16px] h-[32px] rounded-sm mr-[12px]"
    />
    <div class="flex items-center">
      <span class="text-h2 text-black-900 font-semibold tracking-[-1px]">
        <slot />
      </span>
    </div>
  </div>
</template>