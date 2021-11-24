import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle `
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');
  body{
    background: #396EB0;
    color: #ffff;
    font-family: Roboto, sans-serif;
  }

  b,strong {
    font-weight: bold;
  }

  a{
    color: #ffff;
  }

  blockquote{
    color: rgb(60, 60, 60);
    background-color: #ffff;
    padding: 15px;
    border-radius: 5px;
  }

  h1{
    font-size: 1.8rem;
  }
  h2{
    font-size: 1.2rem;
  }
  p{
    margin-bottom: 10px;
  }
`;

export default GlobalStyles;