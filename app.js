// MATH METHODS chap(26-30)
// 1. Write a program that takes a positive integer from user & display the following in your browser. 
// a. number 
// b. round off value of the number 
// c. floor value of the number 
// d. ceil value of the number

//  var user = parseFloat( prompt("Enter Positive Integer"));
//  var round = Math.round(user);
//  var floor = Math.floor(user);
//  var ceil = Math.ceil(user);
//  document.write("number : " + user+"<br/>"+"round off value : "+ round+"<br/>"+"floor value : "+ floor+"<br/>"+"ceil value : " + ceil);

// 2. Write a program that takes a negative floating point number from user & display the following in your browser. 
// a. number 
// b. round off value of the number 
// c. floor value of the number 
// d. ceil value of the number

// var user = parseFloat( prompt("Enter Positive Integer"));
// var round = Math.round(user);
// var floor = Math.floor(user);
// var ceil = Math.ceil(user);
// document.write("number : " + user+"<br/>"+"round off value : "+ round+"<br/>"+"floor value : "+ floor+"<br/>"+"ceil value : " + ceil);

// 3. Write a program that displays the absolute value of a number.
//  E.g. absolute value of -4 is 4 & absolute value of 5 is 5.

// var value = +prompt("Enter value");
// var absValue = Math.abs(value);
// document.write(absValue);   

// 4. Write a program that simulates a dice using random() method of JS Math class. 
// Display the value of dice in your browser.:

// var random = Math.random();
// var random1 = Math.random();
// var filterNum = (random * 6) + 1;
// var filterNum1 = (random1 * 6) + 1;
// var numberOfStars = Math.floor(filterNum);
// var numberOfStars1 = Math.floor(filterNum1);
// document.write("random dice value : "+ numberOfStars+"<br/>"+"random dice value : " +numberOfStars1);

// 5. Write a program that simulates a coin toss using random() method of JS Math class. 
// Display the value of coin in your browser.

// var coin = Math.random();
// var coinValue = (coin * 2) + 1;
// var floorValue = Math.floor(coinValue);
// if(floorValue === 2){
//     document.write(floorValue+"<br/>"+"Random coin value : Heads" )
// }
// else{
//     document.write(floorValue+"<br/>"+"Random coin value : Tails");
// }

// 6. Write a program that shows a random number between 1 and 100 in your browser.

// var decimal = Math.random();
//  var improvedNum = (decimal * 100) + 1;
//  var numRange = Math.floor(improvedNum);
//  document.write(numRange);

// Write a program that asks the user about his weight. 
// Parse the user input and display his weight in your browser. 
// Possible user inputs can be: 
// a. 50 
// b. 50kgs 
// c. 50.2kgs 
// d. 50.2kilograms

//var userWeight = prompt("Enter Weight In Kilograms");
// var DigiWeight = parseFloat(userWeight);
// alert("The Weight of User is : " + DigiWeight+ " Kilograms");


// 8. Write a program that stores a random secret number from 1 to 10 in a variable.
//  Ask the user to input a number between 1 and 10.
//  If the user input equals the secret number, 
// congratulate the user.

// var secret = Math.random();
// var improvedNum = (secret * 10) + 1;
// var secretNum = Math.floor(improvedNum);
// var userSecret = +prompt("Enter Secret Number");
// if(secretNum === userSecret){
//     alert("Congrats! You Entered a correct secret number");
// }
// else{
//     alert("Try Again");
// }

// DATE METHODS chap(31-34)
// 1. Write a program that displays current date and time in
// your browser.

//  var date = new Date();
//  document.write(date);

// 2. Write a program that alerts the current month in words.
// For example December.

// var a = new Date();
// var b = a.getMonth();
// var month = ['January','Feburary','March','April','May','June','July','August','September','Octuber','November','December'];
// var curMonth = month[b];
// document.write("Current Month : "+ curMonth);

// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show Sun.

//  var getsdate = new Date();
//  var getsDay = getsdate.getDay();
//  var day = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
//  var curDay = day[getsDay].slice(0,3);
//  document.write("Today is : "+ curDay);

// 4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.

// var gettingdate = new Date();
//   var gettingDay = gettingdate.getDay();
//   var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
//   var curDay = days[gettingDay];
//   if(curDay === "saturday" || "sunday"){
//   document.write("It's Fun day");
//   }

// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.

// var comDate = new Date();
// var dayOfMonth = comDate.getDate();
// if(dayOfMonth<16){
//     document.write("First fifteen days of the month");
// }
// else{
//     document.write("Last days of the month");
// }

// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.

// var nDate = new Date();
// var checkMin = nDate.getTime();
// var curMin = ((checkMin)/1000)/60;
// document.write(nDate +'<br/>' + "Elapsed milliseconds since January 1, 1970: " +checkMin +"<br/>"+"Elapsed minutes since January 1, 1970: "+curMin);

// 7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.

// var curDate = new Date();
// var time = curDate.getHours();
// if(time<13){
//     alert("It's A.M");
// }
// else{
//     alert("It's P.M");
// }
   
//8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.

// var dte = new Date();
// var laterYear = dte.setFullYear(2021);
//  var laterMonth = dte.setMonth(11);
//  var laterDate = dte.setDate(31);
//  var laterHours = dte.setHours(00);
//  var laterMinutes = dte.setMinutes(00);
//  var laterSeconds = dte.setSeconds(00);
//  document.write(dte);

// FUNCTION Chap(35-38)
// 1. Write a function that displays current date & time in your
// browser.
//  function date (){
//      var a = new Date();
//      document.write(a);
//  }
//  date();

// 2. Write a function that takes first & last name and then it
// greets the user using his full name.

// function greets(){
//     var fName = prompt("Enter Firstname");
//     var lName = prompt("Enter Lastname");
//     var fullName = (fName+lName)
//     document.write("Welcome to My Website  " + fullName);
// }
// greets();

// 3. Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.

// function add (){
//     var value1 = +prompt("Enter first value");
//     var value2 = +prompt("Enter second value");
//     var sumValue = (value1+value2);
//      document.write(sumValue);

// }
// add();

// 4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.

// function Calculator(){
// var input1 = +prompt("Enter first no");
// var operator =  prompt("Enter operator");
// var input2 = +prompt("Enter second no");

// if(operator == "+"){
// document.write(input1+input2);
// }
// if(operator == "-"){
//     document.write(input1-input2);
//     }
//     if(operator == "*"){
//         document.write(input1*input2);
//         }
//         if(operator == "/"){
//             document.write(input1/input2);
//  }
// }
// Calculator();

// 5. Write a function that squares its argument.
// function sumOfSquares(num) {
//     var num = parseInt(prompt("Enter a number:"));
//     var i;
//     var sum=0;
//     var i = num*num;
//     sum = i;
//     document.write("The squares of  " +num + " is " +sum ) ;
// }
// sumOfSquares();
// 7. Write a function that take start and end number as inputs
// & display counting in your browser.

// var start = +prompt("Enter first num");
// var end = +prompt("Enter last num");
// for (i = start; i<=end;i++){
//     document.write(i+"<br/>");
// }
// 8. Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()

// function calculateHypotenuse(){
// function calculateSquare(){
//   var base = +prompt("Enter base ");
//   var perpendiclar = +prompt("Enter perpendicular");
//   var square = (base*base);
//   var square1 = (perpendiclar*perpendiclar);
// }
// calculateSquare();
// var hypotneous = (square+square1);
// document.write ("(Hypotenuse)^2 = " + (square + square1));
// }
// calculateHypotenuse();
// 9. Write a function that calculates the area of a rectangle.
// A = width * height
// Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables
// var length = +prompt("Enter  the length of your rectangle.");
// var width = +prompt("Enter the width of your rectangle.");
// function area(length, width) {
//     return length * width;
// }
// document.write('The area of your rectangle is ' + area(length, width));

// 10. Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as
// forward, e.g., madam.
// function checkPalindrome(){
//  var arr = prompt("Enter word for search?")
//  var lower= arr.toLowerCase();
//  var newArr =  lower.split("").reverse("").join("");
// if (arr==newArr)
//  return  alert("its a palindrome");
//  return alert("its not a palindrome")
//     }
             
//  checkPalindrome();

// 11. Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'
// function uppercase(str)
// {
//   var array1 = str.split(' ');
//   var newarray1 = [];
    
//   for(var x = 0; x < array1.length; x++){
//       newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//   }
//   return newarray1.join(' ');
// }
// document.write(uppercase(prompt("Enter Sentence")));

// 12. Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'

// function longestWord(word)
// {
  
//     var array1 = word.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// document.write(longestWord(prompt("Enter value")));

// 13. Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of
// occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'

// function count (string, letter) 
// {
//  var letter1 = 0;
//  for (var position = 0; position < string.length; position++) 
//  {
//     if (string.charAt(position) == letter) 
//       {
//       letter1 += 1;
//       }
//   }
//   return letter1;
// }

// document.write(count('w3resource.com', 'o'));

// 14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".

// function calcCircumfrence(radius) {
//     var circum = (Math.PI * radius) * 2;
//   console.log("The circumfrence is " + circum + ".");
//   }
//   function calcArea(radius) {
//     var area = (Math.PI * radius) * radius;
//   document.write("The area is " + area + ".");
//   }
  
//   calcCircumfrence(30);
//   calcArea(10);

// FUNCTIONS, SWITCH STATEMENTS, WHILE… DO-WHILE LOOPS chap(38-44)

// 1. Write a custom function power ( a, b ),
//  to calculate the value of a raised to b.
// function power(x, y)
// {
//     if (y == 0)
//         return 1;
//     else if (y % 2 == 0)
//         return power(x, parseInt(y / 2, 10)) *
//                power(x, parseInt(y / 2, 10));
//     else
//         return x * power(x, parseInt(y / 2, 10)) *
//                    power(x, parseInt(y / 2, 10));
// }
 

// let x = 2;
// let y = 3;
 
// document.write(power(x, y));

