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

const playerMoves = {
    'Shuriken Throw': Math.floor(Math.random() * 3) + 1,
    'Combo Attack': Math.floor(Math.random() * 4) + 3,
    'Fire Style Blast': Math.floor(Math.random() * 8) + 4, 
}

let playerHealth = 100;
let playerInventory = [];
const playerMoveKeys = Object.keys(playerMoves);


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
// const playerMoveKeys = Object.keys(playerMoves);

let randomEnemyIndex = Math.floor(Math.random() * enemyList.length)
let randomEnemyMoveKeys = Object.keys(enemyList[randomEnemyIndex].EnemyMoves)
let randomEnemyMoves = enemyList[randomEnemyIndex].EnemyMoves
let randomEnemyLoot = enemyList[randomEnemyIndex].Loot
//---Enemy Stats---
let chosenEnemy = enemyList[randomEnemyIndex].EnemyName
let enemyHealth = enemyList[randomEnemyIndex].EnemyHealth

function getEnemy(){
    let enemyChosen = chosenEnemy
    return enemyChosen;
}

const playerSkillToUse = playerMoveKeys[Math.floor(Math.random() * playerMoveKeys.length)]
const enemySkillToUse = randomEnemyMoveKeys[Math.floor(Math.random() * randomEnemyMoveKeys.length)]
const playerSkillDamage = playerMoves[playerSkillToUse];
const enemySkillDamage = randomEnemyMoves[enemySkillToUse];

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

function getChance(){
    if(playerHealth > 0){
        return Math.floor(Math.random() * 10) + 1;
    } 
}

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
    
}

function reduceHp(health, damage){
    let newHealth = health - damage;
    return newHealth;
}

function letsFight() {
    let playerWins = false
    let enemyToFight = getEnemy()              //push selected enemy w/ corresponding name and health and moves
    console.log(`A ${enemyToFight} is attacking you!`)
    let enemyCurrentHealth = enemyHealth       //value of player health
    let playerCurrentHealth = playerHealth     //value of enemy health
    while(playerCurrentHealth > 0 && enemyCurrentHealth > 0){      //while loop to govern attacks------//check if player health is greater than 0 and greater than enemy health
        const playerSkillToUse = playerMoveKeys[Math.floor(Math.random() * playerMoveKeys.length)]
        const enemySkillToUse = randomEnemyMoveKeys[Math.floor(Math.random() * randomEnemyMoveKeys.length)]
        const playerSkillDamage = playerMoves[playerSkillToUse];
        const enemySkillDamage = randomEnemyMoves[enemySkillToUse];
        enemyCurrentHealth = reduceHp(enemyCurrentHealth, playerSkillDamage);
        console.log(`Mini uses ${playerSkillToUse} on ${enemyToFight} for ${playerSkillDamage}`)
        if(enemyCurrentHealth <= 0){
            enemyCurrentHealth = 0;
            playerWins = true;
            playerHealth = playerCurrentHealth;
            console.log(`Mini has killed ${enemyToFight}`);
            break;
        }
        playerCurrentHealth = reduceHp(playerCurrentHealth, enemySkillDamage);
        console.log(`${enemyToFight} uses ${enemySkillToUse} on Mini for ${enemySkillDamage}`)
        if(playerCurrentHealth <= 0){
            playerCurrentHealth = 0;
            console.log(`${enemyToFight} has killed Mini`)
            break;
        }
    }
    console.log(playerWins)
    console.log(playerCurrentHealth)
    doSomething()
    return [playerWins, playerCurrentHealth]//
}
// console.log(getEnemy())
// console.log(playerSkillDamage)
console.log(randomEnemyLoot)
// console.log(playerSkillDamage)