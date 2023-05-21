import { ReactNode } from 'react'
import { Button } from '@mui/base'
import { styled } from '@mui/material/styles'
import { Width, Position, Size } from '@/functions/types/Common'

const button = {
  width: {
    full: '100%',
    half: '50%',
    quarter: '25%',
    auto: 'auto'
  },
  fontSize: {
    small: '0.650rem',
    medium: '0.875rem',
    large: '1.000rem'
  },
  padding: {
    small: '6px 12px',
    medium: '9px 18px',
    large: '12px 24px'
  }
} as const

type ButtonUnstyledType = {
  width: Width
  size: Size
}

const StyledButtonUnstyled = styled(Button)`
  background-color: #f58802;
  border: 1.5px solid #f58802;
  border-radius: 12px;
  box-sizing: border-box;
  color: white;
  display: inline-block;
  font-size: 0.875rem;
  font-weight: bold;
  padding: 9px 18px;
  text-align: center;
  white-space: nowrap;
`

const CustomButtonUnstyled = styled(StyledButtonUnstyled)<ButtonUnstyledType>`
  font-size: ${({ size }) => button.fontSize[size]};
  min-width: ${({ width }) => (width === 'auto' ? 'auto' : '250px')};
  padding: ${({ size }) => button.padding[size]};
  width: ${({ width }) => button.width[width]};
`

const Inner = styled('div')<{ position: Position }>`
  align-items: center;
  display: flex;
  justify-content: ${({ position }) => {
    return position === 'between' ? 'space-between' : 'center'
  }};
`

export type BaseButtonProps = {
  children: ReactNode
  size?: Size
  position?: Position
  width?: Width
}

export const BaseButton: React.FC<BaseButtonProps> = ({
  children,
  position = 'center',
  width = 'auto',
  size = 'medium',
  ...props
}) => {
  return (
    <CustomButtonUnstyled width={width} size={size} {...props}>
      <Inner position={position}>{children}</Inner>
    </CustomButtonUnstyled>
  )
}
