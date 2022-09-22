function showOutput() {
    mnemonicsCode.forEach((code) => {
      const para = document.createElement("p");
      para.textContent = code;
      para.classList.add("word-style");
      outputDiv.append(para);
    });
    mnemonicsCode = [];
  }