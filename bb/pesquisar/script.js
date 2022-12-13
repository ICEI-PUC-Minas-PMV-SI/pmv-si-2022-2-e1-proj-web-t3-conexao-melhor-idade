function mostraMenu() {
    const botao = document.querySelector(".menu-mobile");
    botao.classList.toggle("show");
  
  }
  const url = new URL(location.href);
  const query = url.searchParams.get("q");
  document.getElementById("busca-query").value = query;
  
  
  const users = JSON.parse(localStorage.getItem("users"))
  console.log(users)
  
  const maxSize = 7
  const usersFiltrados = users
  .filter(user => !query || user.first.toLowerCase().includes(query.toLowerCase()))
  .slice(0,7)
  
  const containerPessoas = document.getElementById("identifica_pessoa") 
  usersFiltrados.forEach((user, index) => {
      console.log(index,user)  
      const userHtml = `
      <a href="bb/perfil-profissional/index.html">
      <div class="caixa-pessoa">
            <img src="${user.avatar}" alt="${user.first} ${user.last}">
                <div class="edit">
                    <h2>${user.first} ${user.last}</h2>
                    <p>${user.city}, ${user.area}.</p>
                </div>
        </div>
`
          containerPessoas.innerHTML += userHtml 
      });

const vagas = JSON.parse(localStorage.getItem("vagas"))
console.log(vagas)
const maximoVagas = 10
const vagasFiltradas = vagas
.filter(vaga => !query || vaga.titulo_vaga.toLowerCase().includes(query.toLowerCase()))
.slice(0,10)
const vagasContainer = document.getElementById("identifica_vagas") 
vagasFiltradas.forEach((vaga, index) => {
console.log(index,vaga)  
const vagaHtml = `
    <div class="caixa-vagas">
        <a href="bb/busca-vagas/index.html?q=${query || ""}&id=${vaga.id}">
            <h2>${vaga.titulo_vaga}</h2>
            <p class="cidade">${vaga.area}, ${vaga.city}</p>
        </a>
    </div>
`
      vagasContainer.innerHTML += vagaHtml 
      });