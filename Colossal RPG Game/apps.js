// alert('Welcome to the adventures of MiniNinja!')

// function cancelGame(result){
//     if (result === false || result === null) {
//         throw new Error('You are too weak to play, go away!');
//     }
// };

// let playerName = prompt('What is your name adventurer?', []);
// cancelGame(playerName);
// if(playerName === ''){
//     playerName = 'MiniNinja'
// };

// alert(`Welcome ${playerName}!`);

// let playerHealth = 100;
// let playerInventory = [];

//---Player Attack Moves---
const playerMoves = {
    'Shuriken Throw': Math.floor(Math.random() * 3) + 1,
    'Combo Attack': Math.floor(Math.random() * 4) + 3,
    'Fire Style Blast': Math.floor(Math.random() * 8) + 4, 
}
//---Enemy Names and Corresponding Moves Arrays---
const ghoulMoves = {
    'Ghoul Punch': Math.floor(Math.random() * 3) + 1,
    'Ghoul Kick': Math.floor(Math.random() * 4)+ 1 
}

const shadowMoves = {
    'Shadow Puch': Math.floor(Math.random() * 4) + 2,
    'Shadow Kick': Math.floor(Math.random() * 5) + 2
}

const enemyList = [
    {
        EnemyName: 'Ninja Ghoul',
        EnemyHealth: 50,
        EnemyMoves: ghoulMoves
    },
    {
        EnemyName: 'Shadow Ninja',
        EnemyHealth: 75,
        EnemyMoves: shadowMoves
    }
];

//---Function Walk---




//---Function Fight---

//---Function Inventory---
