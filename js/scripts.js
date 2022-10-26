// Business Logic
function mostUsedWords(textPassage) {
  // UI Logic to make div > h3 title
  const mostCommonDiv = document.createElement("div");                         
  mostCommonDiv.setAttribute("id", "most-common-words");
  document.getElementById("bolded-passage").after(mostCommonDiv);
  const mostCommonH3 = document.createElement("h3");
  mostCommonH3.append("Most common words:");
  document.getElementById("most-common-words").append(mostCommonH3);

  // Business Logic
  const commonWordsObject = {};                                                // create object to contain words as property, number of occurences as value
                                                                               // I am using an Object to store each word in textPassage as a property and to
                                                                               // give that word a value of how many occurences in the textPassage
  
  const textArray = textPassage.split(" ");                                    // split textPassage into an array of individual words
  
  textArray.forEach(function(word){                                            // forEach loop through each word

    if (!Object.hasOwn(commonWordsObject, word.toLowerCase())) {               // Object.hasOwn(Obj, property) will return true if Obj has property already,
                                                                               // if word.lowerCased is NOT (!) in commonWordsObject, then execute if statement
                                                                               // assign commonWordsObject[word.lowerCased] with number of occurrences derived from the function
    commonWordsObject[word.toLowerCase()] = numberOfOccurrencesInText(word, textPassage);
    }                                                                          // repeat loop for each word, checking if it isnt in commonWordsObj, and if it is not,
                                                                               // add word to commonWordsObj as a property and assign its value numberOfOccurencesInText() 
  });
  
  let entries = Object.entries(commonWordsObject);                             // Object.entries is a static method that will return an array of all property: value pairs
                                                                               // i.e. entries === [["hi", 3], ["yo", 10], ["hello", 5]];
                                                                               // create an "entries" array that will contain the [property, value] pairs in commonWordsObject

  let sorted = entries.sort(function (a, b) { return a[1] - b[1]}).reverse();  // sort() will default to sorting alphabetically, to sort numerically, use the compareFunction
                                                                               // parameter like so: sort('function (a, b) {return a - b}'): 
                                                                               // this will compare every 2 elements to eachother, if elementA - elementB is negative (a - b), 
                                                                               // it will sort elementB before elementA. If elementA - element B is zero, or positive
                                                                               // sort will do nothing and move on to check the next elements.  
                                                                               // Because our array has nested arrays as elements, we specify to sort by our number 
                                                                               // values with syntax {return a[1] - b[1]} since a[0] and b[0] are our property strings.
                                                                               // after we finish sorting entries from lowest - highest, we reverse() it then assign it to sorted

  sorted.forEach(function(entry) {                                             // this says loop through the sorted array, for each entry (which is an array of [property, value])
                                                                               // append the text of property (entry[0]), concatenated with value (entry[1].toString) to h3 element 
    let h3Entry = document.createElement("h3");
    h3Entry.append(entry[0] + ": " + entry[1].toString())                      // append h3 element with our appened word: numberOfOccurence (property: value) to Div
    mostCommonDiv.append(h3Entry);
  });
}

//total word count in text
function wordCounter(text) {
  if (text.trim().length === 0) {
    return 0;
  }
  let wordCount = 0;
  const textArray = text.split(" ");
  textArray.forEach(function(element) {
    if (!Number(element)) {
      wordCount++;
    }
  });

  return wordCount;
}

//number of occurences of word in text
function numberOfOccurrencesInText(word, text) {
  if (word.trim().length === 0) {
    return 0;
  }
  const textArray = text.split(" ");
  let wordCount = 0;
  textArray.forEach(function(element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++;
    }
  });
  return wordCount;
}

function omitPunctuation(text) {
  const punctuation = [",", ".", "!", "?"];
  let newWord = text.split("");

  punctuation.forEach(function(punct) {
    if (newWord.includes(punct)) {
      newWord.pop();
    } else if (newWord.includes("'")) {
      newWord.pop()
      newWord.shift();
    }
  });

  return newWord.join("");
}

function omitBleep(badWord, textPassage) {
  let textPassageArray = textPassage.split(" ");
  let newArray =[];
  
  textPassageArray.forEach(function(text) {
    if (badWord.includes(omitPunctuation(text))) {
      //do nothing
    } else {
      newArray.push(omitPunctuation(text))
    }
  });

  return newArray.join(" ");
}

// UI Logic
function handleFormSubmission(event) {
  event.preventDefault();
  const passage = document.getElementById("text-passage").value;
  const word = document.getElementById("word").value;
  const wordCount = wordCounter(passage);
  const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
  document.getElementById("total-count").innerText = wordCount;
  document.getElementById("selected-count").innerText = occurrencesOfWord;
  let boldedPassage = boldPassage(word, passage);
  if (boldedPassage) {
    document.querySelector("div#bolded-passage").append(boldedPassage);
  } else {
    document.querySelector("div#bolded-passage").innerText = null;
  }

  mostUsedWords(passage);
}

window.addEventListener("load", function() {
  document.querySelector("form#word-counter").addEventListener("submit", handleFormSubmission);
});

function boldPassage(word, text) {
  if (word.trim().length === 0 || text.trim().length === 0) {
    return null;
  }
  let pElement = document.createElement("p");
  let textArray = text.split(" ");
  
  textArray.forEach(function (text, index) {
    if (text.includes(word)) {
      let wordBold = document.createElement("strong");
      wordBold.append(word);
      pElement.append(wordBold, " ");
    } else {
      pElement.append(text, " ");
    }
  });

  return pElement;
}