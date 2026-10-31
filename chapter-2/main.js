// NESTED IF STATEMENT
// STUDENT GRADE DISTINTION CHECKER

let grade = 40;

if (grade >= 50) {
  console.log("congratulation, you passed");
} else {
  console.log("sorry, you failed.please retake the exam.");
}

let grade_1 = 92;

if (grade_1 >= 50) {
  console.log("congratulation, you passed");
  if (grade_1 >= 90) {
    console.log("you passed with distinction");
  } else {
    console.log("sorry, you failed.please retake the exam.");
  }
}

// EXERCISE 1
//MAMY FATU SELLS CAKES AND SAID WHOEVER BUYS CAKE WORTH LE10,000 IS GIVEN 10% DISCOUNT
// 1. WRITE A PROGRAM THAT TAKES TOTAL PRICE OF CAKE INPUT FROM THE USER
// 2. CHECK IF THE TOTAL PRICE OF CAKE BOUGHT EXCEED 10,000
// 3. IF THE PRICE EXCEEDS, GIVE THEM 10% DISCOUNT IN WORDS. EG.. "YOU WON 10% DISCOUNT.
// THANK YOU FOR DOING BUSINESS WITH US
// 4. IF NOT MET, JUST PRINT "THANK YOU FOR DOING BUSINESS WITH US"
// 5. MAMY FATU IS SO GENEROUS TO ALL HER CUSTOMERS WHO BUYS PRODUCTS WOTH LE2000 AND ABOVE
// AND OFFER DELIVERY SERVICE TO THEM IF TOTAL PRICE EXCEEDS. IF NOT EXCEED 20,000
// LET THEM KNOW THEY ARE NOT ELIGIBLE FOR /

let cake = 10000;

if (cake > 10000) {
  console.log(
    "congratulation, you won 10% discount, thank you for doing business with us.",
  );
} else {
  console.log("Thank you for doing business with us");
  if (cake >= 20000) {
    console.log("congratution, you are eligible for delivery");
  } else {
    console.log("not eligible for free delivery");
  }
}

// correction
console.log("**************************")

let totalcakePrice = 12000;

if (totalcakePrice >= 10000) {
  console.log("you won 10% discount. thank you for doing business with us.");

  if (totalcakePrice >= 20000) {
    console.log("you are entitle to delivery of your cakes");
  } else {
    console.log("sorry, no delivery for the amount of cake bough");
  }
} else {
  console.log("Thank you for doing business with us.");
}

// EXERCISE 2
// CREATE A JS APP THAT TAKES SOMEONE'S EMAIL AND PASSWORD TO LOG THEM INTO THE APP
// i. IF THE EMAIL OF THE USER IS NOT ADMIN@LENOSOL.COM,JUST WELCOME THE USER TO THEIR ACCOUNT
// ii. IF THE EMAIL IS ADMIN@LENOSOL.COM, STATE THEIR ADMIN STATUS AND IF NOT AN ADMIN, DISPLAY THEY ARE NOT AN ADMIN
// iii. IF THE PASSWORD IS NOT EQUAL TO 123456 FOR ANYONE WHO TRIES TO LOH IN, PRINT "WRONG CREDENTIALS"
// USING NESTED IF STATEMENT, DESIGN THE APP THAT DOES ALL THE INSTRUCTIONS ABOVE.
console.log("***************************************")
let email = "angie@lenosol.com"
let password = 237456;

if(email !=="admin@lenosol.com"|| password === 123456) {
    console.log("welcome Admin: ${email}")

    if (email === "admin@lenosol.com") {
        console.log("welcome Admin : ${email}")
    }else {
        console.log("you are not an ADMIN ")
    }
}else{
    console.log("wrong credentials!!!")
}

