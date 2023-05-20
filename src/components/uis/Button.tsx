import { ReactNode, ElementType, ComponentPropsWithoutRef } from 'react'
import { buttonClasses } from '@mui/base/Button'
import { CircularProgress } from '@mui/material'
import { styled, Theme } from '@mui/material/styles'
import { MuiButtonColor } from '@/functions/libs/mui'
import { Variant } from '@/functions/types/Common'
import { BaseButton, BaseButtonProps } from './BaseButton'

type ButtonUnstyledType = {
  variant: Variant
  active?: boolean
} & Color
type Props = {
  variant: Variant
  theme: Theme
} & Color
type Color = {
  color: MuiButtonColor
}

type Action = 'hover' | 'disable'

const background = (props: Props, action?: Action) => {
  const { variant, color, theme } = props
  const { main, disable, hover, background } = theme.palette[color]
  const isNeutralColor = ['positive', 'negative'].includes(color)

  if (variant === 'contained') {
    if (action === 'hover') return hover ?? main
    if (action === 'disable') return disable ?? null
    return main
  }

  if (variant === 'outlined') return 'white'

  if (variant === 'neutral') {
    if (action === 'hover') return isNeutralColor ? background : 'white'
    if (action === 'disable') return '#E3E3E3'
    return isNeutralColor ? background : 'white'
  }

  return main
}

const color = (props: Props, action?: Action) => {
  const { variant, color, theme } = props
  const { main, disable, hover } = theme.palette[color]
  const isNeutralColor = ['positive', 'negative'].includes(color)

  if (variant === 'contained') return 'white'

  if (variant === 'outlined') {
    if (action === 'hover') return hover ?? main
    if (action === 'disable') return disable ?? null
    return main
  }

  if (variant === 'neutral') {
    if (action === 'hover') return isNeutralColor ? hover : '#535353'
    if (action === 'disable') return '#B0B0B0'
    return isNeutralColor ? main : '#535353'
  }

  return main
}

const border = (props: Props, action?: Action) => {
  const { variant, color, theme } = props
  const { main, disable, hover } = theme.palette[color]
  const isNeutralColor = ['positive', 'negative'].includes(color)

  if (variant === 'contained' || variant === 'outlined') {
    if (action === 'hover') return hover ?? main
    if (action === 'disable') return disable ?? null
    return main
  }

  if (variant === 'neutral') {
    if (action === 'hover') return isNeutralColor ? hover : '#535353'
    if (action === 'disable') return '#B0B0B0'
    return isNeutralColor ? main : '#D3D3D3'
  }

  return main
}

const opacity = (props: Props) => {
  const { color, theme } = props
  return theme.palette[color].hover ? 'unset' : '0.7'
}

const svg = (props: Props) => {
  const { variant, color } = props
  if (variant === 'neutral' && color === 'positive') {
    return '#CF510A'
  }
  if (variant === 'neutral' && color === 'negative') {
    return '#222222'
  }
  return null
}

const CustomBaseButton = styled(BaseButton)<ButtonUnstyledType>`
  background-color: ${(props) => background(props)};
  border: 1.5px solid ${(props) => border(props)};
  color: ${(props) => color(props)};

  &:hover {
    background-color: ${(props) => background(props, 'hover')};
    border: 1.5px solid ${(props) => border(props, 'hover')};
    color: ${(props) => color(props, 'hover')};
    cursor: pointer;
    opacity: ${(props) => opacity(props)};
    svg > g > path.-active-stroke {
      stroke: ${(props) => svg(props)};
    }
    svg > g > rect.-active-stroke {
      stroke: ${(props) => svg(props)};
    }
    svg > g > rect.-active-fill {
      fill: ${(props) => svg(props)};
    }
  }

  &.${buttonClasses.disabled} {
    background-color: ${(props) => background(props, 'disable')};
    border: 1.5px solid ${(props) => border(props, 'disable')};
    color: ${(props) => color(props, 'disable')};
    cursor: unset;
    :hover {
      opacity: unset;
      svg > g > path.-active-stroke {
        stroke: #b0b0b0;
      }
      svg > g > rect.-active-stroke {
        stroke: #b0b0b0;
      }
      svg > g > rect.-active-fill {
        fill: #b0b0b0;
      }
    }
  }
`

const CustomCircularProgress = styled(CircularProgress)<Color>`
  color: ${({ theme, color }) => theme.palette[color].main};
  &.-contained {
    color: white;
  }
`

type ButtonProps<T extends ElementType> = {
  children: ReactNode
  color?: MuiButtonColor
  variant?: Variant
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  isLoading?: boolean
  active?: boolean
  tag?: T
} & Omit<ComponentPropsWithoutRef<T>, 'tag'> &
  Omit<BaseButtonProps, 'children'>

export const Button = <T extends ElementType = 'button'>({
  children,
  color = 'point',
  variant = 'contained',
  type = 'button',
  disabled,
  isLoading = false,
  tag,
  ...props
}: ButtonProps<T>) => {
  const Tag = tag || 'button'
  const Type = tag === 'button' ? type : undefined

  return (
    <CustomBaseButton
      component={Tag}
      type={Type}
      disabled={disabled}
      color={color}
      variant={variant}
      {...props}
    >
      {isLoading ? (
        <CustomCircularProgress
          size={20}
          color={color}
          className={`-${variant}`}
        />
      ) : (
        children
      )}
    </CustomBaseButton>
  )
}
