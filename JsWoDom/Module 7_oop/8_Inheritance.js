class Person {
  constructor(_name , _age){
    this.name = _name
    this.age = _age
  }


  //method inheritance
  welcome(){
    console.log(`Welcome ${this.name}`)
  }
}


class Teacher extends Person {   //teacher extends from person because teacher have the same property as student(name &age)
  constructor(_name , _age , _classStrength){
    super(_name , _age)         //super helps in specific property you want to inherit
    this.classStrength = _classStrength
  }


  test(){
    super.welcome()
  }
}


class Student extends Person{
  constructor(_name , _age , _cgpa){
    super(_name , _age)
    this.cgpa = _cgpa
  }
}


let Person1 = new Person('Adam' , 23)

let Teacher1 = new Teacher('Mark' , 40  , 75)

Teacher1.test()

// console.log(Teacher1)

//getter, Setter & InstanceOff

class Animal {
  constructor(name) {
    this._name = name
  }
  fly() {
    console.log("Mai ud rha hu")
  }
  get name() {
    return this._name
  }

  set name(newName) {
    this._name = newName
  }

}

class Rabbit extends Animal {
  eatCarrot() {
    console.log("Eating carrot")
  }
}

let a = new Rabbit("Bruno")
a.fly()
console.log(a.name)
a.name = "Jack"
console.log(a.name)
let c = 56

console.log(a instanceof Animal)
console.log(a instanceof Rabbit)
console.log(c instanceof Animal)