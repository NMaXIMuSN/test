import { App, Plugin } from 'vue'
import "./assets/style/global.scss"
import MSelect from './components/ui/MSelect'
import MAlert from './components/ui/MAlert'
import MButton from './components/ui/MButton'
import MCalendar from './components/ui/MCalendar'
import MCheckbox from './components/ui/MCheckbox'
import MDragList from './components/ui/MDragList'
import MIcon from './components/ui/MIcon'
import MInput from './components/ui/MInput'
import MList from './components/ui/MList'
import MTabs from './components/ui/MTabs'
import MChip from './components/ui/MChip'
import MChipsList from './components/ui/MChipsList'
import MPagination from './components/ui/MPagination'
import MPopup from './components/ui/MPopup'
import MSidebarMenu from './components/ui/MSidebarMenu'
import MSearch from './components/ui/MSearch'
import MTitle from './components/ui/MTitle'

const components = [
  MSelect,
  MAlert,
  MButton,
  MCalendar,
  MCheckbox,
  MDragList,
  MIcon,
  MInput,
  MList,
  MTabs,
  MChip,
  MChipsList,
  MPagination,
  MPopup,
  MSidebarMenu,
  MSearch,
  MTitle,
]

export const install: Plugin = (app: App) => {
  components.forEach((el: any) => {
    app.component(el.name, el)      
  })
} 

export { default as MSelect } from './components/ui/MSelect'
export { default as MAlert } from './components/ui/MAlert'
export { default as MButton } from './components/ui/MButton'
export { default as MCalendar } from './components/ui/MCalendar'
export { default as MCheckbox } from './components/ui/MCheckbox'
export { default as MDragList } from './components/ui/MDragList'
export { default as MIcon } from './components/ui/MIcon'
export { default as MInput } from './components/ui/MInput'
export { default as MList } from './components/ui/MList'
export { default as MTabs } from './components/ui/MTabs'
export { default as MChip } from './components/ui/MChip'
export { default as MChipsList } from './components/ui/MChipsList'
export { default as MPagination } from './components/ui/MPagination'
export { default as MPopup } from './components/ui/MPopup'
export { default as MSidebarMenu } from './components/ui/MSidebarMenu'
export { default as MSearch } from './components/ui/MSearch'
export { default as MTitle } from './components/ui/MTitle'

