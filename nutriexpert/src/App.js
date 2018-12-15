import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom';

import {
  Route,
  NavLink,
  HashRouter,
  BrowserRouter,
  Link,
  Redirect,
  Switch
} from "react-router-dom";
import MainScreen from "./MainScreen"
import Login from "./Login"
import Advice from "./Advice"


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
        <HashRouter >
        <div className="ExpertSystem" style={{backgroundColor:"blue"}}>
          <Switch>
            <Route exact path="/" component={Login}/>
            <Route path="/MainScreen" component={MainScreen}/>
            <Route path="/Advice" component={Advice}/>
            </Switch>
          </div>
        </HashRouter>
    );
  }
}


export default App;
