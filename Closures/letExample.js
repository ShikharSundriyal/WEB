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