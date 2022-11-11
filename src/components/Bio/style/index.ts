import styled from "styled-components";

export const StyledBio = styled.div`
  .name {
    font-weight: bold;
    font-size: 1.6rem;
  }
  .name-container {
    margin-bottom: 0.2rem;
    text-align: left;
    vertical-align: middle;
    display: flex;
    -moz-box-align: center;
    align-items: center;
  }

  .bio-container {
    margin: 1rem 0;
  }

  .status {
    border-radius: 50%;
    width: 0.6rem;
    height: 0.6rem;
    display: inline-block;
    margin: 0 0.3rem 0 0;}

    .status.alive {
      background: rgb(85, 204, 68);
    }

    .status.unknown {
      background: rgb(158, 158, 158);
    }

    .status.dead {
      background: rgb(214, 61, 46);
    }

    
  }
`;
