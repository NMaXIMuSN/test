<script setup lang="ts">
import { defineProps, PropType, defineEmits } from 'vue'

const props = defineProps({
  modelValue: {
    type: Number,
    required: true,
  },
  items: {
    type: Array as PropType<Array<string|number>>,
    required: true,
  },
  text: {
    type: String,
    default: 'Отображать по:',
  },
})

const emits = defineEmits(['update:modelValue']) 

const updateNumber = (newValue: number) => {
  emits('update:modelValue', newValue)
}

</script>

<template>
	
  <div
    class="field__wrap flex items-center"
  >
    <div class="field__text font-semibold text-base text-black-900 mr-[12px]">
      {{ props.text }}
    </div>
    <div
      v-for="item in props.items"
      :key="item"
      @click="updateNumber(+item)"
      class="fielt__items font-semibold w-[32px] h-[32px] rounded-base transition mr-[8px] last:mr-[0px] ease duration-300 flex items-center justify-center text-[14px] leading-[140%] cursor-pointer hover:border-[2px] hover:border-black-50"
      :class="{
        'border-black-50 border-[2px] text-black-900': +item === props.modelValue,
        'text-black-500 hover:text-black-900' : +item !== props.modelValue
      }"
    >
      {{ item }}
    </div>
  </div>
</template>
