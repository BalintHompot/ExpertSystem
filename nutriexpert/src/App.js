import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import KB , {proposition, inference} from './KnowledgeBase';
import Logic from "./Logic";



class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      goal:"",
      knowledgeBase:KB.propositions
    }
  }


  pushToKB(data){
    KB.propositions.push(data)
  }

  refreshKB(){
    this.state.knowledgeBase = KB.propositions
  }

  setGoal(goal){
    console.log(goal)
    this.state.goal = goal
  }

  reactToGoalSelection(goal){
    this.setGoal(goal.d);
    console.log("new goal is")
    console.log(goal.d)
    var newProp = new proposition(goal.d, true)
    console.log("new prop is")
    console.log(newProp)
    this.pushToKB(newProp);
    Logic.forwardChaining(KB);
    this.refreshKB();
  }
  render() {

    console.log(KB);
    const goalsListData = KB.Goals;
    console.log("goals is");
    console.log(goalsListData);
    const goalsList = goalsListData.map((d) => <li>
      <button onClick={this.reactToGoalSelection({d})}>
        {d}
      </button>
      </li>);

    return (
      <div className="Nutrition Expert">
        <header className="Nutrition Expert">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome to nutrition expert!
            Chose your goal:
          </p>
          <ul>
            {goalsList}
          </ul>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
