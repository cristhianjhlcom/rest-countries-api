import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --mobileDevice: 375px;
    --desktopDevice: 1440px;

    --DarkBlue: hsl(209, 23%, 22%);
    --VeryDarkBlueBg: hsl(207, 26%, 17%);
    --VeryDarkBlueTxt: hsl(200, 15%, 8%);
    --DarkGray: hsl(0, 0%, 52%);
    --VeryLightGray: hsl(0, 0%, 98%);
    --White: hsl(0, 0%, 100%);

    --HomepageItems: 14px;
    --DetailPage: 16px;

    --FontFamily: "Nunito Sans", sans-serif;
    --FontWeightNormal: 300;
    --FontWeightBold: 600;
    --FontWeightDark: 800;
  }

  *,
  *::after,
  *::before {
    margin: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
  }

  body {
    margin: 0;
    font-family: var(--FontFamily);
    font-weight: var(--FontWeightNormal);
    color: var(--VeryDarkBlueTxt);
    line-height: 1;
    background-color: var(--VeryLightGray);
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 0;
    line-height: 1;
  }
`;

export default GlobalStyle;