// var a = 21

var a = 35 // redecalrtion of a variable


//console.log(a)



if(a===35){
       var b = 40
       console.log(b)
}

// variables declared  with var keyword are not blocked scoped they are function scoped

console.log(b) //can access outside block cause not block scoped


function test(){
       var c = 100
       console.log(c)
}

test()

console.log(c) //cannot access cause function scoped