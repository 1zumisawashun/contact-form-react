import { useRoutes } from 'react-router-dom'
import { lazyImport } from '@/functions/helpers'
import { useBoolean } from '@/functions/hooks'

const { Catalog } = lazyImport(() => import('../pages/Catalog'), 'Catalog')
const { Contact } = lazyImport(() => import('../pages/Contact'), 'Contact')

export const AppRoutes = () => {
  const { isLocalhost } = useBoolean()

  const catalogRoutes = isLocalhost
    ? [{ path: '/catalog', element: <Catalog /> }]
    : []

  const publicRoutes = [{ path: '/contact', element: <Contact /> }]

  const element = useRoutes([...catalogRoutes, ...publicRoutes])

  return element
}
