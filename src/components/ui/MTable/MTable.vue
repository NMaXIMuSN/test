<script setup lang="ts">
import { defineProps, ref, onMounted, watch, defineEmits } from 'vue'
import type { PropType, Ref } from 'vue'

import { IHeader, Item } from './type' 

import numberShownField from './numberShownField.vue'
import MPagination from '../MPagination/MPagination.vue'
import ChewronRightIcon from '../../icon/ChewronRightIcon.vue'
import SortDownIcon from '../../icon/SortDownIcon.vue'
import MCheckbox from '../MCheckbox/MCheckbox.vue'
import MButton from '../MButton/MButton.vue'

import './MTable.scss'

const props = defineProps({
  modelValue: {
    type: Array as PropType<Array<Item>>,
  },
  headers: {
    type: Array as PropType<Array<IHeader>>,
    required: true,
  },
  items: {
    type: Array as PropType<Array<Item>>,
    required: true,
  },
  paddingRow: {
    type: String,
    default: '12px',
  },
  gapRows: {
    type: String,
    default: '12px',
  },
  page: {
    type: Number,
    default: 1,
  },
  pageCount: {
    type: Number,
    default: 10,
  },
  perPage: {
    type: Number,
    default: 10,
  },
  perPageItems: {
    type: Array as PropType<Array<number|string>>,
    default:() => [10, 15, 30, 45],
  },
  multipleSorting: Boolean,
  borderHeader: Boolean,
  borderRows: Boolean,
  canSelect: Boolean,
  itemsCenter: Boolean,
  visibilityNumberViews: Boolean,
  visibilityPerItems: Boolean,
  visibilityPagination: Boolean,
  visibilityButtonMore: Boolean,
})

const emits = defineEmits(['update:modelValue', 'update:page', 'update:perPage', 'sorting', 'loadMore'])

const headers: Ref<Array<IHeader>> = ref(props.headers || [])
const items: Ref<Array<Item>> = ref(props.items || [])

const selectedItem: Ref<Array<Item>> = ref(props.modelValue || [])
const selectedItemCheck: Ref<Array<boolean>> = ref(new Array(items.value.length).fill(false)) 
const isAllSelected: Ref<boolean> = ref(false)

const multipleSorting: Ref<{
	[key in string]: string
}> = ref({})

const page = ref(props.page)
const perPage = ref(props.perPage)
const pageCount = ref(props.pageCount)
const perPageItems = ref(props.perPageItems)

const canScrollLeft: Ref<boolean> = ref(false)

const tableWrap: Ref<HTMLElement|null> = ref(null)

const scrollTableRight = () => {
  if (tableWrap.value) {    
    tableWrap.value.scroll({
      left: tableWrap.value.scrollLeft + 400,
      behavior: 'smooth',
    })
  }
}

const checkCanScrollLeft = () => {
  const target = tableWrap.value

  if (target) {
    canScrollLeft.value = Math.floor(target.scrollWidth - target.scrollLeft) - 48 > target.clientWidth
  }
}

const wheelEvent = (e: Event) => {
  if (tableWrap.value) {
    const canScrollUp = e.deltaY < 0 && tableWrap.value.scrollLeft > 0
    const canScrollBottom = e.deltaY > 0 && canScrollLeft.value
  

    if (canScrollUp || canScrollBottom ) {
      e.preventDefault()
    }

    
    tableWrap.value.scrollLeft = e.deltaY < 0
      ? Math.max(tableWrap.value.scrollLeft + e.deltaY, 0)
      : Math.min(tableWrap.value.scrollLeft + e.deltaY, tableWrap.value.scrollWidth)
    checkCanScrollLeft()
  }
}

const newSelected = (index: number) => {
  const item = items.value[index]

  switch (selectedItemCheck.value[index]) {
  case true:
    selectedItem.value.push(item)
    break				
  case false:
    selectedItem.value = selectedItem.value.filter(_item => JSON.stringify(_item) !== JSON.stringify(item))
    break
  }
}

const allSelected = (allSelected: boolean) => {
  if (allSelected) {
    selectedItem.value = props.items
    selectedItemCheck.value = new Array(items.value.length).fill(true)
  }
  else {
    selectedItem.value = []
    selectedItemCheck.value = new Array(items.value.length).fill(false)
  }
}

const sortTable = (value: string) => {
  if (!Object.keys(multipleSorting.value).includes(value) || multipleSorting.value[value] === '') {
    multipleSorting.value[value] = 'asc'
  }
  else if (multipleSorting.value[value] === 'asc') {
    multipleSorting.value[value] = 'desc'
  }
  else {
    multipleSorting.value[value] = ''
  }

  if (!props.multipleSorting) {
    multipleSorting.value = {
      [value]: multipleSorting.value[value],
    }
  }

  emits('sorting', multipleSorting.value)
}

watch(selectedItem, (newValue) => {
  emits('update:modelValue', newValue) 
  isAllSelected.value = newValue.length === props.items.length
}, {
  deep: true,
})

watch(page, (newValue) => {
  emits('update:page', newValue)
})

watch(perPage, (newValue) => {
  emits('update:perPage', newValue)
})

onMounted(() => {
  checkCanScrollLeft()
})
</script>

<template>
  <div
    class="overflow-x-auto scrollbar-hide"
    ref="tableWrap"
    @wheel="wheelEvent"
  >
    <table
      class="min-w-[100%]"
    >
      <thead>
        <tr
          class="table__header"
          :class="{
            'after:content-[\'\'] after:w-[100%] after:h-[100%] after:z-[-1] after:border-b-[1px] after:border-black-50 after:absolute relative after:bottom-[0px] after:left-[0px]': props.borderHeader
          }"
        >
          <th
            v-if="props.canSelect"
            class="table__check-box py-[13px] align-top pl-[8px] pr-[14px] sticky left-0 bg-white-900 group-hover:bg-background-color-900 transition ease duration-300"
          > 
            <m-checkbox
              v-model="isAllSelected"
              :id="`checkbox-header`"
              @update:model-value="allSelected(isAllSelected)"
            />
          </th>
          <th
            v-for="(item) in headers"
            :key="item.value"
            @click="item.sortable && sortTable(item.value)"
            class="text-sm text-black-500 text-left font-normal py-[13px] pr-[12px] first:pl-[12px]"
            :class="{
              'cursor-pointer': item.sortable,
              'text-black-900': multipleSorting[item.value],
            }"
            :style="{
              maxWidth: item.maxWidth,
              minWidth: item.maxWidth,
            }"
          >
            <slot
              :name="`header-${item.value}`"
              v-bind="({
                item: item.value,
              })"
            >
              <span
                class="flex items-center"
                :style="{
                  marginBottom: props.gapRows,
                }"
              >
                {{ item.name }}
                <template v-if="item.sortable">
                  <sort-down-icon 
                    class="ml-[4px] transition duration-300 ease"
                    :class="{
                      'sort-desc': multipleSorting[item.value] === 'desc',
                      'sort-asc': multipleSorting[item.value] === 'asc',
                    }"
                    width="12px"
                    height="12px"
                    fill="#9A9FA5"
                  />
                </template>
              </span>
            </slot>
          </th>
          <th
            class="sticky right-0 group-hover:bg-background-color-900 bg-white-900 pl-[12px]"
            v-if="canScrollLeft"
          >
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in items"
          :key="index"
          class="group hover:bg-background-color-900 transition duration-300 ease"
          :class="{
            'after:content-[\'\'] after:w-[100%] after:h-[100%] after:z-[-1] after:border-b-[1px] after:border-black-50 after:absolute relative after:bottom-[0px] after:left-[0px]': props.borderRows
          }"
        >
          <td
            v-if="props.canSelect"
            class="table__check-box pl-[8px] pr-[14px] sticky left-0 bg-white-900 group-hover:bg-background-color-900 transition ease duration-300"
          > 
            <m-checkbox
              v-model="selectedItemCheck[index]"
              :id="`checkbox-row-${index}`"
              @update:model-value="newSelected(index)"
            />
          </td>
          <td
            v-for="({value}) in headers"
            :key="value"
            class="text-base text-black-900 text-left py-[14px] pr-[12px] first:pl-[12px]"
          >
            <slot
              :name="`rows-${value}`"
              v-bind="({
                item: item[value],
              })"
            >
              <div
                :style="{
                  marginBottom: props.gapRows,
                  marginTop: props.gapRows,
                }"
              >
                {{ item[value] }}
              </div>
            </slot>
          </td>
          <td
            class="sticky right-0 group-hover:bg-background-color-900 bg-white-900 pl-[12px] transition duration-300 ease"
            v-if="canScrollLeft"
          >
            <chewron-right-icon
              @click="scrollTableRight"
              class="cursor-pointer self-center"
              width="24px"
              height="24px"
              fill="#9A9FA5"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="table__footer mt-[24px]">
    <div class="flex justify-between mb-[15px]">
      <m-pagination
        v-if="props.visibilityPagination"
        v-model="page"
        :page-count="pageCount"
      />
      <number-shown-field
        v-if="props.visibilityPerItems"
        v-model="perPage"
        :items="perPageItems"
      />
      <div
        v-else-if="props.visibilityNumberViews"
        class="flex items-center"
      >
        <slot name="number-views">
          <span class="text-sm text-black-500">
            {{page * perPage}} товаров из {{ pageCount * perPage}}
          </span>
        </slot>
      </div>
    </div>
    <template v-if="props.visibilityButtonMore">
      <m-button
        outline
        color="black"
        brightness="50"
        block
        class="h-[48px]"
        @click="emits('loadMore')"
      >
        Показать еще
      </m-button>
    </template>
  </div>
</template>
