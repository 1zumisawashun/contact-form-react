import { useCallback, useMemo } from 'react'

export const useNavigate = () => {
  const navigate = useCallback((url: string) => {
    window.location.href = url
  }, [])

  const navigateBlank = useCallback((url: string) => {
    window.open(url, '_blank', 'noreferrer')
  }, [])

  const reload = useCallback(() => {
    window.location.reload()
  }, [])

  const pathname = useMemo(() => {
    return window.location.pathname
  }, [])

  return { navigate, navigateBlank, reload, pathname }
}
