"use strict";
/*
34. Pizzas: Think of at least three kinds of your favorite pizza. Store these
pizza names in a array, and then use a for loop to print the name of each pizza.

• Modify your for loop to print a sentence using the name of the pizza
instead of printing just the name of the pizza. For each pizza you should
have one line of output containing a simple statement like I like pepperoni
pizza.

• Add a line at the end of your program, outside the for loop, that states
how much you like pizza. The output should consist of three or more lines
about the kinds of pizza you like and then an additional sentence, such as
I really love pizza!*/
let favorite_pizza = ["chicken fajita", "malai boti", "chicken an corn"];
for (let i = 0; i < favorite_pizza.length; i++) {
    console.log(`${favorite_pizza[i]} i like to eat it it when i wanna give myself reward of doing work`);
}
console.log(`i like to eat chicken fajita pizza due to its unique taste
chicken malai boti is my favourite due to malai boti 
chicken corn also had special taste i like all of these pizza vey much`);
/*
35. Animals: Think of at least three different animals that have a common characteristic.
Store the names of these animals in a list, and then use a for loop to
print out the name of each animal.
• Modify your program to print a statement about each animal, such as
A dog would make a great pet.
• Add a line at the end of your program stating what these animals have in
common. You could print a sentence such as Any of these animals would
make a great pet!
*/
let Animals = ["duck", "hen", "dog"];
for (let i = 0; i < Animals.length; i++) {
    console.log(`A ${Animals[i]} make a great pet`);
}
console.log(`any of these animals would make a great pet`);
/*
36. T-Shirt: Write a function called make_shirt() that accepts a size and the
text of a message that should be printed on the shirt. The function should print
a sentence summarizing the size of the shirt and the message printed on it.
Call the function.*/
function make_shirt(size, label) {
    //return size + label
    return `${size} is the size and ${label} is my label`;
}
let Myshirt = make_shirt(12, "lets code");
console.log(Myshirt);
/*
37. Large Shirts: Modify the make_shirt() function so that shirts are large
by default with a message that reads I love TypeScript. Make a large shirt and a
medium shirt with the default message, and a shirt of any size with a different
message.*/
// function make_shirt1(size:string , label:string){
//     return size + label
// }
// let myFunc=make_shirt1("large" , "i love typescript")
// console.log(myFunc)
// making shirt of medium size
// function make_shirt1(size:string , label:string){
//         return size + label
//     }
//     let myFunc=make_shirt1("medium" , "i love typescript")
//     console.log(myFunc)
// making shirt of any size
function make_shirt1(size, label) {
    return size + label;
}
let myFunc = make_shirt1("any size", "i love typescript");
console.log(myFunc);
/*
38. Cities: Write a function called describe_city() that accepts the name of
a city and its country. The function should print a simple sentence, such as
Karachi is in Pakistan. Give the parameter for the country a default value.
Call your function for three different cities, at least one of which is not in the
default country.*/
function describe_city(city, country) {
    return `${city} is in ${country}`;
}
let karachi = describe_city("karachi", "pakistan");
let lahore = describe_city("lahore", "pakistan");
let peshawar = describe_city("peshawar", "pakistan");
console.log(karachi);
console.log(lahore);
console.log(peshawar);
/*
39. City Names: Write a function called city_country() that takes in the name
of a city and its country. The function should return a string formatted like this:

"Lahore, Pakistan"

Call your function with at least three city-country pairs, and print the value
that’s returned.
*/
function city_country(city, country) {
    return `${city}, ${country}`;
}
let city1 = city_country("karachi", "pakistan");
let city2 = city_country("lahore", "pakistan");
let city3 = city_country("peshawar", "pakistan");
console.log(city1);
console.log(city2);
console.log(city3);
/*
40. Album: Write a function called make_album() that builds a Object
describing a music album. The function should take in an artist name and an
album title, and it should return a Object containing these two pieces of
information. Use the function to make three dictionaries representing different
albums. Print each return value to show that Objects are storing the
album information correctly.
Add an optional parameter to make_album() that allows you to store the
number of tracks on an album. If the calling line includes a value for the number
of tracks, add that value to the album’s Object. Make at least one new
function call that includes the number of tracks on an album.
// */
// function make_album(artist:string,title:string ){
//     return {artist ,title}
// }
// let album1=make_album("kapil","show")
// let album2=make_album("sidhu","296")
// let album3=make_album("hamza","jan e jahan")
// console.log(album1)
// console.log(album2)
// console.log(album3)
// no tracks
function make_album(artist, title, tracks) {
    return { artist, title, tracks };
}
let album1 = make_album("kapil", "show", 12);
let album2 = make_album("sidhu", "296", 11);
let album3 = make_album("hamza", "jan e jahan", 14);
console.log(album1);
console.log(album2);
console.log(album3);
/*
1. Magicians: Make a array of magician’s names. Pass the array to a function
called show_magicians(), which prints the name of each magician in the array.
*/
let magicians = ["black stone", "criss angel", "doug henning", "david blain"];
function magician() {
    for (let names of magicians) {
        console.log(names);
    }
}
magician();
/*
42. Great Magicians: Start with a copy of your program from Exercise 39.
Write a function called make_great() that modifies the array of magicians by adding
the phrase the Great to each magician’s name. Call show_magicians() to
see that the list has actually been modified.
*/
let make_great = ["black stone", "criss angel", "doug henning", "david blain"];
function show_magicians(great) {
    for (let names of magicians) {
        console.log(great, names);
    }
}
show_magicians("welcome to show Mr.");
/*
43. Unchanged Magicians: Start with your work from Exercise 40. Call the
function make_great() with a copy of the array of magicians’ names. Because the
original array will be unchanged, return the new array and store it in a separate array.
Call show_magicians() with each array to show that you have one array of the original
names and one array with the Great added to each magician’s name.*/
let magiciansName = ["black stone", "criss angel", "doug henning", "david blain"];
// copy of magiciannames
let magiciansNamecopy = ["black stone", "criss angel", "doug henning", "david blain"];
function show_magicians1(great) {
    let withGreatings = "";
    for (let names of magiciansNamecopy) {
        withGreatings += `${great} ${names}\n`;
    }
    return withGreatings;
}
let myGreatings = show_magicians1("its great honour to meet you Mr.");
let myArry = myGreatings.split("\n");
console.log(myArry);
//orignal arry
console.log(magiciansName);
/*
44. Sandwiches: Write a function that accepts a array of items a person wants
on a sandwich. The function should have one parameter that collects as many
items as the function call provides, and it should print a summary of the sandwich
that is being ordered. Call the function three times, using a different number
of arguments each time.*/
function sandwich(...items) {
    return `i want sandwich of ${items}`;
}
let argument1 = sandwich("cheese", "egg", "ketchup");
let argument2 = sandwich("jam", "egg", "lettuce");
let argument3 = sandwich("ham", "egg", "sauce");
console.log(argument1);
console.log(argument2);
console.log(argument3);
/*
45. Cars: Write a function that stores information about a car in a Object.
The function should always receive a manufacturer and a model name. It
should then accept an arbitrary number of keyword arguments. Call the function
with the required information and two other name-value pairs, such as a
color or an optional feature.
Print the Object that’s returned to make sure all the information was
stored correctly.
*/
function carDetails(manufacturer, name, ...additionalinfo) {
    let carinfo = Object.assign({ manufacturer, name }, Object.fromEntries(additionalinfo));
    return carinfo;
}
let myCarinfo = carDetails("toyta", "civic", ["colour", "black"], ["model", 2024]);
console.log(myCarinfo);
