import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

import { IPlayerData } from 'src/services/hooks/usePlayersFromTeam'
import { Card } from 'src/components/team/Card'
import { Container } from './styles'
import { useState } from 'react'

interface IListViewProps {
  players: IPlayerData[]
}

export function PitchView({ players: PlayersData }: IListViewProps) {
  const [players, updatePlayers] = useState(PlayersData)

  function handleOnDragEnd(result: any) {
    if (!result.destination) return

    const items = Array.from(players)
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem)

    updatePlayers(items)
  }

  return (
    <Container>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="players">
          {(provided) => (
            <div
              className="players"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {players.map((player, index) => {
                return (
                  <Draggable
                    key={player.id}
                    draggableId={player.id}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <Card
                          overall={player.overall}
                          position={player.position}
                          nationality={player.nationality}
                          name={player.known_as}
                          pace={player.pace}
                          dribbling={player.dribbling}
                          shooting={player.shooting}
                          defending={player.defending}
                          passing={player.passing}
                          physical={player.physical}
                        />
                      </div>
                    )}
                  </Draggable>
                )
              })}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </Container>
  )
}
