import { ReactNode } from 'react'
import { styled, Theme } from '@mui/material/styles'
import { mediaQuery } from '@/functions/helpers'
import { MuiButtonColor } from '@/functions/libs/mui'

type StyledPanelProps = {
  theme?: Theme
  color?: MuiButtonColor
  canScroll?: boolean
  hideBorder?: boolean
  onClick?: () => void
  className?: string
}

const background = (props: StyledPanelProps) => {
  const { color, theme } = props
  if (!color || !theme) return 'white'
  if (color === 'danger') return theme.palette.danger.background
  if (color === 'negative') return '#FAFAFA'
  return theme.palette[color].background
}

const border = (props: StyledPanelProps) => {
  const { color, theme } = props
  if (!color || !theme) return '#D3D3D3'
  if (color === 'danger') return theme.palette.danger.main
  return theme.palette[color].main
}

const StyledPanel = styled('div')<StyledPanelProps>`
  background-color: ${(props) => background(props)};
  border: ${(props) => {
    const borderColor = border(props)
    return props.hideBorder ? 'none' : `1.5px solid ${borderColor}`
  }};
  border-radius: 5px;
  cursor: ${({ onClick }) => (onClick ? 'pointer' : '')};
  max-height: ${({ canScroll }) => (canScroll ? '200px' : 'auto')};
  overflow-x: ${({ canScroll }) => (canScroll ? 'auto' : 'none')};
  padding: 20px;
  &:hover {
    opacity: ${({ onClick }) => (onClick ? `0.7` : `auto`)};
  }
  &.-hide-border {
    border-left: none;
    border-radius: 0px;
    border-right: none;
  }
  &.-sp-hide-border {
    ${mediaQuery('sp')} {
      border-left: none;
      border-radius: 0px;
      border-right: none;
    }
  }
`

type PanelProps = StyledPanelProps & {
  children?: ReactNode
}

export const Panel: React.FC<PanelProps> = ({
  children,
  color,
  canScroll = false,
  hideBorder = false,
  onClick,
  className
}) => {
  return (
    <StyledPanel
      color={color}
      canScroll={canScroll}
      hideBorder={hideBorder}
      onClick={onClick}
      className={className}
    >
      {children}
    </StyledPanel>
  )
}
