const rl = require('readline-sync');
        
//---Addition Function
letsAdd()
function letsAdd () {
    let val1 = Math.floor(Math.random() * 10 + 1);
    let val2 = Math.floor(Math.random() * 10 + 1);
    let sum = val1 + val2;
    let answer = rl.question(`What is the sum of ${val1} and ${val2}?\n`)
    if(answer = sum){
        console.log('You are correct')
        letsMult();
    } else {
        console.log('Incorrect!! This is simple math!! Try again!!')
        letsAdd();
    }
};

//---Multiply Function
function letsMult () {
    let val1 = Math.floor(Math.random() * 10 + 1);
    let val2 = Math.floor(Math.random() * 10 + 1);
    let product = val1 * val2;
    let answer = rl.question(`What is the product of ${val1} and ${val2}?\n`)
    if(answer = product){
        console.log('You are correct')
        letsDiv();
    } else {
        console.log('Incorrect!! This is simple math!! Try again!!')
        letsMult();
    }
};

//---Division function
function letsDiv() {
    let val1 = Math.floor(Math.random() * 10 + 1);
    let val2 = Math.floor(Math.random() * 10 + 1);
    let quotient = val1 / val2;
    let answer = rl.question(`What is the quotient of ${val1} and ${val2}?\n`)
    if(answer = quotient){
        console.log('You are correct')
        letsSubtract();
    } else {
        console.log('Incorrect!! This is simple math!! Try again!!')
        letsDiv();
    }
};

//---Subtract Function
function letsSubtract() {
    let val1 = Math.floor(Math.random() * 10 + 1);
    let val2 = Math.floor(Math.random() * 10 + 1);
    let difference = val1 - val2;
    let answer = rl.question(`What is the difference between ${val1} and ${val2}?\n`)
    if(answer = difference){
        console.log('You are correct')
        console.log('That is the end of the excercise!!')
        process.exit(0);
    } else {
        console.log('Incorrect!! This is simple math !! Try again!!')
        letsSubtract();
    }
};