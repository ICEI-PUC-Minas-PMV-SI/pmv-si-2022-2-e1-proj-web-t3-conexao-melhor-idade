function loadData(type) {
  // tenta carregar do local storage
  const db = localStorage.getItem(type);

  if (!db) {
    // caso não exista no localStorage faz o requerimento para a pasta "public"
    return fetch(getUrl, `/src/public/${type}.json`)
      .then(function (response) {
        // converte a resposta do requerimento para Objeto Json
        return response.json();
      })
      .then((data) => {
        // Salva o Objeto Json carregado no localStorage
        localStorage.setItem(type, JSON.stringify(data));
        return data;
      });
  }

  // Converte os dados para Objeto Json novamente e retorna
  return JSON.parse(db);
}

document.addEventListener("DOMContentLoaded", function (event) {
  /**
   * Adiciona aqui qualquer o nome de arquivo de dados novo
   * para que seja carregado no loca storage.
   */
  ["users", "vagas"].forEach((type) => {
    loadData(type);
  });
});
