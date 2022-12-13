document.addEventListener("DOMContentLoaded", function (event) {
  const users = JSON.parse(localStorage.getItem("users"));
  const professionals = users.filter(
    (user) => user.user_type === "profissional"
  );

  const groups = [];

  while (professionals.length > 0) {
    groups.push(professionals.splice(0, 4));
  }

  const container = document.getElementById("professionalsSlider");

  groups.forEach((group, index) => {
    const slide = document.createElement("div");

    slide.classList.add("carousel-item");

    if (index === 0) {
      slide.classList.add("active");
    }

    const row = document.createElement("div");

    row.classList.add("row");

    group.forEach((user) => {
      const reviews = Array.from(
        Array(Math.floor(parseInt(user.reviews, 10))).keys()
      )
        .map(() => "★")
        .join("");
      console.log(reviews);
      row.innerHTML += `
        <div class="col-md-3 px-2">
          <div class="card">
            <div class="p-3">
              <div class="rounded-circle overflow-hidden" data-mdb-ripple-color="light">
                <img src="${user.avatar}" alt="" class="img-fluid" />
              </div>
            </div>
            <div class="card-body">
              <h5 class="card-title">${user.first}</h5>
              <p class="card-text mb-0">${user.prefession}</p>
              <small class="d-block text-muted mb-3">
                ${user.city}, ${user.state}
              </small>
              <span class="reviews">
                ${reviews}
              </span>
            </div>
          </div>
        </div>
      `.trim();
    });

    slide.innerHTML = row.outerHTML;

    container.innerHTML += slide.outerHTML;
  });
});
