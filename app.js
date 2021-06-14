const arrow = document.querySelector("#arrow");

document.addEventListener("scroll", () => {
  if (!(window.scrollY === 0)) {
    arrow.style.display = "none";
  } else {
    arrow.style.display = "block";
  }
});

arrow.addEventListener("click", () => {
  const link = document.createElement("a");
  link.style.display = "none";
  link.href = "#first";
  link.click();
});

// Se o scroll estiver alterado na hora de abrir a página é só descomentar o código a seguir
// window.scrollTo({ top: 0})