function loadData(users) {
  // tenta carregar do local storage
  const db = localStorage.getItem("users");

  if (!db) {
    // caso não exista no localStorage faz o requerimento para a pasta "public"
    return fetch(`/public/${users}.json`)
      .then(function (response) {
        // converte a resposta do requerimento para Objeto Json
        return response.json();
      })
      .then((users) => {
        // Salva o Objeto Json carregado no localStorage
        localStorage.setItem("users", JSON.stringify("users"));
        return users;
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
  ["users"].forEach((users) => {
    loadData(users);
  });
});
