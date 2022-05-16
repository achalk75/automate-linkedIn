let btns = document.querySelectorAll(".artdeco-button__text");
btns.forEach((e, i) => {
  if (e.innerText === "Connect") {
    setInterval(() => {
      e.click();
    }, 5000);
  }
});
