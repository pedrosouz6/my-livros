import { createGlobalStyle } from "styled-components";

import { Theme } from "../Theme";

export default createGlobalStyle `
    * {
        padding: 0;
        box-sizing: border-box;
        margin: 0;
        font-family: Roboto;
    }

    body {
        background-color: ${Theme.light.white};
        color: ${Theme.light.black};
        overflow-x: hidden;
    }
`