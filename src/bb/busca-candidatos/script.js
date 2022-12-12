function mostraMenu() {
    const botao = document.querySelector(".menu-mobile");
    botao.classList.toggle("show");
}

const url = new URL(location.href);
const query = url.searchParams.get("q");
document.getElementById("busca-query").value = query;


const users = JSON.parse(localStorage.getItem("users"))
console.log(users)

function updatePageNumber(pageNumber) {
    document.getElementById("page-num").innerHTML = pageNumber + 1;
}
const maxSize = 10
const usersFiltrados = users
.filter(user => !query || user.first.toLowerCase().includes(query.toLowerCase()))
.slice(0,10)

const containerPessoas = document.getElementById("users") 
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
        </a>
        `
        containerPessoas.innerHTML += userHtml 
    });
    
    