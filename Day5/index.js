console.log("Hello WORLRLRLLLRLRLRLRLRLR!");
console.log("The answer is " + 42);
//alert("Message!");
//single line comment
/*Multi
Line Comments */
//Variables
let level = 23;
let accuracy = 0.99;
let name = "Pikachu";
let temp = [55, 60, 57, 5]; //array

let isValid = "hello"

const BEST_CLASS="NONE of the Above";
//BEST_CLASS="COMS2163"; //error

let credit = 5 + 4 + (2*3);

//strings
let names = "Tyler Boerner";
let fName = names.substring(0, names.indexOf(" "));
let len = fName.length;
console.log(fName, len);

//Loops and conditions....

function mystery(a,b){
    if(a > b){
        return 0;
    }    
    else if(a = b){
        return 1
    }
    else{
        let result = 0;
        for(let i=a; i<=b; i++){
            result +=i;
        }
        return result;
    }  
}


// while(condition){
//     //code;
// }

// do{
//     statements;
// }while(condition);
console.log(mystery(4,6));

//arrays
let stuff = ["Earth", "Water", "Air", "Fire"];
let stuff2 = [];
stuff2[0] = 'Hello';
stuff2[2] = 'My';

//array methods
stuff.push('more elements');
stuff.unshift("Tyler"); //adds to front of array
stuff.pop(); //delete from end
stuff.sort();



