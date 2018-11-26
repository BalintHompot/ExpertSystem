
export default {

    forwardChaining(KB){
        console.log("chaininge with KB")
        console.log(KB)
        const currentPropositions = KB.propositions
        console.log("checking rules ")
        console.log(KB.rules)
        for (var ruleIndex in KB.rules){
            if (KB.rules[ruleIndex].checkPremises(currentPropositions)){
                KB.addToKb(KB.rules[ruleIndex].results)
            }
        }
    }
}

