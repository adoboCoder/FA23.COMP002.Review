// 3 ways to declare a function

// 1st way to create a function
const printHelloWorld = function(){
    console.log("hello");
    console.log("world!");
}

printHelloWorld();

// 2nd way to create a function
function printHelloWorld2() {
    console.log("hello");
    console.log("world!");
}
printHelloWorld2();


// 3rd way to create a function
const printHelloWorld3 = () => { console.log("Hello World!"); }

printHelloWorld3();
printHelloWorld3();
printHelloWorld3();

/**************************************************/
// function with parameter

function printHelloWorld4(name){
    console.log("Hello, " + name);
} // variable name does not exist after this closing brace

printHelloWorld4("Jonathan");

// function with parameters
function printHelloWorld5(name1, name2, name3, name4){
    console.log(`Hello ${name1}, ${name2}, ${name3}, and ${name4}`);
}

printHelloWorld5("Brendan", "Gustavo", "Nathaniel", "Jackson");

let someVariable = "";
console.log('hello' + someVariable);
console.log("hello" + someVariable);
console.log(`hello ${someVariable}`);

/**************************************************/
// function with a return value

function multiply(number1, number2) {
    //let output = number1 * number2;
    //return output;
    return number1 * number2;
}

console.log(multiply(2,5));

/**************************************************/
// function calling a function
function helloWorld6() {
    console.log("This is helloWorld6");
}

function helloWorld7() {
    console.log("This is helloWorld7");
    helloWorld6();
}

helloWorld7(); // prints both "This is helloWorld7" & "This is helloWorld6"
helloWorld6(); // only prints "This is helloWorld6"

/**************************************************/
// recursion
const factorial = n => {
    if (n <= 1) {
      return 1; // The “base case”
    }
  
    return n * factorial(n - 1); // Recursive call
  };

  console.log(factorial(5)); // returns 120 (5 * 4 * 3 * 2 * 1)