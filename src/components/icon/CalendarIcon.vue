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
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19 4.25H5C4.44772 4.25 4 4.69772 4 5.25V19.25C4 19.8023 4.44772 20.25 5 20.25H19C19.5523 20.25 20 19.8023 20 19.25V5.25C20 4.69772 19.5523 4.25 19 4.25Z"
      stroke-width="1.4"
      stroke-linecap="round"
      stroke-linejoin="round"
      :stroke="props.fill"
    />
    <path
      d="M16 16.25H16.0015V16.2515H16V16.25Z"
      stroke-width="1.4"
      stroke-linecap="round"
      stroke-linejoin="round"
      :stroke="props.fill"
    />
    <path
      d="M12 16.25H12.0015V16.2515H12V16.25Z"
      stroke-width="1.4"
      stroke-linecap="round"
      stroke-linejoin="round"
      :stroke="props.fill"
    />
    <path
      d="M8 16.25H8.0015V16.2515H8V16.25Z"
      stroke-width="1.4"
      stroke-linecap="round"
      stroke-linejoin="round"
      :stroke="props.fill"
    />
    <path
      d="M16 12.25H16.0015V12.2515H16V12.25Z"
      stroke-width="1.4"
      stroke-linecap="round"
      stroke-linejoin="round"
      :stroke="props.fill"
    />
    <path
      d="M12 12.25H12.0015V12.2515H12V12.25Z"
      stroke-width="1.4"
      stroke-linecap="round"
      stroke-linejoin="round"
      :stroke="props.fill"
    />
    <path
      d="M8 12.25H8.0015V12.2515H8V12.25Z"
      stroke-width="1.4"
      stroke-linecap="round"
      stroke-linejoin="round"
      :stroke="props.fill"
    />
    <path
      d="M4 8.25H20"
      stroke-width="1.4"
      stroke-linecap="round"
      stroke-linejoin="round"
      :stroke="props.fill"
    />
    <path
      d="M16 2.25V4.25"
      stroke-width="1.4"
      stroke-linecap="round"
      stroke-linejoin="round"
      :stroke="props.fill"
    />
    <path
      d="M8 2.25V4.25"
      stroke-width="1.4"
      stroke-linecap="round"
      stroke-linejoin="round"
      :stroke="props.fill"
    />
  </svg>
</template>
