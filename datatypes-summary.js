// Primitive Datatype


//7 type:String,number,boolean,null,undefined,symbol,BigInt


//REference type(non primitive)
//Array,objects,functions


const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id===anotherId);  //NOT SAME VALUE

const bigNumber=44478992292879987678877788n
const heros=['rohan','sohan','raj','sohan'] // array values

//object ko curly bracket me likhte hai

{
    name:"hitesh",
    age: 22,
}
// dusri tariko se bhi likh sakte hai


let myObj={
    name:"hit",
    age: 78,
}

// NOTE- f{unction ko hm javascript me ek variable ke tarah trit kar sakte hai
const myFunction=function(){
    console.log("hello world");
    
}

console.log(typeof myFunction) // function
console.log(typeof heros )// object
console.log(typeof anotherId ) // symbol
console.log(typeof bigNumber);

