function mostraMenu() {
    const botao = document.querySelector(".menu-mobile");
    botao.classList.toggle("show");
  
  }
  
import { conectaApi } from "./conexao-json.js";
  const lista = document.querySelector("[data-lista]");

  function constroiCard(avatar, first, last, city, bio, area){
    const pessoa = document.createElement("id");
    pessoa.className = "identifica_pessoa";
    pessoa.innerHTM = `
                        <div class="caixa-pessoa">
                          <img src="${avatar}" alt="${first},${last}">
                          <div class="edit">
                              <a href="#">
                                  <h2>${first}, ${last}</h2>
                              </a>
                              <p>${area}, ${city}.</p>
                              <p> ${bio}.</p>
                          </div>
                        </div>
`;
    return pessoa;
  }

  async function listaPessoas(){
    const listaApi = await conectaApi.listaPessoas();
    listaApi.forEach(elemento => lista.appendChild(constroiCard(elemento.avatar, elemento.first, elemento.last, elemento.bio, elemento.area, elemento.city )))
  }

  listaPessoas()