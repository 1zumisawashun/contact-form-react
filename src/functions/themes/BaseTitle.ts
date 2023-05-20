import { styled } from '@mui/material/styles'

export const BaseTitle = styled('h1')`
  color: #222222;
  font-size: 1.125rem;
  white-space: pre-line;
  word-break: break-all;
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
