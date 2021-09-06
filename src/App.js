import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { GlobalStyle } from "./styles/global";
import Home from "./pages/Home/Home";
import Navbar from "./components/navbar/navbar";

function App() {
  const [search, setSearch] = React.useState(null);
  function hadleSearch(e) {
    setSearch(e.target.value);
  }

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navbar hadleSearch={hadleSearch} />
      <Switch>
        <Route path="/" render={() => <Home search={search} />}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
