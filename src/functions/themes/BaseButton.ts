import { styled } from '@mui/material/styles'
import { mediaQuery } from '@/functions/helpers'

export const BaseButtonWrapper = styled('div')`
  display: flex;
  gap: 30px;
  justify-content: center;
  ${mediaQuery('sp')} {
    flex-direction: column;
    gap: 20px;
    margin: auto;
    &.-sp-reverse {
      flex-direction: column-reverse;
    }
  }
`

// NOTE:インナーは必要なさそう
// export const BaseButtonInner = styled('div')``
