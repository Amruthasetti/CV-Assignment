function reverseWords(sentence) {
    // Split the sentence into an array of words
    let words = sentence.split(' ');

    // Reverse each word in the array
    let reversedWords = words.map(word => {
        // Check for punctuation at the end of the word
        let punctuation = '';
        if(/[.,\/#!$%\^&\*;:{}=\-_`~()]/.test(word.slice(-1))) {
            punctuation = word.slice(-1);
            word = word.slice(0, -1);
        }

        // Reverse the word and add back the punctuation
        return word.split('').reverse().join('') + punctuation;
    });

    // Join the reversed words back into a sentence
    let reversedSentence = reversedWords.join(' ');

    return reversedSentence;
}

// Example usage
let inputSentence = "This is a sunny day";
let result = reverseWords(inputSentence);
console.log(result);
