import React, { Component } from 'react';
import logo from './logo.svg';

import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import global from "./Global"


class MainScreen extends Component {
  constructor(props){
    super(props)
    this.backToProfile = this.backToProfile.bind(this)
    this.updateQuestion = this.updateQuestion.bind(this)
    this.goToAdvicePage = this.goToAdvicePage.bind(this)
    this.selectRelevantFoods = this.selectRelevantFoods.bind(this)
    this.foodListAll = global.foodlist
    this.state = {
      currentQuestion : "",
      currentFoodlist: [],
      consumed:[],
      update : 0,
      
    }
    
  }

  componentDidMount(){
    this.updateQuestion()
  }

  addToEstimated(food){
    for (var key in food.nutrilist){
      global.nutrients[key].estimated += food.nutrilist[key]
      
    }
    console.log(global.nutrients)
  }

  lookForNewQuestions(){
    var biggestDiff = 99999999
    var mostImportant = null
    var ratio = 0
    for (var n in global.nutrients){
      ratio = global.nutrients[n].estimated / global.nutrients[n].rda
      if (ratio < biggestDiff && global.nutrients[n].estimated < global.nutrients[n].threshold){
        mostImportant = n
      }
    }
    console.log("most important is")
    console.log(mostImportant)
    var newQ = global.nutrients[mostImportant].questionList.shift()
    if (newQ == null){
      newQ = {text: ""}
      global.lackingNutrient = mostImportant
      this.props.history.push('/Advice')

    }
    global.questionList.push(newQ)
  }

  selectRelevantFoods(question){
    console.log("selecting foodlist")
    var ret = []
    for (var i in this.foodListAll){
      for (var tag in this.foodListAll[i].relevantQuestionTags){
        if (this.foodListAll[i].relevantQuestionTags[tag] == question.tag){
          ret.push(this.foodListAll[i])
        }
      }
    }
    this.setState({
      currentFoodlist: ret
    })
    console.log(ret)
  }

  backToProfile(){
    this.props.history.push('/')
  }


  goToAdvicePage(){
    console.log(global.questionList)
    this.props.history.push('/Advice')
  }

  addToSelected(food){
    this.state.consumed.push(food.d)
    this.addToEstimated(food.d)
    this.setState({update: this.state.update + 1})
    console.log(this.state.consumed)
    console.log(this.state.foodlist)
  }

  async updateQuestion(){
    console.log(global.questionList.length)
      if (global.questionList.length == 0){
        this.lookForNewQuestions()
         
      }
      
      console.log("update q")
      var cq = global.questionList.shift()
      console.log(cq)
      this.setState({
        currentQuestion: cq
      })
      this.selectRelevantFoods(cq)
    

  }

  render() {

    const foodls = this.state.currentFoodlist.map((d) => <li>
      <button onClick={e => this.addToSelected({d})}>
        <img src={ (d.img) } />
        <p>{d.name}</p> 
      </button>
    </li>);

    const consumedNames = this.state.consumed.map((d) => <li>
      <p>{d.name}</p>
    </li>);

    return (

      
        <React.Fragment  >     
        <main style = {styles.iconstyle}>
        <header className="Nutrition Expert">  </header>
        <img src={logo} className="App-logo" alt="logo" />
            <p>
              {this.state.currentQuestion.text}
            </p>
            <ul >
              {foodls}
            </ul>
            <button className="nextQ" style={{ display: 'block' }} onClick = {this.updateQuestion}>
              Next
            </button>
        </main>
        <SideNav
            
            onSelect={(selected) => {
                // Add your code here
            }}
        >
            <SideNav.Toggle />
            <SideNav.Nav defaultSelected="profile">
                <NavItem eventKey="profile">
                    <NavIcon>
                        <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText onClick = {this.backToProfile}>
                        Profile
                        
                    </NavText>
                </NavItem>
                <NavItem eventKey="charts">
                    <NavIcon>
                        <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>
                        Selected
                    </NavText>

                    <NavItem eventKey="charts/barchart">
                        <NavText>
                        <ul>
                          {consumedNames}
                         </ul> 
                        </NavText>
                    </NavItem>
                </NavItem>
            </SideNav.Nav>
        </SideNav>

        </React.Fragment>
      

    );
        
  }
}


export default MainScreen;

const styles = {
  fragment : {
    display : 'flex',
    flexDirection : 'column',
    flex : 0,
    margin: "auto",

  
  },
  iconstyle: {
    color: "#4E32B7",
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    flexDirection : 'row',
    flex: 1
  },
  iconstyle2: {
    color: "black",
    height: "5vmin",
    width: "5vmin",
    marginLeft: "auto"
  }
}