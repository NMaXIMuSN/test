<script setup lang="ts">
import { defineProps, defineEmits, computed, useSlots, ref } from 'vue'
import type { Ref, PropType } from 'vue'

import { IOptionsIcon } from './type'
import './MInput.scss'

import HOCFormError from '@/components/HOC/FormError/FormError.vue'
import DeleteIcon from '@/components/icon/DeleteIcon.vue'

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  placeholder: String,
  errorMessage: String,
  isDisabled: Boolean,
  isReadonly: Boolean,
  paddingY: {
    type: String,
    default: '12px',
  },
  paddingX: {
    type: String,
    default: '12px',
  },
  clearable: Boolean,
  prependIconOptions: {
    type: Object as PropType<IOptionsIcon>,
    default: () => ({}),
  },
  appendIconOptions: {
    type: Object as PropType<IOptionsIcon>,
    default: () => ({}),
  },
})


const slots = useSlots()

const emits = defineEmits(['update:modelValue'])
const input: Ref<HTMLInputElement|null> = ref(null)
const isFocus: Ref<boolean> = ref(false)

const paddingX = computed(() => {
  return `pr-[${
    slots['append-icon'] || props.clearable
      ? '0px'
      : props.paddingX
  }] pl-[${
    slots['prepend-icon']
      ? '0px'
      : props.paddingX
  }]`
})

const classPrependIcon = computed(() => {
  return {
    'bg-black-50': props.prependIconOptions?.bgColor,
    'border-r-black-50 border-2': props.prependIconOptions?.border,
  }
})

const classAppendIcon = computed(() => {
  return {
    'bg-black-50': props.appendIconOptions.bgColor,
    'border-l-black-50 border-2': props.appendIconOptions.border,
  }
})

const classColor = computed<string>(() => {
  return props.errorMessage
    ? 'border-red-900'
    : isFocus.value
      ? 'border-primary-500'
      : 'border-black-50'
})

const classHover = computed<string>(() => {
  return !props.isDisabled 
    ? props.errorMessage
      ? `hover:border-red-900 `
      : `hover:border-primary-500`
    : ''
})
</script>

<template>
  <div>
    <HOCFormError :error-message="props.errorMessage">
      <label
        class="m-input--wrap"
      >
        <span
          v-if="slots['default']"
          class="label"
        >
          <slot />
        </span>
        <div
          class="m-input w-[100%] input__wrap relative flex items-center border-2 border-solid rounded-base"
          :class="[
            classColor,
            classHover,
            paddingX,
            {
              'bg-background-color-900': props.isDisabled,
              'border-primary-500': isFocus,
            },
          ]"
        >
          <span
            v-if="slots['prepend-icon']"
            class="prepend-icon pr-[12px] self-stretch flex items-center rounded-tl-[9px] rounded-bl-[9px]"
            :class="classPrependIcon"
            :style="{
              paddingLeft: props.paddingX
            }"
          >
            <slot name="prepend-icon"/>
          </span>
          <div
            class="flex flex-wrap items-center flex-[1]"
            :style="{
              paddingTop: props.paddingY,
              paddingBottom: props.paddingY,
            }"
          >
            <slot
              name="chips"
              v-if="slots['chips']"
              class="chips pr-[12px]"
            />
            <input
              :value="props.modelValue"
              :disabled="props.isDisabled"
              @input="emits('update:modelValue', $event.target.value)"
              :placeholder="props.placeholder"
              @focus="isFocus = true"
              @blur="isFocus = false"
              :readonly="isReadonly"
              class="outline-0 flex-[1] flex w-[10px] bg-[transparent]"
              :class="[
                {
                  'm-input__disable': props.isDisabled,
                }
              ]"
              ref="input"
            >
          </div>
          <div
            v-if="slots['append-icon'] || (props.clearable && props.modelValue.length)"
            class="append-icon pl-[12px] self-stretch flex items-center rounded-tr-[9px] rounded-br-[9px]"
            :class="classAppendIcon"
            :style="{
              paddingRight: props.paddingX
            }"
          >
            <slot name="append-icon">
              <delete-icon
                width="20px"
                height="20px"
                fill="rgba(111, 118, 126, 0.4)"
                @click="emits('update:modelValue', '')"
                class="cursor-pointer transition duration-300"
                :class="{
                  'opacity-0': !props.modelValue.length
                }"
              />
            </slot>
          </div>
        </div>
      </label>
    </HOCFormError>
  </div>
</template>
