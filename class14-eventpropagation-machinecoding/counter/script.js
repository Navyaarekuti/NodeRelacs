const decrement = document.getElementById('decrement');
const increment = document.getElementById('increment');
const reset = document.getElementById('reset');
const countDisplay = document.getElementById('counter');

let count =0;
decrement.addEventListener("click",function()
{
    if(count>0)
    {
        count--;
        countDisplay.innerText = count;
    }
})
increment.addEventListener("click",function()
{
    
        count++;
        countDisplay.innerText = count;
    
})
reset.addEventListener("click",function()
{
    
        count=0;;
        countDisplay.innerText = count;
    
})
