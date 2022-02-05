alert('SANTA: Welcome to the escape room....')

function cancelGame (result) {
    if (result === false || result === null) {
        alert('You Died')
        throw new Error('Player Died');
    }
}


let playerName = prompt('SANTA: What should I call you?', []);
cancelGame (playerName);
if (playerName === ''){
    alert('SANTA: Silent type I see...suit yourself...')
} else {
    alert(`SANTA: Hello ${playerName}`)
}

alert('** You noticed a small hole on the wall in front of you **')
alert('** The outline around the hole looks like a door... **')
alert('SANTA: In order to leave, you must find a way to open the door.')

let playerMove = prompt('SANTA: Choose your next moves carefully.......Pick a number: 1) put hand in hole and brute force open the door. 2) spartan kick the door. 3) try and find the key', []);

if (playerMove != 1 || playerMove != 2) {
    alert('SANTA: What do you have there?...a key, I see... You are free to go.');
    while(playerMove = 3) {
        alert('** You put your hand in the hole with the key **')
        let outcome = prompt('SANTA: You may now open the door...all you have to do is put your hand in the hole with the key and say: "Open"', [])
        if (outcome === 'Open') {
            alert('SANTA: Until next time...')
        } else {
            alert('SANTA: tsk...tsk...tsk... Now you\'re dead.')
        }
        break;
    } 
} else {
    alert('SANTA: Congratulations!...You\'re dead...')
}
