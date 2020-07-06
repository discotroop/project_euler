

// A palindromic number reads the same both ways. The largest palindrome made 
// from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

// 999 * 999 = 998001
// 910 * 990 = 


let ceiling = 998001;

// test if a number is a palindrome
function isNumPalindrome(num) {
    first = num + "";
    second = first.split("").reverse().join("");
    if (first === second) {
        return true;
    }
}

// check largest palindrome below a passed ceiling
function findLargestPalindrome (num) {
    for (let i = num; i > 100000; i--)
        if (isNumPalindrome(i) === true) {
            console.log("got em", i);
            return i;
        }
}

function checkProduct (target) {
    for (let i = 999; i > 0; i--) {
        if (target % i === 0) {
            console.log("get em", i);
            return true;
        }
    }
}

function findAnswer() {
    if (checkProduct(findLargestPalindrome(ceiling)) === true) {
        console.log("wining")
    } else {

    }
}



checkProduct();


