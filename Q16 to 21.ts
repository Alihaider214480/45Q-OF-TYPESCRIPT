/*
16. More Guests: You just found a bigger dinner table, so now more space is
available. Think of three more guests to invite to dinner.

• Start with your program from Exercise 15. Add a print statement to the end of your program informing people 
that you found a
bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array.
• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list.*/
let List2 = ["shoko", "nomi", "qadeer"];
console.log(List2[0], "aslam o alikum bro what are you doing i am inviting you on today dinner ");
console.log(List2[1], "aslam o alikum bro what are you doing i am inviting you on today dinner ");
console.log(List2[2], "aslam o alikum bro what are you doing i am inviting you on today dinner");
console.log(List2[0], "will not come on today dinner ");
let Modify1 = List2.splice(0, 1, "mudasir");
console.log(Modify1);
console.log(List2[0], "aslam o alikum bro what are you doing i am inviting you on today dinner ");
console.log(List2[1], "aslam o alikum bro what are you doing i am inviting you on today dinner ");
console.log(List2[2], "aslam o alikum bro what are you doing i am inviting you on today dinner ");
console.log("aslam o alikum everyone we have a bigger dinner table ")
List2.unshift("ALI")
console.log(List2)
List2.splice(2,0,"abrar")
console.log(List2)
console.log(List2[0], "aslam o alikum bro what are you doing i am inviting you on today dinner ");
console.log(List2[1], "aslam o alikum bro what are you doing i am inviting you on today dinner ");
console.log(List2[2], "aslam o alikum bro what are you doing i am inviting you on today dinner ");
console.log(List2[3], "aslam o alikum bro what are you doing i am inviting you on today dinner ");
console.log(List2[4], "aslam o alikum bro what are you doing i am inviting you on today dinner ");
/*
17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
 and you have space for only two guests.

• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite
 only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a
 name from your list, print
a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you
 actually have an empty list at the end
of your program.*/
console.log("sorry everyone its difficult for to inform that my dinner table not arrive in time i can only invite two person")
console.log(List2.pop(),"sorry i can’t invite you to dinner.")
console.log(List2.pop(),"sorry i can’t invite you to dinner.")
console.log(List2.pop(),"sorry i can’t invite you to dinner.")
console.log(List2[0],"you are still invited on dinner.")
console.log(List2[1],"you are still invited on dinner.")
List2.splice(0,2)
console.log(List2)
/*
18. Seeing the World: Think of at least five places in the world you’d like to visit.

• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its
order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.*/
let places=["paris","switzerlan","naran","turkey"]
console.log(places)
places.sort()
console.log(places)
places.reverse()
console.log(places)
/*
19. Dinner Guests: Working with one of the programs from Exercises 14 through 18,
 print a message indicating the number
of people you are inviting to dinner.*/
let myFriends=["shoko","nomi","haider","arslan","ali"]
console.log(`i am inviting ${myFriends.length} number of friends in dinner party\n`)

for(let i=0 ;i<myFriends.length;i++){
    console.log(`${i+1}. ${myFriends[i]}`)
}
/*
20. Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything
else you’d like. Write a program that creates a list containing these items.*/
let provinces=["sindh","balochistan","punjab","kpk"]
provinces.forEach((pro)=>{
    console.log(pro)
})
/*
21. They think of something you could store in a TypeScript Object.
 Write a program that creates Objects containing these items.*/
 let studentId ={
    name:"ali",
    age: 25,
    gender:"male",
    rollnum:123
 } 
 console.log(studentId)

