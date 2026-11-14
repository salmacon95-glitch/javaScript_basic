// ARRAY
// Creating an Array
let students = new Array("Amadu", "Salu", "Foday");
console.log(students);

// Array of Fruits
let fruits = ["Apple", "Banana", "Guava", "Pineapple"];
console.log(fruits);

// Note:
// 1.The data stored in an array are called elements
// 2.Array stored elements of any data type (Mixed collection of elements)
// 3.Elements stored in an array are positional indexed based
// 4.The first element in the array is indext at 0th position
// 5.Elements stored in an array are seperated with coma(,)

let mixData = [
  "Pragramming in Java",
  23,
  null,
  undefined,
  NaN,
  { name: "Samuel", age: 67 },
  { name: "Angella", age: 16 },
  { name: "Brian's crush", age: 16 },
  ["Apple", "Banana", "Casava"],
  students,
];
console.log(mixData);

// Accessing Elements in an Array
console.log(fruits[1]); //Printing the second element of the array
console.log(fruits[3]); //Printing the fourth element of the array
console.log(mixData[5]); //Printing the sixty element of the array
console.log(mixData[5].name); //Printing the fifth element's object's property (name) of the array
console.log(mixData[5].age); // printing the fifth element's object's property (age) of the array
console.log(mixData[6].name); //Printing the sixth element's object's property(name) of the array

// ADDING elements to the Array
let emptyFruits = [];

// Push () method
emptyFruits.push("Banana");
emptyFruits.push("Mango");
emptyFruits.push("Orange");

console.log(emptyFruits);

//Removing elements from an Array
//pop methods
emptyFruits.pop(); //Removes the last element in the array
emptyFruits.push("Isatu", "Fatu"); // Adding two element at the end of the array
emptyFruits.pop(); //Removes the last element from array
console.log(emptyFruits);

//Adding elements to the start/begining of the array
//unshift () method
emptyFruits.unshift("Plantain"); //Adds elements to the beginning of the array
emptyFruits.unshift("Beans"); //Adds elements to the beginning of the array

console.log(emptyFruits);

//Removing an element at the start/beginning of an array
emptyFruits.shift(); //Removes element to the beginning of the array
emptyFruits.shift(); //removes elements to the beginning of an array

console.log(emptyFruits);

//EXERCISE
/*
1.Create an empty  studentsDb array
2.Insert 4 student objects into the array using the push method. Each object must have the following: id, name, email, phoneNumber.
3. Print the array to the terminal
*/

let emptyStudentsDb = [];

emptyStudentsDb.push({
  id: 905006435,
  name: "Angella",
  email: "salmacon95@gmail.com",
  phoneNumber: "078563424",
});
emptyStudentsDb.push({
  id: 905005045,
  name: "Jeneba",
  email: "jeneba@email.com",
  phoneNumber: "030667478",
});
emptyStudentsDb.push({
  id: 905004657,
  name: "Amkam",
  email: "amkam@gmail.com",
  phoneNumber: "078567890",
});
emptyStudentsDb.push({
  id: 905003301,
  name: "Noah",
  email: "noah@gmail.com",
  phoneNumber: "088063011",
});

console.log(emptyStudentsDb);
 
//correction
let studentsDB
