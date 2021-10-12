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

