class Question{
    constructor(text, tag, constraints){
        this.text = text
        this.tag = tag
        this.constraints = constraints
    }
}
class Nutrient{
    constructor(name, rda, rdaUnit, estimated, importanceMultiplier, questionList){
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

const VEGE2 = "Did you eat any other vegetables not in the list?"
const FRUIT2 =  "Did you eat any of these more exotic fruits?"
const DAIRY2 = "Did you eat other dairy products or replacement products?"
//const NUTS2
//const WHOLEGRAIN2
const B122 = "It seems you did not eat any meat or eggs. Do you supplement B12?"
const OIL2 = "Oil seems to be missing in your diet. However, you can replace it with nuts. Did you have 3 portions yet today?"
const FISH2 = "It seems you did not have fish today, did you have any in the past 7 days?"
const LEGUME2 = "Oh you hadn't had legumes today, have you had any in the last 7 days?"

var newNutriList = function(){ return {
    //Name: new Nutrient(N"name", rda, rdaUnit, est = 0, impMult, [new Question("asdf?", "ghjk?")])
    //For hierarchy: Importance score should be calculated as "(1 - (estimated/rda)) * importanceMultiplier"
    NVegetables: new Nutrient("vegetables",       200,    "gram", 0, VERY_IMORTANT, [new Question(VEGE2, ["NVegetables"],[])]),
    NFruits:     new Nutrient("fruits"    ,       200,    "gram", 0, VERY_IMORTANT, [new Question(FRUIT2, ["exotic_fruits"],[])]),
    NDairy:      new Nutrient("dairy"     ,         3, "portion", 0, VERY_IMORTANT, [new Question(DAIRY2,["dairyReplacement"],[])]),
    //To be determined: Fish and/or Legumes yes/no or specificly what?
    NFish:       new Nutrient("fish"      ,         1, "portion", 0, VERY_IMORTANT, [new Question(FISH2,["fish"],[])]),
    NLegumes:    new Nutrient("legumes"   ,         1, "portion", 0, VERY_IMORTANT, [new Question(LEGUME2,["legume"],[])]),

                                                                                    //All need replacement questions
    NNuts:       new Nutrient("nut"      ,         15,    "gram", 0, VERY_IMORTANT, []),
    NWholeGrain: new Nutrient("Whole Grain",       90,    "gram", 0, VERY_IMORTANT, []),
    NTea:        new Nutrient("tea"       ,         3, "portion", 0, VERY_IMORTANT, []),

    //TBD: Is B12 portion 1 or specific number?

    NB12:        new Nutrient("b12"       ,         1, "portion", 0, VERY_IMORTANT, [new Question(B122,[],[])]),
    NOil:        new Nutrient("oils"      ,        50,      "ml", 0, IMPORTANT, [new Question(OIL2,["nut"],[])]),

  //  NNoOilMoreNuts:new Nutrient("nuts"    ,        45,    "gram", 0,     IMPORTANT, [],[]),

    //add vitamin/mineral question go here...
}
}
var nutriList = newNutriList()
export default{
    newNutriList,
    nutriList,
    Nutrient
}

//const FOOD_QUESTION_DAILY = "Mark the shown foods you had in the last 24 hours. You can choose entries multiple times."
//const DRINK_QUESTION_DAILY = "Mark the shown drinks you had in the last 24 hours. You can choose entries multiple times."
//const BTWELVE_QUESTION = "Do you take B12 supplementation?"
