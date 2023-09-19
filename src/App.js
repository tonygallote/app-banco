import React, { useState, useEffect } from "react";
import GlobalStyle from "./GlobalStyle";
import Container from "./Components/Container";
import Header from "./Components/Header";
import { ThemeProvider } from "styled-components";
import { temaClaro, temaOscuro } from "./Components/UI/temas";
import { BtnTema } from "./Components/UI";
import SwitcherTema from "./Components/SwitcherTema";

function App() {
  const temaGuardado = localStorage.getItem("theme");

  const [tema, setTema] = useState(
    temaGuardado ? JSON.parse(temaGuardado) : true
  );

  const toggleTema = () => {
    const nuevoTema = !tema;
    setTema(nuevoTema);
    localStorage.setItem("theme", JSON.stringify(nuevoTema));
  };

  return (
    <ThemeProvider theme={tema ? temaClaro : temaOscuro}>
      <GlobalStyle />
      <BtnTema onClick={toggleTema}>
        <SwitcherTema tema={tema} />
      </BtnTema>
      <Header />
      <Container />
    </ThemeProvider>
  );
}

export default App;
