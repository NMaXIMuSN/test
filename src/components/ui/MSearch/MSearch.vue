<script setup lang="ts">
import { defineProps, defineEmits, ref } from 'vue'
import type { PropType, Ref } from 'vue'

import { ISearchItem } from './type'
import './MSearch.scss'

import MInput from '@/components/ui/MInput/MInput.vue'
import MSelect from '@/components/ui/MSelect/MSelect.vue'
import ChewronDownIcon from '@/components/icon/ChewronDownIcon.vue'

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  searchItems: {
    type: Array as PropType<Array<ISearchItem>>,
    default: undefined,
  },
  currentSearchItem: {
    type: Object as PropType<ISearchItem>,
  },
  paddingY: {
    type: String,
    default: '8px',
  },
  paddingX: {
    type: String,
    default: '12px',
  },
  clearable: Boolean,
  dropAnswer: Boolean,
})

const emits = defineEmits(['update:modelValue', 'update:currentSearchItem'])

const searchType: Ref<HTMLDivElement|null> = ref(null)

</script>

<template>
  <div class="search">
    <m-input
      class="search__input"
      :model-value="props.modelValue"
      @update:model-value="emits('update:modelValue', $event)"
      :paddingX="props.paddingX"
      :paddingY="props.paddingY"
      :clearable="props.clearable"
    >
      <template #prepend-icon>
        <m-select
          v-if="props.searchItems"
          :model-value="props.currentSearchItem"
          @update:model-value="emits('update:currentSearchItem', $event)"
          :items="props.searchItems"
        >
          <template #activator="{ currentValue }">
            <div
              class="bg-black-50 flex px-[8px] py-[4px] rounded-[8px]"
              ref="searchType"
            >
              <div
                class="text-base flex items-center text-black-900 mr-[4px] w-[max-content] font-semibold"
              >
                {{currentValue.title }} 
              </div>
              <div>
                <chewron-down-icon
                  width="24px"
                  height="24px"
                  fill="#1A1D1F"
                />
              </div>
            </div>
          </template>
        </m-select>
      </template>
      <template
        v-if="props.dropAnswer"  
        #append-icon
      >
        <chewron-down-icon
          width="24px"
          height="24px"
          fill="#1A1D1F"
        />
      </template>
    </m-input>
  </div>
</template>