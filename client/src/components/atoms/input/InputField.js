import React from "react";
import styled from "styled-components";

const StyledInputComponent = styled.input`
  width: auto;
`;
const Input = ({ ...props }) => {
  return <StyledInputComponent
    {...props}
    type={props.type || "text"}
  />;
};
export default Input;
