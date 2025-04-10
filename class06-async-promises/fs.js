const fs = require('fs')
console.log("1")
const f1p= fs.promises.readFile("f1.txt");
f1p
.then(function(data)
{
console.log("this is data"+data) //file 1 data reading done
return fs.promises.readFile("f2.txt")
})
.then(function(data)
{
console.log("this is data"+data)  //file 1 data reading done
return fs.promises.readFile("f3.txt")
})
.then(function(data)
{
console.log("this is f3 data"+data)

})
console.log("@")

const fs = require('fs');
console.log("1");

const f1p = fs.promises.readFile("f1.txt");
f1p
  .then(function (data) {
    console.log("this is f1 data: " + data); // Reading f1.txt
    return fs.promises.readFile("f2.txt"); // Returning the promise to read f2.txt
  })
  .then(function (data) {
    console.log("this is f2 data: " + data); // Reading f2.txt
    return fs.promises.readFile("f3.txt"); // Returning the promise to read f3.txt
  })
  .then(function (data) {
    console.log("this is f3 data: " + data); // Reading f3.txt
  });

console.log("@");




function cb(err,data)
{
    if(err){
        console.log("error",err)
    }
else{
    console.log("success in readfile 1",data.toString())
}}

const promiseReadfile1 = fs.promises.readFile("f1.txt");
const promiseReadfile2 = fs.promises.readFile("f2.txt");
const promiseReadfile3 = fs.promises.readFile("f3.txt");
console.log(promiseReadfile1);

function readFileCallback(data)
{
    console.log("this is data"+data)
}
function handleError(err)
{
    console.log("this is error"+err)
}
promiseReadfile1.then(readFileCallback).catch(handleError)
promiseReadfile2.then(readFileCallback).catch(handleError)
promiseReadfile3.then(readFileCallback).catch(handleError)

promiseReadfile1.then(function(data){
   console.log("this is file data"+data.toString())
})
promiseReadfile1.catch(function(err)
    {
        console.log("this is error"+err.message)
    })

    promiseReadfile2.then(function(data){
        console.log("this is file data"+data.toString())
    })
    promiseReadfile2.catch(function(err)
        {
            console.log("this is error"+err.message)
        })
        promiseReadfile3.then(function(data){
            console.log("this is file data"+data.toString())
        })
        promiseReadfile3.catch(function(err)
            {
                console.log("this is error"+err.message)
            })

