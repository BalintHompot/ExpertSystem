import React, { Component } from 'react';
import global from "./Global"

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
            <button>
                <img src={ (d.img) } />
                <p>{d.name}</p> 
            </button>
            </li>);
        return(
            <main>
                <header className="Advices">  </header>
                <p>You should eat more</p>
                <p>{global.lackingNutrient}</p>
                <ul >
                {foodls}
                </ul>
            </main>
            
        )
    }
}
export default Advice