<script setup lang="ts">
import { defineProps } from 'vue'
import propsData from './icon'

const props = defineProps(propsData)

</script>

<template>
  <svg
    :width="props.width"
    :height="props.height"
    viewBox="0 0 12 12"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.37629 7.56996L8.7744 4.82925C9.05728 4.50596 8.8277 4 8.39812 4H3.60188C3.1723 4 2.94272 4.50596 3.2256 4.82925L5.62371 7.56996C5.82292 7.79762 6.17708 7.79762 6.37629 7.56996Z"
      :fill="props.fill"
    />
  </svg>
</template>