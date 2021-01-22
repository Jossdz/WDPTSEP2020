import styled from "styled-components"

export default styled.button`
  background-color: ${props =>
    props.type === "primary"
      ? "peru"
      : props.type === "danger"
      ? "crimson"
      : "gray"};
  color: white;
  border: none;
`
