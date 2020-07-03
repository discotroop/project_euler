// If we list all the natural numbers below 10 that are multiples of 3 or 
// 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.

// Set number to check up to.
const range = 1000;

function threeAndFive(num) {
    // set variable to add results to.
    let result = 0;
    // loop through all numbers up to the range
    for (let i = 0; i < num; i++) {
        // check for matches
        if (i % 3 === 0 || i % 5 === 0) {
            // add matching results to result
            result += i;
    }
}
    // send result to console.
    console.log(result)
};

// call three and five and pass in the range (1000)
threeAndFive(range);
