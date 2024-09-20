
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
    document.getElementById("number").textContent = plus;
    console.log("Current counter is : ", plus);

};

document.getElementById("counterButton2").onclick = function()
{
    const minus = counter.decrement();
    document.getElementById("number").textContent = minus;
    console.log("Current counter is : ", minus);

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

/************************************************************************************************************/



function Visibility()
{
    const text = document.getElementById("paragraph");
    const toggle = document.getElementById("flexSwitchCheckDefault");
    if (toggle.checked)
    {
        text.style.display = "none";
    }
    else
    {
        text.style.display = "block";
    }
}



/************************************************************************************************************/

const picture = document.getElementById("tree");

picture.addEventListener("mouseover", event=> 
{
    event.target.style.width ="100%";
}
);
picture.addEventListener("mouseout", event=> 
    {
        event.target.style.width ="40%";
    }
    );

/************************************************************************************************************/

//ANIMATE

document.getElementById("fadeButton").onclick=function()

{
    const fade =document.getElementById("square");
    fade.style.opacity = "0";
};






