import styled from "styled-components";

export const StyledDetails = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: -1;

  .triangle {
    position: absolute;
    top: 10%;
    right: -5%;
    transform-origin: top right;
    animation-name: triangleRotate;
    animation-duration: 2s;
    animation-delay: 5s;
  }

  .circle {
    position: absolute;
    left: 0;
    bottom: 0;
    transform-origin: bottom left;
    transform: scale(0.75);
  }

  @keyframes triangleRotate {
    0% {
      transform-origin: center;
      transform: rotateZ(0deg);
    }
    100% {
      transform-origin: center;
      transform: rotateZ(360deg);
    }
  }
`;

export const StyledWelcome = styled.div`
  color: ${(props) => props.theme.textColor};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 2px;
  width: 60vw;
  height: 70vh;
  padding: 16px 32px;
  border-radius: 16px;
  outline: 1px solid ${(props) => props.theme.textColor};
  background-color: #ffffff25;
  backdrop-filter: blur(16px);

  h1 {
    font-size: 6rem;
    font-weight: 700;
    display: flex;
    flex-direction: column;
  }

  h1 span:first-child {
    display: flex;
    align-items: center;
    gap: 32px;
  }

  p {
    font-weight: 500;
    font-size: 2.5rem;
    margin: 0;
  }

  .buttons {
    display: flex;
    width: 100%;
    gap: 16px;
    justify-content: space-between;
  }

  @media (max-width: 768px) {
    h1 {
      justify-content: center;
      align-items: center;
    }

    h1 span {text-align: center}

    .buttons {
      flex-direction: column;
    }
}
`;
