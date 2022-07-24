import { createGlobalStyle } from "styled-components";

export const ResetCSS = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }
    *, ::before, ::after {
        box-sizing: border-box;
        border-style: solid;
        border-width: 0;
    }
    html, body, #root {
        height: 100%;
    }
    html{
        scroll-behavior: smooth;
    }
    body {
        background-color: #fafafa;
        font-family: 'Roboto', sans-serif;
    }
    main{
        display: block;
    }

    /* ====== Vertical Rhythm ====== */
    p, table, blockquote, address, pre, iframe, form, figure, d1 {
        margin: 0;
    }

    /* ====== Headings ====== */
    h1, h2, h3, h4, h5, h6 {
        margin: 0;
        font-size: iherit;
        font-weight: inherit;
    }

    /* ====== Text-level Smantics ====== */
    a {
        background-color: transparent;
        text-decoration: none;
        color: inherit;
    }

    /* ====== Lists ====== */
    ul, ol {
        margin: 0;
        padding: 0;
        list-style: none;
    }
`;
