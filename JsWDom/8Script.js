//Bom-browser object model
//dom-document object model - shows complete html page as a object named as document


console.log(window)
console.log(document.body) //will show document in colse  - js representation of html

//can change color like this and why? cause sometimes we need to change color on the basis of user interaction
document.body.style.background = "yellow"


//bom
// alert('kalra') //in console - part of bom

// can change color of element by class name
document.getElementsByClassName("classname") //- will give all elements of class look at the id
document.getElementsByClassName("classname")[2].style.color = "red" //will change color by dom manipulation
