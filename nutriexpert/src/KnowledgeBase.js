
///Abstract Classes

export class proposition{
    constructor(name, value){
        this.name = name;
        this.value = value;
    }
}

export class inference{
    constructor([premises], [results]){
        this.premises = premises;
        this.results = results;
    }

    checkPremises(KB){
        var found = false
        for (var premiseIndex in this.premises){
            found = false
            for (var propositionIndex in KB){
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
export default  {
    
        Goals : ["Get fat", "Gain muscles"],
        Nutritions : ["Sugar", "Protein"],

        propositions : [],
        rules : [
            new inference([new proposition("Get fat", true)], [new proposition("Eat sugar", true)]),
            new inference([new proposition("Gain muscles", true)], [new proposition("Eat protein", true)]),
        ],


}



