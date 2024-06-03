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

//Perguntas Frequentes
const perguntas = document.querySelectorAll(".perguntas button");
const respostasAll = document.querySelectorAll(".perguntas dl dd");

function ativarResposta(event) {
  const pergunta = event.currentTarget;
  const ariaControl = pergunta.getAttribute("aria-controls");

  const resposta = document.getElementById(ariaControl);

  resposta.classList.toggle("ativo");

  const ativa = resposta.classList.contains("ativo");
  pergunta.setAttribute("aria-expanded", ativa);
}

function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarResposta);
}

perguntas.forEach(eventosPerguntas);

//Galeria de bicicletas
const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicleta-imagens");

function trocarImagem(event) {
  const img = event.currentTarget;

  const media = window.matchMedia("(min-width: 1000px)").matches;

  if (media) {
    galeriaContainer.prepend(img);
  }
}

function eventosGaleria(img) {
  img.addEventListener("click", trocarImagem);
}

galeria.forEach(eventosGaleria);
