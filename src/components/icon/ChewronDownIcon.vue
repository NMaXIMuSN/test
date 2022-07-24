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
      d="M16.6364 10.6364C16.9879 10.2849 16.9879 9.71508 16.6364 9.3636C16.2849 9.01213 15.7151 9.01213 15.3636 9.3636L16.6364 10.6364ZM12 14L11.3636 14.6364C11.5324 14.8052 11.7613 14.9 12 14.9C12.2387 14.9 12.4676 14.8052 12.6364 14.6364L12 14ZM8.6364 9.3636C8.28492 9.01213 7.71508 9.01213 7.3636 9.3636C7.01213 9.71508 7.01213 10.2849 7.3636 10.6364L8.6364 9.3636ZM15.3636 9.3636L11.3636 13.3636L12.6364 14.6364L16.6364 10.6364L15.3636 9.3636ZM12.6364 13.3636L8.6364 9.3636L7.3636 10.6364L11.3636 14.6364L12.6364 13.3636Z"
      :fill="props.fill"
    />
  </svg>
</template>
