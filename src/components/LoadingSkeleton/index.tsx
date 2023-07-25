import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { useTheme } from 'styled-components'

import { Container } from './style'

interface ISkeletonProps {
  linesCount?: number
  lineHeight?: number
}

export function LoadingSkeleton({ linesCount, lineHeight }: ISkeletonProps) {
  const currentTheme = useTheme()

  return (
    <Container>
      <SkeletonTheme
        baseColor={currentTheme['neutral-800']}
        highlightColor={currentTheme['neutral-900']}
      >
        <Skeleton
          count={linesCount}
          height={lineHeight}
          style={{ width: '100%', display: 'flex' }}
        />
      </SkeletonTheme>
    </Container>
  )
}
