document.addEventListener("DOMContentLoaded", function (event) {
  // @todo Remover na próxima etapa quando fizer as abas da busca funcionar com js
  const links = Array.from(document.querySelectorAll(".cmi-hero-search li"));

  Array.from(links).forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();

      links.forEach((el) => el.classList.remove("active"));
      link.classList.add("active");
    });
  });
});