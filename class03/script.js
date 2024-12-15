
console.log(a) // undefined --> Hoisting
var a = 10;
test() // no issue, because functionbody is mapped
function test()
{
console.log("this is a test function")
console.log(a)
}

/**Scope */

function greet()
{ 
    console.log(msg)  
}
var msg = "hello world"
greet()

function greet()
{   sayHappy()
    function sayHappy()
    {
    console.log(msg)
    }
}
var msg = "hello world"
greet()


/**In below, function variable is inside function above functions inner functions can see the variables outside the function */

function greet()   
{
    var msg = "hello world"
    sayHappy()
    function sayHappy()
    {
    console.log("inner",msg)
    }
}

greet()
console.log("outer",msg)

//output of below code : hellow orld, outer Hi
var msg = "Hi"
function greet()   
{
    var msg = "hello world"
    sayHappy()
    function sayHappy()
    {
    console.log("inner",msg)
    }
}

greet()
console.log("outer",msg)

function parent()
{
    var a= 20
    function child()
    {
        console.log(a)
        function child2()   //lexical --->position
        {
            console.log(a)
        }
        child2()
    }
    child()
}
parent()

/**Scope - lexical Environment (Local memory + lexical environment of parent (parent scope+ global scope )) */

// {
    // this is a stand alone block
// }
/**let and const were introduced to not make the variable outside scope-->Block level scoped
 * var is -->function scoped
 */
if(true)
{
    let blockScopedVariable = "i am inside an if block"
    console.log(blockScopedVariable)
}
//console.log(blockScopedVariable)

let val = 'some msg'
if(true)
{
    let val = "some other msg" //shawdoing(-->shadowing the variable declared in outerscope, or overriding the variable) -->block scoped
    console.log(val)
}
console.log("outside if", val)

function grandMa()
{
    const secret = "Maggi Masala"
    function bitti()
    {
        console.log("i know the secret", secret)
    }
    bitti()
}
grandMa()

function grandMa()
{
    const secret = "Maggi Masala"
    function bitti()
    {
        console.log("i know the secret", secret) //closure over parent 
    }
    return bitti //first class-citizens
}
const recipe = grandMa()
 /** thousands of lines of code */
 recipe()
/**closure - nothing but a function bundled with lexical scope */

function grandMa()
{
    const secret = "Maggi Masala"
    const unusedVal = 123
    function bitti()
    {
        console.log("i know the secret", secret) //closure over parent 
    }
    console.log(unusedVal)
    return bitti //first class-citizens
}
const recipe1 = grandMa()
    recipe1()

    /**in above example unused variables it wont use --> closures will not sure the variables after function execution context, that are not in inner functions, and only the ones that are used in child functions
     * if there is an outer function to which it is maintaing a reference --it brings that closure also
     */

    function createCounter() {
        var count = 0; // Function-scoped to `createCounter`
        return function() {
            count += 1;
            return count;
        };
    }
    
    const counter1 = createCounter();
    console.log(counter1()); // 1
    console.log(counter1()); // 2
    
    const counter2 = createCounter();
    console.log(counter2()); // 1 (Independent counter)-->seperate copy
    console.log(counter2()); // 2