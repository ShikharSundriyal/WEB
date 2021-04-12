var myVar = 10;

function c(){
    console.log("4",myVar);
}
function b(){
    let myVar = 20;
    console.log("8",myVar);
    c();
    console.log("10",myVar);
}
console.log("12",myVar);
function a(){
    let myVar = 30;
    console.log("15",myVar);
    b();
    console.log("17",myVar);
}
a();
console.log("20",myVar);