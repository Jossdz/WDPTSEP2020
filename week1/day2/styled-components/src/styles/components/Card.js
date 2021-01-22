import styled from "styled-components"

export default styled.article`
  width: 45vw;
  height: 45vh;
  border: 2px solid gray;
  border-radius: 10px;
  transition: all 0.4s linear;
  button {
    background-color: green;
  }

  &:hover {
    background-color: gray;
  }

  @media (max-width: 500px) {
    width: 100vw;
  }
`
