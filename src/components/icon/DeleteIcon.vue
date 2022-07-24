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
    <circle
      cx="10"
      cy="10"
      r="10"
      :fill="props.fill"
      fill-opacity="0.4"
    />
    <g filter="url(#filter0_b_1133_27229)">
      <path
        d="M7.80797 6.53523C7.45649 6.18376 6.88665 6.18376 6.53517 6.53523C6.1837 6.88671 6.1837 7.45656 6.53517 7.80803L7.80797 6.53523ZM12.192 13.4649C12.5435 13.8164 13.1133 13.8164 13.4648 13.4649C13.8163 13.1134 13.8163 12.5436 13.4648 12.1921L12.192 13.4649ZM6.53517 7.80803L12.192 13.4649L13.4648 12.1921L7.80797 6.53523L6.53517 7.80803Z"
        fill="#FCFCFC"
      />
    </g>
    <g filter="url(#filter1_b_1133_27229)">
      <path
        d="M6.53518 12.1921C6.18371 12.5436 6.18371 13.1134 6.53518 13.4649C6.88665 13.8164 7.4565 13.8164 7.80797 13.4649L6.53518 12.1921ZM13.4648 7.80803C13.8163 7.45656 13.8163 6.88671 13.4648 6.53523C13.1134 6.18376 12.5435 6.18376 12.192 6.53523L13.4648 7.80803ZM7.80797 13.4649L13.4648 7.80803L12.192 6.53523L6.53518 12.1921L7.80797 13.4649Z"
        fill="#FCFCFC"
      />
    </g>
    <defs>
      <filter
        id="filter0_b_1133_27229"
        x="1.27155"
        y="1.27161"
        width="17.4569"
        height="17.4569"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood
          flood-opacity="0"
          result="BackgroundImageFix"
        />
        <feGaussianBlur
          in="BackgroundImage"
          stdDeviation="2.5"
        />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_1133_27229"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_1133_27229"
          result="shape"
        />
      </filter>
      <filter
        id="filter1_b_1133_27229"
        x="1.27161"
        y="1.27161"
        width="17.4568"
        height="17.4569"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood
          flood-opacity="0"
          result="BackgroundImageFix"
        />
        <feGaussianBlur
          in="BackgroundImage"
          stdDeviation="2.5"
        />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_1133_27229"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_1133_27229"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
</template>