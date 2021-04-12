// let fName = "Shikhar";
// function firstName(){
//     //console.log(fName);
//     return function fullName(lastName){
//         console.log(fName+" "+lastName);
//     }
// }
// let rVal = firstName();
// rVal("Rogers"); 
// // const h = "hello";
// // h = "be"; // Reassignment not allowed

// Example for var (Scope for variable is limited to function)
// var varName = 10;
// function fn(){
//     var varName = 20;
//     varName++;
//     console.log(varName);
//     function a(){
//         console.log(varName);
//         var varName = 30;
//         console.log(varName);
//     }
//     a();
//     console.log(varName);
// }
// console.log(varName); 
// fn();
// console.log(varName);
// [10,21,undefined,30,21,10]

//Example for let (scope for variable limited to block)
let varName = 10;
function fn(){
    let varName = 20;
    varName++;
    console.log(varName);
    function a(){
        // console.log(varName); // Error cannot be used before initilisation
        let varName = 30;
        console.log(varName);
    }
    a();
    console.log(varName);
}
console.log(varName); 
fn();
console.log(varName);
// [10,21,30,21,10]