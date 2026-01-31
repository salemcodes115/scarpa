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
