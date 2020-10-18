import React from "react";
import styled from "styled-components";

const StyledTypography = styled.p`
  width: auto;
`;

const Typography = ({ text, ...props }) => {
  return (
    <StyledTypography
      {...props}
    >
      {text}
    </StyledTypography>
  );
};

export default Typography;
