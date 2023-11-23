// objects are values that contain properties and methods
// define objects using the key: value syntax

let myCar = {
    wheels: 4,
    transmissionStyle: "automatic",
    trunkContents: ["books", "spare tire", "moving blankets"]
};


console.log(`My car has ${myCar.wheels} wheels`); // access object values using the dot (.) notation
console.log(`It has a ${myCar["transmissionStyle"]} transmission`); // access object values using the ([]) notation

// looping through object properties
for (let i = 0; i < myCar.trunkContents.length; i++){
    console.log(myCar.trunkContents[i]);
}