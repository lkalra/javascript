// Arrays provides you an ordered collection of data

var arr = [12 , 'Ferrari' , true , 12.4]


console.log(arr)

// accesing the elements 

var a = arr[1]

console.log(arr[3])

// replacing elememts of an array by using index
arr[1] = 'Bentley'

console.log(arr)

// arr[4] = 89 // Adding a new value to the array

console.log('The length of the array is', arr.length)

// inbuilt js array methods

var arr2 = [12 , 14 , 56 , 57]


// pop method

var c = arr2.pop()
console.log(c)


console.log('popped array' , arr2)

// push method

arr2.push(100)

console.log('Push array' , arr2)


// shift method 

var d = arr2.shift()
console.log(d)

console.log('Shifted Array' , arr2)


// unshift

arr2.unshift(102)


console.log('unsfited Array' , arr2)

// Array Methods
let num = [1, 2, 3, 34, 4]
let b = num.toString() // b is now a string 
console.log(b, typeof b)
let c = num.join(" and ")


// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let num_more = [11, 12, 13, 14, 15, 16, 17, 18, 19]
// let num_even_more = [211, 212, 213, 214, 415, 416, 417, 418, 419]
// console.log(num.length)
// delete num[0]
// console.log(num.length)

// let newArray = num.concat(num_more, num_even_more)
// console.log(newArray)
// console.log(num, num_more)

// sort method
// let compare = (a, b)=>{
//   return b - a
// }
// let num = [551, 22, 3, 14, 5, 6, 7, 8, 229]
// num.sort(compare)
// num.reverse()
// console.log(num)

// Splice and Slice
// let num = [551, 22, 3, 14, 5, 6, 7, 8, 229]
// let deletedValues = num.splice(2, 4, 1021, 1022, 1023, 1024, 1025)
// console.log(num)
// console.log(deletedValues)

// let newNum = num.slice(3)
let newNum = num.slice(3, 5)
console.log(newNum)