// Example for var (Scope for variable is limited to function)
var varName = 10;
function fn(){
    var varName = 20;
    varName++;
    console.log(varName);
    function a(){
        console.log(varName);
        var varName = 30;
        console.log(varName);
    }
    a();
    console.log(varName);
}
console.log(varName); 
fn();
console.log(varName);
// [10,21,undefined,30,21,10]