//---Largest Value---
function largest(array) {
    return array.reduce((prev, curr) => prev > curr ? prev : curr)
}

console.log(largest([10, 20, 30, 40, 50]))

let array = ["#3", "$$$", "C%4!", "Hey!"]

//---Contains Value---
function findChar(value) {
    let newArray = []
    for (let i = 0; i < value.length; i++) {
        if(value[i].includes('!') === true){
            newArray.push(value[i])
        }
    }
    return newArray;
}
console.log(findChar(array))

//---Is Divisible By Value---
function isDivisible(val1, val2) {
    if(val1 % val2 === 0){
        console.log(true)
    } else {
        console.log(false)
    }
}

isDivisible(4, 2)
isDivisible(9, 3)
isDivisible(15, 4)

