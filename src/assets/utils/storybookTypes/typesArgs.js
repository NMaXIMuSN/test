import {color} from '@/assets/utils/ColorClassConfig'


export const colorType = {
  options: Object.keys(color),
  control: { type: 'select' },
}

export const brightness = {
  options: ['900', '500', '100', '50'],
  control: { type: 'select' },
}