import React from "react";
import { Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./styles/global";
import Home from "./pages/Home/Home";
import Episodes from "./pages/Episodes/Episodes";
import NavbarSearch from "./components/navbar/navbar";

function App() {
  return (
    <>
      <GlobalStyle />
      <NavbarSearch />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          exact
          path="/episodes/:page"
          element={<Episodes />}
        />
      </Routes>
    </>
  );
}

export default App;
