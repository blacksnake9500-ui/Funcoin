let logo = document.querySelector(".logo");
let hero_btn = document.querySelector(".hero_btn");

hero_btn.addEventListener("click", () => {
  logo.src = "./imgs/logo 2.png";
});

function bos() {
  let a = document.getElementById("ekran");

  a.classList.remove("ochil");
  void a.offsetWidth;
  a.classList.add("ochil");
}

