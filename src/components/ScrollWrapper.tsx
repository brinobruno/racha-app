import { ReactElement, useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

interface IScrollWrapperProps {
  children: ReactElement
}

export const ScrollWrapper = ({ children }: IScrollWrapperProps) => {
  const location = useLocation()

  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0)
  }, [location.pathname])

  return children
}
