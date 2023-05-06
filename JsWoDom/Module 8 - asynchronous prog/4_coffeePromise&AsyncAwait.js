//person orders coffee

//solution with promises
//1 promise - will have to check if person can only order coffee
function placeOrder(drink){
    return new Promise (function(resolve, reject){

        if(drink==='coffee'){
            resolve('order accepted')
        }
        else{
            reject('we can order coffee only')
        }
    })
}

//will have to wait for some time so you made a promise

function processingOrder(order){
    return new Promise(function(resolve){
        console.log('order being processed')
        resolve(`${order} & served`)
    })
}

// placeOrder('tea').then(function(orderPlaced){
//     console.log('orderPlaced')
//     let orderIsProcessed = processingOrder(orderPlaced) //coffee is being processed
//     return orderIsProcessed
// }).then(function(processedOrder){
//     console.log(processedOrder) //coffee served
// }).catch(function(err){
//     console.log(err)
//  }) //chaining of promise

//after checking if order is coffee it will resolve it
//thn will say for processingtime thn will resolve it through chainign


//solution with async await - keywords

async function serveOrder(){

    try {
        let orderPlaced = await placeOrder('coffee')
        console.log(orderPlaced)
        let processedOrder = await processingOrder(orderPlaced)
        console.log(processedOrder)
    } catch (error) {
        console.log(error)
    }

}
serveOrder()

//finally is also clause like try and catch and unlike these finally will always run on the basis of result