import React from 'react'
import styled from 'styled-components'

const InputWithStyle = styled.input`
    width: 90%;
    height: ${props => props.theme.standardHeight};
    font-size: ${props => props.theme.fontSize};
    border-radius: ${props => props.theme.borderRadius};
    padding-left: ${props => props.theme.sizes.verySmall};
    border: none;
`;

const Input = ({value, onChange, onKeyDown}) => (
    <InputWithStyle autoFocus value={value} onKeyDown={onKeyDown} onChange={onChange} />
);

export default Input;