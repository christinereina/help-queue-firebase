import React from "react";
import GlobalStyle from './globalStyles';
import Header from "./Header";
import TicketControl from "./TicketControl";
import Signin from "./Signin";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from '././Navbar/Navbar';

function App(){
  return ( 
    <Router>
      <GlobalStyle />
      <Navbar />
      <Header />
      <Switch>
        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/">
          <TicketControl />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;