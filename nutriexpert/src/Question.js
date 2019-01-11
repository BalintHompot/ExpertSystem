

class Question{
    constructor(text, tag, constraints){
        this.text = text
        this.tag = tag
        this.constraints = constraints
    }
}

const PRODUCTS = "Mark the products you had in the last 24 hours. You can choose entries multiple times."
const VEGETABLES = "Mark your veggies:"
const FRUITS = "Which fruits did you enjoy?"
const DAIRY = "Dairy"
const MEATS = "Meats"
const NUTSOILS = "Nuts and Oils"
const DRINKS = "What drinks did you have? One click per glass or cup:"

var questionList = [

    //order by nutrilist relevance
    new Question(PRODUCTS, ["product"], []),
    new Question(VEGETABLES, ["vegetable", "legume"], []),
    //check Nvegetables if it still has highest importance value (add later)
    new Question(FRUITS, ["fruit"], []),
    //check Nfruits
    new Question(DAIRY, ["dairy"], ["dairy"]),
    //check Ndairy
    new Question(MEATS, ["meat", "fish"], ["meats"]),
    //check Nfish
    //check Nlegumes
    new Question(NUTSOILS, ["nut", "oils"], []),
    //check Nnuts
    //check NwholeGrain
    new Question(DRINKS, ["drink"], [])
    //check Ndrinks
]
export default {
    questionList,
    Question
}
