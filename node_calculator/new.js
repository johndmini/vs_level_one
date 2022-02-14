//--- Function 2 array parameters, concats two arrays and push to new array variable.

function concatArrays(val1, val2) {
    let newArray = val1.concat(val2);
    return newArray;
}

let array = [10,20,30,40,50];
let arrayTwo = [1, 2, 3, 4, 5];

console.log(concatArrays(array, arrayTwo));
