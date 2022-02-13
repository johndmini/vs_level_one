// //----PRELIMINARIES --------------------------------

// //---for loop 0-9
// for(let i = 0; i <=9; i++){
//     console.log(i)
// }

// //---for loop 9-0
// for(let i = 9; i >= 0; i--) {
//     console.log(i)
// }

// //---print fruits
// const fruit = ["banana", "orange", "apple", "kiwi"]

// for(let i = 0; i < fruit.length; i++) {
//     console.log(fruit[i])
// }

//---BRONZE MEDAL --------------------------------
// // ---Numbers Array
// let numbersArray = [];
// for(let i = 0; i <= 9; i++){
//     numbersArray.push(i);
// }
// console.log(numbersArray)

// //---Evens Only
// for(let i = 0; i <= 100; i++) {
//     if(i % 2 == 0) {
//         console.log(i)
//     }
// }

// //---Every Other Fruits Only
// const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
// let fruitArray = [];

// for(let i = 0; i < fruit.length; i+=2){
//     fruitArray.push(fruit[i])
// }
// console.log(fruitArray);

//---SILVER MEDAL --------------------------------
// const peopleArray = [
//   {
//     name: "Harrison Ford",
//     occupation: "Actor"
//   },
//   {
//     name: "Justin Bieber",
//     occupation: "Singer"
//   },
//   {
//     name: "Vladimir Putin",
//     occupation: "Politician"
//   },
//   {
//     name: "Oprah",
//     occupation: "Entertainer"
//   }
// ]

// let namesArray = [];
// let occupationsArray = [];

// for(let i = 0; i < peopleArray.length; i++){
//     namesArray.push(peopleArray[i].name)
//     occupationsArray.push(peopleArray[i].occupation)
//     console.log(peopleArray[i].name)
// }
// console.log(namesArray)
// console.log(occupationsArray)

// let everOtherNames = [];
// let everOtherOccupation = [];

// for (let i = 0; i < peopleArray.length; i+=2) {
//   everOtherNames.push(peopleArray[i].name)
// }
// console.log(everOtherNames);

// for (let i = 1; i < peopleArray.length; i+=2) {
//   everOtherOccupation.push(peopleArray[i].occupation)
// }
// console.log(everOtherOccupation);

//---GOLD MEDAL -----------------------------
let numbersArray = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let arrayOne = [];

for (let i = 0; i < numbersArray.length; i += 3) {
  arrayOne.push(numbersArray.slice(i, i+3));
}
console.log(arrayOne);

let numbersArrayTwo = [0, 0, 0, 1, 1, 1, 2, 2, 2];
let arrayTwo = [];

for (let i = 0; i < numbersArrayTwo.length; i += 3) {
  arrayTwo.push(numbersArrayTwo.slice(i, i+3));
}
console.log(arrayTwo);

let numbersArrayThree = [0, 1, 2, 0, 1, 2, 0, 1, 2]
let arrayThree = [];

for (let i = 0; i < numbersArrayThree.length; i += 3) {
  arrayThree.push(numbersArrayThree.slice(i, i+3));
}
console.log(arrayThree);

const numbersForNow = [ [ 0, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ];
let lettersForLater = [];

for(let i = 0; i < numbersForNow.length; i++){
  for(let j = 0; j < numbersForNow[i].length; j++){
    numbersForNow[i][j] = lettersForLater.push('X')
  }
}

console.log(lettersForLater)