//--- Set variable assignments for DOM
const addButton = document.querySelector("#addbutton")
const deleteButton = document.querySelectorAll("#deleteitem")
const editButtons = document.querySelectorAll('#edititem')
let newInput = document.querySelector("#title")
let listedItem = document.querySelectorAll("#newgrocery")
let mainForm = document.querySelector("#add-todo")

//--- Delete Existing item
for(let i = 0; i < deleteButton.length; i++) {
    deleteButton[i].addEventListener('click', function() {
        this.parentNode.remove();
    })
}

for(let i = 0; i < editButtons.length; i++) {
    editButtons[i].addEventListener('click', function() {
        let form = document.createElement('form')
       let editInput = document.createElement('input')
       form.appendChild(editInput)
       this.parentNode.appendChild(form)
       let div = this.parentNode.querySelector('div')
       let value = div.textContent
       editInput.value = value
       
       form.addEventListener('submit', function(e) {
           e.preventDefault()
           div.textContent = editInput.value
           form.remove()
       })
    })
}

//---Add new item 2.0
function addGrocery(e) {
    e.preventDefault()
    let newList = document.getElementById("list")
    const newGrocery = document.createElement('li')
    const newDiv = document.createElement('div')
    newDiv.textContent = newInput.value
    newGrocery.setAttribute('id', 'newgrocery')
    newGrocery.appendChild(newDiv)
    const editItem = document.createElement('button')
    editItem.innerHTML = 'edit'
    editItem.setAttribute('id', 'edititem')
    const deleteItem = document.createElement('button')
    deleteItem.innerHTML = 'X'
    deleteItem.setAttribute('id', 'deleteitem')

    //---Append Items
    newList.append(newGrocery)
    newGrocery.appendChild(editItem)
    newGrocery.appendChild(deleteItem)
    newInput.value = ''
    //---Delete New Items
    let newDeleteButton = document.querySelectorAll('#deleteitem')
    newDeleteButton[newDeleteButton.length -1].addEventListener('click', function() {
        this.parentNode.remove()
    })
    //---Edit new Items
    let newEditButton = document.querySelectorAll('#edititem')
    newEditButton[newEditButton.length -1].addEventListener('click', function(){
        let form = document.createElement('form')
       let editInput = document.createElement('input')
       form.appendChild(editInput)
       this.parentNode.appendChild(form)
       let div = this.parentNode.querySelector('div')
       let value = div.textContent
       editInput.value = value
       
       form.addEventListener('submit', function(e) {
           e.preventDefault()
           div.textContent = editInput.value
           form.remove()
       })
    })
}
addButton.addEventListener('click', addGrocery)