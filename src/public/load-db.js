function loadData(type) {
  const db = localStorage.getItem(type);

  if (!db) {
    return fetch(
      `/pmv-si-2022-2-e1-proj-web-t3-conexao-melhor-idade/blob/main/src/public/${type}.json`
    )
      .then(function (response) {
        return response.json();
      })
      .then((data) => {
        localStorage.setItem(type, JSON.stringify(data));
        return data;
      });
  }

  return JSON.parse(db);
}

document.addEventListener("DOMContentLoaded", function (event) {
  ["users", "vagas"].forEach((type) => {
    loadData(type);
  });
});
