function mostraMenu() {
  const botao = document.querySelector(".menu-mobile");
  botao.classList.toggle("show");
}
const url = new URL(location.href);
const query = url.searchParams.get("q");
document.getElementById("busca-query").value = query;

const vagas = JSON.parse(localStorage.getItem("vagas"));
console.log(vagas);
const maxSize = 10;
const vagasFiltradas = vagas
  .filter(
    (vaga) =>
      !query || vaga.titulo_vaga.toLowerCase().includes(query.toLowerCase())
  )
  .slice(0, 10);
const vagasContainer = document.getElementById("vagas");
function mostraInfoVagas(event) {
  const id = event.target.dataset.id;
  const container = document.querySelector("#vaga-desc");
  const vagaAtual = vagas?.find((vaga) => {
    return vaga.id === id;
  });
  if (vagaAtual) {
    const descHtml = `
  <div class="vagas-desc">
                    <div class="caixa-desc">
                        <h2>
                        ${vagaAtual.titulo_vaga}
                        </h2>
                        <div class="first-section">
                            <div class="contratante">
                                <pre>Conheça o contrante</pre>
                                <a href="href="bb/perfil-profissional/index.html">
                                <img src="${vagaAtual.avatar}" alt="${vagaAtual.first} ${vagaAtual.last}">
                                    <div class="contrante-desc">
                                        <h3>${vagaAtual.first}</h3>
                                            <p>${vagaAtual.city}, ${vagaAtual.area}.</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="informacoes-vaga">
                        <h4>
                            Jornada
                        </h4>
                        <p>
                          ${vagaAtual.jornada}
                        </p>
                    </div>
                    <div class="secao-candidatar">
                        <button type="button" class="candidatar"><a href="#">Candidatar-se</a></button>
                        <button type="button" class="salvar-vaga"><a href="#">Salvar</a></button>
                    </div>
                    <div class="segunda-secao">
                        <h3 id="desc-vaga">Descrição da vaga</h3>
                        <p>
                        ${vagaAtual.descricao_vaga} 
                        </p>
                    </div>
                    <div class="terceira-secao">
                        <h3 id="atividade-vaga">Atividades</h3>
                        <div id="atividades">
                            <p>
                              ${vagaAtual.atividade_1}
                            </p>
                            <p>
                              ${vagaAtual.atividade_2}
                            </p>
                            <p>
                             ${vagaAtual.atividade_3}
                            </p>
                        </div>
                    </div>
                </div>
`;
    container.innerHTML = descHtml;
  }

  console.log(vagaAtual);
}
vagasFiltradas.forEach((vaga, index) => {
  console.log(index, vaga);
  const vagaHtml = `
  <button class="caixa-vagas" data-id="${vaga.id}">
      <h2 data-id="${vaga.id}">${vaga.titulo_vaga}</h2>
      <p data-id="${vaga.id}" class="cidade">${vaga.area}, ${vaga.city}</p>
    </button>
`;
  vagasContainer.innerHTML += vagaHtml;
});

const descVagas = document.querySelectorAll(".caixa-vagas");
descVagas.forEach((descVaga) => {
  descVaga.addEventListener("click", mostraInfoVagas);
});
