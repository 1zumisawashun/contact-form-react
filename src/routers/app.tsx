import { useRoutes } from 'react-router-dom'
import { lazyImport } from '@/functions/helpers'
import { useBoolean } from '@/functions/hooks'

const { Catalog } = lazyImport(() => import('../pages/Catalog'), 'Catalog')
const { Contact } = lazyImport(() => import('../pages/Contact'), 'Contact')
const { Home } = lazyImport(() => import('../pages/Home'), 'Home')

export const AppRoutes = () => {
  const { isLocalhost } = useBoolean()

  const catalogRoutes = isLocalhost
    ? [{ path: '/catalog', element: <Catalog /> }]
    : []

  const publicRoutes = [
    { path: '/contact', element: <Contact /> },
    { path: '/', element: <Home /> }
  ]

  const element = useRoutes([...catalogRoutes, ...publicRoutes])

  return element
}
