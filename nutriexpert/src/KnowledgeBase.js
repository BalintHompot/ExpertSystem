
///Abstract Classes

export class proposition{
    constructor(name, value){
        this.name = name;
        this.value = value;
    }
}

export class goal extends proposition{
    constructor(name, value){
        super(name, value)
        this.type = "goal"
    }
}

export class advice extends proposition{
    constructor(name, value){
        super(name, value)
        this.type = "advice"
    }
}

export class inference{
    constructor([premises], [results]){
        this.premises = [premises];
        this.results = [results];
    }

    checkPremises(KB){
        var found = false
        console.log(this.premises)
        for (var premiseIndex in this.premises){
            found = false
            for (var propositionIndex in KB){
                console.log("comparing")
                console.log(this.premises[premiseIndex])
                console.log(KB[propositionIndex])
                if (this.premises[premiseIndex] === KB[propositionIndex]){
                    found = true;
                    break;
                } 
            }
            if (!found){
                return false
            }
        }
        return true
    }
}

///Actual values
//TODO
//Storing the components should be in classes, connected to propositions somehow
const getfat = new goal("Get fat", true)
const gainmuscle = new goal("Gain muscles", true)

export default  {

        Goals : [getfat, gainmuscle ],
        Nutritions : ["Sugar", "Protein"],

        ActiveAdvices : [],
        ActiveGoals : [],

        propositions : [],

        rules : [
            new inference([getfat], [new advice("Eat sugar", true)]),
            new inference([gainmuscle], [new advice("Eat protein", true)]),
        ],

        addToKb(list){
            console.log("Pushing into KB")
            console.log(list)
            for (var i in list){
                if (list[i].type == "goal"){
                    this.ActiveGoals.push(list[i])
                }
                else if (list[i].type == "advice"){
                    this.ActiveAdvices.push(list[i])
                }
                this.propositions.push(list[i])
            }
        }


}



