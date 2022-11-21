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

  // start - PopOver Buttons
  const popOverTriggers = $("[user-menu]");

  popOverTriggers.each(function (index, elem) {
    const popover = new mdb.Popover(elem, {
      html: true,
      content: $(`#${$(elem).data("bs-content-id")}`).html(),
    });
  });
  // end - PopOver Buttons



  function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
  }
});
