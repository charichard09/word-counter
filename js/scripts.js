// Business Logic
function wordCounter(text) {
  let wordCount = 0;
  const textArray = text.split(" ");
  
  if (text.trim() === "") {
    return 0;
  }; 

  textArray.forEach(function(element) {
    if (parseFloat(element)) {
      
    } else {
    wordCount++;
    }
  });

  return wordCount;
}

function numberOfOccurrencesInText(word, text) {
  const textArray = text.split(" ");
  let wordCount = 0;
  textArray.forEach(function(element) {
    if (element.include(word))
    if else (word.toUpperCase() === element.toUpperCase()) {
    wordCount++;
    }
  });
  return wordCount;
}

// UI Logic