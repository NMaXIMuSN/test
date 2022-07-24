<script setup lang="ts">
import { defineProps, computed, useSlots } from 'vue'

const props = defineProps({
  active: Boolean,
  noClose: Boolean,
  multiple: Boolean,
})

const slots = useSlots()

const isActive = computed((): string => {
  return props.active 
    ? 'text-primary-900'
    : 'text-black-500 hover:text-black-900'
})

const isActiveMultiple = computed((): string => {
  return props.active
    ? 'text-black-900 font-semibold'
    : 'text-black-500 hover:text-black-900'
})
</script>


<template>
  <div
    class="m-list__item text-base cursor-pointer p-3 hover:bg-background-color-900 rounded-base"
    :class="[
      props.multiple
        ? isActiveMultiple
        : isActive
    ]"
  >
    <span
      v-if="slots['prepend-icon']"
      class="prepend-icon"
    >
      <slot name="prepend-icon"/>
    </span>
    <slot/>
    <span
      v-if="slots['append-icon']"
      class="append-icon"
    >
      <slot name="append-icon"/>
    </span>
  </div>
</template>