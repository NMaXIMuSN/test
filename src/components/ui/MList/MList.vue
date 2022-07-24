<script setup lang="ts">
import { useSlots, defineEmits, defineProps, useAttrs } from 'vue'
import type { PropType } from 'vue'

import { IItems } from './type'
import './MList.scss'

import MListItemDefault from './MListItemDefault.vue'
import MCheckbox from '../MCheckbox/MCheckbox.vue'

const props = defineProps({
  modelValue: {
    type: Object as PropType<IItems> || Array as PropType<Array<IItems>>,
    required: true,
  },
  items: {
    type: Array as PropType<Array<IItems>>,
    default:() => [],
  },
  multiple: Boolean,
})

const emits = defineEmits(['update:modelValue'])
const attrs = useAttrs()
const slots = useSlots()

const selectedValue = (item: IItems) => {
  if (props.multiple) {
    if (Array.isArray(props.modelValue)) {
      if (isActive(item)) {
        emits('update:modelValue', props.modelValue.filter(el => el.value !== item.value))
      
        return
      }

      emits('update:modelValue', [...props.modelValue, item])

      return
    }
  }

  emits('update:modelValue', item)
}

const isActive = (item: IItems): boolean => {
  if (Array.isArray(props.modelValue)) {
    return Boolean(props.modelValue.find(el => el.value === item.value))
  }

  if (Array.isArray(item.value)) {
    return props.modelValue.value.includes(item.value)
  }

  return props.modelValue.value === item.value
}

</script>

<template>
  <div
    v-bind="attrs"
    class="m-list--wrap bg-white-900 p-3 rounded-base"
  >
    <div
      class="scroll-y overflow-y-auto pr-[5px]"
    >
      <div
        v-for="(item, index) in props.items"
        :key="index"
        class="m-list__body"
      >
        <slot
          name="item"
          v-bind="item"
        >
          <m-list-item-default 
            @click.prevent="selectedValue(item)"
            :active="isActive(item)"
            :multiple="props.multiple"
            class="flex items-center"
          >
            <div
              class="flex items-center"
              v-if="props.multiple"
            >
              <m-checkbox
                class="mr-[8px]"
                :id="`list-${item.value}-${index}`"
                :model-value="isActive(item)"
              />
            </div>
            {{ item.title }}
          </m-list-item-default>
        </slot>
      </div>
      <div
        v-if="slots['actions']"
        class="m-list__actions border-t-black-50 border-t pt-[12px] mt-[12px]"
      >
        <slot name="actions"/>
      </div>
    </div>
  </div>
</template>
