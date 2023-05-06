//Node.js Non strict mode

// console.log(this) // Empty Object


// function displayThis(){
//        console.log(this)   //Global object - contains node js methods 
// }

// displayThis()


let myObj = {
       name : 'Mrinal',
       age : 23,

       myFn1 : function(){
              console.log(this.name)  //creating function inside object known as method of particular obj
       }
}

//myObj.myFn1() //object itself only


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


myObj2.myFn2() //Global object - contains node js methods global object