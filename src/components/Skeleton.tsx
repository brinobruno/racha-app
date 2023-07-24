import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { useTheme } from 'styled-components'

interface ISkeletonProps {
  linesCount: number | undefined
}

export function LoadingSkeleton({ linesCount }: ISkeletonProps) {
  const currentTheme = useTheme()

  return (
    <SkeletonTheme
      baseColor={currentTheme['neutral-200']}
      highlightColor={currentTheme['neutral-400']}
    >
      <p>
        <Skeleton count={linesCount || undefined} />
      </p>
    </SkeletonTheme>
  )
}
