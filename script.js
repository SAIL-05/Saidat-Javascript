//variable declarator
let myAge = 24
console.log(myAge);
const mySchool = "unilag"
console.log(mySchool);
//primitive data types
//strings
let wendy = "a determined lady"
console.log(wendy);

const school = "Babcock"
console.log(school);

//number
const schoolFee = 1000
console.log(schoolFee);

let myNum = 250
console.log(myNum);

//boolean
let iAmAgirl = true;
let iAmAboy = false;
console.log( iAmAgirl);
console.log(iAmAboy);

//undefined 
var age =
console.log(age);
let love;
console.log(love);

//null
let test2 = null
console.log(test2);
let bag = null
console.log(bag);

// // Non-primitive data types
// // objects
const student = {
    name: "Saidat",
    age: 24,
    lovesCoding: true,
    school: "sail innovation lab",
    bestFood: "rice",
};
console.log(student);

// // arrays
const myArray = ["beebah", "wande", 234, false, { name: "dupe" }, [2, 4, 6]];
console.log(myArray);

//Arithemetic Operator
let a = 46;
let b = 73;

// // Addition
let sum = a + b
console.log(sum);

// // subtraction
let subb = b-a
console.log(subb);

// // multiplication
let mullt = a*b
console.log(mullt);

// // division
let div = a/b
console.log(div);

// //modulus
let modul = a%b
console.log(modul);

// //Assignment Operators
let c = 45

// // comparison operators
 const d = "wendy";
 const e = "wendy";
 const f = "toyosi";
 const g = 23;
 const h = 47;
 const i = 23;
 const j = "23";

 //Equals to
 console.log(d == e);

 //Greater Than
 console.log(g > h);
 
 //Less Than
 console.log(g < h);

 // Greater than equals to
 console.log(g >= i);

//Less than equals to
console.log(g <= i)

//Not Equals To
console.log(g != i);
console.log(g != j);

//Strictly Equals To
console.log(i === j);
console.log(i);
console.log(j);

//Logical Operator
 // Logical OR ||
 // Logical NOT !
 // Logiacl AND &

  //Unary Operator
  // Increment ++
// Decrement --
let k = 5;
k++;
console.log(k);

let p = 42
p--;
console.log(p);

//Tenary Operator
// (contition) ? "" : ""

// if else if statement
//let result = parseInt(prompt("Enter your result"))
//if (result >= 0 && result <= 39){
   // alert ("You Failed, F")} 

//else if (result >= 40 && result <= 44){
   // alert ("Very Poor! E")
//}
//else if (result >= 45 && result <= 49){
   // alert ("Poor! D")
//}
//else if (result >= 50 && result <= 59){
   // alert ("Average! C")
//}
//else if (result >= 60 && result <= 69){
   // alert ("Very Good! B")
//}
//else if (result >= 70 && result <= 100){
   // alert ("Excellent! A")
//}
//else if (result < 0){
   // alert ("you are owing me mark!!!")
//}
//else if (result >100){
   // alert ("Impossible!!!")
//}
//else if (isNaN(result)){
   // alert ("AS HOW NAH!!!")
//};

// BMI ASSIGNMENT
//let weight = parseFloat(prompt("Enter your weight"))
//let height = parseFloat(prompt("Enter your height"))
//let BMI = weight / (height * height)
//if (BMI < 18.5){
  //  alert ("You are underweight")
//}
//if (BMI >= 18.5 && BMI <= 24.9){
  //  alert ("You have a normal weight")
//}
//if (BMI >= 25.0 && BMI <= 29.9){
  //  alert ("You are overweight")
//}
//if (BMI >= 30.0){
  //  alert ("You are Obese")
//}
//if (BMI < 18.5){
    //alert ("You are underweight")
//}
//if (isNaN(height) || isNaN(weight)){
    //alert ("And you think you are making")
//};


//Ticket Price Baswd On Age
//let Age = parseFloat(prompt("Enter your Age"))
//if (Age >= 0 && Age <= 12) {
    //alert("Ticket price is 5")
//}
//else if (Age >= 13 && Age <= 18){
  //  alert("Ticket Price is 10")
//}
//else if (Age >= 19 && Age < 60){
  //  alert("Ticket Price is 20")
//}
//else if (Age < 0){
  //  alert("Not a valid Age")
//};

// Discount Based On Budget
//let Price = parseFloat(prompt("Enter Your Price"))
//if (Price >= 50){
   // alert("You have gotten a discount of 20")
//}
//else if (Price >= 100){
    //alert("You have gotten a discount of 10")
//}
//else if (Price >= 0 && Price <= 49){
    //alert("You have gotten a discount of 0")
//};

//If a year is a leap year
//let nDays = parseInt(prompt("Enter the Number Of Days"))
//if (nDays === 366){
  //  alert("yeah! It's A Leap Year")
//}
//else if (nDays === 365){
  //  alert("Okay! It's A Normal Year")
//}
//else if (nDays > 366){
  //  alert("More Than A Year Fam!")
//}
//else if (nDays < 365 ) {
  //  alert("How?? It's not even up to A Year")
//};

//time of the day
//let time = parseInt(prompt("What Say's The Time"))
//if (time <=  )



//DOM 
//getElementsWithClass
//getElementWithId
//querySelector
//querySelectAll

//Asynchronoush javascript
//console.log("https://jsonplaceholder.typicode.com/users")
//fetch("https://jsonplaceholder.typicode.com/users").then(hay => hay.json()).then(data => console.log(data))

//try catch statement
//try catch finally

try{
  fetch(url);
}
catch (err){
  console.log(err);
}
finally{

}

async function getAllPost() {
  let blogBlogData = await fetch("https://jsonplaceholder.typicode.com/posts");
  let realBlogData = await blogPosts.json();
  console.log(realBlogData)
  
}