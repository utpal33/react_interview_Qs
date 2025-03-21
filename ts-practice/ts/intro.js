"use strict";
/*
types in typescript:
    1. Any : it makes code more javascriptish . like it means it don have any particular type.
    2. number: a number data type
    3. string : a string data type
    4. boolean : a boolean data type
    5.

    example:
        let variable_name:data type = value
 */
Object.defineProperty(exports, "__esModule", { value: true });
var fname = "utpal";
var age = 12.6; /* typescript infer by value that the variable is the num,ber data type */
// age = ""   
age.toFixed();
console.log(fname.toUpperCase(), age);
//!  any  /* where to use any or where to not */ 
//* any turn  off the type checking in typescript
//  typescript automatically give any type to a variable when it's not sure that what type is assign to that variable laterly
// example : 
var hero;
function getHeroName() {
    return "thor";
}
hero = getHeroName(); /* here typescript provide the type any to hero variable */
