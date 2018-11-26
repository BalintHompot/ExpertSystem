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
import GoalSelection from "./GoalSelection"


const iconStyles = {
};


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
            <Route exact path="/" component={GoalSelection}/>
            </Switch>
          </div>
        </HashRouter>
    );
  }
}


export default App;
