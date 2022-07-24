<script setup lang="ts">
import { defineProps } from 'vue'
import propsData from './icon'

const props = defineProps(propsData)

</script>

<template>
  <svg
    :width="props.width"
    :height="props.height"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M7.82812 3.81138C8.78718 2.12847 11.2132 2.12847 12.1722 3.81137L17.843 13.7622C18.7928 15.4288 17.5893 17.5 15.671 17.5H4.32937C2.4111 17.5 1.20753 15.4288 2.15732 13.7622L7.82812 3.81138ZM10.0001 11.6667C10.4604 11.6667 10.8335 11.2936 10.8335 10.8333V6.66666C10.8335 6.20643 10.4604 5.83333 10.0001 5.83333C9.5399 5.83333 9.1668 6.20643 9.1668 6.66666V10.8333C9.1668 11.2936 9.5399 11.6667 10.0001 11.6667ZM10.0001 15C10.4604 15 10.8335 14.6269 10.8335 14.1667C10.8335 13.7064 10.4604 13.3333 10.0001 13.3333C9.5399 13.3333 9.1668 13.7064 9.1668 14.1667C9.1668 14.6269 9.5399 15 10.0001 15Z"
      :fill="props.fill"
    />
  </svg>

</template>
