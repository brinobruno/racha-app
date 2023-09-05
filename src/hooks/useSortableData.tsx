import { useMemo, useState } from 'react'

import { IPlayerData } from 'src/services/hooks/usePlayersFromTeam'

interface ISortConfig {
  key: keyof IPlayerData
  direction: 'ascending' | 'descending'
}

export function useSortableData(
  items: IPlayerData[],
  config: ISortConfig | null = null,
) {
  const [sortConfig, setSortConfig] = useState<ISortConfig | null>(config)

  const sortedPlayers = useMemo(() => {
    const sortableItems = [...items]

    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1
        }

        return 0
      })
    }

    return sortableItems
  }, [items, sortConfig])

  const requestSort = (key: keyof IPlayerData) => {
    let direction: 'ascending' | 'descending' = 'ascending'

    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending'
    }

    setSortConfig({ key, direction })
  }

  return { items: sortedPlayers, requestSort, sortConfig }
}
