<script setup lang="ts">
import { defineProps, defineEmits, ref, watch, useSlots } from 'vue'
import './MCheckbox.scss'

const props = defineProps({
  checkedValue: {
    default: true,
  },
  uncheckedValue: {
    default: false,
  },
  modelValue: {
    default: false,
  },
  id: {
    type: String,
    required: true,
  },
  isDisabled: Boolean,
})

const emit = defineEmits(['update:modelValue'])
const slots = useSlots()

const value = ref<boolean>(props.modelValue === props.checkedValue)

watch(() => props.modelValue, (newValue) => {
  value.value = newValue === props.checkedValue
})
</script>

<template>
  <div>
    <input
      v-model="value"
      :disabled="props.isDisabled"
      @input="emit('update:modelValue', $event.target.checked ? props.checkedValue : props.uncheckedValue)"
      :id="id"
      class="m-checkox"
      type="checkbox"
    >
    <label
      :for="id"
      class="m-checkox__lable font-medium text-base"
      :class="{
        'before:mr-[8px]': slots['default']
      }"
    >
      <slot />
    </label>
  </div>
</template>
