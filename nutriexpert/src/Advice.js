import React, { Component } from 'react';
import global from "./Global"
import AnimatedWrapper from "./AnimatedWrapper";
import './App.css';

class Popup extends React.Component {
    render() {
      return (
        <div className='popup'>
          <div className='popup_inner_advice' >
            <h1 className = 'popupname'>{this.props.item.name}</h1>
            <img className = "popupfoodimage" src = {require(`${this.props.item.img}`)}/>
            <p className = 'fooddescription'>{this.props.item.description}</p>
          <button className = "details2" onClick={this.props.closePopup}>Got it!</button>
          </div>
        </div>
      );
    }
  }

class Food {
    constructor(name, img, sizeType, nutrilist, constraints, relevantQuestionTags, description){
        this.name = name
        this.img = img
        this.sizeType = sizeType
        this.nutrilist = nutrilist                       //nutrient specific categories
        this.constraints = constraints
        this.relevantQuestionTags = relevantQuestionTags //broader categories
        this.description = description
    }
}
const hardCodedWarningList = [
  new Food("Coffee", "./img/Coffee.jpg", "portion", {}, ["warning"], ["drink"],"It is not recommended to drink unfiltered coffee. Avoid drinking more than 5 cups a day because of caffeine."),
  new Food("Beer", "./img/Beer.jpg", "portion", {}, ["warning"], ["drink"],"Reducing alcohol intake can greatly benefit your health."),
  new Food("Wine", "./img/Wine.jpg", "portion", {}, ["warning"], ["drink"],"Reducing alcohol intake can greatly benefit your health."),
  new Food("Liquor", "./img/Liquor.jpg", "portion", {}, ["warning"], ["drink"],"Reducing alcohol intake can greatly benefit your health.")
]

class Advice extends Component {
    constructor(props){
        super(props)
        this.getAdvised = this.getAdvised.bind(this)
        this.getWarning = this.getWarning.bind(this)
        this.goToLoginPage = this.goToLoginPage.bind(this)
        this.togglePopup = this.togglePopup.bind(this)
        this.state = {
            lackingNutrient : "",
            negativeComment : "",
            advisedFoodList : [],
            negativeFoodList : [],
            showPopup: false,
            popUpFood: null
        }
    }
    goToLoginPage(){
        this.props.history.push('/')
      }

    togglePopup(food) {
        this.setState({
        showPopup: !this.state.showPopup,
        popUpFood : food.d
        });
    }

    componentDidMount(){

        this.getAdvised()
        this.getWarning()
        window.scrollTo(0, 0)
        window.scrollTo(1, 1)



    }

    getAdvised(){
        var a = []
        var l = global.lackingNutrient
        if(l != null){
            l = l.substr(1)
        }

        console.log("lacking string")
        console.log(l)
        console.log(typeof l)
        for (var i in global.foodlist){
            if (global.foodlist[i].nutrilist[global.lackingNutrient] > 0){
                a.push(global.foodlist[i])
            }
        }

        if(a.length == 0){
            var n = l
            a = [new Food( n + " replacements", "./img/" + n + "replacement.jpg", "portion", {}, [], [], "Consuming " + n + " is essential for a healthy lifestyle. In case your diet or your allergies do not allow you to eat foods that contain it, you should take replacements")]
        }
        this.setState({
            advisedFoodList: a,
            lackingNutrient: l,

        })
        console.log("advised foods")
        console.log(a)
    }

    getWarning(){
        var a = []
        var comment = "based on what you have eaten"
        for (var i in global.consumedList){
            for (var j in global.consumedList[i].constraints){

                if(global.consumedList[i].constraints[j] == "warning")
                    a.push(global.consumedList[i])
            }
        }
        if (a.length ==0){
            a = hardCodedWarningList
            comment = "as a general advice"
        }
        this.setState({
            negativeFoodList: a,
            negativeComment : comment
        })
        console.log("warning foods")
        console.log(a)
    }

    render() {
        const foodls = this.state.advisedFoodList.map((d) => <li>
        <button className="fooditem" onClick = {(e) => this.togglePopup({d})}>
          <img className = "foodimage" src = {require(`${d.img}`)}/>
          <p className = 'foodlabel'>{d.name}</p>
        </button>
      </li>);

        const warnls = this.state.negativeFoodList.map((d) => <li>
              <button className="fooditem" onClick = {(e) => this.togglePopup({d})}>
                <img className = "foodimage" src = {require(`${d.img}`)}/>
                <p className = 'foodlabel'>{d.name}</p>
              </button>
            </li>);

        return(
            <div className = "mainwrapper">
                

                <div className = "advicebackground"></div>

                <div className = "advicemiddle">

                    <p className = "title">You should eat more</p>

                    <p className = "subtitle">{this.state.lackingNutrient}</p>
                    <div className = "scrollablelist" style={{overflow: 'auto'}}>
                        <ul className = "fivewidthgrid">
                            {foodls}
                        </ul>
                    
                    </div>

                </div>

                <div className = "advicemiddlebad">
                    <p className = "title">Be careful with</p>
                    <p className = "subtitle">{this.state.negativeComment}</p>
                    <div className = "scrollablelist" style={{overflow: 'auto'}}>

                        <ul className = "fivewidthgrid">
                            {warnls}
                        </ul>
                    </div>
                    
                </div>
                <button className = "restartbutton" onClick = {this.goToLoginPage}>Start again</button>
                
                {this.state.showPopup ?
                    <Popup
                        item={this.state.popUpFood}
                        closePopup={this.togglePopup.bind(this)}
                    />
                    : null
                }

            </div>

        )
    }
}
const a = AnimatedWrapper(Advice)
export default a
