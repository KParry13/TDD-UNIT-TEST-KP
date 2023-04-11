
function capitalizeFirstLetter(string){
    if(typeof string !== 'string'){
        throw new Error('Invalid')
    }
    return string.charAt(0).toUpperCase() + string.slice(1)
}

function concatenateTwoWords(firstWord, secondWord){
    if(typeof firstWord !== 'string' || typeof secondWord !== 'string'){
        throw new Error('Invalid')
    }
    return firstWord + secondWord
}

function returnSecondWord(string){
    if(typeof string !== 'string'){
        throw new Error('Invalid')
    }
    return string.slice(4,8)
}

export {capitalizeFirstLetter, concatenateTwoWords, returnSecondWord}