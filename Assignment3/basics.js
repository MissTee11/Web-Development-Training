/*Javascript programs the behaviour of web pages.
it can change the html content of a web page, the attribute values, HTML styles, can hide elements and show hidden elements.*/

/*1.SYNTAX AND BASICS*/

{
    let place = "Zimbabwe";
    console.log("Country:",place);

}
let place = "Harare";
console.log("Capital City:",place);

/************************************************************************************************************************************** */

var numWord = "Twenty"
console.log("Number1:",numWord);

{
    var numWord = "Thirty";
    console.log("Number2:",numWord);
}
console.log("Number2:",numWord);

/*************************************************************************************************************************************** */

const color = ["Red","Blue","Yellow"];
console.log(color);
{
    const color = ["pink", "purple","peach"];
    console.log(color);

}

color[1] = "Beige";
console.log(color);
color.push("Orange");
console.log(color);
color.pop();
console.log(color);

/*************************************************************************************************************************************** */

/* 2.DATA TYPES*/

let intro ='Hello, I\'m Tariro';
console.log (typeof intro);
console.log(intro);

/**************************************************************************************************************************************** */

let digit;
digit = 30;
console.log(digit);
console.log (typeof digit);

/************************************************************************************************************************************** */


    let first = 10;
    let second = 10;
    let third = 20;
    console.log (first==second);
    console.log(first==third);
    console.log(typeof (first==third));


/*****************************************************************************************************************************************/

let laptop = {brand:"Lenovo", color:"silver",inches:"15"};
console.log(laptop);
console.log(typeof laptop);

/****************************************************************************************************************************************/

const laptops = ["Lenovo","HP","Huawei","Macbook"];
console.log(laptops);
console.log(typeof laptops);

/****************************************************************************************************************************************/


    let laptop1 = {brand:"Lenovo", color:"silver",inches:"15"};
    laptop1 = null;
    console.log(laptop1);
    console.log(typeof laptop1);
    


/****************************************************************************************************************************************/


    let laptop2 = {brand:"Lenovo", color:"silver",inches:"15"};
    laptop2 = undefined;
    console.log(laptop2);
    console.log(typeof laptop2);
    


/*****************************************************************************************************************************************/

const symbol = Symbol("RST");
console.log(symbol);
console.log(typeof symbol);

/*****************************************************************************************************************************************/

/*3.OPERATORS*/

let add;
add = 20 + 40;
console.log (add);
add = 20 ** 40;
console.log (add);
add = 40 % 20;
console.log (add);

/*****************************************************************************************************************************************/

let compare;
compare = 20 !== 40;
console.log (compare);
compare = 20 >= 40;
console.log (compare);
compare = 40 > 20;
console.log (compare);

/******************************************************************************************************************************************/

let greater;
greater = 20 !== 40;
console.log (greater);
greater = 20 >= 40;
console.log (greater);
greater = 40 > 20;
console.log (greater);

/******************************************************************************************************************************************/


    let ten = 10;
    let six = 6;

   console.log((ten > 15)&&(six == 6));
   console.log((ten > 15)||(six == 6));
   console.log(!(ten > 15));
   console.log(!(six == 6));



/*******************************************************************************************************************************************/

/*4.EXPRESSIONS AND STATEMENTS*/

//Statements

    let one, two, three; 
     one = 10;
     two = 10;
     three = 20; 


/*They are programming instructions that are executable.
 They can be grouped together in code blocks*/

//Expressions
var six2 = 6;
var seven = 7;
six2 + seven;
/*They are a combination of values, variables and operators.
Expressions compute to values called evaluations which are used in statements.*/

/********************************************************************************************************************************************/

/*CONTROL FLOW*/

//Conditional statements

function numberCheck(Num)
{
    if(typeof Num === 'number'&& Num > 0)

        {
            console.log(Num + " is positive");
        }
    else if( typeof Num === 'number'&& Num < 0)
        {
            console.log(Num + " is negative.")

        }
    else
        {
            console.log("Number is zero")
        }

}
numberCheck(42);
numberCheck(-19);
numberCheck(0);

/******************************************************************************************************************************************/

//Loops

for(let firstNum = 1 ; firstNum<11;firstNum++)
{
    console.log(firstNum);
}
/****************************************************************************************************************************************** */

let lastNum = 10;
while(lastNum > 1)
{
    lastNum-- ;
    console.log(lastNum);
}
/*******************************************************************************************************************************************/

let position = 1;
do
{
    console.log(position)
    position++;
    
}
while(position < 6);

/******************************************************************************************************************************************/

/*ERROR HANDLING*/

function Division(a,b)
{
    try
    {
       if(b==0)
       {
        throw("Cannot divide by zero.");
       }
       else
       {
        console.log(a/b);
       }

    }
    catch(err)
    {
       console.log("Error:  "+ err);
    }
    finally
    {
        console.log("The numbers have been divided.");
    }
}
Division(10,0);
Division(8,2);
Division(10, -2);

/*******************************************************************************************************************************************/

/*FUNCTIONS*/

function Introduction (name , age)
{
    console.log("Hello my name is "+ name +". I am "+ age +" years old.")
}
Introduction( "John" , 22);

/*******************************************************************************************************************************************/
let n = 4;
const factNum = function (n)
{
    if (n === 0) { 
        return 1; 
    } 
    else { 
        return n * factNum( n - 1 ); 
    } 
} ;
console.log(factNum(n));
/*******************************************************************************************************************************************/


let numToSquare= [2,4,6,8];
let squaredNum = () => numToSquare.map(number => number*number);

console.log(squaredNum());

/*******************************************************************************************************************************************/

function changeName()
{
    document.getElementById("heading").innerHTML= "Javascript Fundamentals";
}
/*******************************************************************************************************************************************/





























