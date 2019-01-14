

class Question{
    constructor(text, tag, constraints){
        this.text = text
        this.tag = tag
        this.constraints = constraints
    }
}

const PRODUCTS = "Mark the products you had:"
const VEGETABLES = "Mark your veggies:"
const FRUITS = "Which fruits did you eat?"
const DAIRY = "Dairy"
const MEATS = "Meat and Fish"
const NUTSOILS = "Nuts and Oils"
const DRINKS = "What drinks did you have?"

var newQuestionList = function(){ return [

    //order by nutrilist relevance
    new Question(PRODUCTS, ["product"], []),
    new Question(VEGETABLES, ["vegetable"], []),
    //check Nvegetables if it still has highest importance value (add later)
    new Question(FRUITS, ["fruit"], []),
    //check Nfruits
    new Question(DAIRY, ["dairy"], []),
    //check Ndairy
    new Question(MEATS, ["meat", "fish"], ["meat", "animal"]),
    //check Nfish
    //check Nlegumes
    new Question(NUTSOILS, ["nut", "oils"], []),
    //check Nnuts
    //check NwholeGrain
    new Question(DRINKS, ["drink"], [])
    //check Ndrinks
]}
var questionList = newQuestionList()
export default {
    newQuestionList,
    questionList,
    Question
}
