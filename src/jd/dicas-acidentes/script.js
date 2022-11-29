function mostraMenu() {
    const botao = document.querySelector(".menu-mobile");
    botao.classList.toggle("show");
  
  }



  const accordionTitles = document.querySelectorAll(".text-2");

  accordionTitles.forEach((accordionTitle) => {
    accordionTitle.addEventListener("click", () => {
      if (accordionTitle.classList.contains("is-open")) {
        accordionTitle.classList.remove("is-open");
      } else {
        const accordionTitlesWithIsOpen = document.querySelectorAll(".is-open");
        accordionTitlesWithIsOpen.forEach((accordionTitleWithIsOpen) => {
          accordionTitleWithIsOpen.classList.remove("is-open");
        });
        accordionTitle.classList.add("is-open");
      }
    });
  });