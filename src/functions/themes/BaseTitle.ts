import { styled, Theme } from '@mui/material/styles'

export const BaseTitle = styled('h1')<{ theme?: Theme }>`
  color: #222222;
  font-size: 1.5rem;
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
  &.-success {
    color: ${({ theme }) => theme.palette.success.main};
  }
  &.-danger {
    color: ${({ theme }) => theme.palette.danger.main};
  }
`
