import "styles/css/index.css";

import HomePage from "pages/Home/Home";
import DetalleTipoPage from "pages/DetalleTipo/index";

import { Link, Route, Switch } from "wouter";
function App() {
  return (
    <>
      <header className="g-header">
        <div className="g-header__img">
          <Link to='/'>
            <img alt="PokeApi logo" src="/img/logo.png" />
          </Link>
        </div>
      </header>
      <main className="container">
        <Switch>
          <Route component={HomePage} path="/" />
          <Route component={DetalleTipoPage} path="/tipo/detalle/:id" />
        </Switch>
      </main>
    </>
  );
}

export default App;
