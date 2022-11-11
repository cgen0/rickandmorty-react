import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`



  body, div{
    margin:0;
  }

  div, span{
    font-family: "Open Sans", sans-serif;
    transition: all 0.3s ease-in;

  }
  body{
  padding-top:6rem;
  background-color:rgb(32, 35, 41)
  }

  .cards-container {
    margin: 2rem;
    display: flex;
    justify-content: space-evenly;
    flex-wrap:wrap;  
    flex-direction:column;
    align-items:center;
    min-height: 100vh;
    max-width: 1500px;
    min-width: 300px;
  }

.content{
  justify-content:center;
  display:flex;
}

  .spinner-container{

  height:4rem;
  width:100%;
  display:flex;
  align-content:middle;
  justify-content:center;
  }
  .spinner-absolute{

    position:fixed;
    top:0;
    left:0;
    width:100%;
    heigth:100%
    align-content:middle;
    justify-content:center;
    }

  .spin {
    background: transparent;
    height: 2rem;
    width:2rem;
    border: 0.2rem solid rgba(60, 62, 68, 0.6);
    border-top-color: rgba(255, 255, 255, 0.6);
    animation: spinner 600ms linear infinite;
    border-radius:50%;
  }
  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }
  .single-card-container{
    transition: none;
  }
  
  @media  screen and (min-width: 768px) { 
    .single-card-container{
      flex: 1 0 50%;

    }
    .cards-container{
      align-items:start;

      flex-direction:row;

    }}
    @media  screen  and (min-width: 1380px) { 
      .single-card-container{
        flex: 1 0 25%;

      }
      .cards-container{
        align-items:start;

        flex-direction:row;
  
      }}



`;
