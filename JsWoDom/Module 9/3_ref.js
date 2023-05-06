//created in heap memory
//firstpersn will save address of object in heap memory
//when we say second=first it will save address of object thats why both will be affected if anyone changes


let firstPerson = {
       name : 'Adam',
       age : 23
}


let secondPerson = firstPerson

secondPerson.name ='steve'

console.log(firstPerson)
console.log(secondPerson)