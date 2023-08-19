import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 3rem;
  width: 100%;
  height: calc(3rem + 80px);
  border-radius: 64px;
  background-color: #0000;
  border: 4px solid ${(props) => props.theme.color05};
  color: ${(props) => props.theme.color05};
  cursor: pointer;
  transition: all .1s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.color05};
    color: ${(props) => props.theme.textColor};
  }

  &:active {
    opacity: .7;
  }
`;
