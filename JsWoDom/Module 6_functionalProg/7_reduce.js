// you need the sum of every element in an array

let num = [1, 2 , 3, 4, 10]


// let sum = 0 // accumulator

// for(let i=0 ; i<num.length ; i++){
//        sum = sum+num[i]
// }


// console.log(sum)



// Reduce 

let result = num.reduce(function(acc , value){                  //value of acc=0 and value=1 - result=1
       let updatedSum = acc+value                              //value of acc=1 and value2 - result=3
       return updatedSum                                       //value of acc=3 and value=3 - result=6
} , 0 )


console.log(result)


let product = num.reduce(function(acc , value){
       let updatedProduct = acc*value
       return updatedProduct
} , 1)

console.log(product)








