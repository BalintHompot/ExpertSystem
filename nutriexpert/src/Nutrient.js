obclass Question{
    constructor(text, tag, constraints){
        this.text = text
        this.tag = tag
        this.constraints = constraints
    }
}
class Nutrient{
    constructor(name, rda, estimated, importanceMultiplier, questionList){
        this.name = name
        this.rda = rda
        this.rdaUnit
        this.minPortion = portion
        //this.threshold
        this.estimated = estimated
        this.importanceMultiplier = importanceMultiplier
        this.questionList = questionList
    }
}

const VERY_IMORTANT = 1000
const IMPORTANT = 750

const UNDEFINED = -100

const FOOD_QUESTION_DAILY = "Mark the shown foods you had in the last 24 hours. You can choose entries multiple times."
const DRINK_QUESTION_DAILY = "Mark the shown drinks you had in the last 24 hours. You can choose entries multiple times."
const FISH_QUESTION = "Did you eat any kind of (preferably fatty) fish in the last 7 days?"
const LEGUME_QUESTION = "Did you eat any Legumes in the last 7 days?"
const BTWELVE_QUESTION = "Do you take B12 supplementation?"

var nutriList = {
    //Name: new Nutrient("name", rda, portion, est = 0, impMult, [new Question("asdf?", "ghjk?")])
    Vegetables: new Nutrient("vegetables",       200, UNDEFINED, 0, VERY_IMORTANT, [new Question(FOOD_QUESTION_DAILY)]),
    Fruits:     new Nutrient("fruits"    ,       200, UNDEFINED, 0, VERY_IMORTANT, [new Question(FOOD_QUESTION_DAILY)]),
    Dairy:      new Nutrient("dairy"     , UNDEFINED,         3, 0, VERY_IMORTANT, [new Question(FOOD_QUESTION_DAILY)]),
    //To be determined: Fish and/or Legumes yes/no or specificly what?
    Fish:       new Nutrient("fish"      , UNDEFINED,         1, 0, VERY_IMORTANT, [new Question(FISH_QUESTION)]),
    Legumes:    new Nutrient("legumes"   , UNDEFINED,         1, 0, VERY_IMORTANT, [new Question(LEGUME_QUESTION)]),

    Nuts:       new Nutrient("nuts"      ,        15, UNDEFINED, 0, VERY_IMORTANT, [new Question(FOOD_QUESTION_DAILY)]),
    WholeGrain: new Nutrient("wholeGrain",        90, UNDEFINED, 0, VERY_IMORTANT, [new Question(FOOD_QUESTION_DAILY)]),
    Tea:        new Nutrient("tea"       , UNDEFINED,         3, 0, VERY_IMORTANT, [new Question(DRINK_QUESTION_DAILY)]),

    //TBD: Is B12 portion 1 or specific number?
    B12:        new Nutrient("b12"       , UNDEFINED,         1, 0, VERY_IMORTANT, [new Question(BTWELVE_QUESTION)]),
    Oil:        new Nutrient("oil"       ,        50, UNDEFINED, 0,     IMPORTANT, [new Question(FOOD_QUESTION_DAILY)]),
    NoOilMoreNuts:new Nutrient("nuts"    ,        30, UNDEFINED, 0,     IMPORTANT, []),

    //add vitamin/mineral question here...
}

export default{
    nutriList,
    Nutrient
}
