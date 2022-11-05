$(function () {
  // start - Search input tabs
  const links = Array.from(document.querySelectorAll(".cmi-hero-search li"));

  Array.from(links).forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();

      links.forEach((el) => el.classList.remove("active"));
      link.classList.add("active");
    });
  });
  // end - Search input tabs

  // start - PopOver Buttons
  const popOverTriggers = $("[data-bs-content-id]");

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
