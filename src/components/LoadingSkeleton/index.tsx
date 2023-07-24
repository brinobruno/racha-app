import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { useTheme } from 'styled-components'

import { Container } from './style'

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
      <Container>
        <Skeleton
          count={linesCount || undefined}
          style={{ width: '100%', display: 'flex' }}
        />
      </Container>
    </SkeletonTheme>
  )
}
