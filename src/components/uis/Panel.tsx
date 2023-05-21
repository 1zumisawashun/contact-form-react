import { ReactNode } from 'react'
import { styled, Theme } from '@mui/material/styles'
import { MuiColor } from '@/functions/libs/mui'
import { BasePanelInner } from '@/functions/themes'

type StyledPanelProps = {
  theme?: Theme
  color?: MuiColor
  canScroll?: boolean
  hideBorder?: boolean
  onClick?: () => void
  className?: string
}

const background = (props: StyledPanelProps) => {
  const { color, theme } = props
  if (!color || !theme) return 'white'
  if (color === 'danger') return theme.palette.danger.background
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

/**
 * ========================================
 * PanelCard
 * ========================================
 */

type PanelCardProps = {
  title: string
  children: ReactNode
}

const RelativePanel = styled(Panel)`
  position: relative;
`
const OverlayTitle = styled('p')`
  background-color: white;
  font-size: 1.25rem;
  font-weight: bold;
  left: 16px;
  padding: 0 8px;
  position: absolute;
  top: -16px;
`

export const PanelCard: React.FC<PanelCardProps> = ({ title, children }) => {
  return (
    <RelativePanel>
      <OverlayTitle>{title}</OverlayTitle>
      <BasePanelInner>{children}</BasePanelInner>
    </RelativePanel>
  )
}
