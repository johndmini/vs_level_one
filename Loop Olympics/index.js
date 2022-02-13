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
//---Numbers Array
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
const peopleArray = [
  {
    name: "Harrison Ford",
    occupation: "Actor"
  },
  {
    name: "Justin Bieber",
    occupation: "Singer"
  },
  {
    name: "Vladimir Putin",
    occupation: "Politician"
  },
  {
    name: "Oprah",
    occupation: "Entertainer"
  }
]

// let namesArray = [];
// let occupationsArray = [];

// for(let i = 0; i < peopleArray.length; i++){
//     namesArray.push(peopleArray[i].name)
//     occupationsArray.push(peopleArray[i].occupation)
//     console.log(peopleArray[i].name)
// }
// console.log(namesArray)
// console.log(occupationsArray)

let everOtherNames = [];
let everOtherOccupation = [];

for (let i = 0; i < peopleArray.length; i+2) {
  everOtherNames.push(peopleArray[i].name)
}
console.log(everOtherNames);