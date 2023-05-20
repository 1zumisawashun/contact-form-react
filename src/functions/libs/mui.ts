import { createTheme } from '@mui/material/styles'

export type MuiButtonColor =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'error'
  | 'info'
  | 'warning'
  | 'base'
  | 'point'
  | 'danger'
  | 'positive'
  | 'negative'

export const theme = createTheme({
  palette: {
    base: {
      main: '#ffffff'
      // hover: '#CF510A',
      // disable: '#C7C7C7'
    },
    point: {
      main: '#F58802',
      hover: '#CF510A',
      disable: '#C7C7C7'
    },
    success: {
      main: '#56BD44',
      hover: undefined,
      disable: '#C7C7C7'
    },
    danger: {
      main: '#DB1C06',
      hover: undefined,
      disable: '#C7C7C7',
      background: '#FFF2EE'
    },
    positive: {
      main: '#F58802',
      hover: '#CF510A',
      disable: '#B0B0B0',
      background: '#FFF7EE'
    },
    negative: {
      main: '#535353',
      hover: '#222222',
      disable: '#B0B0B0',
      background: 'white'
    }
  }
})
