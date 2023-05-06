//local

let key = prompt("Enter key you want to set")
let value = prompt("Enter value you want to set")

//to set
localStorage.setItem(key, value)

//to get
// localStorage.setItem(key, value)

console.log(`The value at ${key} is ${localStorage.getItem(key)}`)

if (key == "red" || key == "blue") {
        localStorage.removeItem(key) //will remove specific key
}

if (key == 0) {
        localStorage.clear() //will clear local storage
}

//localstorage.length - will give number of items

//session storage - data won't survive refreshing of storage

window.onstorage = (e) => {
        alert("changed")
        console.log(e)
}

//will show "location changed"


