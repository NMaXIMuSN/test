<script setup lang="ts">
import './LoadingIcon.scss'
import { defineProps } from 'vue'
import propsData from '../icon'

const props = defineProps(propsData)
</script>

<template>
  <svg
    :width="props.width"
    :height="props.height"
    class="loader-svg"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="21.904761904761905 21.904761904761905 43.80952380952381 43.80952380952381"
  >
    <circle
      fill="transparent"
      cx="43.80952380952381"
      cy="43.80952380952381"
      r="20"
      class="loader-circle"
      stroke-width="3.8095238095238093"
      stroke-dasharray="125.664"
      stroke-dashoffset="125.66370614359172px"
    />
  </svg>
</template>

