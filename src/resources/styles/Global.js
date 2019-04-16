import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
    }
    
    html {
        overflow-x: hidden;
    }

    @import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700');

    body {
        font-family: 'Montserrat', sans-serif;
        background-color: #F4F4F4;
    }

    h1,h2,h3,h4,h5,h6 {
        text-transform: uppercase;
        font-weight: bold;
    }
`;
