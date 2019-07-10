import React from 'react';
import styled from 'styled-components'

const ButtonWithStyle = styled.button`
    background-color: #61BD4F;
    color: white;
    height: ${props => props.theme.standardHeight};
    font-size: 14px;
    border-radius: ${props => props.theme.borderRadius};
    cursor: pointer;
`;

const Button = ({onClick, label}) => (
    <ButtonWithStyle onClick={onClick}>{label}</ButtonWithStyle>
)

export default Button;