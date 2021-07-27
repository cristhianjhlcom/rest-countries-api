import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
    body: "hsl(0, 0%, 98%)",
    fontColor: "hsl(200, 15%, 8%)",
    bgColor: "hsl(0, 0%, 100%)",
    bgHoverColor: "hsl(0, 0%, 98%)",
    textColor: "hsl(200, 15%, 8%)",
};

export const darkTheme = {
    body: "hsl(207, 26%, 17%)",
    fontColor: "hsl(0, 0%, 100%)",
    bgColor: "hsl(209, 23%, 22%)",
    bgHoverColor: "hsl(207, 26%, 17%)",
    textColor: "hsl(0, 0%, 100%)",
};


export const GlobalStyle = createGlobalStyle`
  :root {
    --mobileDevice: 375px;
    --desktopDevice: 1440px;

    --bgColor: ${props => props.theme.bgColor};
    --bgHoverColor: ${props => props.theme.bgHoverColor};
    --textColor: ${props => props.theme.textColor};

    --rounded: 0.3125rem;

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
    background-color: ${props => props.theme.body};
    font-family: var(--FontFamily);
    font-weight: var(--FontWeightNormal);
    color: var(--VeryDarkBlueTxt);
    line-height: 1;
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