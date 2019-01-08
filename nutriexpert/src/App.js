import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import TransitionGroup from 'react-transition-group/TransitionGroup'

import {
  Route,
  HashRouter,
  Link,

} from "react-router-dom";
import MainScreen from "./MainScreen"
import Login from "./Login"
import Advice from "./Advice"


const firstChild = props => {
  const childrenArray = React.Children.toArray(props.children);
  return childrenArray[0] || null;
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
        <div  >


          <Route
            exact
            path="/"
            children={({ match, ...rest }) => (
              <TransitionGroup component={firstChild}>
                {match && <Login {...rest} />}
              </TransitionGroup>
          )}/>
          <Route
            path="/MainScreen"
            children={({ match, ...rest }) => (
              <TransitionGroup component={firstChild}>
                {match && <MainScreen {...rest} />}
              </TransitionGroup>
          )}/>
          <Route
            path="/Advice"
            children={({ match, ...rest }) => (
              <TransitionGroup component={firstChild}>
                {match && <Advice {...rest} />}
              </TransitionGroup>
          )}/>


          </div>
        </HashRouter>
    );
  }
}


export default App;
