import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body, html {
    height: 100%;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex: 1;
    overflow-y: auto; /* Asegura que la página sea desplazable */
  }

  /* Estilo personalizado para la barra de desplazamiento */
  ::-webkit-scrollbar {
    width: 12px; /* Ancho de la barra */
  }

  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.background}; /* Color del fondo */
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.primary}; /* Color del pulgar */
    border-radius: 10px;
    border: 3px solid ${({ theme }) => theme.colors.secondary}; /* Borde alrededor del pulgar */
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover}; /* Color cuando pasa el mouse */
  }
`;

export default GlobalStyles;
