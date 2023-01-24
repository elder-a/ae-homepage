

export function validateInput(userInput){
  if(!basicValidaiton(userInput)){
    return false;
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