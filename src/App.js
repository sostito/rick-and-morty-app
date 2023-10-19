import React from "react";
import { Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./styles/global";
import Home from "./pages/Home/Home";
import Episodes from "./pages/Episodes/Episodes";
import NavbarSearch from "./components/navbar/navbar";

function App() {
  const [search, setSearch] = React.useState(null);
  function hadleSearch(e) {
    setSearch(e.target.value);
  }

  return (
    <>
      <GlobalStyle />
      <NavbarSearch hadleSearch={hadleSearch} />
      <Routes>
        <Route path="/" element={<Home search={search} />} />
        <Route
          exact
          path="/episodes/:page"
          element={<Episodes search={search} />}
        />
      </Routes>
    </>
  );
}

export default App;
