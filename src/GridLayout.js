import React, { useState, createContext } from 'react'
import styled from 'styled-components/macro';
import { ThemeProvider } from 'styled-components';

const themContext= createContext();

const theme = {
  bgcolor: '#353535',
  bgcolorItem: '#414141',
  bgcolorItemActive: "#405c63",
  color: '#fff',

}
const themelight = {
  bgcolor: '#e7e7e7',
  bgcolorItem: '#ffffff',
  bgcolorItemActive: "#ebebeb",
  color: '#333333',

}

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 5rem 1fr fit-content;
  height: 100vh;
  gap:2rem;

  background: ${props => props.theme.bgcolor};
  color: ${props => props.theme.color};
`;

export default function GridLayout({ children, ...restProps }) {
  const [state, setstate] = useState({ nightMode: true, })

  const nightModeCallback = () => {
    setstate(prevState => ({ ...prevState, nightMode: !prevState.nightMode }))
  }
  return (
    <ThemeProvider theme={state.nightMode ? theme : themelight}>
      <Grid nightMode={state.nightMode} nightModeCallback={nightModeCallback} {...restProps}>{children}</Grid>
    </ThemeProvider>
  )
}
