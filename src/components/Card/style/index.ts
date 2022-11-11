import styled from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  justify-content: center;

  .card {
    width: 18rem;
    min-width: 18rem;

    border-radius: 1rem;
    padding: 1rem;
    background-color: rgb(60, 62, 68);
    color: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    margin-bottom: 5rem;
    transition: height 0.3s ease-out;
    overflow: hidden;
  }

  @keyframes slideInFromBottom {
    0% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(0);
    }
  }

  @keyframes slideInFromTop {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(0);
    }
  }

  @keyframes slideAwayToBottom {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(100%);
    }
  }

  @keyframes slideAwayToTop {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-100%);
    }
  }

  .image-container {
    width: 18rem;
    background-color: rgb(32, 35, 41);
    height: 18rem;
    border-radius: 0.5rem;
  }
  img {
    width: 100%;
    height: auto;
    border-radius: 0.5rem;
  }
  .title {
    text-align: left;
    font-weight: 500;
    color: rgb(158, 158, 158);
  }

  .episode-data {
    font-weight: 500;
  }

  button {
    background-color: rgb(32, 35, 41);
    color: rgb(255, 255, 255) !important;
    font-size: 1rem;
    text-align: center;
    padding: 1rem;
    border-radius: 0.6rem;
    width: 100%;
    margin: 2rem auto;
    border: 0px;
    font-weight: 600;
    margin: 1rem 0 0 0;
  }

  button:hover {
    background-color: rgb(25, 28, 33);
  }

  button:active {
    background-color: rgb(22, 24, 29);
  }
  .card.card-back {
    margin-top: -7rem;
    padding-top: 2rem;
  }

  .show {
    display: block;
  }

  .hidden {
    display: none;
  }
`;
