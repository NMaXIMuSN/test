<script setup lang="ts">
import { defineProps, ref, defineEmits, computed } from 'vue'
import type { PropType } from 'vue'

import { TreeNode } from './type'

import MSidebarMenuItem from './MSidebarMenuItem.vue'

const props = defineProps({
  item: {
    type: Object as PropType<TreeNode>,
    required: true,
  },
})

const emits = defineEmits(['newPath'])

const items = ref(props.item)

const isSection = computed(() => {
  return props.item.type === 'section'
})

const getItems = (item: TreeNode) => {
  if (isSection.value) {
    return item.items 
  }
  else {
    return [ item ]
  }
}
</script>

<template>
  <div
    class="tree__section mb-[20px] pb-[20px] "
  >
    <div
      class="tree__section-title text-black-500 text-[12px] leading-[140%] px-[12px] mb-[8px]"
      v-if="isSection"
    >
      {{props.item.title}}
    </div>

    <div
      v-for="(_item, index) in getItems(items)"
      :key="index"
      class="mb-[8px] last:mb-[0px]"
    >
      <m-sidebar-menu-item
        :item="_item"
        @new-path="emits('newPath', $event)"
      />
    </div>
  </div>
</template>