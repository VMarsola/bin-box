import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-size: cover;
  }

  #root {
    height: 100%;
  }

  *, input, button {
    font-family: 'lato', sans-serif;
    font-size: 1em;
  }

  button {
    outline: none;
    border: none;
    border-style: none
  }

  input[type=number]::-webkit-inner-spin-button { 
    -webkit-appearance: none;
  }

  p {
    margin: 0;
  }

  .ant-legacy-modal {
    &.ant-legacy-modal-full-width {
      .ant-modal-confirm-body-wrapper, .ant-modal-confirm-content {
        width: 100%;
      }
    }
    
    .ant-modal-content {
      padding: 0;
      overflow: hidden;
    }
  }
`;
