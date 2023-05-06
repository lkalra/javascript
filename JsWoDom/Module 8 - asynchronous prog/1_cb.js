// Synchronous prog - will use singlr thread one operation at a time.
//asynchronous - will send multiple request to server at a time.

// fs = file system = node module enables interacting with files



// const fs = require('fs')


//syncho behaviour - will wait if file is heavy
// console.log('First Line')
// let data = fs.readFileSync('f1.txt')
// console.log('File 1 Data -> '+ data)
// console.log('Last Line')


// let data = fs.readFileSync('f1.txt')

// console.log('File 1 Data -> '+ data)

// let data2 = fs.readFileSync('f2.txt')

// console.log('File 2 data -> ' + data2)



///asynchr

// result - first line, last line, file1, file2, file3
//1 step first line goes in call stack and printed
// thn readfile with cb1 goes into node api
// thn readfile with cb2 goes into node api
// thn lastline goes in call stack and printed


//calback queue will take callback functions from node api (memory)- can be random order
//event loop will allow functions to go in callstack one by one and will print also only when it(callstack) is empty //or all synch code is executed(first and last line)


//serial execution of async code 

const fs = require('fs')

console.log('First Line')

fs.readFile('f1.txt' , cb1)

function cb1(err , data){
       if(err){
              console.log(err) 
       }

       console.log('File 1 data-> ' + data)
       fs.readFile('f2.txt' , cb2)
}




function cb2(err , data){
       if(err){
              console.log(err) 
       }

       console.log('File 2 data-> ' + data)
       fs.readFile('f3.txt' , cb3)
}



function cb3(err , data){
       if(err){
              console.log(err) 
       }

       console.log('File 3 data-> ' + data)
}

console.log('Last Line')

// result - first line, last line, file1, file2, file3
//1 step first line goes in call stack and printed
// thn readfile with cb1 goes into node api
// thn readfile with cb2 goes into node api
//thn readfile with cb3 goes into node api
// thn lastline goes in call stack and printed

//calback queue will take callback functions from node api (memory)- can be random order
//event loop will allow functions to go in callstack one by one and will print also only when it(callstack) is empty //or all synch code is executed(first and last line)


