import f from "./Food"
import q from "./Question"
import n from "./Nutrient"

class Global {
    constructor(){
        //this.goal = null
        this.constraints = []
        this.age = 0
        this.name = "name"
        //this.height = 0
        //this.weight = 0
        //this.gender = null
        this.foodlist = f.foodlist
        this.questionList = q.questionList
        this.nutrients = n.nutriList
        this.lackingNutrient = null
        this.consumedList = []

        this.setProperty = function(key, value){
            key = key.toString()
            console.log("value")
            console.log(value)
            /*if (key == "goal"){
                this.goal = value
                return
            }
            */
            if (key == "constraints"){
                this.constraints = value
                return
            }
            if (key == "name"){
                this.name = value
                return
            }
            /*
            if (key == "weight"){
                this.weight = value
                return
            }
            if (key == "height"){
                this.height = value
                return
            }
            if (key == "gender"){
                this.gender = value
                return
            }
            if (key == "age"){
                this.age = value
                return
            }
            */
            console.log("prop not found")
            
        }
    }
}
let global = new Global()
export default global