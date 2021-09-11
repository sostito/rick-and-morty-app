import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  body {
    background-image: url("https://www.meteorologiaenred.com/wp-content/uploads/2021/02/estrellas-dobles.jpg");
    }

    .animated {
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }
  
  .fast {
    -webkit-animation-duration: 0.4s;
    animation-duration: 0.4s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }

  .slow {
  -webkit-animation-duration: 2s;
  animation-duration: 2s;
}
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
  
    to {
      opacity: 1;
    }
  }
  
  .fadeIn {
    animation-name: fadeIn;
  }

`;
