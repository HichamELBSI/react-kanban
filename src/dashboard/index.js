import React, {useContext} from "react";
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import dashboardContext from '../context/dashboardContext';
import { GlobalStyleRootComponent, Tab, Flex} from "../components";
import NewTabForm from './NewTabForm';

const Dashboard = props => {
  // Call useContext to access context functions
  const context = useContext(dashboardContext);
  
  const onDragEnd = result => {
    const { source, destination, draggableId } = result;

    // Dropped outside the list
    if (!destination) {
        return;
    }

    // Call moveItem on drag end to update tabs and/or items.
    context.moveItem(draggableId, source, destination);
};

  return (
    <>
      <GlobalStyleRootComponent />
      <DragDropContext onDragEnd={onDragEnd}>
        <Flex flexDirection='row'>
            {context.tabs.map(tab => (
                // All tabs are Droppable 
                <Droppable key={tab.id} droppableId={tab.id}>
                  {(provided, snapshot) => (
                      <Tab 
                        innerRef={provided.innerRef} 
                        provided={provided}
                        isDragging={snapshot.isDraggingOver}
                        tab={tab}
                      />
                  )}
                </Droppable>
            ))}
            <NewTabForm />
        </Flex>
      </DragDropContext>
    </>
  );
};

export default Dashboard;
