let blackShade = document.getElementById('identifier')
let allScreen = document.querySelector('body')
const keyBoard = document.querySelector('.keyboard')

blackShade.onmouseleave = function goBlack() {
    blackShade.style.backgroundColor = 'Black';
    blackShade.style.color = 'White'
}

blackShade.onmouseover = function turnBlue() {
    blackShade.style.backgroundColor = 'Blue'
}

blackShade.onmousedown = function turnRed() {
    blackShade.style.backgroundColor = 'Red'
    blackShade.style.color = 'Black'
}

blackShade.onmouseup = function turnYellow() {
    blackShade.style.backgroundColor = 'Yellow'
    blackShade.style.color = 'Black'
}

blackShade.ondblclick = function turnGreen() {
    blackShade.style.backgroundColor = 'Green'
    blackShade.style.color = 'Yellow'
}

allScreen.onwheel = function turnOrange() {
    blackShade.style.backgroundColor = 'Orange'
}

//--- Press 'd' for default colors
allScreen.addEventListener('keypress', e => {
    if(e.key === 'd' ) {
        blackShade.style.backgroundColor = 'Black';
        blackShade.style.color = 'White'
    }
})
//--- Press 'b' to turn box to blue
allScreen.addEventListener('keypress', e => {
    if(e.key === 'b' ) {
        blackShade.style.backgroundColor = 'Blue'
    }
})

//--- Press 'r' to turn box to red
allScreen.addEventListener('keypress', e => {
    if(e.key === 'r' ) {
        blackShade.style.backgroundColor = 'Red'
        blackShade.style.color = 'Black'
    }
})

//--- Press 'y' to turn box to Yellow
allScreen.addEventListener('keypress', e => {
    if(e.key === 'y' ) {
        blackShade.style.backgroundColor = 'Yellow'
        blackShade.style.color = 'Black'
    }
})

//---Press 'g' to turn box to Green
allScreen.addEventListener('keypress', e => {
    if(e.key === 'g' ) {
        blackShade.style.backgroundColor = 'Green'
        blackShade.style.color = 'Yellow'
    }
})

//---Press 'o' to turn box to Orange
allScreen.addEventListener('keypress', e => {
    if(e.key === 'o' ) {
        blackShade.style.backgroundColor = 'Orange'
    }
})