console.log(a)//undefined result because in memory a is saved as undefined not initialized yet
greet()//result as expected because whole function body is saved in memory 

add(2 , 4) //wont work cause values not initialized yet variable add saved as undefined and we cannot call undefined


var a = 'hi'



function greet(){
       console.log('Hello from Scaler')
}


var add = function(a ,b){
       console.log(a+b)
}