const button = document.querySelector("button");
const input = document.querySelector("#input");
const outputDiv = document.querySelector(".output-div");

const wordObj = {
  code: '',
  word: "",
  prefix: "",
  mid: "6",
  postfix: "",
  clearObject() {
    this.prefix = ""
    this.postfix = ""
    this.word = ""
    this.code = ""
  },
};

var mnemonicsCode = [];

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
  const fetchedWords = wordFetcher(inputValue); // Returning Array of words

  // for each word
  fetchedWords.forEach((word) => {

  // if word contains sh and ch
    if (word.includes("sh") || word.includes("ch")) {
      findPrefixAndPostfix(word); // replacing ch and sh to 6
      isLetter(wordObj.word); // replacing prefix and suffix with their codes
      mnemonicsCode.push(`${word}-${wordObj.code}`); // pushing code to mnemonics[] array

      //clearing object for new word
      wordObj.clearObject();
    } else {
  // if not contains then do normal
      isLetter(word); 
      mnemonicsCode.push(`${word}-${wordObj.code}`);
      wordObj.clearObject()
    }
  });

  showOutput();
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
function isLetter(word) {
  for (let i = 0; i < word.length; i++) {
    let letter = word[i];
    if (letter == "t" || letter == "d") {
      wordObj.code += "1";
    }
    if (letter == "n") {
      wordObj.code += "2";
    }
    if (letter == "m") {
      wordObj.code += "3";
    }
    if (letter == "r") {
      wordObj.code += "4";
    }
    if (letter == "l") {
      wordObj.code += "5";
    }
    if (letter == "g" || letter == "j") {
      wordObj.code += "6";
    }
    if(letter == '6' ){
      wordObj.code += '6'
    }
    if (letter == "k" || letter == "c") {
      wordObj.code += "7";
    }
    if (letter == "v" || letter == "f") {
      wordObj.code += "8";
    }
    if (letter == "p" || letter == "b") {
      wordObj.code += "9";
    }
    if (letter == "z" || letter == "s") {
      wordObj.code += "0";
    }
  }
}

// drop output
function showOutput() {
  mnemonicsCode.forEach((code) => {
    const para = document.createElement("p");
    para.textContent = code;
    para.classList.add("word-style");
    outputDiv.append(para);
  });
  mnemonicsCode = [];
}

function findPrefixAndPostfix(string) {
  if (string.includes("sh")) {
    let index = string.indexOf("sh");

    for (let i = 0; i < index; i++) {
      wordObj.prefix += string[i];
    }
    for (let i = index + 2; i < string.length; i++) {
      wordObj.postfix += string[i];
    }

    // prefix + 6 + postfix
    wordObj.word = wordObj.prefix + '6' + wordObj.postfix
  
  } else {
    let index = string.indexOf("ch");

    for (let i = 0; i < index; i++) {
      wordObj.prefix += string[i];
    }
    for (let i = index + 2; i < string.length; i++) {
      wordObj.postfix += string[i];
    }
    // prefix + 6 + postfix
    wordObj.word = wordObj.prefix + '6' + wordObj.postfix

  }
}
