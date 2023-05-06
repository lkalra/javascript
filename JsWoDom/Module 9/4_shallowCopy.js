// spread operator {...}
//shallow copy - if we donot want to reflect the change we did in second person in first person as we saw in reference.js

let firstPerson = {
   name :'Adam',
   age :23,

   address : {
      city : 'Lucknow',
      state: 'UP'

   }
}


let secondPerson = {...firstPerson} // Shallow Copy

secondPerson.name = 'Steve'

//issue with shallow copy it cannot change address it will show "up only after even changing it to delhi for second"
secondPerson.address.city = 'Delhi'


console.log(firstPerson)
console.log(secondPerson)