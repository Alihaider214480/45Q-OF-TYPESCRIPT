//  Q1   INSTALLATION
//InstallED Node.js, TypeScript and VS Code on MY computer.      
// Q2  PERRSONAL MESSAGE
let name1="haider"
let message=(`hello ${name1},would you like to change your life by discipline?`)
console.log(message)
// Q3 name cases
let name2="sajid";
console.log(`lower case,  ${name2.toLowerCase()}
upercase,  ${name2.toUpperCase()}`)
//titlecase,
let firstLetter:string=name2.charAt(0).toUpperCase();
let restLetter:string=name2.slice(1).toLowerCase();
let titleCase=firstLetter + restLetter;
console.log(titleCase)
//Q4 famous quotes
console.log("SAAD HASHMANI once said,the weigh of dicipline is in ounces and regret in tons.")
//5. Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person.
// Then compose your message and store it in a new variable called message. Print your message.
let famous_person="SAAD HASHMANI"
let message1=`${famous_person} once said,the weigh of dicipline is in ounces and regret in tons.`
console.log(message1)
/*/6. Stripping Names: Store a person’s name,
 and include some whitespace characters at the beginning and end of the name. Make sure you use each
character combination, "\t" and "\n", at least once.
 Print the name once, so the whitespace around the name is displayed. Then print the name after striping the
  white spaces.*/
  let myName="   Ali haider  "
  console.log(myName)
  console.log(myName.trim())
  // \t is used for tab/space
  let myName2="\tHaider"
  console.log(myName2)
  // \n is used for new line.
  let myName3="\nHaider"
  console.log(myName3)
  console.log(myName.trim(),myName2.trim(),myName3.trim())

 /* 
 7. Number Eight: Write addition, subtraction, multiplication, and division operations that each result in 
 the number 8. Be sure to enclose your operations in print statements to see the results.*/
 let addition : number= 4+4
 let subtraction: number=12-4
 let multiplication: number=4*2
 let division : number=16/2
 console.log(addition,subtraction,multiplication,division)

