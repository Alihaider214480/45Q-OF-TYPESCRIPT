"use strict";
/*8. You should create four lines that look like this:

_____________________________________________

console.log(5 + 3)

_____________________________________________

Your output should simply be four lines with the number 8 appearing once on each line.*/
console.log(4 * 2);
console.log(10 - 2);
console.log(6 + 2);
console.log(16 / 2);
/*9. Favorite Number: Store your favorite number in a variable.
 Then, using that variable, create a message that reveals your favorite number. Print that message.*/
let num = 7;
console.log(`My favourite number is ${num}`);
/*
10. Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each.
If you don’t have anything specific to write
because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence
describing what the program does.*/
let myNam = "   Ali haider  ";
console.log(myNam);
console.log(myNam.trim());
// \t is used for tab/space
let myNam2 = "\tHaider";
console.log(myNam2);
// \n is used for new line.
let myNam3 = "\nHaider";
console.log(myNam3);
console.log(myNam.trim(), myNam2.trim(), myNam3.trim());
/*
11. Names: Store the names of a few of your friends in a array called names.
Print each person’s name by accessing each element in the list, one at a time.*/
let names = ["shoko", "nomi", "qadeer"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
/*
12. Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name,
 print a message to them. The text of each message
should be the same, but each message should be personalized with the person’s name.*/
let names1 = ["shoko", "nomi", "qadeer"];
console.log(names1[0], "aslam o alikum bro what are you doing i am inviting you on my birthday ");
console.log(names1[1], "aslam o alikum bro what are you doing i am inviting you on my birthday ");
console.log(names1[2], "aslam o alikum bro what are you doing i am inviting you on my birthday ");
/*
13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car,
and make a list that stores several examples. Use your list
to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”*/
let transportation = ["honda motorcycle", "sport cycle", "vigo dala"];
console.log(transportation[0], "has very economy fuel consumption and releiable");
console.log(transportation[1], "is very usefull because it give you time to exercise");
console.log(transportation[2], "i would like to own it and give first ride to my parents");
/*
14. Guest List: If you could invite anyone, living or deceased, to dinner,
who would you invite? Make a list that includes at least three people you’d like to
invite to dinner. Then use your list to print a message to each person, inviting them to dinner.*/
let List = ["shoko", "nomi", "qadeer"];
console.log(List[0], "aslam o alikum bro what are you doing i am inviting you on today dinner ");
console.log(List[1], "aslam o alikum bro what are you doing i am inviting you on today dinner ");
console.log(List[2], "aslam o alikum bro what are you doing i am inviting you on today dinner");
/*
15. Changing Guest List: You just heard that one of your guests can’t make the
dinner, so you need to send out a new set of invitations. You’ll have to think of
someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the
end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with
the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still
in your list.*/
let List1 = ["shoko", "nomi", "qadeer"];
console.log(List1[0], "aslam o alikum bro what are you doing i am inviting you on today dinner ");
console.log(List1[1], "aslam o alikum bro what are you doing i am inviting you on today dinner ");
console.log(List1[2], "aslam o alikum bro what are you doing i am inviting you on today dinner");
console.log(List1[0], "will not come on today dinner ");
let Modify = List1.splice(0, 1, "mudasir");
console.log(Modify);
console.log(List1[0], "aslam o alikum bro what are you doing i am inviting you on today dinner ");
console.log(List1[1], "aslam o alikum bro what are you doing i am inviting you on today dinner ");
console.log(List1[2], "aslam o alikum bro what are you doing i am inviting you on today dinner ");
