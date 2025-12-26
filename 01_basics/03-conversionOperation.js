let score=33
console.log(typeof score);//number
// same
console.log(typeof (score));  //Number 


//  conversion in string

let valueString=String(score)
console.log(typeof valueString)



let m="33abs" // string
//  convert in number
let n= Number(m);
console.log(n) //give the result NAN(not a number)
console.log(typeof n); // number type






let r=null
console.log(typeof r); // object

//null change in number

let p=Number(r)
console.log(p) // output 0
console.log(typeof p); //Number    






let a=undefined
console.log(typeof a); // undefined

//undefined change in number

let R=Number(a)
console.log(R) // output NAN
console.log(typeof R); //Number






let team=true
console.log(typeof team); // boolean

//true change in number

let yes=Number(team)
console.log(yes) // output 1
console.log(typeof yes); //Number










let j="roshani"
console.log(typeof j); // string

//roshani change in number

let Ros=Number(j)
console.log(Ros) // output NaN
console.log(typeof Ros); //Number



//  NOTE
// "33"- 33
// "33abc"-NAN
// true- 1;false-0



let isLoggedIn=1
let booleanIsLoggedIn= Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); //true


//Note

// 1-true and 0-false and any string-true
// ""=give false value
// "ros"=true




let i=3
console.log(typeof i); // number

//3 change in string

let Ro=String(i)
console.log(Ro) // output 3
console.log(typeof Ro); String




// operation

console.log("1"+2)//12
console.log(1+"2")//12
console.log("1"+2+2)//122
console.log(1+2+"2")//32
console.log(+true)//1
console.log(true+)// not possibe
console.log(+"");// 0

let num1,num2,num3
num1=num2=num3=2+2

let gameCounter=100
gameCounter++;
console.log(gameCounter);// 101


let gameCounter1=100
gameCounter++;
console.log(gameCounter1);// 101


