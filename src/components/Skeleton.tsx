import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { useTheme } from 'styled-components'

export function LoadingSkeleton() {
  const currentTheme = useTheme()

  return (
    <SkeletonTheme
      baseColor={currentTheme['neutral-200']}
      highlightColor={currentTheme['neutral-400']}
    >
      <p>
        <Skeleton count={1} />
      </p>
    </SkeletonTheme>
  )
}
