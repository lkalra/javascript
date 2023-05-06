// linked index1.html

let myobj = {}

console.log(myobj) // will show object - (prototype)object - method & properties


let person1 = {
    name : 'kalra',
    age : 24,
}

console.log(person1) //properties - (prototype)object

console.log(person1.hasOwnProperty('name')) //true return

//prototype object gets linked to my object by default
// and inside that you can find all objects tht you can use

function person(_name, _age){
    this.name = _name
    this.age = _age
}

let person2 = new person('steve',30)

console.log(person2)

//properties - prototype(person or constructor) - prototype(object)
//person prototype will have our own methods
//object protoype will have inbuilt methods



