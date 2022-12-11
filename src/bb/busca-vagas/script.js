function mostraMenu() {
  const botao = document.querySelector(".menu-mobile");
  botao.classList.toggle("show");

}


// Define uma URL para o INPUT de pesquisa, assim dando um URL para as pesquisas

const url = new URL(location.href);
const query = url.searchParams.get("q");
document.getElementById("busca-query").value = query;


// Chama o JSON na LocalStorage

const vagas = JSON.parse(localStorage.getItem("vagas"))
console.log(vagas)

// Limita o número de vagas a aparecer por pesquisa

const maxSize = 15
const vagasFiltradas = vagas

// Filtra as pesquisas limitando o número de pesquisa também, podendo filtrar caracteres que sejam minusculo ou maiusculo
.filter(vaga => !query || vaga.titulo_vaga.toLowerCase().includes(query.toLowerCase()))
.slice(0,14);

// inputa as vagas do Json para a tela, filtrando o Json pelo o que é importante
const vagasContainer = document.getElementById("vagas") 
vagasFiltradas.forEach((vaga, index) => {
console.log(index,vaga)  
const vagaHtml = `
<div class="caixa-vagas">
  <a href="bb/busca-vagas/index.html?q=${query || ""}&id=${vaga.id}">
    <h2>${vaga.titulo_vaga} ${vaga.id}</h2>
    <p class="cidade">${vaga.area}, ${vaga.city}</p>
    <p class="pre-viw">${vaga.descricao_vaga}</p>
  </a>
  </div>
`
// Chama o código para dentro do HTML
vagasContainer.innerHTML += vagaHtml 




});


const id = url.searchParams.get("id");
if(id){
const vagaSelecionada = vagasFiltradas.find(vaga => vaga.id === id)
.slice(0,1)

vagaSelecionada.forEach((vaga, index) => {


    const vagaPagina = `
    <div class="vagas-desc">
      <div class="caixa-desc">
        <h2>${vaga.titulo_vaga}  ${vaga.id}</h2>
          <div class="first-section">
            <div class="contratante">
                <pre>Conheça o contrante</pre>
                <a href="#">
                <img src="img/luiz.jpg" alt="Luiz">
                <div class="contrante-desc">
                                        <h3>Luiz Fernando</h2>
                                            <p>Santos, São Paulo.</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="informacoes-vaga">
                        <h4 id="jornada">
                            Jornada
                        </h4>
                        <p>
                            Meio período
                        </p>
                    </div>
                    <div>
                        <button type="button" class="candidatar"><a href="#">Candidatar-se</a></button>
                        <button type="button" class="salvar-vaga"><a href="#">Salvar</a></button>
                    </div>
                    <div class="segunda-secao">
                        <h3 id="desc-vaga">Descrição da vaga</h3>
                        <p>
                            Cuidados e acompanhamento, inclusive em consultas médicas e tratamentos dos idosos, dar as
                            medicações nos horários previstos, dar a alimentação conforme cronograma de horários, dar
                            banho,troca de roupas e ou/fraldas, troca da roupa de cama, manter organizado qualquer
                            espaço que for utilizado durante o período. Todo serviço é supervisionado pela
                            Coordenadora de Assistência.Ser formado ou estar cursando auxiliar de enfermagem, mesmo que
                            já tenha o curso de cuidador.
                        </p>
                    </div>
                    <div class="terceira-secao">
                        <h3 id="atividade-vaga">Atividades</h3>
                        <div id="atividades">
                            <p>
                                Cuidado 1
                            </p>
                            <p>
                                cuidado 2
                            </p>
                            <p>
                                cuidado 3
                            </p>
                        </div>
                    </div>
                </div>
    `
    vagaDesc.innerHTML = vagaPagina
   
})

}