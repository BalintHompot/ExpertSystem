class Question{
    constructor(text, tag, constraints){
        this.tag = tag
        this.text = text
        this.constraints = constraints
    }
}
class Nutrient{
    constructor(name, rda, estimated, threshold, questionList){
        this.name = name
        this.rda = rda
        this.estimated = estimated
        this.threshold = threshold
        this.questionList = questionList
    }
}


var nutriList = {
    B12: new Nutrient("B12", 1, 0, 1, [new Question("Did you eat any of the following?", "meatReplacements?", [])]),
    Vegetables: new Nutrient("Vegetables", 300, 0, 200, [new Question("Did you eat at least 200 grams of these? ", "200veg?", []),])
}

export default{
    nutriList,
    Nutrient
}