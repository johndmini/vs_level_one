function backAndForth(value) {
    let uppercase = value.toUpperCase();
    let lowercase = value.toLowerCase();
    let newString = uppercase.concat(lowercase);
    return newString;
}
console.log(backAndForth('Fort Eolingas!!'));

function findMiddleIndex(value) {
    let middleIndex = Math.floor(value.length / 2);
    return middleIndex;
}
console.log(findMiddleIndex("Look to my coming, at first light, on the fifth day. At dawn, look to the East."));

function giveMeTheOtherHalf(value) {
    let firstHalf = value.slice(0, Math.floor(value.length / 2));
    return firstHalf;
}
console.log(giveMeTheOtherHalf("Look to my coming, at first light, on the fifth day. At dawn, look to the East."));

function capitalizeFirstHalf(value) {
    let capitalizeFirstHalf = value.slice(0, Math.floor(value.length / 2)).toUpperCase();
    return capitalizeFirstHalf;
} 
console.log(capitalizeFirstHalf("Look to my coming, at first light, on the fifth day. At dawn, look to the East."))

//---OPTIONAL CHALLENGE
function spaceToCapitalize(value) {
    let eachWord = value.split(" ");
    for (let i = 0; i < eachWord.length; i++) {
        eachWord[i] = eachWord[i].charAt(0).toUpperCase() + eachWord[i].substr(1);
    }
    return eachWord.join(" ");
}
console.log(spaceToCapitalize("Look to my coming, at first light, on the fifth day. At dawn, look to the East."))