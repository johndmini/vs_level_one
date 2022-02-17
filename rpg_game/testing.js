let playerStats = {
    PlayerName: 'John',
    PlayerHealth: 100,
    Inventory: ['Health Potion']
}



function NewPlayerHPLoot(health, inventory) {
    this.PlayerHealth = health;
    this.PlayerInventory = inventory
}



let sampleLoot = ['Health Potion', 'Health Potion']
let sampleHealth = 25;
// updatePlayerStats.push(updatePlayer)




function newHpAndLoot() {
    let hp = sampleHealth
    let loot = sampleLoot
    for (let i = 0; i < loot.length; i++ ){
        let updatePlayerStats = []
        let updatePlayer = new NewPlayerHPLoot(hp, loot)
        updatePlayerStats.push(updatePlayer)
        console.log(updatePlayerStats)
        return updatePlayerStats;
    }
}

newHpAndLoot()


// function sampleOne(newHpAndLoot){
//     let playerHealth = newHpAndLoot(sampleHealth, sampleLoot)
//     console.log(playerHealth)
// }

// console.log(sampleOne())
// console.log(updatePlayerStats)

// let newUpdate = newHpAndLoot();
// console.log(newHpAndLoot)




// updatePlayerStats.push(sampleHealth)


// let newInventory = playerStats.Inventory
// console.log(updatePlayerStats)


// const enemyList = [
//     {
//         EnemyName: 'Ninja Ghoul',
//         EnemyHealth: 50,
//         // EnemyMoves: oneStarEnemy,
//         Loot: ['Health Potion', 'Health Potion']
//     },
//     {
//         EnemyName: 'Shadow Ninja',
//         EnemyHealth: 75,
//         // EnemyMoves: twoStarEnemy,
//         Loot: ['Health Potion', 'Health Potion', 'Health Potion']
//     },
//     {
//         EnemyName: 'Doppleganger',
//         EnemyHealth: 100,
//         // EnemyMoves: threeStarEnemy,
//         Loot: ['Health Potion', 'Health Potion', 'Health Potion', 'Super Potion']
//     }
// ];
// let randomEnemyIndex = Math.floor(Math.random() * enemyList.length)
// let randomEnemyLoot = enemyList[randomEnemyIndex].Loot
// console.log(randomEnemyLoot)