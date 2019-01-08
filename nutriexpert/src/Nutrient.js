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
        this.rdaUnit = rdaUnit
        this.estimated = estimated
        this.importanceMultiplier = importanceMultiplier
        this.questionList = questionList
    }
}

const VERY_IMORTANT = 1000
const IMPORTANT = 750

const EXOTIC_VEGETABLE_Q = "Your vegetable consumption is not sufficient so far, did you eat any of the following?"
const EXOTIC_FRUIT_Q = "Your fruit consumption is not sufficient so far, did you eat any of the following?"
const DAIRY_REPLACEMENT_Q = "Your dairy consumption is not sufficient so far, did you take any supplementation?"
const FISH_Q = "Did you eat any kind of (preferably fatty) fish in the last 7 days?"
const LEGUME_Q = "Did you eat any Legumes in the last 7 days?"

var nutriList = {
    //Name: new Nutrient(N"name", rda, rdaUnit, est = 0, impMult, [new Question("asdf?", "ghjk?")])
    //For hierarchy: Importance score should be calculated as "(1 - (estimated/rda)) * importanceMultiplier"
    NVegetables: new Nutrient("vegetables",       200,    "gram", 0, VERY_IMORTANT, [new Questions(EXOTIC_VEGETABLE_Q, "vegetable_exotic"),[])]),
    NFruits:     new Nutrient("fruits"    ,       200,    "gram", 0, VERY_IMORTANT, [new Questions(EXOTIC_FRUIT_Q, "fruit_exotic")]),
    NDairy:      new Nutrient("dairy"     ,         3, "portion", 0, VERY_IMORTANT, [new Question(DAIRY_REPLACEMENT_Q)]),
    //To be determined: Fish and/or Legumes yes/no or specificly what?
    NFish:       new Nutrient("fish"      ,         1, "portion", 0, VERY_IMORTANT, [new Question(FISH_Q)]),
    NLegumes:    new Nutrient("legumes"   ,         1, "portion", 0, VERY_IMORTANT, [new Question(LEGUME_Q)]),

                                                                                    //All need replacement questions
    NNuts:       new Nutrient("nuts"      ,        15,    "gram", 0, VERY_IMORTANT, []),
    NWholeGrain: new Nutrient("wholeGrain",        90,    "gram", 0, VERY_IMORTANT, []),
    NTea:        new Nutrient("tea"       ,         3, "portion", 0, VERY_IMORTANT, []),

    //TBD: Is B12 portion 1 or specific number?
    NB12:        new Nutrient("b12"       ,         1, "portion", 0, VERY_IMORTANT, []),
    NOil:        new Nutrient("oil"       ,        50,      "ml", 0,     IMPORTANT, []),
    NNoOilMoreNuts:new Nutrient("nuts"    ,        30,    "gram", 0,     IMPORTANT, []),

    //add vitamin/mineral question go here...
}

export default{
    nutriList,
    Nutrient
}

//const FOOD_QUESTION_DAILY = "Mark the shown foods you had in the last 24 hours. You can choose entries multiple times."
//const DRINK_QUESTION_DAILY = "Mark the shown drinks you had in the last 24 hours. You can choose entries multiple times."
//const BTWELVE_QUESTION = "Do you take B12 supplementation?"
