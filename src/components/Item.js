import React, {useState, useContext} from 'react';
import styled from 'styled-components';

import Input from './Input';
import dashboardContext from '../context/dashboardContext';
import Flex from './Flex';
import { CloseButton } from '.';

const ItemContainer = styled.div`
    padding: ${props => props.theme.sizes.verySmall};
    height: ${props => props.theme.standardHeight};
    line-height: ${props => props.theme.standardHeight};
    background-color: white;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: ${props => props.theme.borderRadius};
    margin-bottom: ${props => props.theme.sizes.verySmall};
    &:hover {
        background-color: rgba(0, 0, 0, .1);
        cursor: pointer;
    } 
`;

const Item = ({item, tabId, provided, innerRef}) => {
    const [text, setText] = useState(item.text);
    const [editMode, openEditMode] = useState(false);
    const context = useContext(dashboardContext);

    const submit = (e) => {
        if (e.keyCode === 13) {
            if (text.length > 0)
                context.updateItemInTab({...item, text}, tabId)
            openEditMode(false);
        }
    }

    const removeItem = () => {
        context.removeItemFromTab(item.id, tabId);
    }

    return (
        <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={innerRef}
        >
            {!editMode 
                ? (
                    <ItemContainer onClick={() => openEditMode(true)}>
                        <Flex justifyContent='space-between'>
                            {item.text}
                            <CloseButton onClick={removeItem} />
                        </Flex>
                    </ItemContainer>
                ) : (
                    <Input onKeyDown={submit} value={text} onChange={(e) => setText(e.target.value)} />
            )}
        </div>
    );
};

export default Item;