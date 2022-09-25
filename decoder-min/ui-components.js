function alertUser(alertText) {
  document.body.innerHTML += `<section class="alert-window">
  <div class="alert-menu">Alert</div>
  <div class="alert-box">
      <p class="alert-text">${alertText}</p>
      <div class="confirmation-box">
          <button class="confirm-btn">Okay</button>
      </div>
  </div>
</section>`
  const alertWindow = document.querySelector(".alert-window");
  alertWindow.classList.add("visible-alert-window");

  const confirm = document.querySelector(".confirmation-box");

  confirm.addEventListener("click", (e) => {
    if (e.target.classList.contains('confirm-btn'))
      alertWindow.classList.remove("visible-alert-window");
      setTimeout(()=> alertWindow.remove(), 200)
  });
}

// HTML 