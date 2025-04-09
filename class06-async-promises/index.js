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