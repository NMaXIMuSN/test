<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import type { PropType } from 'vue'

import { IModelValue } from './type'

import MChip from '../MChip/MChip.vue'

const props = defineProps({
  modelValue: {
    type: Array as PropType<Array<IModelValue>>,
    required: true,
  },
  title: {
    type: String,
    default: undefined,
  },
  keyToDelete: {
    type: String,
    default: 'title',
  },
})

const emits = defineEmits(['update:modelValue'])

const deleteChip = (item: object) => {
  const newModelValue = props.modelValue.filter(el => el[props.keyToDelete] !== item[props.keyToDelete])

  emits('update:modelValue', newModelValue)
}
</script>

<template>
  <div
    v-if="props.title"
    class="chip__list-title text-sm mb-[13px] font-semibold text-black-900"
  >
    {{ props.title }}
  </div>
  <div
    class="chip__list flex  flex-wrap p-[6px] min-h-[48px] rounded-base border-[2px] border-solid border-black-50"
  >
    <m-chip
      v-for="(item, index) in props.modelValue"
      :key="`${item} - ${index}`"
      :title="item.title"
      can-deleted
      class="chip__list-item m-[4px] last:mr-[0px]"
      @on-delete="deleteChip(item)"
    />
  </div>
</template>
