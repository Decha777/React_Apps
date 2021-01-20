import React from 'react'
import styled from 'styled-components/macro';
import { Button } from '../components';

const Container = styled.section`

    height: 100vh;
    color: #fff;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content:center;
    margin:auto 0;
    background-image: linear-gradient(190deg,#d8006c, #0070d8);
    font-size: 2.7rem;
    
`;

export default function ErrorPage({ ...restProps }) {
    return <Container {...restProps}>
        <h1>404</h1>
        <span>Page not Found</span>
        <Button bgcolor='red'>Back Home</Button>
    </Container>
}