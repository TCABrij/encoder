const form = document.querySelector('form')
const inputField = document.querySelector('#input')

form.addEventListener('submit', decode)


function decode(){
  
  // input field sholdn't be empty
  if(empty(inputField)){
    alert("Atleast one input required! 😐")
    return
  }
  
  // Validate only numbers allowed
  // if(!alphaNumericInput(inputField.value)){
  //   alert("Enter Encoded code only 🥺")
  //   return
  // }

  console.log(alphaNumericInput(inputField.value))

  
}



function empty(input){
  return input.value === '' ? true : false
}

function alphaNumericInput(input){
  let small = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'z']
  let capital = small.map((letter) => letter.toUpperCase())
  
  small.forEach( letter => {
    for(let i=0; i<input.length; i++){
      if(letter == input[i])
        break;
    }

    return true
  })
  
}

function showOutput() {
    mnemonicsCode.forEach((output) => {
      const para = document.createElement("p");
      para.textContent = output;
      para.classList.add("word-style");
      document.querySelector('.output-div').append(para);
    });
    mnemonicsCode = [];
  }