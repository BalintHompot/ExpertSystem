class Food {
    constructor(name, img, nutrilist, constraints, relevantQuestionTags){
        this.name = name
        this.img = img
        this.nutrilist = nutrilist
        this.constraints = constraints
        this.relevantQuestionTags = relevantQuestionTags
    }
}




var foodlist = [
    new Food("chicken",  "./img/chicken.jpg", {B12:1, Vegetables:0},  ["meat", "animal"], ["meat?"] ),
    new Food("chicken2",  "./img/chicken.jpg", {B12:1, Vegetables:0},  ["meat", "animal"], ["meat?"] ),
    new Food("chicken3",  "./img/chicken.jpg", {B12:1, Vegetables:0},  ["meat", "animal"], ["meat?"] ),
    new Food("chicken4",  "./img/chicken.jpg", {B12:1, Vegetables:0},  ["meat", "animal"], ["meat?"] ),
    new Food("chicken5",  "./img/chicken.jpg", {B12:1, Vegetables:0},  ["meat", "animal"], ["meat?"] ),
    new Food("chicken6",  "./img/chicken.jpg", {B12:1, Vegetables:0},  ["meat", "animal"], ["meat?"] ),
    new Food("chicken7",  "./img/chicken.jpg", {B12:1, Vegetables:0},  ["meat", "animal"], ["meat?"] ),
    new Food("chicken8",  "./img/chicken.jpg", {B12:1, Vegetables:0},  ["meat", "animal"], ["meat?"] ),
    new Food("chicken9",  "./img/chicken.jpg", {B12:1, Vegetables:0},  ["meat", "animal"], ["meat?"] ),
    new Food("chicken10",  "./img/chicken.jpg", {B12:1, Vegetables:0},  ["meat", "animal"], ["meat?"] ),
    new Food("chicken11",  "./img/chicken.jpg", {B12:1, Vegetables:0},  ["meat", "animal"], ["meat?"] ),
    new Food("chicken12",  "./img/chicken.jpg", {B12:1, Vegetables:0},  ["meat", "animal"], ["meat?"] ),
    new Food("chicken13",  "./img/chicken.jpg", {B12:1, Vegetables:0},  ["meat", "animal"], ["meat?"] ),
    new Food("chicken14",  "./img/chicken.jpg", {B12:1, Vegetables:0},  ["meat", "animal"], ["meat?"] ),
    new Food("chicken15",  "./img/chicken.jpg", {B12:1, Vegetables:0},  ["meat", "animal"], ["meat?"] ),
    new Food("chicken16",  "./img/chicken.jpg", {B12:1, Vegetables:0},  ["meat", "animal"], ["meat?"] ),
    new Food("chicken17",  "./img/chicken.jpg", {B12:1, Vegetables:0},  ["meat", "animal"], ["meat?"] ),
    new Food("chicken18",  "./img/chicken.jpg", {B12:1, Vegetables:0},  ["meat", "animal"], ["meat?"] ),
    new Food("chicken19",  "./img/chicken.jpg", {B12:1, Vegetables:0},  ["meat", "animal"], ["meat?"] ),
    new Food("chicken20",  "./img/chicken.jpg", {B12:1, Vegetables:0},  ["meat", "animal"], ["meat?"] ),
    new Food("chicken21",  "./img/chicken.jpg", {B12:1, Vegetables:0},  ["meat", "animal"], ["meat?"] ),
    new Food("chicken22",  "./img/chicken.jpg", {B12:1, Vegetables:0},  ["meat", "animal"], ["meat?"] ),
    new Food("chicken23",  "./img/chicken.jpg", {B12:1, Vegetables:0},  ["meat", "animal"], ["meat?"] ),
    new Food("chicken24",  "./img/chicken.jpg", {B12:1, Vegetables:0},  ["meat", "animal"], ["meat?"] ),
    new Food("chicken25",  "./img/chicken.jpg", {B12:1, Vegetables:0},  ["meat", "animal"], ["meat?"] ),
    new Food("chicken26",  "./img/chicken.jpg", {B12:1, Vegetables:0},  ["meat", "animal"], ["meat?"] ),
    new Food("szörnyhús",  "./img/szorny.jpg", {B12:1, Vegetables:0},  ["meat", "animal"], ["meat?"] ),
    new Food("beef", "./img/beef.jpg", {B12:1, Vegetables:0}, ["meat", "animal"], ["meat?"]),
    new Food("cucumber", "./img/bread.jpg", {B12:0, Vegetables:15}, [], ["fruitsAndVeg?", "200veg?"] ),
    new Food("tomato", "./img/apple.jpg", {B12:0, Vegetables:20}, [], ["fruitsAndVeg?", "200veg?"]),
    new Food("banana", "./img/apple.jpg", {B12:0, Vegetables:0}, [], ["fruitsAndVeg?"]),
    new Food("soy", "./img/apple.jpg", {B12:1, Vegetables:18}, [], ["fruitsAndVeg?", "200veg?", "meatReplacements?"]),
]

export default {
    foodlist,
    Food
}