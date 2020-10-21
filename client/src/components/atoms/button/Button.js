import React from "react";
import styled from "styled-components";

const StyledButtonComponent = styled.button`
  width: auto;
`;

const Button = ({ ...props }) => {
  return (
    <StyledButtonComponent
      {...props}
    >
      {props.label}
    </StyledButtonComponent>
  );
};
export default Button;
