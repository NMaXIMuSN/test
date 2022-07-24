<script setup lang="ts">
import { defineProps, computed, useSlots } from 'vue'
import type { PropType } from 'vue'

import { colorClass, Color, Brightness } from '@/assets/utils/utils'
import './MButton.scss'

import LoadingIcon from '@/components/icon/LoadingIcon/LoadingIcon.vue'

const props = defineProps({
  color: {
    type: String as PropType<Color>,
    default: 'primary',
  },
  brightness: {
    type: String as PropType<Brightness>,
    default: '900',
  },
  colorText: {
    type: String as PropType<Color>,
    default: 'white',
  },
  brightnessText: {
    type: String as PropType<Brightness>,
    default: '900',
  },
  isDisabled: Boolean,
  small: Boolean,
  outline: Boolean,
  isLoading: Boolean,
  block: Boolean,
})

const slots = useSlots()

const classColor = computed<string>(() => {
  const borderColor:string = colorClass(props.color, 'primary', props.brightness, '900', 'borderColor')
  const bgColor:string = colorClass(props.color, 'primary', props.brightness, '900', 'bgColor')
  const textColor:string = colorClass(props.colorText, 'primary', props.brightnessText, '900', 'textColor')

  return props.outline
    ? `${borderColor} border-solid border-2 ${textColor}`
    : `${bgColor} ${textColor}`
})

const classLoaderColor = computed<string>(() => {
  return colorClass(props.colorText, 'primary', props.brightnessText, '900', 'textColor')
})

const classIconSize = computed<string>(() => {
  return props.small
    ? `w-[12px] h-[12px]`
    : `w-[16px] h-[16px]`
})
</script>

<template>
  <button
    :disabled="props.isDisabled"
    class="ui-button font-semibold"
    :class="[
      {
        'ui-button__disable': props.isDisabled,
        'outline': props.outline,
        'ui-button__sm': props.small,
        'ui-button__block': props.block,
      },
      classColor,
    ]"
    @click="$emit('click')"
  >
    <loading-icon
      v-if="props.isLoading"
      :class="[
        classLoaderColor,
        classIconSize
      ]"
    />
    <template v-else>
      <span
        v-if="slots['prepend-icon']"
        class="prepend-icon mr-[7px]"
        :class="[
          classIconSize,
        ]"
      >
        <slot name="prepend-icon"/>
      </span>
      <slot />
      <span 
        v-if="slots['append-icon']"
        class="append-icon ml-[7px]"
        :class="[
          classIconSize,
        ]"
      >
        <slot name="append-icon"/>
      </span>
    </template>
  </button>
</template>
