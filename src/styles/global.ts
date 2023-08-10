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




`
