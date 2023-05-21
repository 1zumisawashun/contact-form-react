import { TextField } from '@mui/material'
import { grey, red } from '@mui/material/colors'
import { styled } from '@mui/material/styles'
import { Width } from '@/functions/types/Common'

type Status = {
  error?: boolean
  disabled?: boolean
  width: Width
}

const input = {
  width: {
    full: '100%',
    half: '50%',
    quarter: '25%',
    auto: 'auto'
  }
} as const

const backgroud = ({ error, disabled }: Status) => {
  if (disabled) return grey[100]
  if (error) return red[100]
  return 'white'
}

export const BaseInputText = styled(TextField)<Status>`
  min-width: 200px;
  width: ${({ width }) => input.width[width]};
  .MuiOutlinedInput-root {
    background: ${(props) => backgroud(props)};
    border-radius: 10px;
  }
`
