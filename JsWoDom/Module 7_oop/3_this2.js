'use strict'

//Node.js strict mode

//console.log(this)    //empty object


// function displayThis(){
//        console.log(this)   //undefined 
// }

// displayThis()



// let myObj = {
//        name : 'Mrinal',
//        age : 23,

//        myFn1 : function(){
//               console.log(this)
//        }
// }

// myObj.myFn1()   // object itself


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