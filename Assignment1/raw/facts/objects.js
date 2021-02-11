// objects are basically the key value pair
// to declare an object {}
let cap = {
    name:"Steve",
    LastName:"Rogers",
    friends:["tony"],
    address:{
        state:"Nyc",
        city:"Manhatten"
    },
    sayHi: function fn(){
        console.log("cap says hi");
        return "cap send blessings";
    }
}
console.log(cap);
console.log(cap.LastName);
console.log(cap.sayHi());
// for each loop 

for(let key in cap){
    console.log(key,cap[key]);
}
