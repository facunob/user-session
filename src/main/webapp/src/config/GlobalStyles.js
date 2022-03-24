import {createGlobalStyle} from "styled-components";

export default createGlobalStyle`
    :root {
        --mainColor: #1da1f2;
        --mainHoverColor: #1a91da;
        --secondaryHoverColor: rgba(24, 161, 242, .1);
        --white: white;
        --black: #ddd;
        --gray: #0f1419;
        --green: #17bf63;
        --red: #ee0022;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        min-height: 100vh;
        -webkit-font-smoothing: antialiased;
        -moz-osx-smoothing: grayscale;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', sans-serif;
    }

`;