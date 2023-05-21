import { Suspense } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from '@/functions/libs'
import { Loading } from '@/components/uis'
import { router } from '@/routers/app'

export const AppProvider: React.FC = () => {
  return (
    <Suspense fallback={<Loading />}>
      <HelmetProvider>
        <ThemeProvider theme={theme}>
          <RouterProvider router={router} />
        </ThemeProvider>
      </HelmetProvider>
    </Suspense>
  )
}
