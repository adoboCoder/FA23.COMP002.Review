/****************************************************************/
/**************** start of for loop statements ******************/ 
/* Syntax:
    // statement1 is executed (one time) before the execution of the code block
    // statement2 defines the condition for executing the code block
    // statement3 is executed (every time) after the code block has been executed
    for (statement1; statement2; statement3) {
        // code block to be executed
    }
    
*/
// for loop that outputs 0-9
console.log("for loop that outputs 0-9");

for (let i = 0; i < 10; i++){
    console.log(i);
}

// nested for loop
console.log("nested for loop");

// first for loop that runs 10 times
for (let a = 0; a < 10; a++) {
    console.log(`This is iteration ${a}`)
    // second for loop that runs 5 times
    for (let b = 0; b < 5; b++) {
        console.log(`This is iteration ${a}.${b}`);
    }
}

/**************** start of while loop statements ******************/
/* 
    The while statement creates a loop that executes a specified statement as long as the test condition evaluates to true. The condition is evaluated before executing the statement.
    Note: while loops evaluates the condition first before executing the code block in it
    Syntax:
    // condition to evaluate before executing the code block
    while (condition) {
        // code block to be executed
    }
*/

// while loops
console.log("while loops");

let j = 1; // create a variable with a value of 1

// increasing - outputs 0-9
while (j < 10) {
    console.log(j);
    j++; // increment j by 1 to prevent an infinite loop
}

//  decreasing - outputs 10-0
while (j >= 0) {
    console.log(j);
    j--; // decrease j by 1 to prevent an infinite loop
}


/**************** start of do-while statement s******************/ 
/* 
    The do...while statement creates a loop that executes a specified statement until the test condition evaluates to false. The condition is evaluated after executing the statement, resulting in the specified statement executing at least once.
    Note: do-while loops executes the encapsulated code block at least once before evaluating the condition to continue looping
    Syntax:
    // condition to evaluate before continuing to loop
    do {
        // code block to be executed
    } while (condition);

*/

// do-while loops
console.log("do-while loops");

let k = 0;

// outputs increments of 10 from 10-300
do { 
    k += 10; // adds 10 to the value of k
    console.log(k);
} while (k < 300);