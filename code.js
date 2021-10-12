// Your Code Here.

const dummyArray2 = [6, 4, 8]
const dummyArray = [1, 4, -6, 'a', 'jello', 24, false];

const newIncludes = (array, value) => { //loops through the array to find the value
    for (let i = 0; i < array.length; i++) {
        if(array[i] === value) {
            return true;
        }
    }
    return false; //if it goes through the entire array, and doesn't return true, it returns false
}

const newConcat = (array1, array2) => { //loops through both arrays and adds them to a new array
    let newArray = []
    for (let i = 0; i < array1.length; i++) {
        newArray.push(array1[i])
    }
    for (let i = 0; i < array2.length; i++) {
        newArray.push(array2[i])
    }
    return newArray
}

const newJoin = (array, separator) => { //turns the array into a string separated by the separator
    if(typeof separator !== 'string') { //makes sure the separator is a string
        return null
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
        return newString
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