"use strict";
/*
22. Intentional Error: If you haven’t received an array index error in one of your programs yet,
 try to make one happen. Change an index in one of your programs
to produce an index error. Make sure you correct the error before closing the program.*/
let list = [12, 13, 21, 41];
console.log(list[0]);
console.log(list[1]);
console.log(list[2]);
console.log(list[4]); // it will throw err undefined
console.log(list[3]);
/*
23. Conditional Tests: Write a series of conditional tests. Print a statement
describing each test and your prediction for the results of each test. Your code
should look something like this:

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates to True or False.

• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.*/
let car = "vigo 4*4";
console.log(car == "vigo 4*4");
console.log(car == "honda civic");
// array test
let arr = [1, 2, 3];
let arr2 = [1, 3, 4];
console.log(arr == arr);
console.log(arr == arr2);
//testing an object
let std = {
    name: "ali",
    age: 12
};
let std2 = {
    name: "ahmed",
    age: 12
};
console.log(std == std);
console.log(std == std2);
// arr length
let pets = ["dog", "cat", "hen"];
console.log(pets.length == 3);
console.log(pets.length == 9);
// test a doble compareing
let a = 10;
let b = 10;
let c = 11;
console.log(a == b);
console.log(a == c);
/*
24. More Conditional Tests: You don’t have to limit the number of   tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array

*/
// eqauility and inequility
let Name = "Ali";
let Name2 = "ali";
console.log(Name == "Ali"); // true
console.log(Name == "ali"); // false or inequil
// numerics tests
let num1 = 12;
let num2 = 13;
console.log(num1 == 12); //true or equal
console.log(num1 == 13); // not equal
console.log(num1 > 11); // greater then
console.log(num2 < 12); // less then
console.log(num1 >= 12); // greater then equal to
console.log(num2 <= 13); // less then equal to
//tes of && == and ,or==||
console.log(num1 > 3 && num2 < 14); // both true so result is true
console.log(num1 > 5 || num2 <= 15); // ans will true because one statement is true
// checking array test
let arr1 = [12, 13, 14, 15];
let animal = "dog";
console.log(Array.isArray(arr1));
console.log(Array.isArray(animal));
/*
25. Alien Colors #1: Imagine an alien was just shot down in a game. Create a
variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.

• Write an if statement to test whether the alien’s color is green. If it is, print
a message that the player just earned 5 points.

• Write one version of this program that passes the if test and another that
fails. (The version that fails will have no output.)*/
let alien_color = "green";
if (alien_color == "green") {
    console.log("player earn 4 points");
}
else {
    console.log("no output");
}
// test of failed 
let alien_color1 = "yellow";
if (alien_color1 == "green") {
    console.log("player earn 4 points");
}
else {
    console.log("no output");
} //else statement work beacause test failed
/*
26. Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and
write an if-else chain.

• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

• If the alien’s color isn’t green, print a statement that the player just earned 10 points.

• Write one version of this program that runs the if block and another that runs the else block.*/
//if block version 
let aliens_color = "green";
if (aliens_color == "green") {
    console.log("player earn 5 points");
}
else {
    console.log("no output");
}
// the version that runs the else block
let aliens_color1 = "pink";
if (aliens_color1 == "green") {
    console.log("player just earn 5 points");
}
else {
    console.log("player just earn 10 points");
}
