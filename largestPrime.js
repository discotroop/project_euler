// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

let target = 600851375143;
let testTarget = 13195;

// Reduce range by checking square root of target.
// Any number larger than this will multiply to a number larger than the target

console.log(Math.floor(Math.sqrt(target)))

let starter = []


for (let i = 2; i < 100; i++) {
    starter.push(i)
}

console.log(starter)

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

console.log(13195 % 29);