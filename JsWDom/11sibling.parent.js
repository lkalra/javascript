console.log(document.body.firstChild) //will get text cause thr's space after opening body tag
a = document.body.firstChild
console.log(a.parentNode)
console.log(a.parentElement)
console.log(a.firstChild.nextSibling)

//if we want to ignore space and comments
let b = document.body
console.log("First Element child of b is: ", b.firstElementChild) //will give element only

//if we run changebgred in console will change first element's color
const changeBgRed = () => {
    document.body.firstElementChild.style.background = "red"
  }