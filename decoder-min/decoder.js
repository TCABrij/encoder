const form = document.querySelector("form");
const inputField = document.querySelector("#input");

form.addEventListener("submit", decode);

// Object will be used to generate decodedArr[]
const code = {
  outputArr: [],
  num: "",
  resetObj: ()=>{
    code.outputArr = []
    code.num = ""
  }
};

// This array will get decoded strings, used for output purposes
let decodedArr = []

function decode() {
  let numArr = [...inputField.value];
  let firstNum = numArr[0];

  // check if first Number has multiple codes ex: 1=T,D & 0=Z,S
  if (hasMultipleCode(firstNum)) {
  }
  // For numbers who have single code: example: 2=N,3=M.
  else {
    // case: only one number entered.
    if (numArr.length == 1) {
      generateCode(numArr[0]);
      showOutput()
    }
    // case: multiple numbers entered.
    else {
    }
  }

  // For Each Number
  numArr.forEach((number) => {
    if (number == "0") {
    } else if (number == "1") {
    } else if (number == "2") {
    } else if (number == "3") {
    } else if (number == "4") {
    } else if (number == "5") {
    } else if (number == "6") {
    } else if (number == "7") {
    } else if (number == "8") {
    } else if (number == "9") {
    }
  });
}

function generateCode(number) {
  code.num = number;

  if (number == "0") {
  } else if (number == "1") {
  } 
  else if (number == "2") code.outputArr.push("N");
  else if (number == "3") code.outputArr.push("M");
  else if (number == "4") code.outputArr.push("R");
  else if (number == "5") code.outputArr.push("L");
  else if (number == "6") {
  } else if (number == "7") {
  } else if (number == "8") {
  } else if (number == "9") {
  }

  // Will genearate decodedArr[]
  generateDecodeArr()
  // Reset Code Object for next Input
  code.resetObj()
}

function generateDecodeArr(){
  decodedArr.push(`${code.num}_${code.outputArr}`)
}

function hasMultipleCode(num) {
  let multiNums = ["0", "1", "6", "7", "8", "9"];
  return multiNums.includes(num);
}

function showOutput() {
  decodedArr.forEach( output => {
    const para = document.createElement("p");
    para.textContent = output;
    para.classList.add("word-style");
    document.querySelector(".output-div").append(para);
  });
  decodedArr = [];
  document.querySelector('.internal-buttons').classList.add('visible')
}


const numCodes = {
  zero: ["Z", "S"],
  one: ["T", "D"],
  two: ["N"],
  three: ["M"],
  four: ["R"],
  five: ["L"],
  six: ["G", "J", "CH", "SH"],
  seven: ["K", "C"],
  eight: ["V", "F"],
  nine: ["P", "B"],
};
