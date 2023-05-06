let person1 = {
    firstname : 'steve',
    lastname : 'rogers',
    age : 102,

    printdetails : function(){
        console.log(`Hi i am ${this.firstname} ${this.lastname} and i am ${this.age} years old`)
    }
}

person1.printdetails()

let person2 = {
    firstname : 'tony',
    lastname : 'stark',
    age : 41,

}

//call

person1.printdetails.call(person2)

person2.printdetails()



//or

// take the printdetails function outside 

// let printdetails = function(city){
//     console.log(`Hi i am ${this.firstname} ${this.lastname} and i am ${this.age} years old and i am from ${city}`)
// }
// printdetails.call(person2, 'new york')

// this will also work


//apply
// printdetails.apply(person2, ['new york']) //have to pass args inside array


//bind - allows to store a function and call later

// let myfun = printdetails.bind(person2, 'new york')
//myfun will give the result
