var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]

let computerCount = 0;

for(let i = 0; i < officeItems.length; i++){
    if(officeItems[i] === 'computer'){
        computerCount++
    }
};

console.log(computerCount)

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ]

  for(let i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
      if(peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18){
          console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + ' is ' + peopleWhoWantToSeeMadMaxFuryRoad[i].gender + ' and is not old enough. ')
      } else {
          console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + ' is ' + peopleWhoWantToSeeMadMaxFuryRoad[i].gender + ' and is old enough')
      }
  };

