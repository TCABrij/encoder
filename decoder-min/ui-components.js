function alertUser(alertText) {
  const alertWindow = document.querySelector(".alert-window");
  alertWindow.classList.add("visible-alert-window");
  document.querySelector(".alert-text").textContent = alertText;

  const confirm = document.querySelector(".confirmation-box");

  confirm.addEventListener("click", (e) => {
    if (e.target.classList.contains('confirm-btn'))
      alertWindow.classList.remove("visible-alert-window");
  });
}
