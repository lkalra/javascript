class Animal {
    constructor(name) {
      this.name = Animal.capitalize(name)
    }
    walk() {
      alert("Animal " + this.name + " is walking")
    }
    static capitalize(name) {
      return name.charAt(0).toUpperCase() + name.substr(1, name.length)
    }
  }
  
  j = new Animal("jack")
  j.walk()
  // console.log(j.capitalize("thisa")) // --- > this doesnt work

//Static class methods are defined on the class itself. can call function on class but not on object
// You cannot call a static method on an object, only on an object class.