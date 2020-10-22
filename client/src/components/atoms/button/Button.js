import React from "react";
import styled from "styled-components";

const StyledButtonComponent = styled.button`
  width: auto;
`;


const Button = ({ icon, text, ...props }) => {
  return (
    <StyledButtonComponent
      {...props}
    >
      {props.label}
      {icon}
      {text}

    </StyledButtonComponent>
  );
};
export default Button;
