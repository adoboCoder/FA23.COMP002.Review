/****************************************************************/
/**************** start of single if statement ******************/ 
let isValid = true; //boolean variable with a value of true
if (isValid){
    console.log(true);
}

/**************** start of multiple if statements ******************/ 
let givenNumber = 15;
// check divisibility by 3
if (givenNumber % 3 == 0){
    console.log("The number is divisible by 3.");
}

// check divisibility by 5
if (givenNumber % 5 == 0){
    console.log("The number is divisible by 5.")
}

// check divisibility by 3 OR 5
if (givenNumber % 3 == 0 || givenNumber % 5 == 0) {
    console.log("The number is divisible by 3 OR 5.");
}

// check divisibility by 3 AND 5
if (givenNumber % 3 == 0 && givenNumber % 5 == 0) {
    console.log("The number is divisible by 3 AND 5.");
}


/**************** start of if-else statements ******************/ 
let givenNumber2 = 14;
// check divisibility by 2 (odd or even)
if (givenNumber2 % 2 == 0){
    console.log("The number is even.");
} else {
    console.log("The number is odd.");
}


/**************** start of if/else-if/else statements ******************/ 
let givenNumber3 = 21;

// check divisibility by 3
if (givenNumber3 % 3 == 0){
    console.log("The number is divisible by 3.");
} else if (givenNumber3 % 7 == 0) { //check divisibility by 7 
    console.log("The number is divisible by 7.");
} else {
    console.log("The number is not divisible by 3 or 7.");
}

// if/if-else/else with nested if statements
//check divisibility by 3
if (givenNumber3 % 3 == 0){ 
    console.log("The number is divisible by 3.");
    // nested-if - check divisibility by 7
    if (givenNumber3 % 7 == 0){
        console.log("The number is divisible by 7.");
    }
} else if (givenNumber3 % 10 == 0) { //check divisibility by 10 
    console.log("The number is divisible by 10.");
} else {
    console.log("The number is not divisible by 3, 7, or 10.");
}


/**************** start of switch statements ******************/ 
const expr = 'Papayas'; // creates the variable expr and assigns a value of Papayas
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break; // if there's a break then it stops the entire switch statement
  case 'Mangoes': // multiple conditions, same output 1 of 2 conditions
  case 'Papayas': // multiple conditions, same output 2 of 2 conditions
    console.log('Mangoes and papayas are $2.79 a pound.');
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}


/**************** start of alternating grid output ******************/ 
let patternOdd = " # # # #"; // display pattern for odd numbers
let patternEven = "# # # # "; // display pattern for even numbers

let maxNumber = 8; // maximum number of rows to display
// start of for loop that iterates from 1 to 8
for (let i = 1; i <= maxNumber; i++){
	// if/else condition to check if odd/even
    if (i % 2 == 0){
        console.log(patternEven);
    } else {
        console.log(patternOdd);
    }
}
