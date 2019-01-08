

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

    new Question(FOOD_QUESTION_DAILY, "products", [])
    new Question(FOOD_QUESTION_DAILY, "vegetables", []),
    new Question(FOOD_QUESTION_DAILY, "fruits", []),
    new Question(FOOD_QUESTION_DAILY, "meats", []),
    new Question(FOOD_QUESTION_DAILY, "dairy", []),
    new Question(FOOD_QUESTION_DAILY, ["nuts", "oils"], []),
    new Question(FOOD_QUESTION_DAILY, "drinks", [])

]
export default {
    questionList,
    Question
}
