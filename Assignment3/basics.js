/*Javascript programs the behaviour of web pages.
it can change the html content of a web page, the attribute values, HTML styles, can hide elements and show hidden elements.*/

/*1.SYNTAX AND BASICS*/

{
    let x = "Zimbabwe";
    console.log("Country:",x);

}
let x = "Harare";
console.log("Capital City:",x);

/************************************************************************************************************************************** */

var y = "Twenty"
console.log("Number1:",y);

{
    var y = "Thirty";
    console.log("Number2:",y);
}
console.log("Number2:",y);

/*************************************************************************************************************************************** */

const z = ["Red","Blue","Yellow"];
console.log(z);
{
    const z = {color1:"pink", color2:"purple",color3:"peach"};
    console.log(z);

}

z[1] = "Beige";
console.log(z);
z.push("Orange");
console.log(z);
z.pop();
console.log(z);

/*************************************************************************************************************************************** */

/* 2.DATA TYPES*/

let intro ='Hello, I\'m Tariro';
console.log (typeof intro);
console.log(intro);

/**************************************************************************************************************************************** */

let c;
c = 30;
console.log(c);
console.log (typeof c);

/************************************************************************************************************************************** */

{
    let x = 10;
    let y = 10;
    let z = 20;
    console.log (x==y);
    console.log(x==z);
    console.log(typeof (x==z));

}
/*****************************************************************************************************************************************/

let laptop = {brand:"Lenovo", color:"silver",inches:"15"};
console.log(laptop);
console.log(typeof laptop);

/****************************************************************************************************************************************/

const laptops = ["Lenovo","HP","Huawei","Macbook"];
console.log(laptops);
console.log(typeof laptops);

/****************************************************************************************************************************************/

{
    let laptop = {brand:"Lenovo", color:"silver",inches:"15"};
    laptop = null;
    console.log(laptop);
    console.log(typeof laptop);
    
}

/****************************************************************************************************************************************/

{
    let laptop = {brand:"Lenovo", color:"silver",inches:"15"};
    laptop = undefined;
    console.log(laptop);
    console.log(typeof laptop);
    
}

/*****************************************************************************************************************************************/

const symbol = Symbol("RST");
console.log(symbol);
console.log(typeof symbol);

/*****************************************************************************************************************************************/

/*3.OPERATORS*/

let e;
e = 20 + 40;
console.log (e);
e = 20 ** 40;
console.log (e);
e = 40 % 20;
console.log (e);

/*****************************************************************************************************************************************/

let f;
f = 20 !== 40;
console.log (f);
f = 20 >= 40;
console.log (f);
f = 40 > 20;
console.log (f);

/******************************************************************************************************************************************/

let g;
g = 20 !== 40;
console.log (g);
g = 20 >= 40;
console.log (g);
g = 40 > 20;
console.log (g);

/******************************************************************************************************************************************/

{
    let a = 10;
    let b = 6;

   console.log((a > 15)&&(b == 6));
   console.log((a > 15)||(b == 6));
   console.log(!(a > 15));
   console.log(!(b == 6));

}

/*******************************************************************************************************************************************/

/*4.EXPRESSIONS AND STATEMENTS*/

//Statements
{
    let x, y, z; 
     x = 10;
     y = 10;
     z = 20; 
}
/*They are programming instructions that are executable.
 They can be grouped together in code blocks*/

//Expressions
var a = 6;
var b = 7;
a + b;
/*They are a combination of values, variables and operators.
Expressions compute to values called evaluations which are used in statements.*/

/********************************************************************************************************************************************/































