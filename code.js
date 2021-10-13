// Your Code Here.
const dummyArray3 = ['jsd', 5, 221, '96', 'pudding']
const dummyArray2 = [6, 4, 8]
const dummyArray = [1, 4, -6, 'a', 'jello', 24, false];

//basic challenge
const newIncludes = (array, value, fromIndex) => { //loops through the array to find the value
    if(!fromIndex || typeof fromIndex !== 'number') { //since fromIndex is an optional parameter, if it doesn't exist, it is set to 0
        fromIndex = 0
    }
    for (let i = fromIndex; i < array.length; i++) {
        if(array[i] === value) {
            return true;
        }
    }
    return false; //if it goes through the entire array, and doesn't return true, it returns false
}

const newConcat = (array1, array2, ...arrays) => { //loops through both arrays and adds them to a new array
    let newArray = []
    console.log(typeof array1)
    if(typeof array1 !== 'object') { //arrays are objects. if it's not an object, the value can be pushed as is
        newArray.push(array1)
    } else {
        for (let i = 0; i < array1.length; i++) {
            newArray.push(array1[i])
        }
    }
    if(typeof array2 !== 'object') {
        newArray.push(array2)
    } else {
        for (let i = 0; i < array2.length; i++) {
            newArray.push(array2[i])
        }
    }

    for(let i = 0; i < arrays.length; i++) { //rest parameters are for an unknown number of parameters. assisted by elizabeth scheidt
        if(typeof arrays[i] !== 'object') {
            newArray.push(arrays[i])
        } else {
            for (let j = 0; j < arrays[i].length; j++) {
                newArray.push(arrays[i][j])
            }            
        }
    }

    return newArray
}

const newJoin = (array, separator) => { //turns the array into a string separated by the separator
    if(!separator) { //if the separator does not exist, it sets it as a comma
        separator = ','
    } else if(typeof separator !== 'string') { //if the separator is not a string, it turns it into a string
        separator = JSON.stringify(separator)
    }

    let newArray = []
    let newString = ''

    for (let i = 0; i < array.length; i++) { //stringifies each value
        if(typeof array[i] === 'string') { //stringifying a string adds quotation marks, so i just push the string as is
            newArray.push(array[i])
        } else {
            newArray.push(JSON.stringify(array[i]))
        }
        
    }

    if(newArray.length === 1) { //if the array has exactly one value, it just returns the one value without the separator
        newString += newArray[0]
    } else { //loops through each value of the newArray and concatenates it with the separator
        for(let i = 0; i < newArray.length; i++) {
            newString += newArray[i]
            if(i !== newArray.length - 1) { //it doesn't add the separator if it's the last value
                newString += separator
            }
        }
    }
    return newString
}

//intermediate challenge
const newSome = (array, functionToPass) => { //calls the functionToPass for each index of the array and returns true if it succeeds
    for(let i = 0; i < array.length; i++) {
        if(functionToPass(array[i])) {
            return true
        }
    }
    return false //if the entire loop runs without returning true, it returns false
}

const newFindIndex = (array, functionToPass) => { //calls the functionToPass for each index of the array and returns the index
    for (let i = 0; i < array.length; i++) {
        if(functionToPass[array[i]]) {
            return i
        }
    }
    return -1 //if it doesn't return anything, it returns -1
}

const newMap = (array, callback) => { //loops through the array, calls the callback function and returns the new array with the results of the callback function
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(callback(array[i]))
    }
    return newArray
}

const newFilter = (array, functionToPass) => {
    let newArray = []
    for(let i = 0; i < array.length; i++) {
        if(functionToPass(array[i])) {
            newArray.push(array[i])
        }
    }
    return newArray
}

