//callback - one function as an argument to another function


function printName(firstname , cb){
       console.log(firstname)
       cb('Rogers')
}

function printLastName(lastname){
       console.log(lastname)
}


printName('Steve' , printLastName )// callback




// 

const isEven = (n)=>{
    return n%2==0
}


let printResult = (evenFn , num ) =>{
    const isNumEven = evenFn(num)

    console.log(`The number ${num} is an Even Number ${isNumEven} `)
}



printResult(isEven , 9)