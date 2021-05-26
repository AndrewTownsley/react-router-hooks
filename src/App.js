import './App.css';
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import { useHistory, useLocation, useParams, useRouteMatch } from "react-router-dom";
import Home from "./components/Home";
import User from "./components/User";
import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <header className="App-header">
          <p>React Router Hooks</p>
          <ul>
            <li>
              <NavLink exact to="/home">Home</NavLink>
              
            </li>
            <li>
              <NavLink exact to="/user">User</NavLink>
            </li>
            <li>
              <NavLink exact to="/contact">Contact</NavLink>
            </li>
          </ul>
          <Switch>
            <Route exact path="/home">
            <Home />
              {/* <h1>Home</h1> */}
            </Route>
            <Route exact path="/user/:name">
              <User />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
          </Switch>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
