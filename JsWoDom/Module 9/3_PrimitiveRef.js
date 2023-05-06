//created in stack memory
//first person got created in stack then named the second person same thn changed first person names because of stack both will show diff names

let firstPerson = 'Adam'


let secondPerson = firstPerson

firstPerson = 'Steve'


console.log('First Person '+ firstPerson)
console.log('Second Person '+ secondPerson)