
function initCEP() {
  const inputCep = document.querySelector("#cep");

  inputCep.addEventListener("input", function (e) {
    let value = e.currentTarget.value;
    value = value.replace(/\D/g, "");
    value = value.replace(/^(\d{5})(\d)/, "$1-$2");
    e.currentTarget.value = value;
  });
}

function initPhone() {
  const inputPhone = document.querySelector("#phone");

  inputPhone.addEventListener("input", function (e){
    let value = e.currentTarget.value;
    value = value.replace(/\D/g, "");
    value = value.replace(/^(\d{2})(\d{5})(\d)/, "($1) $2-$3");
    e.currentTarget.value = value;
  });
}

function iniCPF() {
  const inputCpf = document.querySelector("#cpf");

  inputCpf.addEventListener("input", function (e) {
    let value = e.currentTarget.value;
    value = value.replace(/\D/g, "");
    value = value.replace(/^(\d{3})(\d{3})(\d{3})(\d)/, "$1.$2.$3-$4");
    e.currentTarget.value = value;
  });
}

function getFormElements() {
  // encontramos o formulario pelo id
  const profileForm = document.getElementById("profile-form");
  // pegamos a chave elements que contem todos os campos e botões do formulário
  const { elements } = profileForm
  return elements;
}

function hobbyManager() {
  const list = document.getElementById("hobby-list");
  const input = document.getElementById("input-hobby");
  const btn = document.getElementById("add-hob");

  btn.addEventListener("click", e => {
    if (input.value && input.value.length > 3) {
      // Move essa logica para uma função e poder ser re-usada no carregamento dos dados
      list.innerHTML += `
          <li id="hobby-${list.childNodes.length + 1}">
                ${input.value}
                <input type="hidden" name="hobby-${list.childNodes.length + 1}" value="${input.value}" />
          </li>
        `.trim();
      input.value = "";
    }
  });
}

function laodValues(profile) {
  const elements = getFormElements();

  // pegamos quantos campos e botões tmeos no formulário pelo .length
  const size = elements.length

  // criamos um loop comçando do zero até o tamnho da coleção de elements do formulário
  for (let i = 0; i < size; i++) {
    // separamos as chaves type e name por meio de "object deconstruct"
    const { name } = elements[i];
    // checamos se o campo existe no formalário
    if (name in profile) {
      elements[i].value = profile[name];
    }
  }

  const avatar = document.getElementById("profile-avatar");
  avatar.src = profile.avatar;
  avatar.style.display = "inline-block";

  const userFullname = document.getElementById("user-fullname");
  userFullname.innerHTML = `${profile.first} ${profile.last}`;

  // Load hobbies
  // usa função de adicionar hobbies para carregar na página
}

function updateProfile(form, profile) {
  // encontramos o formulario pelo id
  const elements = form;
  const size = elements.length;

  if (!Array.isArray(profile["hobbies"])) {
    profile["hobbies"] = []
  }

  for(let i = 0; i < size; i++) {
    const { name, localName, value } = elements[i];

    if (["select", "input", "textarea"].indexOf(localName) > -1) {
      if (name.startsWith("hobby-")) {
        profile["hobbies"].push(value)
      } else {
        profile[name] = value;
      }
    }
  }

  delete profile["input-hobby"];

  return profile;
}


document.addEventListener("DOMContentLoaded", function () {
  /**
   * Inicializa campos e mascaras
   */
  initCEP();
  initPhone();
  iniCPF();

  const users = JSON.parse(localStorage.getItem("users"));
  const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
  const userIndex = users.findIndex(user => user.id === loggedUser.id);
  const profile = users[userIndex];

  // Carrega o formulário com o usuário logado
  laodValues(profile);
  hobbyManager();

  const form = document.getElementById("profile-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    e.stopPropagation();

    users[userIndex] = updateProfile(form, profile);

    localStorage.setItem("users", JSON.stringify(users));
  })
})
















/*
var expanded = false;

function showCheckboxes() {
  var checkboxes = document.getElementById("checkboxes");
  if (!expanded) {
    checkboxes.style.display = "block";
    expanded = true;
  } else {
    checkboxes.style.display = "none";
    expanded = false;
  }
}
 */