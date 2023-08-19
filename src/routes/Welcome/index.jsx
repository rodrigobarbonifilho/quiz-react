import ButtonLink from "../Components/ButtonLink";
import { StyledDetails, StyledWelcome } from "./styles"

function Welcome() {
  return (
    <>
      <StyledDetails>
        <img className="triangle" src="/triangle-detail.svg" alt="Detalhe Triangular" />
        <img className="circle" src="/circular-detail.svg" alt="Detalhe Circular" />
      </StyledDetails>
      <StyledWelcome>
        <h1>
          <span>Aprenda <img src="/book-icon.png"/></span>
          <span> enquanto se diverte...</span>
        </h1>
        <div className="text">
          <p>Crie um quiz ou prove a seu amigo</p>
          <p>que você sabe mais que ele!</p>
        </div>
        <div className="buttons">
          <ButtonLink to="quiz" text="Criar Quiz" />
          <ButtonLink to="play" text="Jogar" />
        </div>
      </StyledWelcome>
    </>
  );
}

export default Welcome;
