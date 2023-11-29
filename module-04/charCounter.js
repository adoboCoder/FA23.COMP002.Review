// create a function that counts the number of times a character shows in a string
function countChar(inputChar, inputString) {
    let counter = 0; // counter

    /*  a string is a string of characters
        e.g.,
        let inputString = "Hello World";
        values      =>  |H|e|l|l|o| |W|o|r|l|d|
        position    =>  |0|1|2|3|4|5|6|7|8|9|10|
        Therefore, inputString[2] returns "l"
        Likewise, inputString[10] returns "d" 
    */

    // create iterate through the inputString using a for loop
    // using inputString.length returns the total number of characters
    for(let i = 0; i < inputString.length; i++){
        // create a single if statement that checks if the current letter accessed is equal to the inputChar
        if (inputString[i] == inputChar) {
            counter++; // increment the counter by 1
        }
    }

    // return the counter
    return counter;
}

/* Test Case - inputChar: k; inputString: kakkerlak */
// call countChar function and store it in a variable testCase1
let testCase1 = countChar("k", "kakkerlak");
// print the value of testCase1
console.log(testCase1); // prints 4

/* Test Case - inputChar: o; inputString: Hello World */
// call countChar function and store it in a variable testCase2
let testCase2 = countChar("o", "Hello World");
// print the value of testCase1
console.log(testCase2); // prints 2