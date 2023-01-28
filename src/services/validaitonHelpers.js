

export function validateInput(userInput, wordArr){
  if(!basicValidaiton(userInput)){
    return false;
  }

  for (let i in wordArr) {
    if(userInput == wordArr[i].word){
      return false;
    }
  }
  return true;
}

function basicValidaiton(userInput){
  if(hasWhiteSpace(userInput)){
    return false;
  }
  return true;
}

function hasWhiteSpace(s) {
  return s.indexOf(' ') >= 0;
}

export function validateAgainstLetter(userWord, generatedLetters){
  let lowUserWord = userWord.toLowerCase();
  let lowGeneratedLetters = generatedLetters.toLowerCase();

  for (let i in lowUserWord) {
    let passedWord = false;
    for (let j in lowGeneratedLetters) {
      if(lowGeneratedLetters[j] === lowUserWord[i]){
        passedWord = true;
      }
    }
    if(passedWord === false){
      return false;
    }
  }
  return true;

}

export function letterMaker(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export function totalSum(wordArr, finalWordVal) {
  // syntax is bad here
  let totalScore = 0;
  for (let i in wordArr) {
    totalScore += wordArr[i].wordScore;
  }
  totalScore += finalWordVal.wordScore;
  return totalScore;
}


//return letter score 
//gotta finish adding the letter scores 
function letterScorer(letter){
  const letterScores = {
    'a': 1,
    'b': 3,
    'c': 3,
    'd': 2,
    'e': 1,
    'f': 4,
    'g': 2,
    'h': 4,
    'i': 1,
    'j': 8,
    'k': 5,
    'l': 1,
    'm': 3,
    'n': 1,
    'o': 1,
    'p': 3,
    'q': 10,
    'r': 1,
    's': 1,
    't': 1,
    'u': 1,
    'v': 4,
    'w': 4,
    'x': 8,
    'y': 4,
    'z': 10,
  };
  return letterScores[letter];
}
//returns word score 
export function wordScorer(word) {
  let lowUserWord = word.toLowerCase();
  let wordValue = 0;
  for (let i in lowUserWord) {
      wordValue += letterScorer(lowUserWord[i]);
  }
  return wordValue;

}