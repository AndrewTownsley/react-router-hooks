import './App.css';
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <header className="App-header">
          <p>React Router Hooks</p>
          <ul>
            <li>
              <NavLink to="/" activeClassName="active">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="active">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="active">Contact</NavLink>
            </li>
          </ul>
          <Switch>
            <Route exact path="/">
              <h1>Home</h1>
            </Route>
            <Route exact path="/about">
              <h1>about</h1>
            </Route>
            <Route exact path="/contact">
              <h1>contact</h1>
            </Route>
          </Switch>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
