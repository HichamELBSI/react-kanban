import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

import Item from './Item';
import Padded from './Padded';
import NewItemForm from './NewItemForm';

const Title = styled.div`
    font-size: ${props => props.theme.fontSize};
    font-weight: bold;
`;
const Container = styled.div`
    background-color: #DFE1E6;
    border-radius: ${props => props.theme.borderRadius};
    width: 300px;
`;

const Tab = ({tab, provided, innerRef, isDragging}) => console.log(isDragging) || (
    <div
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={innerRef}
    >
        <Padded size='small'>
            <Container>
                <Padded size='small'>
                    <Title>{tab.title}</Title>
                    <Padded size='verySmall' />
                    {tab.items.map((item, index) => (
                        <Draggable
                            key={item.id}
                            draggableId={item.id}
                            index={index}>
                                {(provided, snapshot) => (
                                    <>
                                    <Item 
                                        innerRef={provided.innerRef}
                                        item={item} 
                                        tabId={tab.id} 
                                        provided={provided}
                                    />
                                    </>
                                )}
                        </Draggable>
                    ))}
                </Padded>
                {isDragging && <Padded size='standard' />}
                <NewItemForm tabId={tab.id} />
            </Container>
        </Padded>
        {provided.placeholder}
    </div>
)

export default Tab;