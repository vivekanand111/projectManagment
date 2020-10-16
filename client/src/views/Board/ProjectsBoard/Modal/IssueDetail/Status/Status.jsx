import React, { useState } from 'react';
import {
  Container,
  Button,
  StyledText
} from './Status.style';
import store from '../../../../../../redux/store'
import { updateTicketStatus } from '../../../../../../redux/projects/projects.actions';
import SelectMenu from '../../../../../../shared/components/SelectMenu/SelectMenu';

const getColumnIdOfTicket = (columns, ticketId) => {
  const foundColumn = Object.values(columns).find(column => column.taskIds.includes(ticketId));
  if (foundColumn) return foundColumn.id;
  else return null
}

const IssueStatusMenu = ({
  columns,
  columnOrder,
  projectId,
  ticketId,
  updateTicketHistory
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const beforeColumn = getColumnIdOfTicket(columns, ticketId);
  const currentColumnTitle = columns[beforeColumn].title;

  const handleStatusChange = (afterColumn) => {
    const columnMove = {
      beforeColumn: beforeColumn,
      afterColumn: afterColumn
    }
    store.dispatch(updateTicketStatus(columnMove, ticketId, projectId))
  };
  return (
    <Container>
      <Button
        isFirstColumn={(beforeColumn === columnOrder[0])}
        isLastColumn={(beforeColumn === columnOrder[columnOrder.length - 1])}
        type="button"
        className="icon-angle-down"
        onClick={() => setIsMenuOpen(true)}
      >
        {beforeColumn && currentColumnTitle}
      </Button>
      <SelectMenu
        value={beforeColumn}
        isActive={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        onChange={(updatedColumn) => {
          handleStatusChange(updatedColumn.id)
          updateTicketHistory('Status', currentColumnTitle, updatedColumn.value)
        }}
        options={Object.values(columns).filter(column => column.id !== beforeColumn).map(column => ({
          value: column.title,
          id: column.id,
          key: column.id,
        }))}
        renderValue={({ value, id }) => {
          const isFirstColumn = (id === columnOrder[0]);
          const isLastColumn = (id === columnOrder[columnOrder.length - 1]);
          return (
            <StyledText isFirstColumn={isFirstColumn} isLastColumn={isLastColumn} >
              {value}
            </StyledText>
          )
        }}
      />
    </Container>
  )
}

export default IssueStatusMenu;