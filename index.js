// code your solution here
function saturdayFun(funType = 'roller-skate'){
    return `This Saturday, I want to ${funType}!`
}

function mondayWork(activity = 'go to the office'){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(wrapper = "*"){
    return function(arg = "special"){
        return `You are ${wrapper}${arg}${wrapper}!`

    }
}