// let x = document.getElementsByTagName('span')[0]
// console.log(x) //span tag
// let y = document.getElementsByTagName('span')[0]
// console.dir(y) //span as an object
// console.log(document.body.firstChild.nodeName) //text
// console.log(document.body.firstElementChild.nodeName) //span



// first.innerHTML //valid for only elements
// first.innerHTML = "<i>hey I am italic</i>" 
// first.outerHTML 
// first.outerHTML = "<div>hey</div>"


// document.body.firstChild.data 
// console.log(document.body.textContent)
// first.hidden = false


//attributes
let first = document.getElementById("first");//get class
let a = first.getAttribute("class")
// console.log(a)
// console.log(first.hasAttribute("class"))//true cause class exist
// console.log(first.hasAttribute("style"))//false
// first.setAttribute("hidden", "true")// first id hide
// first.setAttribute("class", "true sachin")
// first.removeAttribute("class")//remove class
// console.log(first.attributes) //all attri
console.log(first.dataset)//player & game 
console.log(first.dataset.game)
console.log(first.dataset.player)