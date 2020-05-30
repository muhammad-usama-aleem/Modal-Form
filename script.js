const sign = document.getElementById("join");
const close = document.getElementById("close");
const modal = document.getElementById("modal");

// showing form
sign.addEventListener("click", (e) => {
  modal.style.display = "block";
});

// hiding form
close.addEventListener("click", (e) => {
  modal.style.display = "none";
});
