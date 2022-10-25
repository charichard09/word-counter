// Business Logic
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

function numberOfOccurrencesInText(word, text) {
  const textArray = text.split(" ");
  let wordCount = 0;
  textArray.forEach(function(element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++;
    }
  });
  return wordCount;
}

function omitBleep(badWord, textPassage) {
  const badWord = "zoinks muppeteer biffaroni loopdaloop";
  const textPassage = "hello muppeteer, this is ZoInks. Stop your biffaroni and start doing the loopdaloop.";
  
  let textPassageArray = textPassage.split(" ");
  const badWordArray = badWord.split(" ");
  

  badWordArray.forEach(function(word) {
    
}
  let newBadWordArray = [];
  badWordArray.forEach(function(word) {
    newBadWordArray.push(word.toUpperCase());
  });

  let newArray =[];

  textPassageArray.forEach(function(text) {
    //for each text, if it is included in badArray, True, do nothing
    if (!newBadWordArray.includes(!text.toUpperCase())) {
      newArray.push(text)
    //if text is not included in badArray, false, go to else, push text to newArray
    }
    //bottom of loop to go to next text word in textPassageArr
  });

  return newArray.join(" ");
}


// UI Logic
Co-authored-by: Brian Noh <noh24@ymail.com>



//base form that removes bad words with 0 punctuation
function omitBleep(badWord, textPassage) {
  let textPassageArray = textPassage.split(" ");
  let newArray =[];
  
  textPassageArray.forEach(function(text) {
    //"muppeteer".includes("muppeteer,")
    if (badWord.includes(text)) {
      //do nothing
    } else {
      newArray.push(text)
    }
  });

  return newArray.join(" ");
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
    //"muppeteer".includes("muppeteer,")
    if (badWord.includes(omitPunctuation(text))) {
      //do nothing
    } else {
      newArray.push(omitPunctuation(text))
    }
  });

  return newArray.join(" ");
}