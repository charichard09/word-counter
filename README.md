_Test Driven Developement_

Describe: wordCounter()

Test: "It should return 1 if a passage has just one word."
Code:
const text = "hello";
wordCounter(text);
Expected Output: 1

Test: "It should return 2 if a passage has two words."
Code:
const text = "hello there";
wordCounter(text);
Expected Output: 2

Test: "It should return 0 for an empty string."
Code:
const text = "";
wordCounter(text);
Expected Output: 0

Test: "It should return 0 for a string that is empty spaces."
Code:
const text = "     ";
wordCounter(text);
Expected Output: 0

Test: "It should not count numbers words."
Code: 
wordCounter("hi there 77 19");
Expected Output: 2


Describe: numberOfOccurencesInText(word, text)

Test: "('red', '') should return 0."
Code:
const text = "";
const word = "red";
numberOfOccurencesInText
Expected Output: 0

Test: "It should return 1 occurrence of a word when the word and the text are the same."
Code:
const text = "red";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 1

Test: "It should return 0 occurrences of a word when the word and the text are different."
Code:
const text = "red";
const word = "blue";
numberOfOccurrencesInText(word, text);
Expected Output: 0

Test: "It should return the number of occurrences of a word."
Code:
const text = "red blue red red red green";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 4