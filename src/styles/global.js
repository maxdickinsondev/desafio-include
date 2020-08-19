import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100vh;
    }

    body {
        margin: 0 auto;
        font: 700 1.5rem 'Raleway';
    }

    cursor: pointer;
`;