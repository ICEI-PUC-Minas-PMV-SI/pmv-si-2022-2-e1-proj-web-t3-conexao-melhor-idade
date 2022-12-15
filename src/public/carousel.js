document.addEventListener("DOMContentLoaded", function (event) {
  const user = JSON.parse(localStorage.getItem("users")) || [];

  const users = user.filter((user) => user.user_type === "profissional");

  if (Array.isArray(users)) {
    const professionals =
      user.filter((pro) => {
        return pro.user_type === "profissional";
      }) || [];
  }
  const professionals = user.filter(function (user) {
    return user.user_type === "profissional";
  });
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
      const rating = Array.from(
        Array.from(Math.floor(parseInt(user.rating, 10))).keys()
      )
        .map(() => "★")
        .join("");
      console.log("rating");
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
              <p class="card-text mb-0">${user.profession}</p>
              <small class="d-block text-muted mb-3">
                ${user.city}, ${user.state}
              </small>
              <span class="reviews">
                ${user.rating}
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
