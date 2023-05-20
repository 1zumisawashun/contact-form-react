import { styled, Theme } from '@mui/material/styles'

type IconSizeKey = 'small' | 'medium' | 'large'

const ICON_SIZE: { [key in IconSizeKey]: string } = {
  small: '20px',
  medium: '30px',
  large: '40px'
} as const

export type BaseIconProps = {
  content: string | JSX.Element
  size: IconSizeKey
  className?: string
  disabled?: boolean
}

type BaseParagraphProps = {
  size: IconSizeKey
  ischecked?: boolean
  disabled?: boolean
  theme?: Theme
}

const BaseParagraph = styled('p')`
  align-items: center;
  background: white;
  border: 1px solid gray;
  border-radius: 20%;
  display: flex;
  font-size: 0.875rem;
  justify-content: center;
`

const color = (props: BaseParagraphProps, variant?: string) => {
  const { theme, disabled } = props
  if (variant === '-white') {
    return disabled ? theme?.palette.point.disable : null
  }
  if (variant === '-orange') {
    return disabled ? theme?.palette.point.disable : theme?.palette.point.main
  }
  return disabled ? theme?.palette.point.disable : null
}

const SquareParagraph = styled(BaseParagraph)<BaseParagraphProps>`
  height: ${({ size }) => ICON_SIZE[size]};
  width: ${({ size }) => ICON_SIZE[size]};
  &.-white {
    background: ${(props) => color(props, '-white')};
    border: 1px solid ${(props) => color(props, '-white')};
  }
  &.-orange {
    background: ${(props) => color(props, '-orange')};
    border: 1px solid ${(props) => color(props, '-orange')};
  }
`
const CircleParagraph = styled(BaseParagraph)<BaseParagraphProps>`
  background: ${(props) => color(props)};
  border-radius: 50%;
  height: ${({ size }) => ICON_SIZE[size]};
  width: ${({ size }) => ICON_SIZE[size]};
`

/**
 * NOTE:InputCheckboxGroupで使用している
 */
export const SquareIcon: React.FC<BaseIconProps> = ({
  content,
  size = 'medium',
  className,
  disabled
}) => (
  <SquareParagraph
    size={size}
    disabled={disabled}
    className={className}
    ischecked
  >
    {content}
  </SquareParagraph>
)

/**
 * NOTE:InputRadioGroupで使用している
 */
export const CircleIcon: React.FC<BaseIconProps> = ({
  content,
  size = 'medium',
  className,
  disabled
}) => (
  <CircleParagraph
    size={size}
    className={className}
    disabled={disabled}
    ischecked
  >
    {content}
  </CircleParagraph>
)
