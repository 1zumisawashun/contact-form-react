import { PaletteColorOptions } from '@mui/material/styles/createPalette'

interface CustomPaletteColor {
  base: true
  point: true
  danger: true
  positive: true
  negative: true
}

interface CustomPaletteColorOptions {
  light?: string
  main: string
  dark?: string
  contrastText?: string
  hover?: string
  disable?: string
  background?: string
}

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    base: CustomPaletteColorOptions
    point: CustomPaletteColorOptions
    danger: CustomPaletteColorOptions
  }
  interface PaletteOptions {
    base: CustomPaletteColorOptions
    point: CustomPaletteColorOptions
    danger: CustomPaletteColorOptions
  }

  interface PaletteColor extends CustomPaletteColorOptions {}
  interface SimplePaletteColorOptions extends CustomPaletteColorOptions {}
}

declare module '@mui/material' {
  interface ButtonPropsColorOverrides extends CustomPaletteColor {}
  interface CircularProgressPropsColorOverrides extends CustomPaletteColor {}
  interface IconButtonPropsColorOverrides extends CustomPaletteColor {}
  interface SvgIconPropsColorOverrides extends CustomPaletteColor {}
}
