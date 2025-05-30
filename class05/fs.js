//fs is used to interact with the filesystem
const fs1 = require('fs')
console.log("starting");
const data1 = fs1.readFileSync('file1.txt')
console.log("data of file1", data1.toString());
const data2 = fs1.readFileSync('file2.txt')
console.log("data of file2", data2.toString());

const data3= fs1.writeFileSync("file3.txt",data1)
console.log("data written from file1",data1.toString());

const fs = require('fs');

// Writing data to 'file1.txt'
fs.writeFile('file4.txt', 'Hello, this is some data for file4.', function(err) {
    if (err) {
        console.log('❌ Error writing file:', err);
        return;  // Exit if there is an error
    }

    console.log('✅ File written successfully');

    // After writing, let's read the file and log its content
    fs.readFile('file4.txt', 'utf8', function(err, data) {
        if (err) {
            console.log('❌ Error reading file:', err);
            return;
        }

        console.log('📖 Content of file4:', data);  // data is the content of the file
    });
});


//https://www.jsv9000.app/ --->js visualiser


/*function cachingFunction(complexCalculation) {
   
    window.cache = {};          //key-value pair where cache is the key and value is empty
   
    return function (arg) {
        if(window.cache.arg){           //3. we are checking if window.cache.arg has something then return it else go to step 1 and calculate
            return window.cache.arg;
        }
        let ans=complexCalculation(arg);    //1. calling complex calculation function with the argument as arg and storing it in ans
        window.cache[arg]=ans;               //2. instead of directly returning ans we will store ans in key value pair. We will store it in cache corresponsing to arg as, if arg changes then ans changes.
        return ans;
    };
}*/


/*Create a JavaScript function that uses closures to implement caching (memoization). The function should cache the results of complex calculations and return the cached result when the same inputs occur again.

// Example: A slow function (expensive computation)
function slowFunction(num) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i; // Simulating a complex calculation (Factorial)
    }
    return result;
}

// Create a memoized version of the function
const memoizedFactorial = memoize(slowFunction);

// 🔹 First Call: Computes and stores result
console.log(memoizedFactorial(5));  // Computing result -> 120
console.log(memoizedFactorial(6));  // Computing result -> 720

// 🔹 Second Call (Same Input): Returns from cache
console.log(memoizedFactorial(5));  // Returning from cache -> 120
console.log(memoizedFactorial(6));  // Returning from cache -> 720*/