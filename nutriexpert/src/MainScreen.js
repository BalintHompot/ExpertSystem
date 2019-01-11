import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AnimatedWrapper from "./AnimatedWrapper";

import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import apple from './img/Apple.jpg'
// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import global from "./Global"
import Sticky, {StickyContainer} from "react-sticky"
import Sidebar from "react-sidebar";
import { FaChild, FaUtensils } from 'react-icons/fa';
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

class Popup extends React.Component {
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner_advice' >
          <h1 className = 'popupname'>{"Hey " + this.props.name + "!"}</h1>
          
          <p className = 'fooddescription'> The nutrition expert is finished with getting the best advice. Ready when you are! </p>
        <button className = "details2" onClick={this.props.goToAdvice}>Let's go!</button>
        </div>
      </div>
    );
  }
}
class NoQPopup extends React.Component {
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner_advice' >
          <h1 className = 'popupname'>{this.props.name + ", you don't need NutriExpert, you're an expert yourself!"}</h1>
          
          <p className = 'fooddescription'> It seems you are perfectly on track staying healthy.</p>
        <button className = "details2" onClick={this.props.goLogin}>Start again</button>
        </div>
      </div>
    );
  }
}


class MainScreen extends Component {
  constructor(props){
    super(props)
    this.backToProfile = this.backToProfile.bind(this)
    this.updateQuestion = this.updateQuestion.bind(this)
    this.goToAdvicePage = this.goToAdvicePage.bind(this)
    this.goToLoginPage = this.goToLoginPage.bind(this)
    this.selectRelevantFoods = this.selectRelevantFoods.bind(this)
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    this.removeFromConsumed = this.removeFromConsumed.bind(this);
    this.removeFromEstimated = this.removeFromEstimated.bind(this);
    this.lookForSpecificQuestion = this.lookForSpecificQuestion.bind(this)
    this.earliTerminationForGeneralQuestions = this.earliTerminationForGeneralQuestions.bind(this)
    this.answerYesQuestion = this.answerYesQuestion.bind(this)
    this.backToPrevQuestion = this.backToPrevQuestion.bind(this)
    this.togglePopup = this.togglePopup.bind(this)
    this.toggleNoMoreQuestionsPopup = this.toggleNoMoreQuestionsPopup.bind(this)
    this.foodListAll = global.foodlist
    this.state = {
      currentQuestion : "",
      currentFoodlist: [],
      consumed:[],
      update : 0,
      sidebarOpen: true,
      askedGeneralQuestions : 0,
      prevQuestion : null,
      questionType:"general",
      showPopup:false,
      noMoreQuestiosPopup:false

    }
    this.handleAdd = this.handleAdd.bind(this);
  };

  togglePopup() {
    this.setState({
    showPopup: !this.state.showPopup,
    });
  }

  toggleNoMoreQuestionsPopup() {
    this.setState({
    noMoreQuestiosPopup: !this.state.noMoreQuestiosPopup,
    });
  }
  handleAdd() {
     var newItems = this.state.items.concat([prompt('Create New Item')]);
     this.setState({items: newItems});
  }
  handleRemove(i) {
     var newItems = this.state.items.slice();
     newItems.splice(i, 1);
     this.setState({items: newItems});
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }
  componentDidMount(){
    this.updateQuestion()
    window.scrollTo(0, 0)
    window.scrollTo(1, 1)

  }

  removeFromConsumed(food){

    for (var i = 0; i < this.state.consumed.length; i++) {
      if (this.state.consumed[i] === food.d) {
          this.state.consumed[i].amount -= 1
          if(this.state.consumed[i].amount == 0){
            this.state.consumed.splice(i, 1)
          }
          break
      }
    }


    this.removeFromEstimated(food.d)
    this.setState({update: this.state.update + 1})

  }

  removeFromEstimated(){

  }

  addToEstimated(food){
    for (var key in food.nutrilist){
      global.nutrients[key].estimated += food.nutrilist[key]

    }

  }

  removeFromEstimated(food){
    for (var key in food.nutrilist){
      global.nutrients[key].estimated -= food.nutrilist[key]

    }

  }


  lookForSpecificQuestion(nutrient){
      var ratio = (1-global.nutrients[nutrient].estimated / global.nutrients[nutrient].rda)*global.nutrients[nutrient].importanceMultiplier
      console.log("checking specific nutrient ")
      console.log(global.nutrients[nutrient])
      console.log("ratio is ")
      console.log(ratio)
      if (ratio > 0){
        console.log("specific nutrient not fulfilled")
        var newQ = global.nutrients[nutrient].questionList.shift()
        if(newQ){
          global.specificQuestionList.push(newQ)
        }else{
          newQ = {text: ""}
          global.lackingNutrient = nutrient
          global.consumedList = this.state.consumed
          this.togglePopup()
        }
      }
  }

  lookForNewQuestions(){
    var biggestDiff = 0
    var mostImportant = null
    var ratio = 0
    for (var n in global.nutrients){
      ratio = (1-global.nutrients[n].estimated / global.nutrients[n].rda)*global.nutrients[n].importanceMultiplier
      console.log("nutrient is ")
      console.log(global.nutrients[n])
      console.log("ratio is ")
      console.log(ratio)
      if (ratio > biggestDiff){
        mostImportant = n
        biggestDiff = ratio
      }
    }
    console.log("most important is")
    console.log(mostImportant)
    if(biggestDiff<=0){
      this.toggleNoMoreQuestionsPopup()
      return
    }
    var newQ = global.nutrients[mostImportant].questionList.shift()
    //No more questions, getting the advice:
    if (newQ == null){
      newQ = {text: ""}
      global.lackingNutrient = mostImportant
      global.consumedList = this.state.consumed
      this.props.history.push('/Advice')

    }
    global.specificQuestionList.push(newQ)
  }

  selectRelevantFoods(question){

    var ret = []
    for (var j in question.tag){
      for (var i in this.foodListAll){
        for (var tag in this.foodListAll[i].relevantQuestionTags){
          if (this.foodListAll[i].relevantQuestionTags[tag] == question.tag[j]){
            ret.push(this.foodListAll[i])
          }
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
    this.props.history.push('/Advice')
  }

  goToLoginPage(){
    this.props.history.push('/')
  }

  addToSelected(food){
    var inList = false
    for (var i = 0; i < this.state.consumed.length; i++) {
      if (this.state.consumed[i] === food.d) {
          this.state.consumed[i].amount += 1
          inList = true
          break
      }
    }
    if (inList == false){
      food.d.amount = 1
      this.state.consumed.push(food.d)
    }

    this.addToEstimated(food.d)
    this.setState({update: this.state.update + 1})
    console.log(this.state.consumed)
    console.log(this.state.foodlist)
  }

  earliTerminationForGeneralQuestions(askedGeneralQuestions){
    if(askedGeneralQuestions == 2){
      this.lookForSpecificQuestion("NVegetables")
    }
    if(askedGeneralQuestions == 3){
      this.lookForSpecificQuestion("NFruits")
    }
    if(askedGeneralQuestions == 4){
      this.lookForSpecificQuestion("NDairy")
    }
    if(askedGeneralQuestions == 5){
      this.lookForSpecificQuestion("NB12")
    }
    if(askedGeneralQuestions == 6){
      this.lookForSpecificQuestion("NNuts")
    }

  }

  async updateQuestion(){
      this.state.prevQuestion = this.state.currentQuestion
      if (global.generalQuestionList.length == 0){
        this.lookForNewQuestions()
        
      }else{
        this.earliTerminationForGeneralQuestions(this.state.askedGeneralQuestions)
      }
      console.log("update q")
      if (global.specificQuestionList.length > 0){
        var cq = global.specificQuestionList.shift()
        this.state.questionType = "specific"
      }else if(global.generalQuestionList.length > 0){
        var cq = global.generalQuestionList.shift()
        this.state.questionType = "general"
        this.state.askedGeneralQuestions += 1
      }else{
        console.log("You are very healthy")
        return
      }

      console.log(cq)
      console.log(global)
      this.setState({
        currentQuestion: cq
      })
      this.selectRelevantFoods(cq)


  }

  backToPrevQuestion(){
    var p = this.state.prevQuestion
    console.log("back")
    console.log(global.generalQuestionList)
    if(this.state.questionType == "general"){
      global.generalQuestionList.unshift(this.state.currentQuestion)
      this.state.askedGeneralQuestions -= 1
    }else{
      global.specificQuestionList.unshift(this.state.currentQuestion)
    }
    console.log(global.generalQuestionList)
    this.setState({
      currentQuestion: p
    })
    this.selectRelevantFoods(p)
  }

  answerYesQuestion(){

      var n = this.state.currentQuestion.tag[0]
      console.log("answered yes, nutrient current value is ")
      console.log(global.nutrients[n])
      console.log("adding 200 to")
      global.nutrients[n] += 20000
      console.log("new val")
      console.log(global.nutrients[n])
    
    this.updateQuestion()
  }
  
  render() {
 
    const foodls = 
    this.state.currentFoodlist.length > 0 ? 
      this.state.currentFoodlist.map((d) => <li>
        <button className="fooditem" onClick={e => this.addToSelected({d})}>
          <img className = "foodimage" src = {require(`${d.img}`)}/>
          <p className = 'foodlabel'>{d.name}</p>
        </button>
      </li>)
      :
      <div className = "rowflexcontainer">

        <button className = "noButton" onClick = {this.updateQuestion}>No</button>
        <button className = "yesButton" onClick = {this.answerYesQuestion}>Yes</button>
      </div>

    

    const consumedNames = this.state.consumed.map((d) => <li className = "consumedcontainer">
      <img className = "consumedlistimage" src = {require(`${d.img}`)}/>
      <p>{d.name}</p>
      <div className = "foodcounter">
        <span> &nbsp; x &nbsp; </span>
        <p>{d.amount}</p>
        <button className = "removebutton" onClick = {e => this.removeFromConsumed({d})}>-</button>
      </div>



    </li>);

    return (


      <div className = "mainwrapper">
        <div className = "mainbackground"></div>
        <div className = "rowflexbackground">



        <div className = "sidebar">
        <div onClick = {this.goToLoginPage} className = "profilebuttonbackground">
          <div className = "rowflexcontainer">
            <FaChild size  = "1.5vw" className = "profileicon"/>
            <p className = "profiletext">Profile</p>
          </div>

        </div>

        <div className = "rowflexcontainer">
          <FaUtensils size  = "1.5vw"/>
          <p className = "simpletext">Selected:</p>
        </div >
          <div className = "scrollablelistside" style={{ overflow: 'auto'}}>
          <ul className = "consumedlist">
              {consumedNames}
            </ul>
          </div>


        </div>

          <div>

            <p className = "question">
              {this.state.currentQuestion.text}
            </p>
            <div className = "scrollablelistfoods" style={{ overflow: 'auto'}}>
              <ul className = "fivewidthgrid">
                {foodls}
              </ul>
            </div>



            {this.state.currentFoodlist.length > 0 ? 
              <div className = "fixedcircularbutton">
                <button className="nextbutton"  onClick = {this.updateQuestion}>
                  Next
                </button>
              </div>
              :
              null}

            
            {this.state.currentFoodlist.length > 0 && this.state.askedGeneralQuestions != 1? 
              <div className = "fixedprevbutton">
                <button className="prevbutton"  onClick = {this.backToPrevQuestion}>
                  Previous
                </button>
              </div>
              :
              null} 
          </div>
        </div>
        {this.state.showPopup ? 
                    <Popup
                        name = {global.name.split(" ")[0]}
                        goToAdvice={this.goToAdvicePage.bind(this)}
                    />
                    : null
                }
        {this.state.noMoreQuestiosPopup ? 
                    <NoQPopup
                        name = {global.name.split(" ")[0]}
                        goLogin={this.goToLoginPage.bind(this)}
                    />
                    : null
                }

        </div>

    );

  }
}

const m = AnimatedWrapper(MainScreen)
export default m;
