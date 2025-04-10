const fs = require('fs')
fs.readFile('f1.txt',function(err,data)
{
    if(err)
    {
    console.log(err)
    return;
    }
    else{
        const processedData = data.toString();
        fs.writeFile('f2.txt',processedData,function(err)
    {
        if(err)
        {
            console.log(err);
            return
        }
        else{
            console.log("File written successfully")
        }
    })
    }
})

//Promise

const coinTossPromise = new Promise(function(resolve,reject){
{
  setTimeout(function(){
    const isHeads = Math.random()>0.5;
    if(isHeads)
    {
        resolve("Success")
    }
    else{
        reject("Consider tossing again-failure")
    }
  },1000);
    }});
   // console.log(coinTossPromise)

    coinTossPromise.then(function(result){        //on success
        console.log(result);
    })
    .catch(function(err){                       //on error
     console.log(err)
    })
    .finally(function(){                        //always executed
        console.log("Promise settled");
    })
    console.log("first line of code")
    const cleanRoom = function()
    {
        return new Promise(function(resolve,reject){
            setTimeout(function(){
            if(Math.random()<0.5){
                resolve("i cleaned the room");
            }
            
            else{
                reject("i didnot clean the room")
            }
        },3000)
        })
    }
        
    

    const eatFood = function(msg)
        {
            return new Promise(function(resolve,reject){
                if(Math.random()<0.5){
                resolve(msg+" i ate food")}
                else{
                    reject("i am not hungry")
                }})
            }
     const getCandy = function(msg)
            {
                return new Promise(function(resolve,reject){
                    resolve(msg+"now get candy")})
                }
    cleanRoom()
    .then(function(result)
{
    console.log("first",result);
    return eatFood(result)
    .then(function(result)
    {console.log("second",result);
        return getCandy(result)
        .then(function(result){
            console.log(result)
            console.log("finished"+result)
        })
    })
})
           .catch(function(err)
        {
            console.log("error",err)
        })
     
        .finally(function(){
            console.log("All done");
        })
console.log("last line of code")