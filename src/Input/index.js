// import React from 'react'
import styled from "styled-components";

const Input = styled.input`
    display: inline-block;
    box-sizing: content-box;
    padding: 8px 16px;
    border: 1px solid #b7b7b7;
    border-radius: 5px;
    font-size: 16px;
    color: 333;
    text-overflow: clip;
    background: rgba(252, 252, 252, 1);
    box-shadow: 2px 2px 2px 0 rgba(0, 0, 0, 0.2) inset;
    text-shadow: 1px 1px 9 rgba(255, 255, 255, 0.66);
    transition: all 200ms cubic-bezier(0.42, 0, 0.45, 1);

    outline: none;
`;

export default Input;
