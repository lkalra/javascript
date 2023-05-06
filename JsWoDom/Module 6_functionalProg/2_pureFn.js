
// var a = 2 //external factor
// // Impure FUnction
// function addImpure(x){
//        console.log(x+a)
//        a++
// }


// addImpure(2)

// addImpure(2)


// addImpure(2)


// Pure Function - for given same inut always return same output

//console is external resource so function cannot be completely pure

function addPure(x , a){
     return x+a
}


console.log(addPure(4 , 5)) //console using outside of function



