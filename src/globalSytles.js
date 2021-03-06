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
/* Chrome Dev Tools MEDIA QUERY MANAGER
0-320 s-mobile 
320-375 m-mobile
375-425 l-mobile
425-768 tab
768-1024 laptop
1024-1440 l-laptop
1440-2560 4k



*/
/* 

0-600px:     phone
600-900px:   Tablet portrait
900-1200px:  Tablet landscape
[1200-1800] is where our normal styles applay
1800px +:    Big desktop 


*/
html {
  font-size: 62.5%;  /* 1 rem = 10px  => 10px/16px =62.5% */
}

@media (min-width: 160em) {  /* 4k  => 2560px/16px = 160em */
  html {
    font-size: 150%;  /* 1 rem = 20px  => 20px/16px =130% */
   
  }
}
@media (max-width: 112.5em) {  /* big desktop  => 1800px/16px = 112.5em */
  html {
   font-size: 100% ;  /* 1 rem = 16px  => 16px/16px =100% */
 
  }
}
@media (max-width: 90em) {  /*  desktop  => 1440px/16px = 90em */
  html {
    font-size: 87.5% ;  /* 1 rem = 14px  => 14px/16px =87.5% */
  
  }
}
@media (max-width: 64em) {  /* laptop  => 1024px/16px = 64em */
  html {
    font-size: 75% ;  /* 1 rem = 12px  => 12px/16px =75% */
     
  }
}
@media (max-width: 56.25em) { /* Tablet landscap   => 900px/16px = 56.25em */
  html { 
    font-size: 68.75%  ;  /* 1 rem = 11px  => 11px/16px =68.75%   */
    
  }
}
@media (max-width: 48em) { /* Tablet portrait  => 768px/16px = 48em */
  html { 
     font-size: 56.25% ;  /* 1 rem = 9px  => 9px/16px =56.25%   */
     
  }
}
@media (max-width: 25.56em) { /* L-phone  => 425px/16px = 25.56em  */
  html {
font-size: 50%;  /* 1 rem = 8px  => 8px/16px =50%   */
   
  }
}
@media (max-width: 23.43em) { /* M-phone  => 375px/16px = 23.43em  */
  html {
    font-size: 43.75% ;  /* 1 rem = 7px  => 7px/16px =43.75%   */
  }
}
@media (max-width: 20em) { /* S-phone  => 320px/16px = 20em  */
  html {
    font-size: 41.5%;  /* 1 rem = 6px  => 6px/16px =37.5% */
  }
}
 
  
  
body {
  font-size: 1.4rem;
  padding:1rem 2rem;

 

  
}
@media (max-width: 48em) { /* Tablet portrait  => 768px/16px = 48em */
  body { 
     padding: .5rem;
     
  }
}
body,
input,
button { 
  font:   "Open Sans", "Helvetica Neue",sans-serif;
}
a,
a:hover,
a:active,
a:visited {
  text-decoration: none;
  /* color: inherit; */
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
