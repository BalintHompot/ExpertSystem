class Food {
    constructor(name, img, sizeType, nutrilist, constraints, relevantQuestionTags){
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
    new Food("pizza", "./img/cucumber.jpg", "gram", {NVegetables:100}, [], ["product"] ),
    new Food("hamburger", "./img/tomato.jpg", "gram" ,{NVegetables:130}, [], ["product"]),
    //Vegetables
    new Food("cucumber", "./img/cucumber.jpg", "gram", {NVegetables:100}, [], ["vegetable"] ),
    new Food("tomato", "./img/tomato.jpg", "gram" ,{NVegetables:130}, [], ["vegetable"]),
    new Food("whatever", "./img/tomato.jpg", "gram" ,{NVegetables:130}, [], ["vegetable"]),
    //fruits
    new Food("banana", "./img/cucumber.jpg", "gram", {NFruits:100}, [], ["fruit"] ),
    new Food("apple", "./img/tomato.jpg", "gram" ,{NFruits:130}, [], ["fruit"]),
    //dairy
    new Food("milk", "./img/cucumber.jpg", "gram", {NDairy:100}, ["dairy", "warning"], ["dairy"] ),
    new Food("cheese", "./img/tomato.jpg", "gram" ,{NDairy:130}, ["dairy"], ["dairy"]),
    //meat
    new Food("chicken", "./img/cucumber.jpg", "gram", {NB12:100}, ["meat"], ["meat"] ),
    new Food("beef", "./img/tomato.jpg", "gram" ,{NB12:130}, ["meat"], ["meat"]),
    //nuts
    new Food("almond", "./img/cucumber.jpg", "gram", {NNuts:100}, ["nut", "warning"], ["nut"] ),
    new Food("cashew", "./img/tomato.jpg", "gram" ,{NNuts:130}, ["nut"], ["nut"]),
    //drinks
    new Food("orange juice", "./img/cucumber.jpg", "gram", {NNuts:100}, [], ["drink"] ),
    new Food("water", "./img/tomato.jpg", "gram" ,{NNuts:130}, [], ["drink"]),

    new Food("pasternak", "./img/cucumber.jpg", "gram", {NVegetables:100}, [], ["exotic_vegetables"] ),

    new Food("pinapple", "./img/cucumber.jpg", "gram", {NFruits:100}, [], ["exotic_fruits"] ),
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
