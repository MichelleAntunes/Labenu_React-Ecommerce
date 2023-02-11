// import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import { GlobalStyle } from "./GlobalStyle";
import { Container } from "./components/Container/style";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Container>
        <Header />
        <Body />
        <Footer />
      </Container>
    </div>
  );
}

export default App;
