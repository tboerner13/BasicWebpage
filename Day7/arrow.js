//traditional JS function
function greet(name){
    return "Hello, " + name + "!";
}

console.log(greet("Tyler"));

function isPositive(number){
    return number >= 0;
}

//Arrow Functions...
let greetName = (name) => "Hello," + name + "!";

console.log(greetName('Boerner'))

let isPositiveNumber = (number) => number >= 0;
console.log(isPositiveNumber(5));

