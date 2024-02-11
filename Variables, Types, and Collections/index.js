//variable declaration with var and let
var pagesize = 100;
let department = 'Sales';

//this will throw an error: pi = 1;
const pi = 3.14159;
// pi = 1;

//these are allowed
var fontFamily;
let fontSize; 

//this will throw an error: const font;
const font = 'Default';

if (typeof fontFamily == 'undefined') {  
    console.log(typeof fontFamily);
    fontFamily = 'Comic Sans';
    console.log(typeof fontFamily);
}

// Since null == undefined evaluates to true, the below can also be used:
if (fontFamily == null) {   
    fontFamily = 'Comic Sans';
}

console.log('null == undefined', null == undefined);
console.log('null === undefined', null === undefined);

// This example shows using the object wrapper class of the number data type:
// A numeric "amount" variable is initialized
let amount = 5123.4943;

// The variable is converted to an Object of the type Number just before toFixed() is called.
amount.toFixed(2);
// Alternatively, the wrapper object can be instantiated as below but is not necessary.
let amount2 = new Number(5123.4943);
console.log(typeof amount); // "number"
console.log(amount2 instanceof Number); // true



