let name1 = "Jonathan"; // this variable is available in the entire program

if (name1 == "Jonathan"){
    name1 = "Cruz"; // name1 is still available here
    let helloStatement = "Hello there!"; // this variable is only available inside this if code block
    console.log(helloStatement); 
} // helloStatement is no longer available after this closing brace
console.log(name1); // name1 is still available here