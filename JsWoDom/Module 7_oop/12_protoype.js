// linked - index1.html

function Person(_name, _age){
    this.name = _name
    this.age = _age

    this.getNameAndAge = function(){
        console.log(`I am ${this.name} and my age is ${this.age}`)
    }


}

let person1 = new Person('adam', 25)

let person2 = new Person('steve', 25)

console.log(person1)
console.log(person1)

//will return age and name differently but
//function same for both so we will create getNameAndAge
//function in person prototype so it will not repeat - below


// function Person(_name, _age){
//     this.name = _name
//     this.age = _age

// }

// Person.prototype.getNameAndAge = function(){
//     console.log(`I am ${this.name} and my age is ${this.age}`)


// let person1 = new Person('adam', 25)

// let person2 = new Person('steve', 25)

// console.log(person1)
// console.log(person2)


//you will see getNameAndAge function inside the person prototype