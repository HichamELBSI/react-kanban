import React from 'react';
import styled from 'styled-components'

import Padded from './Padded';

const Container = styled.div`
    cursor: pointer;
    color: rgba(255, 255, 255, 0.8);
    background-color: rgba(0, 0, 0, .3);
    width: ${props => props.width || "300px"};
    border-radius: ${props => props.theme.borderRadius};
`;

const NewFormPlaceHolder = ({width, onClick, placeholder}) => (
        <Container width={width} onClick={onClick}>
            <Padded size='small'>
                + {placeholder}
            </Padded>
        </Container>
)

export default NewFormPlaceHolder;