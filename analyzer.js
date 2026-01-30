const readline = require('readline');

// Set up the interface to read input from the terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a sentence ending with a period: ', (sentence) => {
    // Initialize counters
    let charCount = 0;
    let wordCount = 1; 
    let vowelCount = 0;
    const vowels = "aeiouAEIOU";

    // Process character by character
    for (const char of sentence) {
        charCount++;

        // Count vowels
        if (vowels.includes(char)) {
            vowelCount++;
        }

        // Count words based on single space
        if (char === " ") {
            wordCount++;
        }

        // Stop if we hit the period (as per instructions)
        if (char === ".") {
            break;
        }
    }

    console.log(`Length of sentence: ${charCount}`);
    console.log(`Number of words: ${wordCount}`);
    console.log(`Number of vowels: ${vowelCount}`);

    rl.close();
});