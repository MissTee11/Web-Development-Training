
function changeColor()
{
    document.getElementById("circle").style.backgroundColor = "red";
}

/***********************************************************************************************************/

function newCounter()
{
    let count = 0;

    function increment()
    {
        count++;
        return count;
    }
    function decrement()
    {
        count--;
        return count;
    }

    return {increment, decrement};
    
}

const counter = newCounter();
/*const plus = document.getElementById("counterButton1");
const minus = document.getElementById("counterButton2");

plus.addEventListener("click", event=>
    {
    console.log("Current counter is : " ,counter.increment());
});
minus.addEventListener("click", event=>
    {
    console.log("Current counter is: " ,counter.decrement());
});*/

document.getElementById("counterButton1").onclick = function()
{
    const plus = counter.increment();
    console.log("Current counter is : ", plus);

};
document.getElementById("counterButton1").onclick = function()
{
    const plus = counter.increment();
    console.log("Current counter is : ", plus);

};

/***********************************************************************************************************/
const red = document.getElementById("red");
const blue = document.getElementById("blue");
const yellow = document.getElementById("yellow");
const purple = document.getElementById("purple");

red.addEventListener("click",() =>
    {
        document.body.style.backgroundColor = "Red";
    }
    );
    
blue.addEventListener("click",() =>
{
    document.body.style.backgroundColor = "blue";
}
);

yellow.addEventListener("click",() =>
    {
        document.body.style.backgroundColor = "yellow";
    }
    );
purple.addEventListener("click",() =>
    {
            document.body.style.backgroundColor = "purple";
    }
    );





