import { StyledLink } from "./style.js"

function ButtonLink ({ text, handleClick, to }) {
  return <StyledLink to={to} onClick={handleClick}>{text}</StyledLink>
}

export default ButtonLink;
