import React, { Component } from 'react';
import global from "./Global"
import AnimatedWrapper from "./AnimatedWrapper";
import './App.css';

class Advice extends Component {
    constructor(props){
        super(props)
        this.getAdvised = this.getAdvised.bind(this)
        this.state = {
            advisedFoodList : []
        }
    }

    componentDidMount(){
        this.getAdvised()
        window.scrollTo(0, 0)
        window.scrollTo(1, 1)
            
          
    }

    getAdvised(){
        var a = []
        for (var i in global.foodlist){
            if (global.foodlist[i].nutrilist[global.lackingNutrient] > 0){
                a.push(global.foodlist[i])
            }
        }
        this.setState({
            advisedFoodList: a
        })
        console.log("advised foods")
        console.log(a)
    }

    render() {
        const foodls = this.state.advisedFoodList.map((d) => <li>
        <button className="fooditem" >
          <img className = "foodimage" src = {require(`${d.img}`)}/>
          <p className = 'foodlabel'>{d.name}</p> 
        </button>
      </li>);
  
        return(
            <div className = "mainwrapper">

                <div className = "advicebackground"></div>
           
            

                <div className = "advicemiddle">
                
                <p className = "title">You should eat more</p>
                
                    <p className = "subtitle">{global.lackingNutrient}</p>
                    <div className = "scrollablelist" style={{overflow: 'auto'}}>
                    <ul className = "fivewidthgrid">
                    {foodls}
                    </ul>
                </div>

                </div>

                <div className = "advicemiddlebad">
                    <p className = "title">You should eat less</p>
                    <p className = "subtitle">{global.lackingNutrient}</p>
                    <div className = "scrollablelist" style={{overflow: 'auto'}}>

                        <ul className = "fivewidthgrid">
                        {foodls}
                        </ul>
                    </div>
                </div>

            

            
            </div>
            
        )
    }
}
const a = AnimatedWrapper(Advice)
export default a