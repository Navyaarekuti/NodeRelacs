const task1 = function()
{
    console.log("Task 1")
}
const heavyTask = function()
{
console.log("HeavyTask started")
const start = Date.now();
while(Date.now()-start<3000)
{

}
console.log("HeavyTask ended")
}
const heavyTaskNonblocking = function()
{
    console.log("Async task skipping it for now");
    setTimeout(function(){
        console.log("Async task done")
    },3000)
    console.log("only setTimeout data will be skipped")
}

const data =[];
const fetchResponseBlocking = function()
{
    console.log("mimicking the API");
    const start = Date.now();
    while(Date.now()-start<3000)
    {//do nothing

    }
    console.log("api call done")
       
    data.push({id:1,name:"John"});
}

const renderResponse = function()
{
    console.log("rendering the response");
    console.log(data[0].name);
    console.log(data[0].id);
}

fetchResponseBlocking(); //3s
renderResponse();

const data2=[]
const fetchResponseNonBlocking = function(render)
{
    console.log("mimicking the API");
    setTimeout(function()
    {console.log("api call done")
        data2.push({id:1,name:"John2"})
        render();
    }, 3000)
   
    
}
const renderresponseNonBlocking = function()
{
    console.log("trying to rendering the nonblocking async response")
    console.log(data2[0].name);
    console.log(data2[0].id);
}
fetchResponseNonBlocking(renderresponseNonBlocking);
//renderresponseNonBlocking();


const task2 = function()
{
    console.log("Task 2")
}
task1();
heavyTask();
heavyTaskNonblocking();
task2();
