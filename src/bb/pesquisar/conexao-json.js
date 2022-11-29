function mostraMenu() {
    const botao = document.querySelector(".menu-mobile");
    botao.classList.toggle("show");
  
  }

async function listaPessoas(){
    const conexao = await fetch("http://localhost:3000/data");
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

export const conectaApi = {
  listaPessoas
}