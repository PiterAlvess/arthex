function abrirMenu() {
  const menu2 = document.querySelector(".menu2");
  menu2.classList.toggle("aberto");
}

function fecharMenu() {
  document.querySelector(".menu2").classList.remove("aberto");
}