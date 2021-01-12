import React from 'react'
import { FaBars } from 'react-icons/fa';
import logo from './logo.png';

import styled from 'styled-components'

const MyHeader = styled.div`
display :flex;
justify-content: space-between;
align-items: center;
padding: 1rem;
border-bottom: solid .1px black;

img{
  width: 4rem;
  height: 4rem;
}
`

function App() {
  return (
    <MyHeader>
      <img src={logo} alt="logo" />
      <FaBars />
    </MyHeader>
  );
}

export default App;
