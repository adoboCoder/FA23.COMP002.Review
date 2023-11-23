// function to iterate an array in decreasing order, and pushing it to a new array
    // dataset = [n0, n1, n2, n3, n4]
    // Step 1 - [n0]
    // Step 2 - [n0, n1]
    // Step 3 - [n0, n1, n2]
    // Step 4 - [n0, n1, n2, n3]
    // Step 5 - [n0, n1, n2, n3, n4]
    function reverseArray(arr) {
        // variable to store the reversed array
        let outputArray = [];
    
        // decreasing loop, then pushing each value to outputArray
        for(let i = arr.length - 1; i >= 0; i--){
            outputArray.push(arr[i]); // pushes the value of arr[i] to outputArray
        }
    
        return outputArray;
    }
    
    // function to reverse an array in place
        // Odd # of elements dataset = [n0, n1, n2, n3, n4, n5, n6]
        // Step 1 - swap n0 & n6 = [n6, n1, n2, n3, n4, n5, n0]
        // Step 2 - swap n1 & n5 = [n6, n5, n2, n3, n4, n1, n0]
        // Step 3 - swap n2 & n4 = [n6, n5, n4, n3, n2, n1, n0]
        // Step 4 - n3 stays in place = [n6, n5, n4, n3, n2, n1, n0]
        // Even # of elements dataset = [n0, n1, n2, n3, n4, n5]
        // Step 1 - swap n0 & n5 = [n5, n1, n2, n3, n4, n0]
        // step 2 - swap n1 & n4 = [n5, n4, n2, n3, n1, n0]
        // Step 3 - swap n2 & n3 = [n5, n4, n3, n2, n1, n0]
    function reverseArrayInPlace(arr) {
        // create a midPoint to iterate
        // shorthand if-else let midPoint = arr.length % 2 == 0 ? arr.length / 2 - 1 : arr.length / 2;
        let midPoint = 0;
        if (arr.length % 2 == 0){
            midPoint = arr.length / 2 - 1;
        } else {
            midPoint = arr.length / 2;
        }
    
        // create a for loop up to the midpoint
        for (let i = 0; i <= midPoint; i++){
            let temp = arr[i]; // store the value of arr[i] to a temp variable
            arr[i] = arr[arr.length -i - 1]; // assign the value of the element at arr[arr.length -i - 1] to the arr[i] (first iteration: 1st element <-> last element, etc.)
            arr[arr.length - i - 1] = temp; // assign the value of temp (same as arr[i] before changing its value) to arr[arr.length - i - 1]
        }
    
        return arr;
    }
    
    // function to print the contents of an array
    function printArray(arr) {
        for(let i = 0; i < arr.length; i++) {
            console.log(arr[i]);
        }
    }
    
    let reverseThisArray = ['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd', '!'];
    console.log(reverseArray(reverseThisArray));
    console.log(reverseArrayInPlace(reverseThisArray));