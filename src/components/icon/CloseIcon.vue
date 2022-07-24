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
    <g filter="url(#filter0_b_893_35237)">
      <path
        d="M5.66636 4.67666C5.39299 4.40329 4.94978 4.40329 4.67641 4.67666C4.40304 4.95002 4.40304 5.39324 4.67641 5.66661L5.66636 4.67666ZM10.3333 11.3235C10.6066 11.5968 11.0498 11.5968 11.3232 11.3235C11.5966 11.0501 11.5966 10.6069 11.3232 10.3335L10.3333 11.3235ZM4.67641 5.66661L10.3333 11.3235L11.3232 10.3335L5.66636 4.67666L4.67641 5.66661Z"
        :fill="props.fill"
      />
    </g>
    <g filter="url(#filter1_b_893_35237)">
      <path
        d="M4.67678 10.3335C4.40342 10.6069 4.40342 11.0501 4.67678 11.3235C4.95015 11.5968 5.39337 11.5968 5.66673 11.3235L4.67678 10.3335ZM11.3236 5.66661C11.597 5.39324 11.597 4.95002 11.3236 4.67666C11.0502 4.40329 10.607 4.40329 10.3336 4.67666L11.3236 5.66661ZM5.66673 11.3235L11.3236 5.66661L10.3336 4.67666L4.67678 10.3335L5.66673 11.3235Z"
        :fill="props.fill"
      />
    </g>
    <defs>
      <filter
        id="filter0_b_893_35237"
        x="-0.528809"
        y="-0.52832"
        width="17.0571"
        height="17.0569"
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
          result="effect1_backgroundBlur_893_35237"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_893_35237"
          result="shape"
        />
      </filter>
      <filter
        id="filter1_b_893_35237"
        x="-0.52832"
        y="-0.52832"
        width="17.0571"
        height="17.0569"
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
          result="effect1_backgroundBlur_893_35237"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_893_35237"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
</template>