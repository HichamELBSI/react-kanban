import React from 'react';
import styled from 'styled-components';

const Close = styled.span`
    line-height: ${props => props.theme.standardHeight};
    padding: 0 10px;
    cursor: pointer;
    margin-left: ${props => props.theme.sizes.verySmall};
    font-size: 18px;
`

const CloseButton = ({onClick}) => (
    <Close onClick={onClick}>X</Close>
)

export default CloseButton;