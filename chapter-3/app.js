// JS - OBJECTS
const student = {
  firstName: "Despitch",
  lastName: "Allieu",
  age: 19,
  walk: true,
  girlfriend: false,
  university: "Limkokwing",
  program: "BIT",
  occupation: "Web Designer",
  photo: "https://www.pixabay.com/mohamed-pic-002",
  website: "https://despitch-allieu.netlify.app/",
};

// Printing the objects
console.log(student);

// accessing a property of an objects
console.log(student.age);

// Uopdating an attribute in an object
student.occupation = "website designer";
console.log(student);

// Adding a new property to the object
student.gender = "Male";
console.log(student);

// EXERCISE 1
// Create an object for a citizen (at least 5 crucial infos) and print them to the console in an ID Card format using the JS Template Literal

const citizen = {
  fullName: "Salamatu Yankuba",
  nationality: "Sierra Leone",
  gender: "Male",
  placeOfBirth: "Kenema",
  age: 29,
};

console.log(citizen);

console.log("****************SIERRA LEONE NATIONAL ID CARD******************");
console.log("Full Name: ${citizen.fullname}");
console.log("Nationality: ${citizen.nationality}");
console.log("Gender: ${citizen.gender}");
console.log("Place Of Birth: ${citizen.placeOfBirth}");
console.log("Age: ${citizen.age}");
console.log("******************SL ID CARD*********************");

const house = {
  lacation: "Lumly",
  numberOfRooms: 4,
  bathRooms: 5,
  owner: "Angella Yankuba",
  pricePerNight: 100,
  facilities: [
    "Internet",
    "One Mobile - wifi",
    "Kitchen",
    "TV",
    "Car",
    "Park",
    "Dryer",
    "Pool",
    "Beach Access",
    "No Smoking",
    "No Pet",
  ],
  appartment: {
    name: "Block D appartment",
    numberOfRooms: 2,
    gamingTv: 1,
  },
};

console.log(house);
console.log(house.appartment);
console.log(house.facilities);
