
function addTwoNumbers(a,b){
    if(typeof a !== 'number' || isNaN(a) || typeof b !== "number" || isNaN(b)){
        throw new Error("Invalid")
    }
    return a+b
}


function subtractTwoNumbers(a,b){
    if(typeof a !== 'number' || isNaN(a) || typeof b !=='number' || isNaN(b)){
        throw new Error('Invalid')
    }
    return a-b
}

function multiplyTwoNumbers(a,b){
    if(typeof a !== 'number' || isNaN(a) || typeof b !=='number' || isNaN(b)){
        throw new Error('Invalid')
    }
}


function divideTwoNumbers(a,b){
    if(typeof a !== 'number' || isNaN(a) || typeof b !=='number' || isNaN(b)){
        throw new Error('Invalid')
    }
}





export {addTwoNumbers, subtractTwoNumbers,divideTwoNumbers,multiplyTwoNumbers}