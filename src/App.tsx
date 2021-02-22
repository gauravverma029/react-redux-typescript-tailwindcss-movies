import React from "react";
// import { Counter } from "./features/counter/Counter";

import Header from "./components/Header";
import Footer from "./components/Footer";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Header />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </React.Fragment>
  );
}

export default App;
