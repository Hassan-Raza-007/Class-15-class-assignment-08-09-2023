// USER INPUT & CONDITIONAL STATEMENT

// Q1
// var city = prompt("Enter your city")
// if(city === "Karachi" ){
//     alert("Welcome to city of lights")
// }

// Q2
// var gender = prompt("Enter your gender")
// if(gender === "male"){
//     alert("Good morning Sir!")
// }else if (gender === "female"){
//     alert("Good morning Ma'am")
// }

// Q3
// var trafficLight = prompt("Enter the color to know")
// if (trafficLight === "Red"){
//     alert("Must stop")
// }else if (trafficLight === "Yellow"){
//     alert("Ready to move")
// }else if (trafficLight === "Green"){
//     alert("Move now")
// }

// Q4
// var fuel = prompt("Enter your remaining fuel")
// if(fuel <= 0.25){
//     alert("Please refill the fuel in your car")
// }else{
//     alert("Happy Driving")
// }

// Q5

// var a = 4
// if(++a === 5){
//     alert("given condition for variable a is true")
// }

// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }else{
//     alert("given condition for variable b is false");
// }

// var c = 12;
// if (c++ === 13) {
//   alert("condition 1 is true");
// }

// if (c === 13) {
//   alert("condition 2 is true");
// }
// if (++c < 14) {
//   alert("condition 3 is true");
// }
// if (c === 14) {
//   alert("condition 4 is true");
// }

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

// if (true) {
//   alert("True");
// }
// if (false) {
//   alert("False");
// }

// if ("car" < "cab") {
//   alert("car is smaller than cat");
// }
// else{
//     alert("car is not smaller than cat");
// }

// var totalmarks = 300;
// var percentage = prompt("Enter your percentage");
// var marksobtain = (percentage / 100) * totalmarks;
// var grade = "";
// var remarks = "";
// if (percentage >= 80 && percentage <= 100) {
//   document.write("<h1>Mark Sheet</h1>");
//   document.write("<br>");
//   document.write("<br>");
//   document.write("Total Marks" + totalmarks);
//   document.write("<br>");
//   document.write("Total Marks Obtained" + marksobtain);
//   document.write("<br>");
//   document.write(percentage + "%");
//   document.write("<br>");
//   document.write("Grade" + "A+");
//   document.write("<br>");
//   document.write("Excellent");
//   document.write("<br>");
// } else if (percentage >= 70 && percentage <= 80) {
//   document.write("<h1>Mark Sheet</h1>");
//   document.write("<br>");
//   document.write("<br>");
//   document.write("Total Marks" + totalmarks);
//   document.write("<br>");
//   document.write("Total Marks Obtained" + marksobtain);
//   document.write("<br>");
//   document.write(percentage + "%");
//   document.write("<br>");
//   document.write("Grade" + "A");
//   document.write("<br>");
//   document.write("Good");
//   document.write("<br>");
// } else if (percentage >= 60 && percentage <= 70) {
//   document.write("<h1>Mark Sheet</h1>");
//   document.write("<br>");
//   document.write("<br>");
//   document.write("Total Marks" + totalmarks);
//   document.write("<br>");
//   document.write("Total Marks Obtained" + marksobtain);
//   document.write("<br>");
//   document.write(percentage + "%");
//   document.write("<br>");
//   document.write("Grade" + "B");
//   document.write("<br>");
//   document.write("You need to improve");
//   document.write("<br>");
// } else if (percentage < 60) {
//     document.write("<h1>Mark Sheet</h1>");
//     document.write("<br>");
//     document.write("<br>");
//     document.write("Total Marks" + totalmarks);
//     document.write("<br>");
//     document.write("Total Marks Obtained" + marksobtain);
//     document.write("<br>");
//     document.write(percentage + "%");
//     document.write("<br>");
//     document.write("Grade" + "F");
//     document.write("<br>");
//     document.write("Fail");
//     document.write("<br>");
//   }

// Q7
// var num = 4;
// var num1 = prompt("Guess the correct number");
// if (num1 == 4) {
//   alert(" Bingo! Correct answer.. ");
// } else {
//   alert("Close enough to the correct answer");
// }

// Q8
// var number = +prompt("Enter a number");
// if (number % 3 === 0) {
//   alert(number + " is divided by 3");
// } else {
//   alert(number + " is not divided by 3");
// }

// Q9
// var number = +prompt("Enter a number:");
// if(number % 2 ===0){
//     alert(number + " is even number")
// }else{
//     alert(number + " is odd number")
// }

// Q10
// var temperature = +prompt("Enter the temperature");
// if (temperature >= 40) {
//   alert("It's too hot outside");
// } else if (temperature >= 30) {
//   alert("The weather today is normal");
// } else if (temperature >= 20) {
//   alert("Today's weather is cool.");
// } else if (temperature >= 10) {
//   alert("OMG!Today's weather is so cool.");
// }


// Q11
// var firstNumber = prompt("Enter the First number")
// var secondNumber = prompt("Enter the Second number")
// var operation = prompt("Enter any one operation+, -, *, /, %")
// var result1 = firstNumber + secondNumber
// var result2 = firstNumber - secondNumber
// var result3 = firstNumber * secondNumber
// var result4 = firstNumber / secondNumber
// var result5 = firstNumber % secondNumber

// if(prompt = "+"){
// alert(result1)
// }else if(prompt = "-"){
//     alert(result2)
// }
// else if(prompt = "*"){
//     alert(result3)
// }
// else if(prompt = "/"){
//     alert(result4)
// }
// else if(prompt = "%"){
//     alert(result5)
// }