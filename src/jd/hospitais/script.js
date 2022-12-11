let map;

function iniciarInputAutocomplete() {
  const input = document.querySelector('#endereco-input');

  const options = {
    componentRestrictions: { country: 'br' },
  };

  new google.maps.places.Autocomplete(input, options);
}

function initMap() {
  const center = { lat: -19.9451125, lng: -44.1344438 };

  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center,
  });

  iniciarInputAutocomplete();
}

function formatarRespostaDeHospital({ place_id, name, vicinity }) {
  return {
    id: place_id,
    nome: name,
    endereco: vicinity,
  };
}

function pegarLocalizacaoDeEndereco(endereco) {
  if (!endereco) return;

  const lat = endereco.geometry?.location.lat();
  const lng = endereco.geometry?.location.lng();

  return {
    lat,
    lng,
  };
}

function buscarLocalizacaoPeloEndereco(endereco) {
  const geocoder = new google.maps.Geocoder();

  return new Promise((resolve) => {
    geocoder.geocode({ address: endereco }, function (resultados, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        const resultado = resultados?.[0];
        resolve(pegarLocalizacaoDeEndereco(resultado));
      }
    });
  });
}

function buscarListaDeHospitaisPelaLocalizacao({ lat, lng }) {
  const location = new google.maps.LatLng(lat, lng);

  const service = new google.maps.places.PlacesService(map);

  return new Promise((resolve) => {
    service.nearbySearch(
      {
        location,
        radius: '10000',
        type: ['hospital'],
      },
      (resultados, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          const hospitais = resultados.map(formatarRespostaDeHospital);
          resolve(hospitais);
        }
      }
    );
  });
}

function mostraMenu() {
  const botao = document.querySelector('.menu-mobile');
  botao.classList.toggle('show');
}

const form = document.querySelector('#pesq');

function criaBlocoDeHospital({ nome, endereco }) {
  const elementoBloco = document.createElement('div');
  elementoBloco.classList.add('bloco');
  // Cria a div com a class text
  const elementoText = document.createElement('div');
  elementoText.classList.add('text');
  const elementoH1 = document.createElement('h1');
  elementoH1.textContent = nome;
  const elementoPre = document.createElement('pre');
  elementoPre.textContent = endereco;
  elementoText.append(elementoH1);
  elementoText.append(elementoPre);

  // Cria a div com a class text-1

  const elementoText1 = document.createElement('div');
  elementoText1.classList.add('text-1');
  const elementoH2 = document.createElement('h2');
  elementoH2.textContent = '7km';
  const elementoBotao = document.createElement('button');
  const elementoImg = document.createElement('img');
  elementoImg.src = 'img/outline_assistant_direction_black_24dp.png';
  elementoText1.append(elementoH2);
  elementoBotao.append(elementoImg);
  elementoText1.append(elementoBotao);

  // Insere as duas divs na div com a class bloco

  elementoBloco.append(elementoText);
  elementoBloco.append(elementoText1);

  return elementoBloco;
}

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const endereco = event.target[0].value;

  const localizacao = await buscarLocalizacaoPeloEndereco(endereco);
  const hospitais = await buscarListaDeHospitaisPelaLocalizacao(localizacao);

  const container = document.querySelector('#card');
  container.innerHTML = '';

  hospitais.forEach((hospital) => {
    const element = criaBlocoDeHospital(hospital);
    container.append(element);
  });
});

window.initMap = initMap;
// gcloud services enable \
//     --project "PROJECT" \
//     "directions-backend.googleapis.com" \
//     "distance-matrix-backend.googleapis.com" \
//     "elevation-backend.googleapis.com" \
//     "geocoding-backend.googleapis.com" \
//     "geolocation.googleapis.com" \
//     "maps-android-backend.googleapis.com" \
//     "maps-backend.googleapis.com" \
//     "maps-embed-backend.googleapis.com" \
//     "maps-ios-backend.googleapis.com" \
//     "places-backend.googleapis.com" \
//     "roads.googleapis.com" \
//     "static-maps-backend.googleapis.com" \
//     "street-view-image-backend.googleapis.com" \
//     "timezone-backend.googleapis.com"
