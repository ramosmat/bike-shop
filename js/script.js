const links = document.querySelectorAll(".header-menu a");

function igualaLink(link) {
  const url = window.location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(igualaLink);
