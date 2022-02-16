//---TO DO LIST ---
//Inventory Function to print inventory
//Use items in inventory function.
//Enemy Loot generator function
//Enemy Loot pick up and push to player inventory function.

//---TO FIX LIST ---
//PlayerHealth Loop resetting to 100% health
//Inventory Loop resetting inventory to original value. <-------Forseeable BUG same as Player health.


const rl = require('readline-sync');
let userName = rl.question('May I have your name?\n')
console.log(`Welcome to the adventures of Mini Ninja ${userName}\n`);


//---Choose Enemy functionality---
const oneStarEnemy = {
    'Ghoul Punch': Math.floor(Math.random() * 3) + 1,
    'Ghoul Kick': Math.floor(Math.random() * 4)+ 1 
}

const twoStarEnemy = {
    'Shadow Puch': Math.floor(Math.random() * 4) + 2,
    'Shadow Kick': Math.floor(Math.random() * 5) + 2
}

const threeStarEnemy = {
    'Shuriken Throw': Math.floor(Math.random() * 3) + 1,
    'Combo Attack': Math.floor(Math.random() * 4) + 3,
    'Fire Style Blast': Math.floor(Math.random() * 8) + 4
}

const enemyList = [
    {
        EnemyName: 'Ninja Ghoul',
        EnemyHealth: 50,
        EnemyMoves: oneStarEnemy,
        Loot: ['Health Potion', 'Health Potion']
    },
    {
        EnemyName: 'Shadow Ninja',
        EnemyHealth: 75,
        EnemyMoves: twoStarEnemy,
        Loot: ['Health Potion', 'Health Potion', 'Health Potion']
    },
    {
        EnemyName: 'Doppleganger',
        EnemyHealth: 100,
        EnemyMoves: threeStarEnemy,
        Loot: ['Health Potion', 'Health Potion', 'Health Potion', 'Super Potion']
    }
];
let randomEnemyIndex = Math.floor(Math.random() * enemyList.length)
let randomEnemyMoveKeys = Object.keys(enemyList[randomEnemyIndex].EnemyMoves)
let randomEnemyMoves = enemyList[randomEnemyIndex].EnemyMoves
let randomEnemyLoot = enemyList[randomEnemyIndex].Loot
let chosenEnemy = enemyList[randomEnemyIndex].EnemyName
let enemyHealth = enemyList[randomEnemyIndex].EnemyHealth

//---Player Stats---
const playerMoves = {
    'Shuriken Throw': Math.floor(Math.random() * 3) + 1,
    'Combo Attack': Math.floor(Math.random() * 4) + 3,
    'Fire Style Blast': Math.floor(Math.random() * 8) + 4, 
    'Lightning Style Blast': Math.floor(Math.random() * 12) + 5,
    'Water Style Blast': Math.floor(Math.random() * 8) +4,
    'Ice Style Blast': Math.floor(Math.random() * 12) + 5,
};
let playerHealth = 100;
let playerInventory = [];
const playerMoveKeys = Object.keys(playerMoves);

//---Loot Pick Up Functionality---
function pickUpLoot(){
    
}

//---Fight Chances---
function getChance(){
    if(playerHealth > 0){
        return Math.floor(Math.random() * 10) + 1;
    } 
}

//---Do something Function---
doSomething()
function doSomething() {
    let doAnything = rl.keyIn('What would you like to do? (W)alk, (R)un, (I)nventory\n');
    if(doAnything == 'w'){
        walk();
    } else if(doAnything === 'r'){
        run();
    } else if(doAnything === 'f'){
        letsFight();
    } else if(doAnything === 'i'){
        inventory();
    }
}

function doSomethingIfAmbushed(){
    let doAnythingElse = rl.keyIn('What would you like to do? (R)un, (F)ight')
    return doAnythingElse;
}

//---Walk/Run Function----
function walk(){
    let walking = true;
    console.log('You are now walking!')
    while(walking === true){
        let fightChance = getChance();
        if(fightChance < 5){
            walk();
        } else{
            let enemyToFight = getEnemy() 
            console.log(`${enemyToFight} has sprung out and is eager to fight you`)
            let myAction = doSomethingIfAmbushed()
            if(myAction === 'r'){
                letsRun();
            } else if(myAction === 'f'){
                letsFight();
            }
            break;
        }
    }
};

function letsRun(){
    let running = true;
    console.log('You are now running!')
    while(running === true){
        let escapeChance = getChance();
        if(escapeChance < 5){
            letsFight();
        } else {
            let enemy = getEnemy()
            console.log(`You escaped ${enemy}`)
            running = false;
            walk();
            break;
        }
    }
    return running;
};

//---Fighting Functions after random enemy is populated---
function reduceHp(health, damage){
    let newHealth = health - damage;
    return newHealth;
};

function getEnemy(){
    let enemyChosen = chosenEnemy
    return enemyChosen;
};

function letsFight() {
    let playerWins = false
    let enemyToFight = getEnemy()          
    console.log(`A ${enemyToFight} is attacking you!`)
    let enemyCurrentHealth = enemyHealth       
    let playerCurrentHealth = playerHealth     
    while(playerCurrentHealth > 0 && enemyCurrentHealth > 0){      
        const playerSkillToUse = playerMoveKeys[Math.floor(Math.random() * playerMoveKeys.length)]
        const enemySkillToUse = randomEnemyMoveKeys[Math.floor(Math.random() * randomEnemyMoveKeys.length)]
        const playerSkillDamage = playerMoves[playerSkillToUse];
        const enemySkillDamage = randomEnemyMoves[enemySkillToUse];
        //----Player vs Enemy Phase----------------
        enemyCurrentHealth = reduceHp(enemyCurrentHealth, playerSkillDamage);
        console.log(`Mini uses ${playerSkillToUse} on ${enemyToFight} for ${playerSkillDamage}`)
        if(enemyCurrentHealth <= 0){
            enemyCurrentHealth = 0;
            playerWins = true;
            console.log(`${userName} has killed ${enemyToFight}`);
            playerInventory.push(randomEnemyLoot)
            console.log(`${userName} picked up ${randomEnemyLoot}`)
            break;
        }
        playerCurrentHealth = reduceHp(playerCurrentHealth, enemySkillDamage);
        console.log(`${enemyToFight} uses ${enemySkillToUse} on Mini for ${enemySkillDamage}`)
        if(playerCurrentHealth <= 0){
            playerCurrentHealth = 0;
            console.log(`${enemyToFight} has killed ${userName}`)
            break;
        }
    }
    console.log(`You have ${playerCurrentHealth} Health Points Left`)
    doSomething()
    return [playerWins, playerCurrentHealth]
};