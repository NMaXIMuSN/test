<script setup lang="ts">
import { defineProps, useSlots, defineEmits } from 'vue'

import CloseIcon from '@/components/icon/CloseIcon.vue'

const props = defineProps({
  title:{
    type: String,
    required: true,
  },
  height: {
    type: String,
    default: '24px',
  },
  canDeleted: Boolean,
})

const slots = useSlots()
const emits = defineEmits(['onDelete'])

</script>

<template>
  <div
    class="py-[4px] px-[8px] rounded-sm flex bg-black-50 w-[max-content]"
    :style="{
      height: props.height,
    }"
  >
    <span
      v-if="slots['prepend-icon']"
      class="w-[16px] h-[16px] mr-[4px] flex cursor-pointer items-center justify-center"
    >
      <slot name="prepend-icon" />
    </span>

    <span
      class="text-sm font-semibold text-black-900 flex items-center"
    >
      {{ props.title }}
    </span>

    <span
      v-if="props.canDeleted"
      class="w-[16px] h-[16px] ml-[4px] flex cursor-pointer items-center justify-center self-center"
      @click="emits('onDelete', props.title)"
    >
      <slot name="deleted-icon">
        <close-icon
          width="16px"
          height="16px"
          fill="#1A1D1F"
        />
      </slot>
    </span>
  </div>
</template>