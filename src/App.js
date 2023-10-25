import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./styles/global";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Episodes from "./pages/Episodes/Episodes";
import NavbarSearch from "./components/navbar/navbar";
import appFirebase from './config/firebaseCredentials'
import { getAuth, onAuthStateChanged } from "firebase/auth";

function App() {
  const auth = getAuth(appFirebase)
  const [usuario, setUsuario] = useState(null)

  onAuthStateChanged(auth, async (usuarioFirebase) => {
    if (usuarioFirebase)
      setUsuario(usuarioFirebase)
    else
      setUsuario(null)
  })

  return (
    <>
      <GlobalStyle />
      {usuario ? (
        <>
          <NavbarSearch correoUsuario={usuario.email} />
          <Routes>
            {/*<Route path="/" element={<Login />} />*/}
            <Route path="/" element={<Home />} />
            <Route
              exact
              path="/episodes/:page"
              element={<Episodes />}
            />
          </Routes>
        </>) : <Login />}

    </>
  );
}

export default App;
