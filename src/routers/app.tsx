import { ErrorBoundary } from 'react-error-boundary'
import {
  createBrowserRouter,
  ScrollRestoration,
  Outlet
} from 'react-router-dom'
import { lazyImport } from '@/functions/helpers'
import { ErrorFallback } from '@/components/uis'

const { Catalog } = lazyImport(() => import('../pages/Catalog'), 'Catalog')
const { Contact } = lazyImport(() => import('../pages/Contact'), 'Contact')
const { Home } = lazyImport(() => import('../pages/Home'), 'Home')

/**
 * createBrowserRouter（ScrollRestoration）を用いたルーターの場合
 * RouterProviderより上層でreact-error-boundaryのfallbackが表示されない
 * RouterProvider＞react-error-boundary＞Outletに設置するとfallbackが表示される
 */
const Layout = () => {
  return (
    <>
      <ScrollRestoration />
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Outlet />
      </ErrorBoundary>
    </>
  )
}

export const children = () => {
  const isLocalhost = document.location.hostname === 'localhost'

  const catalogRoutes = isLocalhost
    ? [{ path: '/catalog', element: <Catalog /> }]
    : []

  const publicRoutes = [
    { path: '/contact', element: <Contact /> },
    { path: '/', element: <Home /> }
  ]

  return [...catalogRoutes, ...publicRoutes]
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: children()
  }
])
