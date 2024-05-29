import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
       margin: 0;
       padding: 0;
       bor-sizing: border-box; 
    }

    body {
        width: 100vh;
        height: 100vh;
        background-color: #f0f2f5;
        font-family: Poppins;
    }
`
export default GlobalStyle;