<script setup lang="ts">
import { defineProps } from 'vue'
import type { PropType } from 'vue'

import { Color, Brightness } from '@/assets/utils/utils'

import ErrorIcon from '@/components/icon/ErrorIcon.vue'
import MIcon from '@/components/ui/MIcon/MIcon.vue'

const props = defineProps({
  title: {
    type: String,
    default: 'Произошла ошибка',
  },
  bgIcon: {
    type: String as PropType<Color>,
    default: 'red',
  },
  brightness: {
    type: String as PropType<Brightness>,
    default: '900',
  },
  items: {
    type: Array,
  },
  listStyle: Boolean,
})

</script>

<template>
  <div class="m-aler flex p-[24px] rounded-base bg-background-color-900">
    <m-icon
      :bg-color="props.bgIcon"
      :brightness="props.brightness"
      class="m-alert__icon h-[min-content] mr-[24px]"
    >
      <slot name="icon">
        <error-icon 
          width="20px"
          height="20px"
          fill="#FCFCFC"
        />
      </slot>
    </m-icon>
    <div>
      <div class="m-alert__title text-black-900 font-bold mb-[12px] text-[16px] leading-[140%]">
        {{ props.title }}
      </div>
      <ul>
        <li
          v-for="(error, index) in props.items"
          :key="index"
          class=" text-black-900 text-sm"
          :class="{
            'after:content-[\'\'] after:w-[4px] after:h-[4px] after:bg-black-900 after:absolute after:rounded-[50%] after:top-[50%] after:translate-y-[-50%] after:left-[0px] relative pl-[10px]': props.listStyle,
          }"
        >
          {{error}}
        </li>
      </ul>
    </div>
  </div>
</template>