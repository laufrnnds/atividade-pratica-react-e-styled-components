import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0px;
        padding:0px;
        box-sizing: border-box;
        font-family: 'Josefin Sans', sans-serif;
    }
    body{
        width: 100vw;
        overflow-x: hidden;
    }
    body:-webkit-scrollbar{
        width: 10px;
        height: 10px;
        background-color: #707070;
    }
    body:-webkit-scrollbar-thumb{
        background: #b3b3b3;
        border-radius: 5px;
    }
`;

export default GlobalStyle;
