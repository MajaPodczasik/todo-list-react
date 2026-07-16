import React from "react";
import { Wrapper } from "./styled";

const Container = ({ children }) => (
    <Wrapper as="main" className="container">
        {children}
    </Wrapper>
);

export default Container;