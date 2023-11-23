/***************************************************************************
* type-safety & debugging demo
* In C# (type-safe language), an integer is statically-typed -> int aNumber = 15;
* In JavaScript (loose language), variables are dynamically-typed -> let aNumber = 15;
* What happens in each language if we try this line of code? -> aNumber += "I am not even close to being a number!";
* In C#, the IDE will complain and give you an error -> CS0029: Cannot implicitly convert type 'string' to 'int'
****************************************************************************/
console.log("start of type-safety & debugging demo");
let aNumber = 15;
console.log(`aNumber is of type: ${typeof(aNumber)}`);
aNumber += "I am not even close to being a number!";
console.log(aNumber); // outputs: 15I am not even close to being a number!
console.log(`aNumber is of type: ${typeof(aNumber)}`); // JavaScript automatically converts aNumber from number to string
printDivider()

/***************************************************************************
 * strict mode & exceptions demo
 * run the app with the "use strict" commented and see what happens
 * now, run the app again with the "use strict" uncommented and see what happens
***************************************************************************/
console.log("start of strict mode & exceptions demo");
function canYouSpotTheProblem() {
    // NOTE: uncomment (//) the line below to see the difference
    //"use strict";
    for (counter = 0; counter < 10; counter++) {
        console.log("Happy happy");
    }
}

canYouSpotTheProblem(); // when using "use strict", it will throw an error -> Uncaught ReferenceError: counter is not defined
printDivider();

/***************************************************************************
 * more exceptions demo
 * run the app with the line "console.log(addNumbers("two", 5))" commented and see what happens
 * run the app with the line "console.log(addNumbers("two", 5))" uncommented and see what happens
 * run the app with the line "console.log(addNumbers(2, "five"))" commented and see what happens
 * run the app with the line "console.log(addNumbers(2, "five"))" uncommented and see what happens
***************************************************************************/
console.log("start of more exceptions demo");
function addNumbers(first, second) {
    if (isNaN(first) || isNaN(second)){
        throw new InputError("Invalid input, must enter numbers!");
    }
    return first + second;
}

console.log(addNumbers(2,5)); // outputs: 7
// NOTE: uncomment (//) the two lines below individually see errors
//console.log(addNumbers("two", 5)) // throws an exception -> Uncaught ReferenceError: InputError is not defined
//console.log(addNumbers(2,"five"));  // throws an exception -> Uncaught ReferenceError: InputError is not defined
printDivider();

/***************************************************************************
 * recovering from exceptions demo
 * try-catch
***************************************************************************/
console.log("start of recovering from exceptions demo");

try {
    console.log(addNumbers("two", "five"));
    //break; // this will break out of the infinite loop
} catch (error) {
    console.log("Please enter only numeric values!"); // outputs: Please enter only numeric values!
} 
printDivider();
/***************************************************************************
 * more recovering from exceptions demo
 * try-catch-finally
***************************************************************************/
console.log("start of more recovering from exceptions demo");

try {
    console.log(addNumbers("two", "five"));
    //break; // this will break out of the infinite loop
} catch (error) {
    console.log("Please enter only numeric values!"); // outputs: Please enter only numeric values!
} finally {
    console.log("This finally code block would run regardless if there is an exception or not.") // outputs: This finally code block would run regardless if there is an exception or not.
}

function printDivider() {
    console.log("*".repeat(25));
}