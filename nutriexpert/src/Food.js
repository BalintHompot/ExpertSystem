class Food {
    constructor(name, img, sizeType, size, nutrilist, constraints, relevantQuestionTags){
        this.name = name
        this.img = img
        this.sizeType = sizeType
        this.nutrilist = nutrilist                       //nutrient specific categories
        this.constraints = constraints
        this.relevantQuestionTags = relevantQuestionTags //broader categories
    }
}

var foodlist = [
  //relevantQuestionsTag (broader categories)
    //products
    //Vegetables
    new Food("cucumber", "./img/cucumber.jpg", "gram", {NVegetables:100}, [], ["vegetable"] ),
    new Food("tomato", "./img/tomato.jpg", "gram" {NVegetables:130}, [], ["vegetable"]),
    //fruits
  //  new Food("banana", "none", {B12:0, Vegetables:0}, [], ["fruitsAndVeg?"]),
  //  new Food("soy", "none", {B12:1, Vegetables:18}, [], ["fruitsAndVeg?", "200veg?", "meatReplacements?"]),
    //meats
  //  new Food("chicken",  "./img/chicken.png", {B12:1, Vegetables:0},  ["meat", "animal"], ["meat?"] ),
  //  new Food("beef", "none", {B12:1, Vegetables:0}, ["meat", "animal"], ["meat?"]),
    //dairy
    //nuts and oils
  //  new Food()
    //drinks

]

export default {
    foodlist,
    Food
}
