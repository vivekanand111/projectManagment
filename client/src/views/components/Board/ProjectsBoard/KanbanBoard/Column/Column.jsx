import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import Ticket from './Ticket/Ticket';
import {
  Container,
  Content,
  Title,
  TicketsList,
  CreateTicketButton
} from './Column.style'

// const InnerList = ({...props}) => {
//   console.log('Parent render')
//   return (
//    props.tickets.map((ticket, index) => <Ticket key={ticket._id} ticket={ticket} index={index} />)
//   )
// }
const InnerList = React.memo(props => {
  // console.log('Parent render')
  return (
    props.tickets.map((ticket, index) => <Ticket key={ticket._id} ticket={ticket} index={index} />)
  )
})

const Column = ({ column, tickets, index }) => {
  // console.log('Column rendered!')
  return (
    <Draggable draggableId={column.id} index={index}>
      {(provided, snapshot) => (
        <Container {...provided.draggableProps} ref={provided.innerRef}>
          <Content isDragging={snapshot.isDragging}>
            <Title {...provided.dragHandleProps}>{column.title}</Title>
            <Droppable droppableId={column.id} type="task">
              {provided => (
                <TicketsList ref={provided.innerRef} {...provided.droppableProps}>
                  <InnerList tickets={tickets} />
                  {provided.placeholder}
                </TicketsList>
              )}
            </Droppable>
            <CreateTicketButton>+ Create ticket</CreateTicketButton>
          </Content>
        </Container>
      )}
    </Draggable>
  )
}

export default Column;