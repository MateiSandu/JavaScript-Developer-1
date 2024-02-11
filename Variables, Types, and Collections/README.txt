Variables, Types, and Collections: 23%

-------------------------------------------------------------------------
The name of a variable is called an identifier, and it must conform to certain naming rules.
A variable can be declared using the var, let or const keyword. 
Global variables exist outside any function while local variables are defined inside a particular function. 

var - The var keyword can be used to declare a local or global variable. The variable can be initialized to a value.
let - The let keyword can be used to declare a block-scoped, local variable. The variable can be initialized to a value.
const - The const keyword can be used to declare a block-scoped, read-only constant. It must be initialized to a value.
-------------------------------------------------------------------------

-------------------------------------------------------------------------
Eight data types are supported in JavaScript for storing data. These are Boolean, Number, String, BigInt, Symbol, Object, null, and undefined. 

Number -> Number is a primitive data type allows storing an integer or floating point number.
String -> String is a primitive data type that allows storing a sequence of characters that represent a text value.
BigInt -> BigInt is a primitive data type allows storing an integer with arbitrary precision format.
Object -> The Object data type can be used to store keyed collections of data items and complex entities.
null -> The null keyword represents any null value. It is a case-sensitive and primitive value.
Boolean -> Boolean is a primitive data type that allows storing the value of true or false.
undefined -> The undefined keyword represents a primitive value that is not defined. It is auto-assigned to a variable that has been declared but not initialized.
Symbol -> Symbol is a primitive data type that can be used to define unique and immutable values. 

(Symbol is a built-in object whose constructor returns a symbol primitive that is guaranteed to be unique. Symbols are often used to add unique property keys to an object that won't collide with keys any other code might add to the object, and which are hidden from any mechanisms other code will typically use to access the object.)
To create a new primitive Symbol, you write Symbol() with an optional string as its description:
const sym1 = Symbol();
const sym2 = Symbol("foo");
-------------------------------------------------------------------------

Unlike primitive data types, the content of an object or array that is initialized using the const keyword can be modified.

Each identifier must begin with a letter, underscore (_), or dollar sign ($). Characters that follow can be letters or digits (0-9), underscore (_), or dollar sign ($).
Identifiers are case-sensitive, which means that uppercase (A-Z) and lowercase (a-z) letters are considered different.
Some examples are productName, $name, _brand, price1, store_location, DISCOUNT, etc.
Unicode characters (such as Ƞ) and unicode escape sequences(such as \u00D5) can be used as characters in identifiers.


When a variable which is declared using var or let keywords and not assigned to an initial value, its value is undefined!! Good practice to check if the variable has a value before using it.

Null == Undefined -> True
Null === Undefined -> False

When a variable is declared outside any function, it is called a global variable. 
On the other hand, if it is declared inside a function, it is called a local variable. 
The scope of a variable is based on where it is declared.

"use strict"; -> enable strict mode in current code scope
Strict mode enforces stricter rules when writing JavaScript code. For example, a variable cannot be used without being declared.


It is possible to use a variable that is declared only later in the code using var due to hoisting. A hoisted var variable returns the value of undefined.

Can contain values: 
Boolean
number
String
Symbol

Cannot contain values:
null
undefined


Wrapper Objects
String, boolean, and number data types cannot contain properties. 
However, each of these data types has an Object wrapper class which allow them to contain properties.

// This example shows using the object wrapper class of the number data type:
// A numeric "amount" variable is initialized
let amount = 5123.4943;

// The variable is converted to an Object of the type Number just before toFixed() is called.
amount.toFixed(2);
// Alternatively, the wrapper object can be instantiated as below but is not necessary.
let amount2 = new Number(5123.4943);
console.log(typeof amount); // "number"
console.log(amount2 instanceof Number); // true

The typeof keyword returns the type of a value. 
The instanceof keyword returns true if a value is an instance of an object.


Typecasting
A variable of one data type can be explicitly converted to another data type which is called typecasting. The following methods can be used:

Number -> When used with the new keyword, a number object is created. When used as a method, a number primitive is returned.
String -> When used with the new keyword, a string object is created. When used as a method, a string primitive is returned.
Boolean -> When used with the new keyword, a boolean object is created. When used as a method, a boolean primitive is returned.

toString() -> Method used to convert a number to a string
parseInt() -> Method used to parse a string argument to an integer or NaN.
parseFloat() -> Method used to parse an argument and return a floating point number 


NULL vs Undefined
A variable is null if it has been explicitly assigned a null value. let record = {}; record = null; record === null; //true    typeof record; // 'object'

A variable is undefined if it has been declared but no value has been assigned. let name; name === undefined;// true    typeof name; // 'undefined'
