// JavaScript function to calculate Fibonacci sequence using recursion and memoization

// Initialize an object to store already calculated values
const memo = {};

function improvedFib(n) {
    // If the value is already calculated, return it from memo
    if (memo[n] !== undefined) {
        return memo[n];
    }

    // Base cases: If n is 0 or 1, return n
    if (n < 2) {
        memo[n] = n;
        return n;
    }

    // Recursive case: Calculate Fibonacci for n using memoization
    memo[n] = improvedFib(n - 1) + improvedFib(n - 2);
    return memo[n];
}

// Example usage:
const result = improvedFib(10); // Change the argument to calculate Fibonacci for a different number
console.log(result); // Output the result
