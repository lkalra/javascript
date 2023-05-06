//creating promise


let myPromise = new Promise(function(resolve, reject){
    let a = 4
    let b = 5

    setTimeout(() => {
        if(a===b){
            resolve('values equal')
        }
        else{
            reject('values not equal')
        }
    }, 2000)
})

console.log(myPromise) //pending because created promise first printing before code got executed

//how to get output

myPromise.then(function(result){

    console.log(result) //fulfilled state

})

myPromise.catch(function(failedResult){

    console.log(failedResult)//rejected state

})




//promises execute through microtask queue and have higher priority thn callback task queue
//task queue handles callbacks and microtask queue handles promises

// function logA(){ console.log('A')}
// function logB(){ console.log('B')}
// function logC(){ console.log('C')}
// function logD(){ console.log('D')}

// logA();                               //call stack thn executes
// setTimeout(logB, 0);                  //settime is asynch function will go to task queue after printing c evenloop will check for empty callstack will push this fn in callstack thn executes
// Promise.resolve().then(logC);         //Microtask queue - event loop will give microtask first priority thn task queue and will push it in callstack thn execute
// logD();                               // callstack thn executes

// result - a d c b 


//Promise.all -used when we need to get value only after solving all promise in array
// let promise_all = Promise.allSettled([p1, p2, p3]) //will show with status of object in array
// let promise_all = Promise.race([p1, p2, p3]) //will show which one executed first