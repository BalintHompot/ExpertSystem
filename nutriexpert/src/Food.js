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

//Products
new Food("Whole Grain Bread", "./img/Whole Grain Bread.jpg", "gram", {NWholeGrain:120}, ["Gluten"], ["product"], "The daily recommended intake for whole grain products is 90g."),
//Fruits
new Food("Banana", "./img/Banana.jpg", "gram", {NFruits:130}, [], ["fruit"],"The daily recommended intake for fruits is 200g."),
new Food("Apple", "./img/Apple.jpg", "gram", {NFruits:135}, [], ["fruit"],"The daily recommended intake for fruits is 200g."),
new Food("Grapes", "./img/Grapes.jpg", "gram", {NFruits:125}, [], ["fruit"],"The daily recommended intake for fruits is 200g."),
new Food("Strawberries", "./img/Strawberries.jpg", "gram", {NFruits:100}, [], ["fruit"],"The daily recommended intake for fruits is 200g."),
new Food("Orange", "./img/Orange.jpg", "gram", {NFruits:130}, [], ["fruit"],"The daily recommended intake for fruits is 200g."),
new Food("Watermelon", "./img/Watermelon.jpg", "gram", {NFruits:130}, [], ["fruit"],"The daily recommended intake for fruits is 200g."),
new Food("Lemon", "./img/Lemon.jpg", "gram", {NFruits:25}, [], ["fruit"],"The daily recommended intake for fruits is 200g."),
new Food("Blueberries", "./img/Blueberries.jpg", "gram", {NFruits:50}, [], ["fruit"],"The daily recommended intake for fruits is 200g."),
new Food("Peach", "./img/Peach.jpg", "gram", {NFruits:125}, [], ["fruit"],"The daily recommended intake for fruits is 200g."),
new Food("Avocado", "./img/Avocado.jpg", "gram", {NFruits:180}, [], ["fruit"],"The daily recommended intake for fruits is 200g."),
/*
new Food("Pineapple", "./img/Pineapple.jpg", "gram", {NFruits:125}, [], ["fruit"],"The daily recommended intake for fruits  is 200g."),
new Food("Cherries", "./img/Cherries.jpg", "gram", {NFruits:25}, [], ["fruit"],"The daily recommended intake for fruits  is 200g."),
new Food("Pears", "./img/Pears.jpg", "gram", {NFruits:125}, [], ["fruit"],"The daily recommended intake for fruits  is 200g."),
new Food("Limes", "./img/Limes.jpg", "gram", {NFruits:25}, [], ["fruit"],"The daily recommended intake for fruits  is 200g."),
new Food("Raspberries", "./img/Raspberries.jpg", "gram", {NFruits:50}, [], ["fruit"],"The daily recommended intake for fruits  is 200g."),
new Food("Blackberries", "./img/Blackberries.jpg", "gram", {NFruits:60}, [], ["fruit"],"The daily recommended intake for fruits  is 200g."),
new Food("Plums", "./img/Plums.jpg", "gram", {NFruits:125}, [], ["fruit"],"The daily recommended intake for fruits  is 200g."),
new Food("Nectarines", "./img/Nectarines.jpg", "gram", {NFruits:105}, [], ["fruit"],"The daily recommended intake for fruits  is 200g."),
new Food("Grapefruit", "./img/Grapefruit.jpg", "gram", {NFruits:150}, [], ["fruit"],"The daily recommended intake for fruits  is 200g."),
*/

//Vegetables
new Food("Potato", "./img/Potato.jpg", "gram", {NVegetables:88}, [], ["vegetable"],"The daily recommended intake for vegetables  is 200g."),
new Food("Tomato", "./img/Tomato.jpg", "gram", {NVegetables:70}, [], ["vegetable"],"The daily recommended intake for vegetables  is 200g."),
new Food("Onion", "./img/Onion.jpg", "gram", {NVegetables:100}, [], ["vegetable"],"The daily recommended intake for vegetables  is 200g."),
new Food("Carrot", "./img/Carrot.jpg", "gram", {NVegetables:70}, [], ["vegetable"],"The daily recommended intake for vegetables  is 200g."),
new Food("Lettuce", "./img/Lettuce.jpg", "gram", {NVegetables:25}, [], ["vegetable"],"The daily recommended intake for vegetables  is 200g."),
new Food("Broccoli", "./img/Broccoli.jpg", "gram", {NVegetables:50}, [], ["vegetable"],"The daily recommended intake for vegetables  is 200g."),
new Food("Bell pepper", "./img/Bell pepper.jpg", "gram", {NVegetables:135}, [], ["vegetable"],"The daily recommended intake for vegetables  is 200g."),
new Food("Celery", "./img/Celery.jpg", "gram", {NVegetables:25}, [], ["vegetable"],"The daily recommended intake for vegetables  is 200g."),
new Food("Cucumber", "./img/Cucumber.jpg", "gram", {NVegetables:115}, [], ["vegetable"],"The daily recommended intake for vegetables  is 200g."),
new Food("Corn", "./img/Corn.jpg", "gram", {NVegetables:175}, [], ["vegetable"],"The daily recommended intake for vegetables  is 200g."),
//new Food("Garlic", "./img/Garlic.jpg", "gram", {NVegetables:3}, [], ["vegetable"],"The daily recommended intake for vegetables  is 200g."),
new Food("Mushroom", "./img/Mushroom.jpg", "gram", {NVegetables:30}, [], ["vegetable"],"The daily recommended intake for vegetables  is 200g."),

/*
new Food("Salad", "./img/Salad.jpg", "gram", {NVegetables:190}, [], ["vegetable"],"The daily recommended intake for vegetables  is 200g."),
new Food("Sweet potato", "./img/Sweet potato.jpg", "gram", {NVegetables:130}, [], ["vegetable"],"The daily recommended intake for vegetables  is 200g."),
new Food("Spinach", "./img/Spinach.jpg", "gram", {NVegetables:25}, [], ["vegetable"],"The daily recommended intake for vegetables  is 200g."),
new Food("Cabbage", "./img/Cabbage.jpg", "gram", {NVegetables:50}, [], ["vegetable"],"The daily recommended intake for vegetables  is 200g."),
new Food("Beans", "./img/Beans.jpg", "gram", {NVegetables:60}, [], ["vegetable"],"The daily recommended intake for vegetables  is 200g."),
new Food("Cauliflower", "./img/Cauliflower.jpg", "gram", {NVegetables:70}, [], ["vegetable"],"The daily recommended intake for vegetables  is 200g."),
new Food("Asparagus", "./img/Asparagus.jpg", "gram", {NVegetables:40}, [], ["vegetable"],"The daily recommended intake for vegetables  is 200g."),
*/

//Legumes
new Food("Soybeans", "./img/Soybeans.jpg", "portion", {NLegumes:1}, ["soy"], ["vegetable", "legume"],"Eating Legumes at least once per week is recommended."),
new Food("Peas", "./img/Peas.jpg", "portion", {NLegumes:1}, [], ["vegetable", "legume"],"Eating Legumes at least once per week is recommended."),
new Food("Lentils", "./img/Lentils.jpg", "portion", {NLegumes:1}, [], ["vegetable", "legume"],"Eating Legumes at least once per week is recommended."),
/*
new Food("Chickpeas", "./img/Chickpeas.jpg", "portion", {NLegumes:1}, [], ["vegetable"],"Eating Legumes at least once per week is recommended."),
new Food("Kidney beans", "./img/Kidney beans.jpg", "portion", {NLegumes:1}, [], ["vegetable"],"Eating Legumes at least once per week is recommended."),
new Food("Black beans", "./img/Black beans.jpg", "portion", {NLegumes:1}, [], ["vegetable"],"Eating Legumes at least once per week is recommended."),
new Food("Other legumes", "./img/Other legumes.jpg", "portion", {NLegumes:1}, [], ["vegetable"],"Eating Legumes at least once per week is recommended."),
*/

//Dairy
new Food("Cream", "./img/Cream.jpg", "portion", {NDairy:1}, ["dairy"], ["dairy"],"You should eat dairy or a form of dairy replacements 3 times each day."),
new Food("Cheese", "./img/Cheese.jpg", "portion", {NDairy:1}, ["dairy"], ["dairy"],"You should eat dairy or a form of dairy replacements 3 times each day."),
new Food("Milk", "./img/Milk.jpg", "portion", {NDairy:1}, ["dairy"], ["dairy"],"You should eat dairy or a form of dairy replacements 3 times each day."),
//new Food("Milk powder", "./img/Milk powder.jpg", "portion", {NDairy:1}, ["dairy"], ["dairy"],"You should eat dairy or a form of dairy replacements 3 times each day."),
new Food("Plain Yogurt", "./img/Plain Yogurt.jpg", "portion", {NDairy:1}, ["dairy"], ["dairy"],"You should eat dairy or a form of dairy replacements 3 times each day."),
new Food("Egg", "./img/Egg.jpg", "portion", {NDairy:1}, ["dairy"], ["dairy"], "It is recommended to "),
new Food("Casein", "./img/Casein.jpg", "portion", {NDairy:1}, [], ["dairyReplacement"]),

/*
new Food("Fruit Yogurt")
new Food("Ice cream", "./img/Ice cream.jpg", "portion", {NDairy:1}, ["dairy"], ["dairy"],"You should eat dairy or a form of dairy replacements 3 times each day."),
new Food("Soymilk", "./img/Soymilk.jpg", "portion", {NDairy:1}, ["soy"], ["dairy"],"You should eat dairy or a form of dairy replacements 3 times each day."),
new Food("Soy sauce", "./img/Soy sauce.jpg", "portion", {NDairy:1}, ["soy"], ["dairy"],"You should eat dairy or a form of dairy replacements 3 times each day."),
new Food("Casein", "./img/Casein.jpg", "portion", {NDairy:1}, ["dairy"], ["dairy"],"You should eat dairy or a form of dairy replacements 3 times each day."),
new Food("Coconut milk", "./img/Coconut milk.jpg", "portion", {NDairy:1}, ["dairy"], ["dairy"],"You should eat dairy or a form of dairy replacements 3 times each day."),
new Food("Almond milk", "./img/Almond milk.jpg", "portion", {NDairy:1}, ["dairy"], ["dairy"],"You should eat dairy or a form of dairy replacements 3 times each day."),
new Food("Miso", "./img/Miso.jpg", "portion", {NDairy:1}, ["dairy"], ["dairy"],"You should eat dairy or a form of dairy replacements 3 times each day."),
*/

//Oil
new Food("Olive oil", "./img/Olive oil.jpg", "ml", {NOil:12}, [], ["oils"],"It is recommended to consume either 50 ml of native olive oil or an extra of 30g of nuts."),
//new Food("Soybean oil", "./img/Soybean oil.jpg", "ml", {NOil:12}, ["soy"], ["oils"],"It is recommended to consume either 50 ml of native olive oil or an extra of 30g of nuts."),
//new Food("Corn oil", "./img/Corn oil.jpg", "ml", {NOil:12}, [], ["oils"],"It is recommended to consume either 50 ml of native olive oil or an extra of 30g of nuts."),
//new Food("Cottonseed oil", "./img/Cottonseed oil.jpg", "ml", {NOil:12}, [], ["oils"],"It is recommended to consume either 50 ml of native olive oil or an extra of 30g of nuts."),
new Food("Canola oil", "./img/Canola oil.jpg", "ml", {NOil:12}, [], ["oils"],"It is recommended to consume either 50 ml of native olive oil or an extra of 30g of nuts."),
new Food("Sunflower oil", "./img/Sunflower oil.jpg", "ml", {NOil:12}, [], ["oils"],"It is recommended to consume either 50 ml of native olive oil or an extra of 30g of nuts."),
new Food("Sesame oil", "./img/Sesame oil.jpg", "ml", {NOil:12}, [], ["oils"],"It is recommended to consume either 50 ml of native olive oil or an extra of 30g of nuts."),
//new Food("Grapeseed oil", "./img/Grapeseed oil.jpg", "ml", {NOil:12}, [], ["oils"],"It is recommended to consume either 50 ml of native olive oil or an extra of 30g of nuts."),


//Fish
new Food("Salmon", "./img/Salmon.jpg", "portion", {NFish:1}, ["meat"], ["fish"],"Eating fatty fish once a week is highly recommended."),
new Food("Mackerel", "./img/Mackerel.jpg", "portion", {NFish:1}, ["meat"], ["fish"],"Eating fatty fish once a week is highly recommended."),
new Food("Tuna", "./img/Tuna.jpg", "portion", {NFish:1}, ["meat"], ["fish"],"Eating fatty fish once a week is highly recommended."),
new Food("Sardines", "./img/Sardines.jpg", "portion", {NFish:1}, ["meat"], ["fish"],"Eating fatty fish once a week is highly recommended."),
//new Food("Anchovies", "./img/Anchovies.jpg", "portion", {NFish:1}, ["meat"], ["fish"],"Eating fatty fish once a week is highly recommended."),
//new Food("Herring", "./img/Herring.jpg", "portion", {NFish:1}, ["meat"], ["fish"],"Eating fatty fish once a week is highly recommended."),
new Food("Trout", "./img/Trout.jpg", "portion", {NFish:1}, ["meat"], ["fish"],"Eating fatty fish once a week is highly recommended."),
//new Food("Swordfish", "./img/Swordfish.jpg", "portion", {NFish:1}, ["meat"], ["fish"],"Eating fatty fish once a week is highly recommended."),
//new Food("Halibut", "./img/Halibut.jpg", "portion", {NFish:1}, ["meat"], ["fish"],"Eating fatty fish once a week is highly recommended."),
//new Food("Flatfish", "./img/Flatfish.jpg", "portion", {NFish:1}, ["warning", "meat"], ["fish"],"Fish is generally good. Fatty fish is even better then white fish."),
//new Food("Cod", "./img/Cod.jpg", "portion", {NFish:1}, ["warning", "meat"], ["fish"],"Fish is generally good. Fatty fish is even better then white fish."),
//new Food("Grouper", "./img/Grouper.jpg", "portion", {NFish:1}, ["warning", "meat"], ["fish"],"Fish is generally good. Fatty fish is even better then white fish."),
//new Food("Haddock", "./img/Haddock.jpg", "portion", {NFish:1}, ["warning", "meat"], ["fish"],"Fish is generally good. Fatty fish is even better then white fish."),
//new Food("Catfish", "./img/Catfish.jpg", "portion", {NFish:1}, ["warning", "meat"], ["fish"],"Fish is generally good. Fatty fish is even better then white fish."),
//new Food("Snapper", "./img/Snapper.jpg", "portion", {NFish:1}, ["warning", "meat"], ["fish"],"Fish is generally good. Fatty fish is even better then white fish."),
//new Food("Tilapia", "./img/Tilapia.jpg", "portion", {NFish:1}, ["warning", "meat"], ["fish"],"Fish is generally good. Fatty fish is even better then white fish."),
//new Food("Bass", "./img/Bass.jpg", "portion", {NFish:1}, ["warning", "meat"], ["fish"],"Fish is generally good. Fatty fish is even better then white fish."),
//new Food("Scallops", "./img/Scallops.jpg", "portion", {NFish:1}, ["warning", "meat"], ["fish"],"Fish is generally good. Fatty fish is even better then white fish."),
//new Food("Mussels", "./img/Mussels.jpg", "portion", {NFish:1}, ["warning", "meat"], ["fish"],"Fish is generally good. Fatty fish is even better then white fish."),
new Food("Shrimp", "./img/Shrimp.jpg", "portion", {NFish:1}, ["warning", "meat"], ["fish"],"Fish is generally good. Fatty fish is even better then white fish."),
new Food("Crab", "./img/Crab.jpg", "portion", {NFish:1}, ["warning", "meat"], ["fish"],"Fish is generally good. Fatty fish is even better then white fish."),
//new Food("Lobster", "./img/Lobster.jpg", "portion", {NFish:1}, ["warning", "meat"], ["fish"],"Fish is generally good. Fatty fish is even better then white fish."),

//Meats
new Food("Pork", "./img/Pork.jpg", "gram", {NB12:1}, ["meat"], ["meat"],"There is inconclusive evidence on negative health effects of red meat."),
new Food("Beef", "./img/Beef.jpg", "gram", {NB12:1}, ["meat"], ["meat"],"There is inconclusive evidence on negative health effects of red meat."),
new Food("Chicken", "./img/Chicken.jpg", "gram", {NB12:1}, ["meat"], ["meat"],""),
new Food("Sheep", "./img/Sheep.jpg", "gram", {NB12:1}, ["meat"], ["meat"],"There is inconclusive evidence on negative health effects of red meat."),
//new Food("Turkey", "./img/Turkey.jpg", "gram", {NB12:1}, ["meat"], ["meat"],""),
//new Food("Goat", "./img/Goat.jpg", "gram", {NB12:1}, ["meat"], ["meat"],"There is inconclusive evidence on negative health effects of red meat."),
//new Food("Lamb", "./img/Lamb.jpg", "gram", {NB12:1}, ["meat"], ["meat"],"There is inconclusive evidence on negative health effects of red meat."),
new Food("Bacon", "./img/Bacon.jpg", "gram", {}, ["warning", "meat"], ["meat"],"Most bacon contains high levels of salt. Salt intake should be limited to about 6 grams a day."),
//new Food("Whey Protein Isolate", "./img/Whey Protein Isolate", )
new Food("B12 supplements", "./img/B12 supplements", "portion", {NB12:1}, [], ["meatReplacement"], ""),
//new Food("Other white meat", "./img/Other white meat.jpg", "gram", {NB12:1}, ["meat"], ["meat"],""),
//new Food("Other read meat", "./img/Other read meat.jpg", "gram", {NB12:1}, ["warning", "meat"], ["meat"],"There is inconclusive evidence on negative health effects of red meat."),

//Drinks
new Food("Coffee", "./img/Coffee.jpg", "portion", {}, ["warning"], ["drink"],"It is not recommended to drink unfiltered coffee. Avoid drinking more than 5 cups a day because of caffeine."),
new Food("Black tea", "./img/Black tea.jpg", "portion", {}, ["warning"], ["drink"],"Be aware that a cup of black tea contains about one quarter of the caffeine of a cup of coffee."),
new Food("Green tea", "./img/Green tea.jpg", "portion", {NTea:1}, [], ["drink"],"At least 3 cups of tea every day is a healthy practice."),
new Food("Other tea", "./img/Other tea.jpg", "portion", {NTea:1}, [], ["drink"],"At least 3 cups of tea every day is a healthy practice."),
new Food("Water", "./img/Water.jpg", "portion", {}, [], ["drink"],""),
new Food("Fruit juice", "./img/Fruit juice.jpg", "portion", {}, ["warning"], ["drink"],"Try to minimize sugar intake."),
new Food("Soft drinks", "./img/Soft drinks.jpg", "portion", {}, ["warning"], ["drink"],"Try to minimize sugar intake."),
new Food("Beer", "./img/Beer.jpg", "portion", {}, ["warning"], ["drink"],"Reducing alcohol intake can greatly benefit your health."),
new Food("Wine", "./img/Wine.jpg", "portion", {}, ["warning"], ["drink"],"Reducing alcohol intake can greatly benefit your health."),
new Food("Liquor", "./img/Liquor.jpg", "portion", {}, ["warning"], ["drink"],"Reducing alcohol intake can greatly benefit your health."),

//Nuts
new Food("Almonds", "./img/Almonds.jpg", "gram", {NNuts:17.5}, ["nut"], ["nut"],"A minimum of 15 grams of nuts each day is healthy."),
new Food("Hazelnuts", "./img/Hazelnuts.jpg", "gram", {NNuts:17.5}, ["nut"], ["nut"],"A minimum of 15 grams of nuts each day is healthy."),
new Food("Walnuts", "./img/Walnuts.jpg", "gram", {NNuts:17.5}, ["nut"], ["nut"],"A minimum of 15 grams of nuts each day is healthy."),
new Food("Mixed Nuts", "./img/Mixed Nuts.jpg", "gram", {NNuts:17.5}, ["nut"], ["nut"],"A minimum of 15 grams of nuts each day is healthy."),

new Food("Other", "./img/Other.jpg","gram", {NDairy:1},[],["dairyReplacement"],""),
//previous examples
  //relevantQuestionsTag (broader categories)
    //products
    new Food("Pizza", "./img/Pizza.jpg", "gram", {NVegetables:100}, [], ["product"], "This is a sample description" ),
    new Food("Hamburger", "./img/Hamburger.jpg", "gram" ,{NVegetables:130}, [], ["product"], "This is a sample description"),
    //Vegetables
    //drinks
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
