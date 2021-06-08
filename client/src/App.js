import React from "react";
// Styling
import "./App.scss";
// Router-Dom
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// Components
import Header from "./components/Header";
// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <main>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;
