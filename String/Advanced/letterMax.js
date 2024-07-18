function countRepeatedLetters(word) {

    const lowercaseWord = word.toLowerCase();
    const charCount = {};

    for (let char of lowercaseWord) {
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }


    let maxRepeated = 0;
    for (let char in charCount) {
        if (charCount[char] > maxRepeated) {
            maxRepeated = charCount[char];
        }
    }

    return maxRepeated;
}

function wordWithMostRepeatedLetters(sentence) {
    const words = sentence.split(" ");
    let maxRepeatedLetters = 0;
    let wordWithMaxRepeatedLetters = "";

    for (let word of words) {
        const repeatedCount = countRepeatedLetters(word);

        if (repeatedCount > maxRepeatedLetters) {
            maxRepeatedLetters = repeatedCount;
            wordWithMaxRepeatedLetters = word;
        }
    }

    return wordWithMaxRepeatedLetters;
}


const sentence = "Hello apple pie";
const result = wordWithMostRepeatedLetters(sentence);
console.log(`First word with the greatest number of repeated letters: ${result}`);
