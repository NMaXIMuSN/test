<script setup lang="ts">
import { computed, defineProps, ref, defineEmits } from 'vue'
import type { PropType, Ref } from 'vue'

import { TreeNode } from './type'
import './MSidebarMenu.scss'

import ChewronDownIcon from '@/components/icon/ChewronDownIcon.vue'

const props = defineProps({
  item: {
    type: Object as PropType<TreeNode>,
    required: true,
  },
})

const emits = defineEmits(['newPath'])

const isOpen: Ref<boolean> = ref(false)

const classTextColor = computed((): string => {
  return props.item.current
    ? 'text-black-900 font-semibold'
    : 'text-black-500 group-hover:text-black-900 transition ease'
})

const clickItem = (item: TreeNode): void => {
  if (item.type === 'sub_menu') {
    isOpen.value = !isOpen.value
  }
	
  if (item.type === 'button' && !item.current) {
    emits('newPath', item.path)	
  }
}

const beforeEnter = (el: HTMLElement) => el.style.height = `0px`
const enter = (el: HTMLElement) => el.style.height = `${el.scrollHeight}px`
const afterEnter = (el: HTMLElement) => el.style.height = `auto`

const beforeLeave = (el: HTMLElement) => {
  el.style.height = `${el.scrollHeight}px`
  window.getComputedStyle(el, null).getPropertyValue('height')
}

const leave = (el: HTMLElement) => el.style.height = `0px`
</script>

<template>
  <div>
    <div
      class="flex cursor-pointer items-center p-[12px] group rounded-base"
      :class="{
        'bg-black-50': props.item.current
      }"
      @click="clickItem(props.item)"
    >  
      <span v-if="props.item.icon_url">
        <div
          class="w-[24px] h-[24px] mr-[8px]"
          :class="{
            'bg-black-500 group-hover:bg-black-900 transition ease': !props.item.current,
            'bg-black-900': props.item.current,
          }"
          :style="{
            mask: `url(${props.item.icon_url}) no-repeat center ` ,
            '-webkit-mask': `url(${props.item.icon_url}) no-repeat center `,
          }"
        />
      </span>
      <span
        class="flex-[1] block items-center text-[16px] leading-[140%]"
        :class="[
          classTextColor,
          {
            'ml-[32px]': !props.item.icon_url,
          }
        ]"
      >
        {{props.item.title}}
      </span>
      <span
        v-if="props.item.fast_action && props.item.fast_action.icon_url"
        class="fast_action"
        :class="{
          'mr-[8px]': props.item.items
        }"
        @click.stop="emits('newPath', props.item.fast_action?.path)"
      >
        <div
          class="fast_action-icon w-[24px] h-[24px] relative cursor-pointer overflow-hidden"
          :style="{
            mask: `url(${props.item.fast_action.icon_url}) no-repeat center ` ,
            '-webkit-mask': `url(${props.item.fast_action.icon_url}) no-repeat center `,
          }"
        />
      </span>
      <span v-if="props.item.items">
        <chewron-down-icon
          class="transition-[transform] duration-300 ease"
          :class="{
            'rotate-[-180deg]': isOpen,
          }"
          width="24px"
          height="24px"
          fill="#9A9FA5"
        />
      </span>
    </div>

    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @leave="leave"
    >
      <div
        class="overflow-hidden transition-[height] duration-300 ease"
        v-if="isOpen"
      >
        <m-sidebar-menu-item
          :item="item"
          v-for="(item, index) in props.item.items"
          :key="index"
          @new-path="emits('newPath', $event)"
        />
      </div>
    </transition>
  </div>
</template>
