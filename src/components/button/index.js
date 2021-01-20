import React from 'react'
import styled from 'styled-components/macro';

const CustomButton = styled.button`
    display: block;
    text-align: center;
    width: ${props => props.btnWidth};
    height: fit-content;
    color: white;
    border: 0;
    font-size: 1.5rem;
    border-radius: .3rem;
    padding: 1rem;
    margin:.5rem;
    letter-spacing: .1rem;
    cursor: pointer;
    text-decoration: none;
    background-color: ${props => props.bgcolor};
    box-shadow: 0 .2rem .1rem black;

    :hover {
    transform: translateY(-2px);
    box-shadow: 0 .3rem .2rem black;
    }
    :active {
    transform: translateY(2px);
    }
`;

export default function Button({ children, ...restProps }) {
    return <CustomButton {...restProps}>{children}</CustomButton>
}