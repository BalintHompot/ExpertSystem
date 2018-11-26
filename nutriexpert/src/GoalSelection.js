import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import KB , {proposition, inference, advice, goal} from './KnowledgeBase';
import Logic from "./Logic";
import Advice from "./Advice"
import {
  Route,
  HashRouter,
} from "react-router-dom";



class GoalSelection extends Component {
  constructor(props){
    super(props)
    this.state = {
      goal:"",
      knowledgeBase:KB.propositions,
      goals: KB.ActiveGoals,
      advices: KB.ActiveAdvices
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


  updateAdvices(){
    this.setState({advices:KB.ActiveAdvices})
  }

  reactToGoalSelection(goal){
    this.setGoal(goal.d);
    console.log("new goal is")
    console.log(goal.d)
    console.log("new prop is")
    console.log(goal.d)
    this.pushToKB(goal.d);
    Logic.forwardChaining(KB);
    this.refreshKB();
    this.updateAdvices()
    console.log("advices")
    console.log(this.state.advices)
  }


  render() {

    console.log(KB);
    const goalsListData = KB.Goals;
    console.log("goals is");
    console.log(goalsListData);
    const goalsList = goalsListData.map((d) => <li>
      <p>{d.name}</p>
      <button onClick={e => this.reactToGoalSelection({d})}>
        select
      </button>
      </li>);
    const adviceList = this.state.advices.map((d) => <li>
    <p>{d.name}</p>
    </li>);


    return (
      <HashRouter>
        <div className="GoalSelection" style={{ backgroundColor: '#54F2C3' }}>
          <Route path="/Advice" component={Advice} />
          <header className="Nutrition Expert">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Welcome to nutrition expert!
              Chose your goal:
            </p>
            <ul>
              {goalsList}
            </ul>

            <p>
              Our advices:
            </p>
            <ul>
              {adviceList}
            </ul>

          </header>
        </div>
      </HashRouter>
    );
  }
}

export default GoalSelection;
