//Ativar links do menu
const links = document.querySelectorAll(".header-menu a");

function igualaLink(link) {
  const url = window.location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(igualaLink);

//Ativar itens do orçamneto
const parametros = new URLSearchParams(window.location.search);

parametros.forEach((parametro) => {
  const elemento = document.getElementById(parametro);

  if (elemento) {
    elemento.checked = true;
  }
});
