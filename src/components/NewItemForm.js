import React, {useState, useContext} from "react";
import styled from 'styled-components';
import uuid from 'uuid';

import dashboardContext from '../context/dashboardContext';
import { NewFormPlaceHolder, Input, Padded, Button, Flex, CloseButton} from "../components";

const NewItemFormContainer = styled.div`
    width: 100%;
`;
const NewItemFormContentContainer = styled.div`
    background-color: #DFE1E6;
`;

const NewItemForm = ({tabId}) => {
    const [isFormFocused, setIsFormFocused] = useState(false);
    const [text, setText] = useState("");
    const context = useContext(dashboardContext);

    const submitItem = () => {
        context.addItemToTab({
            id: 'item-'+uuid(),
            text,
        }, tabId);
        setText("");
    };

    const handleKeyDown = (e) => {
        if (e.keyCode === 13) {
            submitItem();
        }
    }

    return (
        <Padded size='small'>
            <NewItemFormContainer>
                {!isFormFocused 
                    ? (
                        <NewFormPlaceHolder 
                            placeholder='Ajouter une carte' 
                            width="100%" 
                            onClick={() => setIsFormFocused(true)}
                        /> 
                    ): (
                        <NewItemFormContentContainer>
                            <Padded size="verySmall">
                                <Input onKeyDown={handleKeyDown} value={text} onChange={e => setText(e.target.value)} />
                                <Padded size="verySmall" />
                                <Flex>
                                    <Button label='Ajouter une carte' onClick={submitItem} />
                                    <CloseButton onClick={() => setIsFormFocused(false)}>X</CloseButton>
                                </Flex>
                            </Padded>
                        </NewItemFormContentContainer>
                    )
                }
            </NewItemFormContainer>
        </Padded>
    );
};

export default NewItemForm;
