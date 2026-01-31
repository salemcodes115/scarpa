// Algorithms and utility functions requested by the user

// Problem 1: Sum of distinct (symmetric-difference) elements between two arrays
function sumOfDistinct(a, b) {
  const setA = new Set(a);
  const setB = new Set(b);
  let sum = 0;
  for (const x of setA) if (!setB.has(x)) sum += x;
  for (const x of setB) if (!setA.has(x)) sum += x;
  return sum;
}

// Problem 2: Dot product - procedure (simulated) and function
function dotProductProcedure(v1, v2, outObj) {
  let ps = 0;
  for (let i = 0; i < Math.min(v1.length, v2.length); i++) ps += v1[i] * v2[i];
  outObj.ps = ps; // write result into passed object (simulates procedure with output param)
}

function dotProductFunction(v1, v2) {
  let ps = 0;
  for (let i = 0; i < Math.min(v1.length, v2.length); i++) ps += v1[i] * v2[i];
  return ps;
}

function areOrthogonalProcedure(v1, v2) {
  const out = {};
  dotProductProcedure(v1, v2, out);
  return out.ps === 0;
}

function areOrthogonalFunction(v1, v2) {
  return dotProductFunction(v1, v2) === 0;
}

// String manipulation functions
function reverseString(s) {
  return s.split('').reverse().join('');
}

function countCharacters(s) {
  return s.length;
}

function capitalizeWords(sentence) {
  return sentence
    .split(' ')
    .map(w => (w.length ? w[0].toUpperCase() + w.slice(1) : w))
    .join(' ');
}

// Array functions
function findMax(arr) {
  if (!arr.length) return undefined;
  return arr.reduce((m, x) => (x > m ? x : m), arr[0]);
}

function findMin(arr) {
  if (!arr.length) return undefined;
  return arr.reduce((m, x) => (x < m ? x : m), arr[0]);
}

function sumOfArray(arr) {
  return arr.reduce((s, x) => s + x, 0);
}

function filterArray(arr, predicate) {
  const out = [];
  for (const x of arr) if (predicate(x)) out.push(x);
  return out;
}

// Mathematical functions
function factorial(n) {
  if (n < 0) return undefined;
  let res = 1;
  for (let i = 2; i <= n; i++) res *= i;
  return res;
}

function isPrime(n) {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0) return false;
  const r = Math.floor(Math.sqrt(n));
  for (let i = 3; i <= r; i += 2) if (n % i === 0) return false;
  return true;
}

function fibonacciSequence(terms) {
  const out = [];
  if (terms <= 0) return out;
  if (terms >= 1) out.push(0);
  if (terms >= 2) out.push(1);
  while (out.length < terms) {
    const n = out.length;
    out.push(out[n - 1] + out[n - 2]);
  }
  return out;
}

// --- Quick tests / demo outputs ---
console.log('--- Problem 1: Sum of distinct elements ---');
console.log(sumOfDistinct([3, 1, 7, 9], [2, 4, 1, 9, 3])); // expected 13 (4+7+2)

console.log('\n--- Problem 2: Dot product and orthogonality ---');
const v1 = [1, 2, 3];
const v2 = [3, -6, 3];
const out = {};
dotProductProcedure(v1, v2, out);
console.log('dotProductProcedure ps=', out.ps);
console.log('dotProductFunction =', dotProductFunction(v1, v2));
console.log('areOrthogonalProcedure =', areOrthogonalProcedure(v1, v2));
console.log('areOrthogonalFunction =', areOrthogonalFunction(v1, v2));

console.log('\n--- String functions ---');
const s = 'hello world';
console.log('reverseString:', reverseString(s));
console.log('countCharacters:', countCharacters(s));
console.log('capitalizeWords:', capitalizeWords('this is a test'));

console.log('\n--- Array functions ---');
const arr = [5, 9, 1, 7, -2];
console.log('max:', findMax(arr));
console.log('min:', findMin(arr));
console.log('sum:', sumOfArray(arr));
console.log('filter >5:', filterArray(arr, x => x > 5));

console.log('\n--- Math functions ---');
console.log('factorial(5)=', factorial(5));
console.log('isPrime(17)=', isPrime(17));
console.log('isPrime(18)=', isPrime(18));
console.log('fibonacciSequence(8)=', fibonacciSequence(8));

module.exports = {
  sumOfDistinct,
  dotProductProcedure,
  dotProductFunction,
  areOrthogonalProcedure,
  areOrthogonalFunction,
  reverseString,
  countCharacters,
  capitalizeWords,
  findMax,
  findMin,
  sumOfArray,
  filterArray,
  factorial,
  isPrime,
  fibonacciSequence,
};
// ========================================
// PROBLEM 1: Sum of Distinct Elements
// ========================================

/**
 * Problem 1 Solution
 * Find the sum of all distinct elements from two sets
 * Example: Set1=[3,1,7,9], Set2=[2,4,1,9,3]
 * Output: 13 (distinct elements: 4, 7, 2)
 */

function sumOfDistinctElements(set1, set2) {
    let sum = 0;
    
    // Add elements from set1 that are not in set2
    console.log("\n--- Problem 1: Sum of Distinct Elements ---");
    console.log("Set 1:", set1);
    console.log("Set 2:", set2);
    
    for (let i = 0; i < set1.length; i++) {
        let isPresent = false;
        
        // Check if set1[i] is in set2
        for (let j = 0; j < set2.length; j++) {
            if (set1[i] === set2[j]) {
                isPresent = true;
                break;
            }
        }
        
        // If not present in set2, add to sum
        if (!isPresent) {
            sum += set1[i];
            console.log(`Element ${set1[i]} from Set1 is distinct (not in Set2), sum = ${sum}`);
        }
    }
    
    // Add elements from set2 that are not in set1
    for (let i = 0; i < set2.length; i++) {
        let isPresent = false;
        
        // Check if set2[i] is in set1
        for (let j = 0; j < set1.length; j++) {
            if (set2[i] === set1[j]) {
                isPresent = true;
                break;
            }
        }
        
        // If not present in set1, add to sum
        if (!isPresent) {
            sum += set2[i];
            console.log(`Element ${set2[i]} from Set2 is distinct (not in Set1), sum = ${sum}`);
        }
    }
    
    return sum;
}

// Test Problem 1
const set1 = [3, 1, 7, 9];
const set2 = [2, 4, 1, 9, 3];
const result1 = sumOfDistinctElements(set1, set2);
console.log("Sum of distinct elements:", result1);


// ========================================
// PROBLEM 2: Dot Product & Orthogonal Vectors
// ========================================

/**
 * Problem 2.1: Procedure for dot product calculation
 * Calculates the scalar (dot) product of two vectors v1 and v2
 * @param {Array} v1 - First vector
 * @param {Array} v2 - Second vector
 * @returns {number} - The dot product
 */
function dot_product(v1, v2) {
    let ps = 0; // ps = product sum
    
    for (let i = 0; i < v1.length; i++) {
        ps += v1[i] * v2[i];
    }
    
    return ps;
}

/**
 * Problem 2.2: Check if vectors are orthogonal
 * Determines if two vectors are orthogonal (dot product = 0)
 * @param {Array} v1 - First vector
 * @param {Array} v2 - Second vector
 * @returns {boolean} - True if orthogonal, false otherwise
 */
function areOrthogonal(v1, v2) {
    const dotProd = dot_product(v1, v2);
    return dotProd === 0;
}

/**
 * Problem 2.3: Check n pairs of vectors for orthogonality using procedure
 * @param {Array} vectorPairs - Array of vector pairs [[v1, v2], [v3, v4], ...]
 */
function checkOrthogonalityUsingProcedure(vectorPairs) {
    console.log("\n--- Problem 2: Dot Product & Orthogonal Vectors (Using Procedure) ---");
    
    for (let i = 0; i < vectorPairs.length; i++) {
        const v1 = vectorPairs[i][0];
        const v2 = vectorPairs[i][1];
        
        const dotProd = dot_product(v1, v2);
        const isOrthogonal = dotProd === 0;
        
        console.log(`\nPair ${i + 1}:`);
        console.log(`Vector 1: [${v1}]`);
        console.log(`Vector 2: [${v2}]`);
        console.log(`Dot Product: ${dotProd}`);
        console.log(`Orthogonal: ${isOrthogonal}`);
    }
}

/**
 * Problem 2.4: Check n pairs of vectors for orthogonality using function
 * Same as above but demonstrates using function instead of procedure
 * @param {Array} vectorPairs - Array of vector pairs [[v1, v2], [v3, v4], ...]
 */
function checkOrthogonalityUsingFunction(vectorPairs) {
    console.log("\n--- Problem 2: Dot Product & Orthogonal Vectors (Using Function) ---");
    
    for (let i = 0; i < vectorPairs.length; i++) {
        const v1 = vectorPairs[i][0];
        const v2 = vectorPairs[i][1];
        
        const isOrthogonal = areOrthogonal(v1, v2);
        const dotProd = dot_product(v1, v2);
        
        console.log(`\nPair ${i + 1}:`);
        console.log(`Vector 1: [${v1}]`);
        console.log(`Vector 2: [${v2}]`);
        console.log(`Dot Product: ${dotProd}`);
        console.log(`Orthogonal: ${isOrthogonal ? "YES" : "NO"}`);
    }
}

// Test Problem 2 with sample vectors
const vectorPairs = [
    [[1, 0, 0], [0, 1, 0]],      // Orthogonal (dot product = 0)
    [[1, 2, 3], [4, 5, 6]],      // Not orthogonal (dot product = 32)
    [[2, 3], [-3, 2]],           // Orthogonal (dot product = 0)
    [[1, 1], [1, -1]]            // Orthogonal (dot product = 0)
];

checkOrthogonalityUsingProcedure(vectorPairs);
checkOrthogonalityUsingFunction(vectorPairs);
