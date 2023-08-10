import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
margin: 0;
padding: 0;
box-sizing: border-box;
}

body{
background: ${(props) => props.theme.WHITE};
color:  ${(props) => props.theme.WHITE};
}

body, input, textarea, button{
font-family: 'Roboto', sans-serif;
font-weight: 400;
-webkit-font-smoothing: antialiased;
}

button {
all: unset ;
cursor: pointer;
}

a{
text-decoration: none;
}

.section{
  padding: 1rem;
  width: 1400px;
}

@media (max-width: 1450px) {
  .section{
  width: 1000px;
}
}

@media (max-width: 1200px) {
 .section{
  width: 800px;
}
}

@media (max-width: 900px) {
 .section{
  width: 600px;
  padding: 0;
}
}

@media (max-width: 750px) {
 .section{
  width: 400px;
}
}

@media (max-width: 500px) {
 .section{
  width: 300px;
}
}


`
