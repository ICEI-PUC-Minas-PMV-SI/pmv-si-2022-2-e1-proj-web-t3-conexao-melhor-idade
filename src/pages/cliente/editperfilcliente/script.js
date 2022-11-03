function mostraMenu() {
  const botao = document.querySelector(".menu-mobile");
  botao.classList.toggle("show");

}

const inputCep = document.querySelector("#cep");

inputCep.addEventListener("input", function (e) {

  
  let value = e.currentTarget.value;
  value = value.replace(/\D/g, "");
  value = value.replace(/^(\d{5})(\d)/, "$1-$2");
  e.currentTarget.value = value;
  
  console.log(e.currentTarget);

});

const inputPhone = document.querySelector("#phone");

inputPhone.addEventListener("input", function (e){

  let value = e.currentTarget.value;
  value = value.replace(/\D/g, "");
  value = value.replace(/^(\d{2})(\d{5})(\d)/, "($1) $2-$3");
  e.currentTarget.value = value;
  
  console.log(e.currentTarget);

});




const inputCpf = document.querySelector("#cpf");

inputCpf.addEventListener("input", function (e) {

  let value = e.currentTarget.value;
  value = value.replace(/\D/g, "");
  value = value.replace(/^(\d{3})(\d{3})(\d{3})(\d)/, "$1.$2.$3-$4");
  e.currentTarget.value = value;

  console.log(e.currentTarget);


});





