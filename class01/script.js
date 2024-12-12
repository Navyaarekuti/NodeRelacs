console.log("hello, welcome to javascript world")
/**
 * Datatypes in js:
 * 1.number
 * 2.bigint
 * 3.string
 * 4.boolean
 * 5.null
 * 6.symbol
 * 7.Object
 */

let value= "hello"
value=1234

/**Number type*/
let number1 = 12
let number2 = 12.345
//Infinity and NaN
console.log(11/0)
console.log("string"/100)
console.log("Mr.Ambani net worth is 100bn",1000_000_000_000+10200)
console.log("elon musk net worth is 200bn",2e11)
console.log("millionth of second 10^-6",1e-6)

console.log("123"+10) //if one of the operand is string, we use + operator then it will concatanate
console.log(+"123"+10)
console.log("123"-10)

/**bigint
 * number type can represnet numbers form -(2^53-1) to (2^53-1) (64 bit memory representation)
 * bigint can represent numbers beyond this range
 * represent bigint by adding n at the end of the number 1n,2n
 */

/**String
 * 1.Single quote - 'hello'
 * 2.Double quotes - "hello"
 * 3.backticks - generate the dynamic strings
 */
const activeUsers = 1000
const message = `THere are ${activeUsers} some users online `
const message2 = "There are" + activeUsers + "users online"
console.log(message)
console.log(message2)

/**Boolean - true or false */
console.log(1<2)
const val = "hello"
if(val)
{
    console.log("val is present")
}
else{
    console.log("fasly value")
}
/**null and undefined
 null, undefined, false,0,NaN, "" --> are falsy values in Js
 */
var a
console.log(a)
a=10

var temp = null //null is falsy value
if(temp)
{
    console.log("temp is present")
    console.log(temp)
}
else{
    console.log("temp not present")
    temp =10
    console.log(temp)
}
/**Objects */
const user = new Object()
console.log(user)  //Object Constructor Syntax
const anotherUser = {}
console.log(anotherUser) //Object Literal
const person ={
    name : "Kohli",
    age: 34

}
person.isRanked = true;
console.log(person.isRanked)
console.log(person.name)
console.log(person["name"])
const key = "age";
console.log(person[key]);
delete user.name
console.log(user)

//adding a multiline property
const key1 = "man of the match"
person[key1] = true
person["man of series"]= true
console.log(person)

//typeOf Operator

console.log(typeof undefined)
console.log(typeof 0)
console.log(typeof "0")
console.log(typeof true)
console.log(typeof null)
console.log(typeof Symbol('id'))
console.log(typeof function(){})

/**arrays */
// Arrays in JS are stored as Objects indices are keys and values can be anything
const arr = [1,2,3,4,5]
console.log(typeof arr)
const arr2 = [1, function(){}, "hello", true, "unity in diversity"]
console.log(arr2[2])
console.log(typeof arr2)
console.log(arr2.length)

/**functions */
/* using let we cant redeclare */
function myFirstFunction(name)
{
    //name = "Mr.X"
    var name = "Mr.Y"

    console.log(`hello ${name} from my first function`)
}
myFirstFunction("JS")

/** lat vs var */
console.log(a); // undefined
var a = 10;

//console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 20;

/* VAR Allows re-declaration of the same variable within the same scope.*/
var a = 10;
var a = 20; // No error
console.log(a); // 20

/** LET Does not allow re-declaration within the same scope. */
let c = 30;
//let c = 40; // SyntaxError: Identifier 'b' has already been declared

/*Use let for variables that will be reassigned but have block scope.
Use const for variables that won't be reassigned.
Avoid using var as much as possible, as it can lead to bugs due to its function scope and hoisting behavior.
Feature	->var |	let
Scope ->	Function-scoped	 | Block-scoped
Hoisting->	Yes, initialized to undefined	| Yes, but in temporal dead zone
Re-declaration->	Allowed	Not allowed in the same scope
Global Object Property	Yes	| No */

var a = 10;
console.log(global.a); // 10

let d = 20;
console.log(global.d); // undefined

global.a = 10; // Explicitly attach 'a' to the global object
console.log(global.a); // Output: 10




