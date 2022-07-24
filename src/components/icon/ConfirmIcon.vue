<script setup lang="ts">
import { defineProps } from 'vue'
import propsData from './icon'

const props = defineProps(propsData)

</script>

<template>
  <svg
    :width="props.width"
    :height="props.height"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 8.00006L6.82843 10.8285L12.4853 5.17163"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      :stroke="props.fill"
    />
  </svg>
</template>
