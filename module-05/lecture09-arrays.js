let myGrades = [95, 100, 76, 100, 85]; //array with 5 elements inside

/*  arrays are zero-based, meaning the first element stored in array is in position 0
*   visually...
*   values      =>  |95|100|76|100|85|
*   position    =>  |0 |1  |2 |3  |4 |
*
*   syntax to access the elements inside an array
*   myGrade[0] => 95
*   myGrade[4] => 85
*/

// call the iterate() function to iterate and print all of the contents of the array
console.log("myGrades elements")
iterate(myGrades);

// use push() to add new elements at the end of the array
myGrades.push(90);
console.log("myGrades elements after pushing a new element")
iterate(myGrades);

// use pop() to remove the element at the end of the array
myGrades.pop();
console.log("myGrades elements after popping")
iterate(myGrades);


function iterate(array) {
    // to iterate through an array, you can start from position 0 to (myGrades.length - 1)
    for (let i = 0; i < myGrades.length; i++){
        console.log(`myGrades[${i}]: ${myGrades[i]}`)
    }
    divider("*", 25);
}

// function to create a visual divider
function divider(character, size){
    let output = "";
    for (let i = 0; i < size; i++){
        output += character;
    }
    console.log(output);
}