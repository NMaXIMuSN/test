<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import type { PropType } from 'vue'

import { TreeNode } from './type'

import MSidebarMenuSection from './MSidebarMenuSection.vue'

const props = defineProps({
  items: {
    type: Array as PropType<Array<TreeNode>>,
    required: true,
  },
  maxWidth: {
    type: Number,
    default: undefined,
  },
})

const emits = defineEmits(['newPath'])
</script>

<template>
  <div
    class="tree px-[20px] pt-[40px] bg-white-900 max-h-[100vh] overflow-auto scrollbar-hide"
    :style="{
      maxWidth: props.maxWidth
        ? props.maxWidth + 'px'
        : undefined
    }"
  >
    <template
      v-for="(item, index) in props.items"
      :key="index"
    >
      <m-sidebar-menu-section
        :item="item"
        @new-path="emits('newPath', $event)"
      />
    </template>
  </div>
</template>
