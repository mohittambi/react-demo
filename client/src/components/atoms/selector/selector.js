import React from "react";
import styled from "styled-components";

const StyledSelector = styled.input`
`;
const Selector = ({ ...props }) => {
    return <StyledSelector {...props} type={props.type || "text"} />;
};
export default Selector;
