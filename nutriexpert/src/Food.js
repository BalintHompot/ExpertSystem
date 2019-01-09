class Food {
    constructor(name, img, sizeType, nutrilist, constraints, relevantQuestionTags, description){
        this.name = name
        this.img = img
        this.sizeType = sizeType
        this.nutrilist = nutrilist                       //nutrient specific categories
        this.constraints = constraints
        this.relevantQuestionTags = relevantQuestionTags //broader categories
        this.description = description
    }
}

var foodlist = [

  //relevantQuestionsTag (broader categories)
    //products
    new Food("pizza", "./img/cucumber.jpg", "gram", {NVegetables:100}, [], ["product"], "This is a sample description" ),
    new Food("hamburger", "./img/tomato.jpg", "gram" ,{NVegetables:130}, [], ["product"], "This is a sample description"),
    //Vegetables
    new Food("cucumber", "./img/cucumber.jpg", "gram", {NVegetables:100}, [], ["vegetable"] , "This is a sample description"),
    new Food("tomato", "./img/tomato.jpg", "gram" ,{NVegetables:130}, [], ["vegetable"], "This is a sample description"),
    new Food("whatever", "./img/tomato.jpg", "gram" ,{NVegetables:130}, [], ["vegetable"], "This is a sample description"),
    //fruits
    new Food("banana", "./img/cucumber.jpg", "gram", {NFruits:100}, [], ["fruit"], "This is a sample description" ),
    new Food("apple", "./img/tomato.jpg", "gram" ,{NFruits:130}, [], ["fruit"], "This is a sample description"),
    //dairy
    new Food("milk", "./img/cucumber.jpg", "gram", {NDairy:100}, ["dairy", "warning"], ["dairy"] , "This is a sample description"),
    new Food("cheese", "./img/tomato.jpg", "gram" ,{NDairy:130}, ["dairy"], ["dairy"], "This is a sample description"),
    //meat
    new Food("chicken", "./img/cucumber.jpg", "gram", {NB12:100}, ["meat"], ["meat"] , "This is a sample description"),
    new Food("beef", "./img/tomato.jpg", "gram" ,{NB12:130}, ["meat"], ["meat"], "This is a sample description"),
    //nuts
    new Food("almond", "./img/cucumber.jpg", "gram", {NNuts:100}, ["nut", "warning"], ["nut"], "This is a sample description" ),
    new Food("cashew", "./img/tomato.jpg", "gram" ,{NNuts:130}, ["nut"], ["nut"], "This is a sample description"),
    //drinks
    new Food("orange juice", "./img/cucumber.jpg", "gram", {NNuts:100}, [], ["drink"] , "This is a sample description"),
    new Food("water", "./img/tomato.jpg", "gram" ,{NNuts:130}, [], ["drink"], "This is a sample description"),

    new Food("pasternak", "./img/cucumber.jpg", "gram", {NVegetables:100}, [], ["exotic_vegetables"] , "This is a sample description"),

    new Food("pinapple", "./img/cucumber.jpg", "gram", {NFruits:100}, [], ["exotic_fruits"] , "This is a sample description"),
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
