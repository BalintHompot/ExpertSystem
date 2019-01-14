import global from "./Global"
import React, { Component } from 'react';
import {HashRouter, Route, withRouter} from "react-router-dom"
import AnimatedWrapper from "./AnimatedWrapper"


class Popup extends React.Component {
    render() {
      return (
        <div className='popup'>
          <div className='popup_inner' >
            <h className = 'popupname'>{"Hello " + this.props.name + "!"}</h>
            <p> After clicking through just a few simple questions, NutriGuru will provide you
                with easy tips on how to achieve an even more healthy diet. NOTE: NutriGuru is not
                a substitute for professional medical advice.
            </p>
            <p>
                Here a quick heads up:
            </p>
            <p>
                1. You are presented with foods of different categories.
                </p>
                <p>
                2. Per category, select the item(s) consumed in the past 24 hours. Sometimes the time span is one week.
                </p>
                <p>
                3. The pictures approximately match the serving size.
                </p>
                <p>
                4. You can select items multiple times.
                </p>
                <p>
                5. Left-bound will be a list of items selected.
            </p>

          <button className = "details2" onClick={this.props.updateGlobals}>Let's go!</button>
          </div>
        </div>
      );
    }
  }


class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            update:0,
            constraints : [],
            selected : {
                lactose: false,
                gluten : false,
                eggs : false,
                fish : false,
                shellfish: false,
                peanuts : false,
                treenuts : false,
                soy : false,

            },
            showPopup: false,
        }
        this.togglePopup = this.togglePopup.bind(this)
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
        this.navigation2 = this.navigation2.bind(this)

    }

    togglePopup() {

        if(this.state.name != null && this.state.age != null){
            this.setState({
                showPopup: !this.state.showPopup,
            });
        }else{
            window.alert("Please set your personal information!")
        }

    }

    navigation2(e){
        l = this.state.constraints
        l.push(e.d)
        this.setState({
            constraints : l
        })
        console.log(this.state)
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
        for (var i = global.generalQuestionList.length -1; i>=0; i--){
            var deleted = false

            for (var c in global.generalQuestionList[i].constraints){
                for (var k in this.state.constraints){
                    if (global.generalQuestionList[i].constraints[c] == this.state.constraints[k]){
                        global.generalQuestionList.splice(i, 1)
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
        console.log("handling change")
        for (var i in this.state.constraints){
            if(this.state.constraints[i] == e.target.value){
                console.log("already checked")
                this.state.constraints.splice(i, 1)
                this.state.selected[e.target.value.toString()] = false
                this.setState({
                    update : this.state.update + 1
                })
                return
            }
        }
        this.state.constraints.push(e.target.value)
        this.state.selected[e.target.value.toString()] = true
        this.setState({
            update : this.state.update + 1
        })
        console.log(this.state)
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
            <h1 className = "title">Welcome to NutriGuru!</h1>
            <h2 className = "subtitle">Please set your personal information</h2>


                <div >

                    <div className="loginmiddle">
                        <header className="loginlabel">
                            Name
                                </header>
                        <input placeholder="name" className="logininput" type="text" name="name1" onKeyPress={this.navigation2} onChange={this.setName}/>

                        <header className="loginlabel">
                            Age
                                </header>
                        <input placeholder="age" className="logininput" type="number" name="name2" onKeyPress={this.navigation2} onChange={this.setAge} />
                        <header className="loginlabel">
                            Gender
                                </header>
                        <select placeholder="gender" className="logininput" type="text" name="name3" onKeyPress={this.navigation2} onChange={this.setGender} >
                            <option value = "Male">Male</option>
                            <option value = "Female">Female</option>
                        </select>


                         <header className="loginlabel">
                            What special diet do you follow?
                         </header>
                        <select placeholder="diet" className="logininput" type="text" name="name4" onKeyPress={this.navigation2} onChange={this.setConstraints} >
                            <option value = "none">None</option>
                            <option value = "meat">Vegetarian</option>
                            <option value = "animal">Vegan</option>
                        </select>
                        <header className="loginlabel">
                            What allergies do you have?
                                </header>

                                <div className="radio">
                                <label>
                                    <input type="radio" value="egg" name="eggName"
                                                checked={this.state.selected["egg"]}
                                                onChange={this.handleOptionChange} />
                                    Egg
                                </label>
                                </div>
                                <div className="radio">
                                <label>
                                    <input type="radio" value="fish" name="fishName"
                                                checked={this.state.selected["fish"]}
                                                onChange={this.handleOptionChange} />
                                    Fish
                                </label>
                                </div>
                                <div className="radio">
                                <label>
                                    <input type="radio" value="shellfish" name="shellfishName"
                                                checked={this.state.selected["shellfish"]}
                                                onChange={this.handleOptionChange} />
                                    Shellfish
                                </label>
                                </div>
                                <div className="radio">
                                <label>
                                    <input type="radio" value="peanut" name="peanutName"
                                                checked={this.state.selected["peanut"]}
                                                onChange={this.handleOptionChange} />
                                    Peanut
                                </label>
                                </div>
                                <div className="radio">
                                <label>
                                    <input type="radio" value="treenuts" name="treenutsName"
                                                checked={this.state.selected["treenuts"]}
                                                onChange={this.handleOptionChange} />
                                    Tree Nuts
                                </label>
                                </div>
                                </div>
                                <div className="radio">
                                <label>
                                    <input type="radio" value="soy" name="soy"
                                                checked={this.state.selected["soy"]}
                                                onChange={this.handleOptionChange} />
                                    Soy
                                </label>



                        <button className="details2" style={{ display: 'block' }} onClick={this.togglePopup}>Start</button>
                    </div>
                </div>
                {this.state.showPopup ?
                    <Popup
                        name = {this.state.name.split(" ")[0]}
                        updateGlobals={this.updateGlobals.bind(this)}
                    />
                    : null
                }
            </div>
        );
    }

}
const l = AnimatedWrapper(Login)
export default l
