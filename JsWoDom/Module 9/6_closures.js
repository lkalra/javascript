// function test(){
//        let a = 2

//        function test1(){
//               console.log(a)
//        } //lexical scope test1 will have access of var in test fn

//        return test1
// }


// let fun = test()
// console.log(fun)

// fun()

//clousers - a nested function will have access to outerscope values


function greet(){
       let name = 'Steve'

       function displayName(){
              console.log('Hi '+ name)

              let age = 25

              function displayAge(){
                     console.log('my age is '+ age +" " + name)
              }

              return displayAge
       }

       return displayName
}


let g1 = greet()

g1() // displayName

let g2 = g1()

console.log(g2)

g2() // display age


