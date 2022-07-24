type Color = 'primary' | 'orange' | 'black' | 'purple' | 'azure' | 'white' | 'background-color' | 'green' | 'red'
type Brightness = '900' | '500' | '100' | '50'
type Class = 'bgColor' | 'borderColor' | 'textColor'

type IBrightness = {
	900: string
	500?: string
	100?: string
	50?: string
}

type IClass = Record<Class, IBrightness>

type IColors = Record<Color, IClass>

const color: IColors = {
  primary: {
    bgColor: {
      100: 'bg-primary-100',
      500: 'bg-primary-500',
      900: 'bg-primary-900',
    },
    borderColor: {
      100: 'border-primary-100',
      500: 'border-primary-500',
      900: 'border-primary-900',
    },
    textColor: {
      100: 'text-primary-100',
      500: 'text-primary-500',
      900: 'text-primary-900',
    },
  },
  orange: {
    bgColor: {
      100: 'bg-orange-100',
      500: 'bg-orange-500',
      900: 'bg-orange-900',
    },
    borderColor: {
      100: 'border-orange-100',
      500: 'border-orange-500',
      900: 'border-orange-900',
    },
    textColor: {
      100: 'text-orange-100',
      500: 'text-orange-500',
      900: 'text-orange-900',
    },
  },
  black: {
    bgColor: {
      50: 'bg-black-50',
      100: 'bg-black-100',
      500: 'bg-black-500',
      900: 'bg-black-900',
    },
    borderColor: {
      50: 'border-black-50',
      100: 'border-black-100',
      500: 'border-black-500',
      900: 'border-black-900',
    },
    textColor: {
      50: 'text-black-50',
      100: 'text-black-100',
      500: 'text-black-500',
      900: 'text-black-900',
    },
  },
  purple: {
    bgColor: {
      500: 'bg-purple-500',
      900: 'bg-purple-900',
    },
    borderColor: {
      500: 'border-purple-500',
      900: 'border-purple-900',
    },
    textColor: {
      500: 'text-purple-500',
      900: 'text-purple-900',
    },
  },
  azure: {
    bgColor: {
      500: 'bg-azure-500',
      900: 'bg-azure-900',
    },
    borderColor: {
      500: 'border-azure-500',
      900: 'border-azure-900',
    },
    textColor: {
      500: 'text-azure-500',
      900: 'text-azure-900',
    },
  },
  white: {
    bgColor: {
      900: 'bg-white-900',
    },
    borderColor: {
      900: 'border-white-900',
    },
    textColor: {
      900: 'text-white-900',
    },
  },
  'background-color': {
    bgColor: {
      500: 'bg-background-color-500',
      900: 'bg-background-color-900',
    },
    borderColor: {
      500: 'border-background-color-500',
      900: 'border-background-color-900',
    },
    textColor: {
      500: 'text-background-color-500',
      900: 'text-background-color-900',
    },
  },
  green: {
    bgColor: {
      100: 'bg-green-100',
      500: 'bg-green-500',
      900: 'bg-green-900',
    },
    borderColor: {
      100: 'border-green-100',
      500: 'border-green-500',
      900: 'border-green-900',
    },
    textColor: {
      100: 'text-green-100',
      500: 'text-green-500',
      900: 'text-green-900',
    },
  },
  red: {
    bgColor: {
      100: 'bg-red-100',
      500: 'bg-red-500',
      900: 'bg-red-900',
    },
    borderColor: {
      100: 'border-red-100',
      500: 'border-red-500',
      900: 'border-red-900',
    },
    textColor: {
      100: 'text-red-100',
      500: 'text-red-500',
      900: 'text-red-900',
    },
  },
}

export {
  color,
  Color,
  Brightness,
  Class
}