import styled from '@emotion/styled'
import { breakpoints } from '@/functions/constants/breakpoints'

export const mediaQuery = (key: keyof typeof breakpoints) =>
  `@media (max-width: ${breakpoints[key]}px)`

// NOTE:具体例
const Test = styled('div')`
  color: 'green';
  margin: auto;
  ${mediaQuery('iphone5')} {
    color: 'gray';
  }
  ${mediaQuery('sp')} {
    color: 'hotpink';
  }
`
