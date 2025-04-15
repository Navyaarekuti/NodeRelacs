// function fetchData()
// {
//     return 'data'
// }

// const dataPromise = fetchData()
// {
//     console.log(dataPromise);  //data
// }

// async function fetchData1()
// {
//     return 'data'
// }
// const dataPromise1 = fetchData1()
// {
//     console.log(dataPromise1);
// }

// dataPromise1.then(function(res)
// {
//     console.log("ans in then block", res)
// })
const p = new Promise(function(resolve,reject)
{ setTimeout(function()
{
    resolve("Promise resolved using promise constructor")},3000)
});

// function fetchData3(){
// p.then(function(res)
// {
//     console.log("promise resolved",res)
//     console.log("create impact")
   
// })
// }
// //fetchData3()
const p1 = new Promise(function(resolve,reject)
{ setTimeout(function(){
    resolve("Promise resolved using async await")
},5000)})

// async function handlePromise()
// {console.log("create impact before async await mode")
//     const value = await p1 //waitimg for the resolved data from the promise
//     console.log("create impact in async await mode, only after await done? yes")
//     console.log(value);
//     }
// handlePromise()

// async function fetchData4()
// {
//     return 'data'
// }

// async function test1(){
//     const p= await fetchData4
//     console.log("why always use promise when async also returns promise -->cant use settimeout")
// }

// test1()

async function handlePromise2()
{console.log("two functions awaiting for same promise")
    const value1 = await p1 //waitimg for the resolved data from the promise
    console.log("first value1")
    console.log(value1);
    const value2 = await p//waitimg for the resolved data from the promise
    console.log("second value")
    console.log(value2);
    }
handlePromise2()