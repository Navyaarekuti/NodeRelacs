function fetchData()
{
    return 'data'
}

const dataPromise = fetchData()
{
    console.log(dataPromise);  //data
}

async function fetchData1()
{
    return 'data'
}
const dataPromise1 = fetchData1()
{
    console.log(dataPromise1);
}

dataPromise1.then(function(res)
{
    console.log("ans in then block", res)
})
const p = new Promise(function(resolve,reject)
{ setTimeout(function()
{
    resolve("Promise resolved using promise constructor")},3000)
});

function fetchData3(){
p.then(function(res)
{
    console.log("promise resolved",res)
    console.log("create impact")
   
})
}
//fetchData3()
const p1 = new Promise(function(resolve,reject)
{ setTimeout(function(){
    resolve("Promise resolved using async await")
},5000)})

async function handlePromise()
{console.log("create impact before async await mode")
    const value = await p1 //waitimg for the resolved data from the promise
    console.log("create impact in async await mode, only after await done? yes")
    console.log(value);
    }
handlePromise()

async function fetchData4()
{
    return 'data'
}

async function test1(){
    const p= await fetchData4
    console.log("why always use promise when async also returns promise -->cant use settimeout")
}

test1() // because in return we cant get data in settimout

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

function sample1()
{
    console.log("sample test1")
}
const sample2 = new Promise(function(resolve,result)
{setTimeout(function()
{
    resolve("sampletest2")
},4000)
})
async function getData()
{
    const data = await sample2
    console.log(data)
    console.log("since await is here it order will be maintained")
}
function sample3()
{
    console.log("sample test3")
}
sample1()
getData()
sample3()

function placeOrder(drink)
{
    return new Promise(function(resolve,reject)
    {
        if(drink==="coffee")
        {
            resolve("Order placed for coffee")
        }
        else{
            reject("we only serve coffee")
        }
    })
}

async function placeOrder(drink)
{
        if(drink==="coffee")
        {
            return ("Order placed for coffee");
        }
        else{
            throw new Error ("we only serve coffee");
        }
}

function processOrder(orderPlaced)
{
    return new Promise(function(resolve,reject)
{
    resolve("order placed by customer and served" + orderPlaced)
    //reject("order not served")
})
}
function generateBill(processBillOrder)
{
        return new Promise(function(resolve,reject)
        { setTimeout(function(){
            resolve(`${processBillOrder} and bill generated with Rs.200`)
        },5000)
    })
}

// placeOrder("coffee")
// .then(function(orderStatus)
// {
//     console.log(orderStatus)
//     return processOrder(orderStatus)
// })
// .then(function(processStatus)
// {
//     console.log(processStatus)
//     return generateBill(processStatus)
// })
// .then(function(bill)
// {
//     console.log(bill)
// })

// placeOrder("tea")
// .then(function(orderStatus)
// {
//     console.log(orderStatus)
// })
// .catch(function(err)
// {
//     console.log("Err:", err)
// })

async function handleOrder() {
    try {
      const orderStatus = await placeOrder("coffee");
      console.log("1:",orderStatus);
  
      const processStatus = await processOrder(orderStatus);
      console.log("2:",processStatus);
  
      const bill = await generateBill(processStatus);
      console.log("3:",bill);
    } catch (error) {
      console.log("Error:", error.message);
    }
  }
  
  handleOrder();