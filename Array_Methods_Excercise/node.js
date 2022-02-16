let readline = require('readline-sync');
let rl = readline.createInterface({input: process.stdin, output: process.stdout});
console.log('Welcome to the Adventures of Mini Ninja');

let playerName = readline.question('What is your name adventurer? ');
console.log(`Welcome to the Darkest Dungeons ${playerName}`);

let playerHealth = 100;
let playerInventory = [];

//---Player Attack Moves---
const playerMoves = {
    'Shuriken Throw': Math.floor(Math.random() * 3) + 1,
    'Combo Attack': Math.floor(Math.random() * 4) + 3,
    'Fire Style Blast': Math.floor(Math.random() * 8) + 4, 
}
//---Enemy Names and Corresponding Moves Arrays---
const oneStarEnemy = {
    'Ghoul Punch': Math.floor(Math.random() * 3) + 1,
    'Ghoul Kick': Math.floor(Math.random() * 4)+ 1 
}

const twoStarEnemy = {
    'Shadow Puch': Math.floor(Math.random() * 4) + 2,
    'Shadow Kick': Math.floor(Math.random() * 5) + 2
}

const enemyList = [
    {
        EnemyName: 'Ninja Ghoul',
        EnemyHealth: 50,
        EnemyMoves: oneStarEnemy
    },
    {
        EnemyName: 'Shadow Ninja',
        EnemyHealth: 75,
        EnemyMoves: twoStarEnemy
    }
];

//---Function Walk---



// while(playerHealth > 0 && banner.innerHTML === 'You are now walking') {
//     let chanceToFight = Math.floor(Math.random * 100) + 1;
//     if(chanceToFight < 50) {
        
//     }
// }


//---Function Fight---

// function fight(){



//---Function Inventory---


