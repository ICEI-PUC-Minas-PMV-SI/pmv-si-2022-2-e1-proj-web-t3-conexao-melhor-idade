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


// Rating Initialization
$(document).ready(function () {
  $("#rateMe1").mdbRate();
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

  // start - SignUp Buttons
  
  function toggleSignUpType(elem1, elem2) {
    elem1.on("click", function (e) {
      elem1.removeClass("btn-light");
      elem1.addClass("btn-secondary");
      elem2.removeClass("btn-secondary");
      elem2.addClass("btn-light");
    });
  }

  const opt1 = $(".cmi-sign-up-client");
  const opt2 = $(".cmi-sign-up-pro");

  toggleSignUpType(opt1, opt2);
  toggleSignUpType(opt2, opt1);
  // end - SignUp Buttons
});

// hamburger menu

function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}