//lentu pasirinkimai
document.getElementById("storis").addEventListener("change", function () {
  let selectedValue = this.value;
  document.querySelector(".storis-info").textContent = selectedValue;
  calculateKubatura();
});
document.getElementById("plotis").addEventListener("change", function () {
  let selectedValue = this.value;
  document.querySelector(".plotis-info").textContent = selectedValue;
  calculateKubatura();
});
document.getElementById("ilgis").addEventListener("change", function () {
  let selectedValue = this.value;
  document.querySelector(".ilgis-info").textContent = selectedValue;
  calculateKubatura();
});

//lentu kiekis
document.getElementById("kiekis").addEventListener("change", function () {
  let ivestasKiekis = this.value;
  document.querySelector(".kiekis-info").textContent = ivestasKiekis;
  calculateKubatura();
});

//kubatura
function calculateKubatura() {
  let storis = document.querySelector(".storis-info").textContent;
  let plotis = document.querySelector(".plotis-info").textContent;
  let ilgis = document.querySelector(".ilgis-info").textContent;
  let kiekis = document.querySelector(".kiekis-info").textContent;
  let kubatura = (storis * plotis * ilgis * kiekis) / 1000000000;
  document.querySelector(".kubatura-info").textContent = kubatura.toFixed(3);
  calculateViso(kubatura);
}

//Viso-kaina
const pricePerCubicMeter = 317.5; // Kaina už 1 m³
function calculateViso(kubatura) {
  let viso = pricePerCubicMeter * kubatura;
  document.querySelector(".viso-info").textContent = viso.toFixed(2) + "€";
}


//Informacija
document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();
  this.reset();
});
