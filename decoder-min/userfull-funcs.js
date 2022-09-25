function clearOutput() {
  document.querySelectorAll(".word-style").forEach((div) => div.remove());
  document.querySelector(".internal-buttons").classList.remove("visible");
}

function copyToClipboard() {
  let copiedCodes = "";
  const paras = document.querySelectorAll(".word-style");
  paras.forEach((para) => {
    copiedCodes += `${para.textContent},`;
  });
  // clipboard
  navigator.clipboard.writeText(copiedCodes);

  // renaming button text
  document.querySelector(".copy-btn").textContent = "Copied 🎉";
  setTimeout(clearOutput, 1000);
}
