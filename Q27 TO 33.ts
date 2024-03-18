/*
27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.

• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien.*/
let aliens_color2 = "green";
if (aliens_color2== "green") {
    console.log("player earn 5 points");

}else if (aliens_color2 == "yellow") {
    console.log("player earn 10 points");
}else if(aliens_color2== "green") {
    console.log("player earn 15 points")}else{
console.log("player earned 0 points")
    }
   /*
   28. Stages of Life: Write an if-else chain that determines a person’s stage of life.
    Set a value for the variable age, and then:

• If the person is less than 2 years old, print a message that the person is a baby.

• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

• If the person is at least 4 years old but less than 13, print a message that the person is a kid.

• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

• If the person is at least 20 years old but less than 65, print a message that the person is an adult.

• If the person is age 65 or older, print a message that the person is an elder. */
let person_age= 2;
if (person_age < 2) {
    console.log("person is a baby");

}else if (person_age>=2 && person_age<4) {
    console.log("pereson is toddler");
}else if(person_age>=4 && person_age < 13) {
    console.log("person is a kid")}else if(person_age>=13 && person_age < 20){
console.log("person is teenager")}else if(person_age>=20 && person_age<65){
    console.log("person is young")

}else if(person_age>=65){
    console.log("person is elder")
}else{
    console.log("life end"
    )
}
/*
29. Favorite Fruit: Make a array of your favorite fruits,
 and then write a series of independent if statements that check for certain fruits in your array.

• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. 
If the fruit is in your array, the if block should print a statement,
such as You really like bananas!*/
let favorite_fruits=["mango","apple","orange"]
if(favorite_fruits.includes("mango")){
    console.log("mango is my fav fruit")
}else if(favorite_fruits.includes("banana")){
    console.log("i like to eat banana")
}else if(favorite_fruits.includes("strawaberry")){
    console.log("its my fav")
}else if(favorite_fruits.includes("apple")){
    console.log("its full of water")
}else if(favorite_fruits.includes("kiwi")){
    console.log("kiwi have unique taste")

} else{
    console.log("this fruit is not in list")
}
/*
30. Hello Admin: Make a array of five or more usernames, including the name 'admin'. 
Imagine you are writing code that will print a greeting to each user
after they log in to a website. Loop through the array, and print a greeting to each user:

• If the username is 'admin', print a special greeting, such as Hello admin, 
would you like to see a status report?

• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.*/
let usernames=["ali","ahmed","admin","arslan","nabeel"]
for(let i=0;i<usernames.length;i++){
    if(usernames[i]=="admin"){
        console.log(`Hello ${usernames[i]},would you like to see status report`)
    }else{
        console.log(`hello ${usernames[i]},thank you for logging in again`)
    }
}
/*
31. No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.

• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.*/
let usernames1=["ali","ahmed","admin","arslan","nabeel"]

let emptyList=usernames1.splice(0,5)
console.log(usernames1)
if (usernames1=[]){
    console.log("we need to find some users")
}else{
    console.log("we have the users")
}
/*
32. Checking Usernames: Do the following to create a program that simulates how websites ensure that 
everyone has a unique username.

• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are
 also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, 
print a message that the person will need to enter a
new username. If a username has not been used, print a message saying that the username is available.
• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
*/

let current_users=["aLi","ahmEd","admin","arslan","nabeel"]
let new_users=["ali","murtAza","naDeem","qadeer","Nabeel"]
// now we will apply foreach method
 new_users.forEach(new_users => {
    let new_usersLower=new_users.toLowerCase()
    // some method
    let userName=current_users.some(current_users=> current_users.toLowerCase()=== new_usersLower)

    if (userName){
        console.log(`${new_users} needs to choose another user name because it is already taken`)
    }else{
        console.log(`${new_users} is the new member added`)
        current_users.push(new_users)
    }




});

console.log(current_users)
/*
33. Ordinal Numbers: Ordinal numbers indicate their position in a array, 
such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.

• Store the numbers 1 through 9 in a array.

• Loop through the array.

• Use an if-else chain inside the loop to print the proper ordinal ending for each number. 
Your output should read "1st 2nd 3rd 4th 5th 6th
7th 8th 9th", and each result should be on a separate line.
*/
let Numbers=[1,2,3,4,5,6,7,8,9]
// applying for loop condition
for (let i=0; i<Numbers.length; i++){
    if (Numbers[i]==1){
        console.log(`${Numbers[i]}st`)
    }else if (Numbers[i]==2){
        console.log(`${Numbers[i]}nd`)
    }else if (Numbers[i]==3){
        console.log(`${Numbers[i]}rd`)
    }else {
        console.log(`${Numbers[i]}th`)
    }
}