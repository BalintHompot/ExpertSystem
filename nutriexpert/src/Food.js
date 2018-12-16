class Food {
    constructor(name, img, nutrilist, constraints, relevantQuestionTags){
        this.name = name
        this.img = img
        this.nutrilist = nutrilist                       //nutrient specific categories
        this.constraints = constraints
        this.relevantQuestionTags = relevantQuestionTags //broader categories
    }
}

var foodlist = [
    new Food("chicken",  "./img/chicken.png", {B12:1, Vegetables:0},  ["meat", "animal"], ["meat?"] ),
    new Food("beef", "none", {B12:1, Vegetables:0}, ["meat", "animal"], ["meat?"]),
    new Food("cucumber", "./img/bread.jpg", {B12:0, Vegetables:15}, [], ["fruitsAndVeg?", "200veg?"] ),
    new Food("tomato", "./img/apple.jpg", {B12:0, Vegetables:20}, [], ["fruitsAndVeg?", "200veg?"]),
    new Food("banana", "none", {B12:0, Vegetables:0}, [], ["fruitsAndVeg?"]),
    new Food("soy", "none", {B12:1, Vegetables:18}, [], ["fruitsAndVeg?", "200veg?", "meatReplacements?"]),
]

export default {
    foodlist,
    Food
}
