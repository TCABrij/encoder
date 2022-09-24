const form = document.querySelector('form')
const inputField = document.querySelector('#input')

form.addEventListener('submit', decode)


function decode(){
  
  let multiInput = multipleInput(inputField.value)

  // Decoder for Multiple inputs 
  if(multiInput){
    
  } // for Single input
  else{
    let input = Number.parseInt(inputField.value)
    // Apply only for 0 to 9 numbers
    if(input < 0 || input > 9){
        alertUser('You have entered wrong input, Kindly enter between 0 to 9.');
        return
    }
    
  }
  
}

// If string contains comma then contains multiple inputs
function multipleInput(input){
  return input.includes(',')
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

const words = {
  0: 'A',
  1: 'B',
  2: 'C',
  3: 'D',
  4: 'E'
}  