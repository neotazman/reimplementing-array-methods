// Your Code Here.
const dummyArray3 = ['jsd', 5, 221, '96', 'pudding']
const dummyArray2 = [6, 4, 8]
const dummyArray = [1, 4, -6, 'a', 'jello', 24, false];
const dummyFunction = (element) => element > 0 && typeof element !== 'string'

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

const newConcat = (array1, array2, ...arrays) => { //loops through all arrays and adds them to a new array
    let newArray = []
    if(!Array.isArray(array1)) { //arrays are objects. if it's not an object, the value can be pushed as is
        newArray.push(array1)
    } else {
        for (let i = 0; i < array1.length; i++) {
            newArray.push(array1[i])
        }
    }
    if(!Array.isArray(array2)) {
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
const newSome = (array, callback) => { //calls the callback for each index of the array and returns true if it succeeds
    for(let i = 0; i < array.length; i++) {
        if(callback(array[i], i, array)) {
            return true
        }
    }
    return false //if the entire loop runs without returning true, it returns false
}

const newFindIndex = (array, callback) => { //calls the callback for each index of the array and returns the index
    for (let i = 0; i < array.length; i++) {
        if(callback(array[i], i, array)) {
            return i
        }
    }
    return -1 //if it doesn't return anything, it returns -1
}

const newMap = (array, callback) => { //loops through the array, calls the callback function and returns the new array with the results of the callback function
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(callback(array[i], i, array))
    }
    return newArray
}

const newFilter = (array, callback) => { //loops through the array and creates a new array of values that pass the callback function
    let newArray = []
    for(let i = 0; i < array.length; i++) {
        if(callback(array[i], i, array)) {
            newArray.push(array[i])
        }
    }
    return newArray
}

//unit tests
console.log(newIncludes(dummyArray, 4))
console.assert(newIncludes(dummyArray, 4) === true, "newIncludes did not return true when the item is in the array")

console.log(newConcat(dummyArray, dummyArray2))
console.assert(JSON.stringify(newConcat(dummyArray, dummyArray2)) === JSON.stringify([1, 4, -6, 'a', 'jello', 24, false, 6, 4, 8]), "newConcat did not concatenate the arrays")

console.log(newJoin(dummyArray, ', or better yet '))
console.assert(newJoin(dummyArray2) === '6,4,8', 'newJoin did not output a string')

console.log(newSome(dummyArray, (element) => typeof element === 'boolean'))
console.assert(newSome(dummyArray3, (element) => typeof element === 'string'), 'newSome did not return true when the callback passed')

console.log(newFindIndex(dummyArray, (element) => element === 'jello'))
console.assert(newFindIndex(dummyArray3, (element) => element === 'tarzan') === -1, 'newFindIndex did not return -1 when it failed')

console.log(newMap(dummyArray, (element) => JSON.stringify(element)))
console.assert(Array.isArray(newMap(dummyArray3, (element) => element % 3 || parseInt(element) || null)), 'newMap did not return an array')

console.log(newFilter(dummyArray, (element) => typeof element === 'string'))
console.assert(JSON.stringify(newFilter(dummyArray3, (element) => element % 2 === 1)) === JSON.stringify([5, 221]), 'newFilter did not return a filtered array')