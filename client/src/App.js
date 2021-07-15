import React from "react";
// Styling
import "./App.scss";
// Router-Dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Components
import Header from "./components/Header";
// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Explore from "./pages/Explore";

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Header />
        <main>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={SignUp} />
            <Route exact path='/explore' component={Explore} />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;
