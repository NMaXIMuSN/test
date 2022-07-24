<script setup lang="ts">
import { defineProps } from 'vue'
import propsData from './icon'

const props = defineProps(propsData)

</script>

<template>
  <svg
    :width="props.width"
    :height="props.height"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.6364 7.3636C10.2849 7.01213 9.71508 7.01213 9.3636 7.3636C9.01213 7.71508 9.01213 8.28492 9.3636 8.6364L10.6364 7.3636ZM14 12L14.6364 12.6364C14.8052 12.4676 14.9 12.2387 14.9 12C14.9 11.7613 14.8052 11.5324 14.6364 11.3636L14 12ZM9.3636 15.3636C9.01213 15.7151 9.01213 16.2849 9.3636 16.6364C9.71508 16.9879 10.2849 16.9879 10.6364 16.6364L9.3636 15.3636ZM9.3636 8.6364L13.3636 12.6364L14.6364 11.3636L10.6364 7.3636L9.3636 8.6364ZM13.3636 11.3636L9.3636 15.3636L10.6364 16.6364L14.6364 12.6364L13.3636 11.3636Z"
      :fill="props.fill"
    />
  </svg>

</template>