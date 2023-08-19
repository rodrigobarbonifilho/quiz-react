import { styled, createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: none;
    box-sizing: border-box;
  }

  html, body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    height: 100vh;
    overflow: hidden;
  }

  body {
    background: linear-gradient(45deg, ${(props) => props.theme.color01}, ${(props) => props.theme.color02});
  }

  @media (max-width: 1440px) {
    html {
      font-size: 10px;
    }
  }

  @media (max-width: 768px) {
    html {
      font-size: 8px;
    }
  }
`;

export const GlobalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;
