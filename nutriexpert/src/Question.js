

class Question{
    constructor(text, tag, constraints){
        this.text = text
        this.tag = tag
        this.constraints = constraints
    }
}

const FOOD_QUESTION_DAILY = "Mark the shown foods you had in the last 24 hours. You can choose entries multiple times."
const DRINK_QUESTION_DAILY = "Mark the shown drinks you had in the last 24 hours. You can choose entries multiple times."

var questionList = [

    //order by nutrilist relevance
    new Question(FOOD_QUESTION_DAILY, ["product"], []),
    new Question(FOOD_QUESTION_DAILY, ["vegetable"], []),
    //check Nvegetables if it still has highest importance value (add later)
    new Question(FOOD_QUESTION_DAILY, ["fruit"], []),
    //check Nfruits
    new Question(FOOD_QUESTION_DAILY, ["dairy"], ["dairy"]),
    //check Ndairy
    new Question(FOOD_QUESTION_DAILY, ["meat"], ["meats"]),
    //check Nfish
    //check Nlegumes
    new Question(FOOD_QUESTION_DAILY, ["nut", "oil"], []),
    //check Nnuts
    //check NwholeGrain
    new Question(FOOD_QUESTION_DAILY, ["drink"], [])
    //check Ndrinks
]
export default {
    questionList,
    Question
}
