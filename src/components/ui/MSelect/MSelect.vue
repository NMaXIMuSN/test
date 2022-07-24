<script setup lang="ts">
import { defineProps, ref, defineEmits, watch, computed, useSlots } from 'vue'
import type { PropType, Ref } from 'vue'

import { IItems } from '../MList/type'
import './MSelect.scss'

import MList from '../MList/MList.vue'
import MInput from '../MInput/MInput.vue'
import MChip from '../MChip/MChip.vue'
import HOCFormError from '@/components/HOC/FormError/FormError.vue'
import ChewronDownIcon from '@/components/icon/ChewronDownIcon.vue'


const props = defineProps({
  modelValue: {  
    type: Object as PropType<IItems> || Array as PropType<Array<IItems>>,
    required: true,
  },
  items: {
    type: Array as PropType<Array<IItems>>,
    default: () => [],
  },
  errorMessage: String,
  namesNextSlots: {
    type: Array as PropType<Array<string>>,
    default: () => [],
  },
  maxHeightList: {
    type: String,
    default: '312px',
  },
  multiple: Boolean,
  joinSymbol: {
    type: String,
    default: ', ',
  },
  chips: Boolean,
})

const emits = defineEmits(['update:modelValue'])
const slots = useSlots()

const isOpenList: Ref<boolean>  = ref(false)
const isOpenNextList: Ref<boolean>  = ref(false)

const modelValue = computed(() => {
  if (props.multiple && !props.chips) {
    let newTitle: Array<string> = []

    if (Array.isArray(props.modelValue)) {
      props.modelValue.forEach((el: IItems) => newTitle.push(el.title))
    }

    return newTitle.join(props.joinSymbol)
  }

  return props.modelValue.title
})

const hidenList = () => {
  isOpenList.value = false
  isOpenNextList.value = false
}

const clickActivator = () => {
  if (isOpenList.value) {
    hidenList()
  }
  else {
    isOpenList.value = true
  }
}

const opentNextList = () => {
  isOpenNextList.value = true
}

const deleteChip = (item: IItems) => { 
  Array.isArray(props.modelValue) && emits('update:modelValue', props.modelValue.filter(el => el.value !== item.value))
}

watch(() => props.modelValue, () => {
  if(!props.multiple) {
    hidenList()		
  }
})
</script>

<template>
  <div
    class="m-select"
    ref="select"
  >
    <div
      class="m-select__activator block cursor-pointer"
      ref="activator"
      @click.prevent="clickActivator"
    >
      <HOCFormError :error-message="props.errorMessage">
        <slot
          name="activator"
          v-bind="({
            currentValue: props.modelValue,
          })"
        >
          <m-input
            class="m-select__input mb-2"
            :class="[
              {
                'm-select__input-active': isOpenList,
              },
            ]"
            :modelValue="modelValue"
            isReadonly
          >
            <template #default>
              <slot name="label" />
            </template>
            <template
              v-if="props.chips"
              #chips
            >
              <m-chip
                class="m-[4px] last:mr-[0px] first:ml-[0px]"
                :title="item.title"
                v-for="(item, index) in props.modelValue"
                :key="index"
                max-height="24px"
                can-deleted
                @click.stop
                @on-delete="deleteChip(item)"
              />
            </template>
            <template #append-icon>
              <chewron-down-icon
                class="m-select__input-chevron"
                width="24px"
                height="24px"
                fill="#1A1D1F"
              />
            </template>
          </m-input>
        </slot>
      </HOCFormError>
    </div>
    <div
      v-if="isOpenList"
      class="m-select__window--wrap flex w-[min-content] absolute"
    >
      <slot name="list">
        <m-list
          @update:model-value="emits('update:modelValue', $event)"
          :model-value="props.modelValue"
          :items="props.items"
          :multiple="props.multiple"
          class="overflow-y-auto scroll-y"
          :style="{
            maxHeight: props.maxHeightList,
          }"
        >
          <template #item="props">
            <slot
              name="item"
              v-bind="props"
            />
          </template>
          <template
            v-if="slots['actions']"
            #actions
          >
            <slot
              name="actions"
              v-bind="({
                on: {
                  click: opentNextList,
                }
              })"
            />
          </template>
        </m-list>
      </slot>
      <slot
        v-if="isOpenNextList"
        name="next-list"
      />
    </div>
  </div>
</template>

