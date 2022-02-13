var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];
//--Task One--
vegetables.pop();
console.log(vegetables);
//--Task Two--
fruit.shift();
console.log(fruit);
//--Task Three--
console.log(fruit.indexOf('orange'));
//--Task Four--
let popNumber = fruit.indexOf('orange');
let fruitWithNumber = fruit.push(popNumber);
console.log(fruit);
//--TaskFive--
let vegetablesLength = vegetables.length
console.log(vegetablesLength);
//--TaskSix--
let vegetablesWithNumber = vegetables.push(vegetablesLength);
console.log(vegetables);
//--TaskSeven--
let food = fruit.concat(vegetables);
console.log(food);
//--TaskEight--
let newArray = food.splice(4, 2);
console.log(food);
//--TaskNine--
let reversedArray = food.reverse();
console.log(reversedArray);
//--TaskTen--
let stringedArray = reversedArray.join('');
console.log(stringedArray);