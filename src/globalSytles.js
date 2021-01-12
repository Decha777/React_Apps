import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*,
::after,
::before {
  margin: 0;
  padding: 0;
  outline: 0;
  border: 0;
  box-sizing:   border-box;
}
*:focus {
  outline: 0;
}
html {
  font-size: 62.5%;
}
body,
#root {
  height: 100%;
  overflow-x: hidden;
  width: 100%;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1.6;
  background: #222222;
  color:#d4d3d3;
  
}

body,
input,
button { 
  font:  "Roboto", Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
    sans-serif;
}
a,
a:hover,
a:active,
a:visited {
  text-decoration: none;
  color: inherit;
}
ul {
  list-style: none;
}
button {
  cursor: pointer;
}
img {
  max-width: 100%;
  max-height: 100%;
}
`;
