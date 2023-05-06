// In JavaScript, the for-in loop allows you to loop through the properties of an object. 
// The statements of code found within the loop body will be executed once for each property of the object.


var colors = {
       primary : 'Blue',
       secondary : 'Red',
       tertiary : 'White'
}


// syntax

for(var color1 in colors){
       console.log(color1 +' -> '+colors[color1])
}


var colorsArray = ['Yellow' , 'Green' , 'Orange' , 'Pink']


for(var color in colorsArray){
       console.log(color+' -> '+colorsArray[color])
}

