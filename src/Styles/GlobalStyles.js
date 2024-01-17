import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    background: #f9f9f9f9;
    font-family: 'Roboto', Sans-Serif;
    box-sizing: border-box;
  }

  body{
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    
  }
`;

export default GlobalStyle;
