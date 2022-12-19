//**Carregar este arquivo antes dos outros JS em todas as páginas protegidas(quando usuario precisa estar logado)
// -->  <script type="text/javascript" src="public/protected.js"></script> <--

document.addEventListener("DOMContentLoaded", function () {
  const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
  console.log(loggedUser);
  if (!loggedUser) {
    location.href = "jd/login/index.html";
  }
});
