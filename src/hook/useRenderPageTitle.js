import { useEffect } from 'react'

const useRenderPageTitle = title => {
  return useEffect(() => {
    document.title = title
  }, [])
}

export default useRenderPageTitle
