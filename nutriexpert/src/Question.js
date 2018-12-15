class Question{
    constructor(text, tag, constraints){
        this.tag = tag
        this.text = text
        this.constraints = constraints
    }
}

var questionList = [

    new Question("What meats did you eat?", "meat?", ["meat"]),
    new Question("What fruits and vegetables did you eat?", "fruitsAndVeg?", []),   
]
export default {
    questionList,
    Question
}