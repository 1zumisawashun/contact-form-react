import { styled } from '@mui/material/styles'

export const BaseText = styled('p')`
  color: #222222;
  font-size: 1rem;
  white-space: pre-line;
  word-break: break-all;
  a {
    color: #0066ff;
    text-decoration: underline;
  }
  span {
    color: #cc3c4d;
    &.-bold {
      font-weight: bold;
    }
  }
  &.-left {
    text-align: left;
  }
  &.-right {
    text-align: right;
  }
  &.-center {
    text-align: center;
  }
`
