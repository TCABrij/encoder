const button = document.querySelector("button");
const input = document.querySelector("#input");
const outputDiv = document.querySelector(".output-div");

const wordObj = {
  word: "",
};

var mnemonicsCode = []

button.addEventListener("click", encode);

// encoding logic
function encode() {
  if (!input.value) {
    alert("Please enter atleast one word");
    return;
  }
  // adding clipboard and clear buttons
  textPresent();
  let inputValue = input.value.toLowerCase();
  input.value = "";
  const fetchedWords = wordFetcher(inputValue); // taking Raw string

  // varification for each word
  fetchedWords.forEach((word) => {
    isLetter(word);
    mnemonicsCode.push(`${word}-${wordObj.word}`)
    wordObj.word = ''
  });

  showOutput()
}

// Getting all the words

function wordFetcher(string) {
  string += ",";
  const word = {
    word: "",
  };
  const words = [];

  for (let i = 0; i < string.length; i++) {
    if (string[i] == ",") {
      words.push(word.word);
      word.word = "";
      continue;
    }
    word.word += string[i];
  }

  return words;
}

// varifying for letter
function isLetter(inputValue) {
  for (let i = 0; i < inputValue.length; i++) {
    let letter = inputValue[i];
    if (letter == "t" || letter == "d") {
      wordObj.word += "1";
    }
    if (letter == "n") {
      wordObj.word += "2";
    }
    if (letter == "m") {
      wordObj.word += "3";
    }
    if (letter == "r") {
      wordObj.word += "4";
    }
    if (letter == "l") {
      wordObj.word += "5";
    }
    if (letter == "g" || letter == "j") {
      wordObj.word += "6";
    }
    if (letter == "k" || letter == "c") {
      wordObj.word += "7";
    }
    if (letter == "v" || letter == "f") {
      wordObj.word += "8";
    }
    if (letter == "p" || letter == "b") {
      wordObj.word += "9";
    }
    if (letter == "z" || letter == "s") {
      wordObj.word += "0";
    }
  }
}

// drop output
function showOutput() {
  mnemonicsCode.forEach(code=>{
    const para = document.createElement("p");
    para.textContent = code
    para.classList.add('word-style')
    outputDiv.append(para)
  })
  mnemonicsCode = []
}

