let myBody = document.querySelector("body")
let newHeader = document.getElementById('header')
newHeader.textContent = 'JavaScript Made This!!';
newHeader.style.fontSize = '30px';
newHeader.style.fontWeight = 'bold';
newHeader.style.textAlign = 'center';

let myIntro = document.createElement('p')
myIntro.id = 'studentName';
myIntro.innerHTML = '<span>John David Delgado</span> wrote the JavaScript';
newHeader.append(myIntro);

let newGold = document.querySelector('span')
newGold.style.color = 'Blue'

//---Message left and Message right DOM JS change
let grandParent = document.getElementById('main');
//--- Message parents
let parent = grandParent.getElementsByClassName('message left')
let parentTwo = grandParent.getElementsByClassName('message right')
//--- Message left parent[0]
parent[0].onmouseover = function yourMission() {
    parent[0].textContent = 'You\'re missionn, should you choose to accept it';
    parent[0].style.color = 'White';
    parent[0].style.backgroundColor = 'Black';
}
parent[0].onmouseleave = function missionDefault() {
    parent[0].textContent = 'I have something serious to talk about';
    parent[0].style.color = 'Black';
    parent[0].style.backgroundColor = 'Burlywood'
}
//--- Message left parent[1]
parent[1].onmouseover = function newRecruit() {
    parent[1].textContent = 'However it is essential that the 3rd team member is Nyah Nordof-Hall, she is a civilian, a highly capable professional thief.'
    parent[1].style.color = 'Gold';
    parent[1].style.backgroundColor = 'Black';
}
parent[1].onmouseleave = function recruitDefault() {
    parent[1].textContent = 'You have to, you\'re the police';
    parent[1].style.color = 'Black';
    parent[1].style.backgroundColor = 'Burlywood';
}
//--- Message right parent[0]
parentTwo[0].onmouseover = function missionItem(){
    parentTwo[0].textContent = 'Involves the recovery of a stolen item, designtated..."Chimera". You may select two team members.';
    parentTwo[0].style.color = 'White';
    parentTwo[0].style.backgroundColor = 'Blue';
}

parentTwo[0].onmouseleave = function defaultItem() {
    parentTwo[0].textContent = 'I don\'t want to talk';
    parentTwo[0].style.color = 'Black';
    parentTwo[0].style.backgroundColor = 'Lightblue';
}
//---Message right parent[1]
parentTwo[1].onmouseover = function endState() {
    parentTwo[1].textContent = 'As always, if any of you or your IM force be caught or killed, the secretary will disavow all knowledge of your actions';
    parentTwo[1].style.color = 'Yellow';
    parentTwo[1].style.backgroundColor = 'Green';
}

parentTwo[1].onmouseleave = function defaultState() {
    parentTwo[1].textContent = 'I\'m just a simple farmer';
    parentTwo[1].style.color = 'Black';
    parentTwo[1].style.backgroundColor = 'Lightblue';
}
//--- Clear Button "Self Destruct" function
let mainMessage = document.querySelector("#main > div");
let clearMe = document.getElementById('clear-button');

clearMe.onclick = function deleteAll () {
    while (mainMessage.firstChild) {
        mainMessage.removeChild(mainMessage.firstChild)
    }
}
//--- Theme color change
let theme = document.querySelector("#theme-drop-down")

theme.addEventListener('change', function() {
    if(theme.value === 'theme-one') {
        grandParent.style.backgroundColor = 'Teal'
        myBody.style.backgroundColor = 'Grey'
    }
    if(theme.value === 'theme-two') {
        grandParent.style.backgroundColor = 'Yellow'
        myBody.style.backgroundColor = 'Green'
    }
})

//--- Add messages
let sendButton = document.querySelector("#main > form > button");
let mainForm = document.querySelector("#main > form")

mainForm.addEventListener('submit', function(event) {
    event.preventDefault()
    
    const newInput = mainForm.newmessage.value
    mainForm.newmessage.value = ""
    
    const newDivOne = document.createElement('div')
    newDivOne.style.backgroundColor = 'Burlywood'
    newDivOne.textContent = newInput
    mainMessage.append(newDivOne)
    console.log(newInput)
})
