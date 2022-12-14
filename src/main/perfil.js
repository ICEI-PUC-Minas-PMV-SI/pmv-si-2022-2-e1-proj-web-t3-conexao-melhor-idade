document.addEventListener("DOMContentLoaded", function () {
  const url = new URL(location.href);
  const userId = url.searchParams.get("id");
  console.log(userId, "first", url);

  const users = JSON.parse(localStorage.getItem("users"));
  console.log(users);
  const user = users.find(function (user) {
    return userId === user.id;
  });
  console.log(userId, "user.first");

  if (!user) {
    window.confirm(
      "Você precisa estar logado para visualizar esta página, faça seu login ou cadastre-se."
    );
    location.href = "login/index.html";
  }
  {
    console.log(user);

    document.getElementById("profile-first").innerHTML = user.first;
    document.getElementById("profile-area").innerHTML = user.area;
    document.getElementById("profile-city").innerHTML = user.city;
    document.getElementById("profile-state").innerHTML = user.state;
    document.getElementById("profile-avatar").src = user.avatar;
    document.getElementById("profile-bio").innerHTML = user.bio;
    document.getElementById("profile-hobbie1").innerHTML = user.hobbie1;
    document.getElementById("profile-hobbie2").innerHTML = user.hobbie2;

    console.log(user.companhia);

    if (user.companhia) {
      document.getElementById("profile-companhia").innerHTML = `
    <div class="d-flex text-muted mb-2">
        <span id="profile-cuidador-icon"
            class="material-symbols-outlined text-primary me-2">loyalty</span>
        <span>${user.companhia}</span>
    </div>
`;
    }
    if (user.cuidador) {
      document.getElementById("profile-cuidador").innerHTML = `
    <div class="d-flex text-muted mb-2">
        <span id="profile-cuidador-icon" class="material-symbols-outlined text-primary me-2">
         medical_services</span>
     <span>${user.cuidador}</span>
    </div>
`;
    }
    if (user.voluntario) {
      document.getElementById("profile-voluntario").innerHTML = `
    <div class="d-flex text-muted mb-2">
        <span id="profile-cuidador-icon" class="material-symbols-outlined text-primary me-2">
         volunteer_activism</span>
    <span>${user.voluntario}</span>
    </div>`;
    }

    //Google maps
    if (user.city) {
      const mapUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBDVBCs7vNWXu2-kwp4gQmuSdxbvlVBTv4&q=${user.area},+${user.city}+-+${user.state},+${user.country}&zoom=16`;
      document.getElementById("profile-map").src = mapUrl;
    }
  }
});
