<script setup lang="ts">
import { defineProps, defineEmits, ref, watch, useSlots, computed } from 'vue'
import type { PropType, Ref } from 'vue'

import { Color, Brightness } from '@/assets/utils/ColorClassConfig'
import { colorClass } from '@/assets/utils/utils'
import { TOffsetStyle, TTargetData, TOffsetProps } from './type'
import './MPopup.scss'

import MTitle from '@/components/ui/MTitle/MTitle.vue'
import MIcon from '@/components/ui/MIcon/MIcon.vue'
import CloseIcon from '@/components/icon/CloseIcon.vue'


const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  colorTitle: {
    type: String as PropType<Color>,
    required: true,
  },
  brightnessTitle: {
    type: String as PropType<Brightness>,
    required: true,
  },
  bgColor: {
    type: String as PropType<Color>,
    default: 'white',
  },
  bgBrightness: {
    type: String as PropType<Brightness>,
    default: '900',
  },
  maxWidth: {
    type: String,
    default: undefined,
  },
  maxHeight: {
    type: String,
    default: undefined,
  },
  offset: {
    type: Object as PropType<TOffsetProps>,
    default: undefined,
  },
  target: {
    type: null as unknown as PropType<Element>,
  },
  scrollable: Boolean,
})

const emits = defineEmits(['update:modelValue'])
const slots = useSlots()

const isOpen: Ref<boolean> = ref(props.modelValue)
const targetData: Ref<TTargetData|null> = ref(null)
const popup: Ref<HTMLDivElement|null> = ref(null)
const popupCard: Ref<HTMLDivElement|null> = ref(null)

const popupBgColor = computed((): string => {
  return colorClass(props.bgColor, 'white', props.bgBrightness, '900', 'bgColor')
})

const offsetStyle = computed((): TOffsetStyle => {
  getAttachData()

  const style: TOffsetStyle = {
    maxHeight: props.maxHeight,
    minHeight: props.maxHeight,
    maxWidth: props.maxWidth,
    minWidth: props.maxWidth,
    position: 'absolute',
  }

  if (targetData.value) {
    style.maxHeight = style.maxHeight
      ? style.maxHeight
      : targetData.value.height + 'px'
    style.minHeight = style.minHeight
      ? style.minHeight
      : targetData.value.height + 'px'
    style.maxWidth = style.maxWidth
      ? style.maxWidth
      : targetData.value.width + 'px'
    style.minWidth = style.minWidth
      ? style.minWidth
      : targetData.value.width + 'px'
    style.top = getPosition(props.offset?.top, targetData.value.y) 
    style.left = getPosition(props.offset?.left, targetData.value.x) 
    style.bottom = getPosition(props.offset?.bottom, targetData.value.y) 
    style.right = getPosition(props.offset?.right, targetData.value.x) 
  }

  let widthPopup = 0

  if (popupCard.value) {
    widthPopup = popupCard.value?.offsetWidth
  }

  if (props.offset?.x) {

    switch (props.offset.x) {
    case 'left':
      style.left = targetData.value?.x
        ? targetData.value?.x + 'px'
        : 0 + 'px'
      break
    case 'right':
      if (targetData.value) {
        style.left = targetData.value.x + targetData.value.width - widthPopup + 'px'
      }
      else {
        style.left = undefined
        style.right = 0 + 'px'
      }

      break		
    case 'center':
      style.left = targetData.value?.x
        ? targetData.value.x + targetData.value.width / 2 - widthPopup / 2 + 'px'
        : `calc(50% - ${widthPopup / 2}px)`
			
      break
    }
  }
  else {
    style.left = `calc(50% - ${widthPopup / 2}px)`
  }

  let heightPopup = 0

  if (popupCard.value) {
    heightPopup = popupCard.value?.offsetHeight
  }

  if (props.offset?.y) {	
    switch (props.offset.y) {
    case 'top':
      style.top = targetData.value
        ? targetData.value.y + 'px'
        : 0 + 'px'
      break
    case 'center':
      style.top = targetData.value
        ? targetData.value.y + targetData.value.height / 2 - heightPopup / 2 + 'px'
        : `calc(50% - ${heightPopup / 2}px)`
			
      break
    case 'bottom':
      if (targetData.value) {
        style.top = targetData.value.y + targetData.value.height - heightPopup + 'px'
      }
      else {
        style.top = undefined
        style.bottom = 0 + 'px'
      }

      break
    }
  }
  else {
    style.top = `calc(50% - ${heightPopup / 2}px)`
  }
	
  return style
})

const heightPopupBody = () => {
  if (popupCard.value) {
    let popupContentHeight = popupCard.value.clientHeight - parseInt(getComputedStyle(popupCard.value).paddingBottom) - parseInt(getComputedStyle(popupCard.value).paddingTop)
    const popupChildrenNotBody = Array.from(popupCard.value.children).filter(el => !el.classList.value.includes('popup__body'))
    popupChildrenNotBody.forEach(el => {
      const style = getComputedStyle(el)
      popupContentHeight = popupContentHeight - parseInt(style.marginBottom) - parseInt(style.marginTop) - el.clientHeight

    })

    return popupContentHeight + 'px'
  }

  return undefined
}

const closePopup = (): void => {
  isOpen.value = false
}

const getPosition = (value: string|number|undefined, attachValue: number): string|undefined => {
  if (!value) {
    return
  }

  if (typeof value === "string") {
    return ''
  }
  else {
    return attachValue + value + 'px'
  }
}

const getAttachData = (): void => {
  if (props.target) {
    const clientRect = props.target.getBoundingClientRect()
    targetData.value = {
      x: clientRect.x,
      y: clientRect.y,
      width: clientRect.width,
      height: clientRect.height,
    }
  }
}

watch(isOpen, (newValue) => {
  emits('update:modelValue', newValue)
})

watch(() => props.modelValue, (newValue) => {
  isOpen.value = newValue
})
</script>

<template>
  <transition name="popup">
    <div
      v-if="isOpen"
      ref="popup"
      @click="closePopup"
      class="popup__wrap z-20 max-h-[calc(100% - 100px)] fixed top-0 left-0 bottom-0 right-0 before:bg-background-color-900 before:opacity-[0.8] before:backdrop-blur-[20px] before:content-[''] before:z-[-1] before:w-[100%] before:h-[100%] before:absolute before:top-0 before:left-0"
    >
      <div
        @click.stop
        class="popup p-[24px] rounded-large z-[1] shadow-popup"
        ref="popupCard"
        :class="[
          popupBgColor,
          {
            'overflow-y-auto scroll-y': !props.scrollable
          }
        ]"
        :style="{
          ...offsetStyle
        }"
      >
        <div class="popup__header mb-[24px] flex justify-between items-center">
          <slot
            name="header"
            v-bind="({
              on: {
                click: closePopup
              },
              data: {
                title: props.title,
                color: props.colorTitle,
                brightness: props.brightnessTitle,
              }
            })"
          >
            <m-title
              :color="props.colorTitle"
              :brightness="props.brightnessTitle"
              :title="props.title"
              class="mr-[24px]"
            >              
              {{ props.title}}
            </m-title>
            <m-icon
              padding="8px"
              bg-color="background-color"
              class="cursor-pointer"
              @click="closePopup"
            >
              <close-icon
                width="24px"
                height="24px"
                fill="#9A9FA5"
              />
            </m-icon>
          </slot>
        </div>
        <div
          class="popup__body"
          :class="{
            'overflow-y-auto scroll-y': props.scrollable
          }"
          :style="{
            height: props.scrollable 
              ? heightPopupBody()
              : ''
          }"
        >
          <slot />
        </div>
        <div
          v-if="slots['footer']"
          class="popup__footer mt-24px"
        >
          <slot
            name="footer"
            v-bind="({
              on: {
                click: closePopup
              },
            })"
          />
        </div>
      </div>
    </div>
  </transition>
</template>
