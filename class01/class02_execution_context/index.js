var a= 2
var b= 3
function add(num1, num2)
{
    return num1+num2
}

let add1 = add(a,b);
console.log(add1)

function add2(num1, num2)
{
console.log(num1+num2)
}

add2(5,6)

var msg = "hello"
function greet()
{
    console.log(msg,"Happy new year")
}
console.log(msg)
greet()

/**in below code, firts line gives "undefined",  */

console.log(msg_1)

var msg_1 = "hello"
greet1()
function greet1()
{
    console.log(msg_1,"Happy new msg_1")
}
//greet1()


/** Let --> let & const variables although they are hoisted (In browesr under Script scope we can see these, but not available for use), you cant access them before initialization--->Temporal dead zone */
//console.log(num)
printName()
let num= 4
console.log(num)
function printName()
{
    console.log("My name is Mr.X")
}
let printAge = function()
{
    console.log("my age is 25")
}
printAge()