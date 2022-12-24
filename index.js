// document.getElementById("count-el").innerText=5
//let username = "Niks"
//let msg = "You have tree new notifications"
//console.log(msg + " " + username)
//let messageToUser = msg + " " + username
//console.log(messageToUser)
//textContent and innertext

let countEl= document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
console.log(countEl)

let count=0 

function increment() {
    count = count+1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    console.log(count)
    countEl.textContent=0
    count= 0
}

