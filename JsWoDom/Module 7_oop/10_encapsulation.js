//encapsulation means controlling access like you should not be allowed to change the data from outside of the class


function Person(_name , _age){
       var name = _name
       this.age = _age


       this.getName = function(){
              return name
       }
}



let Person1 = new Person("Adam" , 25)

// Person1.name='steve'   // can change name if in function class name is followed by this.name instead of var name

console.log(Person1.getName())