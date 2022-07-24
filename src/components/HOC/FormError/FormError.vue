<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  errorMessage: {
    type: String,
    default: undefined,
  },
})
</script>

<template>
  <slot />
  <div
    v-if="props.errorMessage"
    class="mt-[12px] text-sm text-red-900"
  >
    {{ props.errorMessage }}
  </div>
</template>