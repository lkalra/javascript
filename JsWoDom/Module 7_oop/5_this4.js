'use strict'

// browser strict - linked through html file


// console.log(this) // window Object - contains all browser method



// function displayThis(){
//        console.log(this)  
// }

// displayThis() // undefined




// let myObj = {
//        name : 'Mrinal',
//        age : 23,

//        myFn1 : function(){
//               console.log(this)
//        }
// }

// myObj.myFn1()   //object itself




let myObj2 = {
       name : 'Mrinal',
       age : 23,

       myFn2 : function(){
              function myFn3(){
                     console.log(this)
              }

               myFn3()
       }
}


myObj2.myFn2()   //undefined