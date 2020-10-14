import React from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

const StyledTypographyComponent = styled(Typography)`
  margin-bottom: 0.5%;
  letter-spacing: 10px;
  font-size: 1.3rem !important;
  color: blue;
  margin-top: 0px;
  color: grey;
`;

const Paragraph = ({ ...props }) => {
  return <StyledTypographyComponent {...props} />;
};
export default Paragraph;
