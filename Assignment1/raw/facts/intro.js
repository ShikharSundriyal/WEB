console.log("hello")
//dynamically typed , let-> a is a vairiable that intitially contains undefined
// primitive types : number, string,boolean,undefined,null
let a;
a = 10;
a = 10.1;
//string
a="string";
// dynamically typed as same variable is getting assigned different datatypes
console.log("a is",a);

// Taking input from console, input is an array type
// we take slice 2 to remove node.js and intro.js
let input = process.argv.slice(2);
let num = input[0];

// prime number program
let flag = true;
for(let div=2; div*div<=num;div++){
    if(num % div == 0){
        flag = false;
        break;
    }
}
if(flag){
    console.log(num," is prime");
}else{
    console.log(num," is not prime")
}
