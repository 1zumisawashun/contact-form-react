import { styled, Theme } from '@mui/material/styles'

export const BaseText = styled('p')<{ theme?: Theme }>`
  color: #222222;
  font-size: 1rem;
  white-space: pre-line;
  word-break: break-all;
  a {
    color: #f58802;
    text-decoration: underline;
  }
  span {
    color: #f58802;
    &.-bold {
      font-weight: bold;
    }
  }
  &.-bold {
    font-weight: bold;
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
  &.-success {
    color: ${({ theme }) => theme.palette.success.main};
  }
  &.-danger {
    color: ${({ theme }) => theme.palette.danger.main};
  }
`
