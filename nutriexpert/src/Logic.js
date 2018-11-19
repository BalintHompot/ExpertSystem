
export default {

    forwardChaining(KB){
        const currentPropositions = KB.propositions
        for (var ruleIndex in KB.rules){
            if (KB.rules[ruleIndex].checkPremises(currentPropositions)){
                KB.push(KB.rules[ruleIndex].results)
            }
        }
    }
}

