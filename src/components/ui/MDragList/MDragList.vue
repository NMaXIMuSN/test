<script setup lang="ts">
import { defineProps, ref, useAttrs, defineEmits } from 'vue'
import type { PropType, Ref } from 'vue'

import { IItems } from './type.ts' 
import './MDragList.scss'

import draggable from 'vuedraggable'

const props = defineProps({
  isDrag: Boolean,
  items: {
    type: Array as PropType<Array<IItems>>,
    reqired: true,
  },
})

const emits = defineEmits(['update:items'])

const attrs = useAttrs()

const items: Ref<Array<IItems> | undefined> = ref(props.items)

const updateId = () => {
  items.value = items.value?.map((el, index) => {
    el.order = index

    return el
  })
  emits('update:items', items.value)
}

</script>

<template>
  <draggable
    v-model="items"
    v-bind="attrs"
    item-key="order"
    @update="updateId"
  >
    <template #item="{element}">
      <div class="cursor-grab">
        <slot
          name="item"
          v-bind="element"
        />	
      </div>
    </template>
  </draggable>
</template>