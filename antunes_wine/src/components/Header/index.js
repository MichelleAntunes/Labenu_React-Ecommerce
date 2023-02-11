import React from "react";
import { HederContainer, DivHeader } from "./style";

const Header = () => {
  return (
    <HederContainer>
      <div>
        <h2>Antunes wine</h2>
      </div>
      <DivHeader>
        <p>About us</p>
        <p>Faq</p>
      </DivHeader>
    </HederContainer>
  );
};

export default Header;
