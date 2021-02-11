// functions , arrays, objects
console.log("----------Functions----------")
function sayHi(param){
    console.log("hi ",param);
    let rVal = Math.random() > 0.5?"good":false
    return rVal;
}
//function returns undefined if it does not return anything
sayHi(1);
sayHi("1");
sayHi([10,20,30]);
let rval = sayHi(2);
console.log(rval)


console.log("----------Arrays----------")
// Array is a collection of hetrogenous datatypes, even function can be an element
let arr = [1,2,"abc",
{"name":"shikhar"},
function Inside(){
console.log("hello");
return "return_value";
}]
console.log(arr);
console.log(arr[arr.length-2].name);
console.log(arr[arr.length-1]());
console.log(arr[arr.length]); // will return undefined not index out of bound

// push -> add last 
// pop -> remove last
// unshift -> add First
// shift -> remove first

console.log("----------Slice method----------")
// slice method
let slicedArr = arr.slice(2,5); // values as 2,3,4 will be present in slicedArr
console.log("sliced arr",slicedArr);

console.log("----------Splice method----------")
// splice -> takes an argument starting index(idx) and number of elements from idx that needs to be removed, returns the removed elements
let splicedArr = arr.splice(1,4);
console.log("Spliced arr returns an array containing elements removed:",splicedArr);
console.log("After spliced, the original arr gets changed :",arr);

console.log("------------------For loop to iterate oven an array-------------------")
// for loop to iterate over an array
for(let i = 0; i<=splicedArr.length-1; i++){
    console.log(splicedArr[i]);
}

