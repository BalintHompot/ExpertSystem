import global from "./Global"
import React, { Component } from 'react';
import {HashRouter, Route, withRouter} from "react-router-dom"
import AnimatedWrapper from "./AnimatedWrapper"



class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            constraints : []
        }
        this.clearByConstraints = this.clearByConstraints.bind(this)
        this.setAge = this.setAge.bind(this)
        this.setGoal = this.setGoal.bind(this)
        this.setWieght = this.setWieght.bind(this)
        this.setHeight = this.setHeight.bind(this)
        this.setConstraints = this.setConstraints.bind(this)
        this.setGender = this.setGender.bind(this)
        this.setName = this.setName.bind(this)
        this.updateGlobals = this.updateGlobals.bind(this)
        this.checkIfValid = this.checkIfValid.bind(this)
        this.handleOptionChange = this.handleOptionChange.bind(this)
        this.goToMainPage = this.goToMainPage.bind(this)
    }

    goToMainPage(){
        console.log(global.questionList)
        this.props.history.push('/MainScreen')
    }

    clearByConstraints(){
        for (var i = global.foodlist.length -1; i>=0; i--){
            console.log("i is")
            console.log(i)
            console.log("food is ")
            console.log(global.foodlist[i])
            var deleted = false
            for (var c in global.foodlist[i].constraints){
                for (var k in this.state.constraints){
                    if (global.foodlist[i].constraints[c] == this.state.constraints[k]){
                        global.foodlist.splice(i, 1)
                        deleted = true
                        break
                    }
                }
                if (deleted){
                    break
                }
            }
        }
        for (var i = global.questionList.length -1; i>=0; i--){
            var deleted = false
            console.log("q is ")
            console.log(global.questionList[i])
            for (var c in global.questionList[i].constraints){
                console.log("qconst is ")
                console.log(global.questionList[i].constraints[c])
                console.log(this.state)
                for (var k in this.state.constraints){
                    if (global.questionList[i].constraints[c] == this.state.constraints[k]){
                        global.questionList.splice(i, 1)
                        deleted = true
                        break
                    }
                }
                if (deleted){
                    break
                }
            }
        }
    }

    checkIfValid(val, expectedType,  min, max){
        console.log(typeof val)
        if (typeof val != expectedType || val < min || val > max){
            window.alert("Please enter a valid number")
        }
    }

    handleOptionChange(e) {
        this.setState({
          selectedOption: e.target.value
        });
      }

    logStates(){
        console.log("local states are")
        console.log(this.state)
        console.log("global states are")
        console.log(global)
    }

    setName(event){
        this.setState({name:event.target.value})
        this.logStates()
    }

    setGoal(event) {
        this.setState({goal:event.target.value})
        this.logStates()
    }

    setAge(event) {
        this.setState({age:event.target.value})
        this.logStates()
    }

    setConstraints(event) {
        
        this.state.constraints.push(event.target.value)
        this.logStates()
    }

    setHeight(event) {
        this.setState({height:event.target.value})
        this.logStates()
    }

    setWieght(event) {
        this.setState({weight:event.target.value})
        this.logStates()
    }

    setGender(event) {
        this.setState({gender:event.target.value})
        this.logStates()
    }

    updateGlobals(){
        var keys = Object.keys(this.state)
        console.log(keys)
        for (var i in keys){
            var key = keys[i]
            global.setProperty(key, this.state[key])
        }
        this.clearByConstraints()
        this.goToMainPage()
    }

    navigation2 = (event) => {
        if (event.key == "Enter") {
            this.updateGlobals() 
        }
    }

    render() {
        return (
            <div className='foodbackground'>
            <h1 className = "title">Welcome to Nutririon Expert!</h1>
            <h2 className = "subtitle">Please set your personal information</h2>
    
                
                <div >

                    <div className="loginmiddle">
                        <header className="loginlabel">
                            Name
                                </header>
                        <input placeholder="name" className="logininput" type="text" name="name" onKeyPress={this.navigation2} onChange={this.setName} />
                        
                        <header className="loginlabel">
                            Age
                                </header>
                        <input placeholder="age" className="logininput" type="number" name="name" onKeyPress={this.navigation2} onChange={this.setAge} />
                        <header className="loginlabel">
                            Gender
                                </header>
                        <select placeholder="gender" className="logininput" type="text" name="name" onKeyPress={this.navigation2} onChange={this.setGender} >
                            <option value = "Male">Male</option>
                            <option value = "Female">Female</option>
                        </select>
                                
                                                    
                        <header className="loginlabel">
                            Height
                                </header>
                        <input placeholder="height" className="logininput" type="number" name="name" onKeyPress={this.navigation2} onChange={this.setHeight} />
                        <header className="loginlabel">
                            Weight
                                </header>
                        <input placeholder="weight" className="logininput" type="number" name="name" onKeyPress={this.navigation2} onChange={this.setWieght} />
                        <header className="loginlabel">
                            What special diet do you follow?
                                </header>
                        <select placeholder="diet" className="logininput" type="text" name="name" onKeyPress={this.navigation2} onChange={this.setConstraints} >
                            <option value = "none">None</option>
                            <option value = "meat">Vegetarian</option>
                            <option value = "animal">Vegan</option>
                        </select>
                        <header className="loginlabel">
                            What allergies do you have?
                                </header>
                                <div className="radio">
                                <label>
                                    <input type="radio" value="gluten" 
                                                checked={this.state.selectedOption === 'option1'} 
                                                onChange={this.handleOptionChange} />
                                    Gluten
                                </label>
                                </div>
                                <div className="radio">
                                <label>
                                    <input type="radio" value="milk" 
                                                checked={this.state.selectedOption === 'option2'} 
                                                onChange={this.handleOptionChange} />
                                    Milk
                                </label>
                                </div>
                                <div className="radio">
                                <label>
                                    <input type="radio" value="peanut" 
                                                checked={this.state.selectedOption === 'option3'} 
                                                onChange={this.handleOptionChange} />
                                    Peanuts
                                </label>
                                </div>
  
                           <header className="loginlabel">
                            Goal
                                </header>
                        <select placeholder="goal" className="logininput" type="text" name="name" onKeyPress={this.navigation2} onChange={this.setGoal} >
                            <option value = "gainmuscles">Gain muscles</option>
                            <option value = "loseweight">Lose weight</option>
                            <option value = "stay">Stay healthy</option>
                        </select>
                        <button className="details2" style={{ display: 'block' }} onClick={this.updateGlobals}>Start</button>
                    </div>
                </div>
            </div>
        );
    }
    
}
const l = AnimatedWrapper(Login)
export default l