function printName(cb)
{
    console.log("cb",cb)
    console.log("Navya")
    console.log("_______________")
    /**
     * calling a received function
     */
  
    cb()
}

function printLastName()
{
    console.log("Verma")
}
function printAge()
{
    console.log(24)
}
printName(printLastName)
printName(printAge)

function greet(name)
{
    return `Hello ${name}`
}
function farewell(name)
{
    return `Goodbye ${name}`
}
function createSalutation(name1,fn)
{
    console.log(fn(name1))
}
createSalutation('Shubham', greet)
createSalutation('Shubham', farewell)

//Pure and impure functions

var c =0;
function sum(a,b)
{
    return a+b+c++
}
console.log(sum(1,2))
console.log(sum(1,2))

/**we are given an array with different radius we need to find the area for each radius and return a new array */

const myRadiusArray = [2,3,4,5,6]
function calculateArea(radiusArr)
{
    const result = []
    for(let i=0;i<radiusArr.length;i++)
    {
        result.push(Math.PI *radiusArr[i]*radiusArr[i])
    }
    return result
}
console.log(calculateArea(myRadiusArray));
function calculateCir(radiusArr)
{
    const result = []
    for(let i=0;i<radiusArr.length;i++)
    {
        result.push(2*Math.PI *radiusArr[i])
    }
    return result
}
console.log(calculateCir(myRadiusArray));

/**Higher order function */

function circleArea(radius)
{
    return Math.PI*radius*radius
}
function circleDia(radius)
{
    return 2*radius
}
function circleCir(radius)
{
    return 2*Math.PI*radius
}
function cal(radiusArr,logic)
{
    const result = []
    for(let i=0;i<radiusArr.length;i++)
    {
        result.push(logic(radiusArr[i]))
    }
    return result
   
}
const finalAreas = cal(myRadiusArray,circleArea)
console.log(finalAreas)
const finalAreas1 = cal(myRadiusArray,circleCir)

/**Array methods */

const arr = [1,2,3,4,5]
const sqrdValues = arr.map(function(num)
{
    return num*num
})
console.log(sqrdValues)

const evenArray = arr.filter(function(num)
{
    return num%2==0
})

const totalSum = arr.reduce(function(acc,currentValue)
{
acc=acc+currentValue
return acc
},0)
console.log(totalSum)

// Function that takes a callback
function performOperation(a, b, callback) {
    return callback(a, b);
}

// Callback functions
const sum = (a, b) => a + b;
const multiply = (a, b) => a * b;

// Using the callback functions
console.log("Sum:", performOperation(5, 3, sum));
console.log("Multiply:", performOperation(5, 3, multiply));

// function sum(a, b) {
//     return a + b;
// }

// const performOperation = (a, b, callback) => callback(a, b);

/*const performOperation = (a, b, callback) => {
    console.log(`Performing operation on ${a} and ${b}`);
    const result = callback(a, b);
    console.log(`Result: ${result}`);
    return result;
};*/

/**if arrow functions has many lines-> curly braces{}, return the value also */