// Business Logic
function mostUsedWords(textPassage) {
  const commonWordsObject = {};
  const textArray = textPassage.split(" ");
  
  textArray.forEach(function(word){
    if (!Object.hasOwn(commonWordsObject, word.toLowerCase())) {
    commonWordsObject[word.toLowerCase()] = numberOfOccurrencesInText(word, textPassage);
    }
  });
  
  const mostCommonH3 = document.createElement("h3");
  mostCommonH3.append("Most common words:");
  document.getElementById("bolded-passage").after(mostCommonH3);

  let entries = Object.entries(commonWordsObject);
  let sorted = entries.sort(function (a, b) { return a[1] - b[1]});
  sorted.forEach(function(entry) {
    let h3Entry = document.createElement("h3");
    h3Entry.append(entry[0] + ": " + entry[1].toString())
    mostCommonH3.after(h3Entry);
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