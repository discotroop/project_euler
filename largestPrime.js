// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

let target = 600851375143;
let testTarget = 13195;
let testTargetCount = 13195;
// Reduce range by checking square root of target.
// Any number larger than this will multiply to a number larger than the target

// console.log(Math.floor(Math.sqrt(target)))

// Theory of Arithmetic:
// Any integer greater than 1 is either a prime number, or can be written as 
// a unique product of prime numbers (ignoring the order).

// 6897,,, but not working ?

let starter = []
let largest = 0;

let counter = 2;
// allow for square route
while (counter * counter <= target) {
    if (target % counter === 0) {
        target = target / counter;
        largest = counter;
    } else {
        counter++
    }
}
if (testTarget > largest) {
    largest = target;
}

console.log(counter);
console.log(largest)



// for (let i = 2; i < testTarget; i++) {
//     starter.push(i)
// }

// function sieve(index, arr) {
//     let newArr = []
//     for (let i = 0; i < index; i++) {
//         newArr.push(arr[i]);
//     }
//     for (let i = index + 1; i < arr.length; i++) {
//         if (arr[i] % arr[index] !== 0) {
//             newArr.push(arr[i])
//         }
//     }
//     console.log(newArr);
//     return newArr;
// } 

// console.log(4 % 2)

// function recursiveSieve(arr) {
//     let j = 0;
//     while (j < arr.length) {
//         arr = sieve(j, arr);
//         j++
//     }
//     console.log("helo", arr);
// }

// recursiveSieve(starter)

// sieve of erastothenes
// generate primes

// function generatePrimes(n) {
//     let primes = [];
//     // remove even numbers
//     for (let i = 1; i < n; i++) {
//         if (i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0 && i % 7 !== 0 && n % i === 0) {
//             primes.push(i);
//         }
//     }
//     console.log("primes", primes);
// }

// generatePrimes(testTarget)
