const button = document.querySelector("button");
const input = document.querySelector("#input");
const outputDiv = document.querySelector(".output-div");


 const word = {
     word: ''
 }

button.addEventListener("click", encode);

// encoding logic
function encode() {
  if (!input.value) {
    alert("Please enter atleast one word");
    return;
  }
  let inputValue = input.value.toLowerCase();
  input.value = "";

  isLetter(inputValue) // letter


  showOutput(inputValue);
}

// varifying for letter
function isLetter(inputValue){

    for(let i=0; i<inputValue.length; i++){
        let letter = inputValue[i]
        if(letter == 't' || letter =='d'){
           word.word += '1'
        }
        if(letter == 'n'){
           word.word += '2'
        }
        if(letter == 'm'){
            word.word += '3'
        }
        if(letter == 'r'){
           word.word += '4'
        }
        if(letter == 'l'){
            word.word += '5'
        }
        if(letter == 'g' || letter == 'j'){
            word.word += '6'
        }
        if(letter == 'k' || letter == 'c'){
            word.word += '7'
        }
        if(letter == 'v' || letter == 'f'){
            word.word += '8'
        }
        if(letter == 'p' || letter == 'b'){
           word.word += '9'
        }
        if(letter == 'z' || letter == 's'){
            word.word += '0'
        }
    }
}



// drop output
function showOutput(inputWord) {
  const para = document.createElement("p");
  para.textContent = `${inputWord}-${word.word},`;
  outputDiv.appendChild(para);
  para.classList.add('word-style')
  word.word = ""
}

