import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { GlobalStyle } from "./styles/global";
import Home from "./pages/Home/Home";
import Episodes from "./pages/Episodes/Episodes";
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
        <Route exact path="/" render={() => <Home search={search} />} />
        <Route
          exact
          path="/episodes/:page"
          render={(props) => <Episodes search={search} {...props} />}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
