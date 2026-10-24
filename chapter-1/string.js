let university = "limkokwing"
let fullName = "Angella Yankuba" 
let myRole = "Student"
let myFaculty = "Bit"
let id = 5555
let gender = "female"

console.log(university);
console.log(fullName);
console.log(myRole);
console.log(myFaculty);
console.log(id);
console.log(gender);

// 1. string Concatenation
console.log("****PERSON INFORMATION******")
console.log("University: " + university) 
console.log("Person Name: " + fullName)
console.log("Role: " + myRole)
console.log("Faculty: " + myFaculty)


// let sentence = "My name is Angella Yankuba. I am a student at the Limkokwing University and I am in DICT department"
// console.log(sentence)

// let sentence = ("my name is " + fullName + ". I am a " + myRole + " at " + university + ". My ID is " + id + " and I am a " + gender + ". I study in the faculty of " + myFaculty + ".");

// let sentence = "My name is " + fullName + 

let sentence = 
"my name is " + 
fullName + 
". I am a " +
myRole + 
" and I am in " +
myFaculty + 
"department. ";

console.log(sentence);

// string length
let PersonName = "Angella Yankuba"
console.log(PersonName.length)

// Getting a character from a string by its index
console.log(PersonName[3])
console.log(PersonName[7])
console.log(PersonName[10])
console.log(PersonName[11])
console.log(PersonName[1])

// Exercise
// Create an abbreviation of five variabl
let str1 = "Marian Kargbo"
let str2 = "Angella Sallay Yanks "
let str3 = "Ify Joy Noah"
let str4 = "Ada  Peace Micheal"
let str5 = "kemo wisdom conteh"

let abvr1 = str1[0] + str1[7]
let abvr2 = str2[0] + str2[8] + str2 [15]
let abvr3 = str3[0] + str3[4] + str3[8]
let abvr4 = str4[0] + str4[4] + str4[10]
let abvr5 = str5[0] + str5[6] + str5[12]

// string methods
let strVal = "Samuel Amkam"
console.log(strVal)

// Convert to upperCase
console.log(strVal.toUpperCase())
console.log(strVal.toLowerCase())

// string formatting
console.log("\t Amadu Kamara") // \t is used to Tab
console.log("\n Amadu webAvengers") // \n is used to break to a new line

// Template Literal / string Literal
let num1 = 20
let num2 = 13
let num3 = 24
let average = (num1 + num2 + num3) /3

console.log(average)
console.log(`The average of ${num1} + ${sum2} + ${num3} = ${average }`)

// checking if a value exists in a string
let email = "amkam@lenosol.com"
console.log(email.includes("amkam")) //false

// method chaining
console.log(email.toLowerCase().includes("amkam")) //true

