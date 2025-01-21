class Nome {
  constructor(nameUtente) {
    this.name = nameUtente;
  }
}

const form = document.querySelector("#formName");

form.onsubmit = function (event) {
  event.preventDefault();
};
const elimina = document.querySelector("#delete");
const nameUtente = document.querySelector("#name");

const newNome = new Nome(nameUtente.value);

function saveName(nameUtente) {
  localStorage.setItem("nameUtente", nameUtente);
}

form.onsubmit = function () {
  saveName(nameUtente.value);
};

function deleteName(nameUtente) {
  localStorage.removeItem("nameUtente", nameUtente);
}

const utente = document.querySelector("#nomeUtente");
function userName() {
  let nomeUser = localStorage.getItem("nameUtente");
  return (utente.innerHTML = nomeUser);
}

elimina.onclick = function () {
  deleteName(nameUtente.value);
  utente.innerHTML = "";
};
userName();

let countDownTime = sessionStorage.getItem("countDownTime") || 60;
const timer = document.querySelector(".timer");
timer.textContent = countDownTime + " secondi rimanenti";
const interval = setInterval(function () {
  countDownTime--;
  timer.textContent = countDownTime + " secondi rimanenti";
  sessionStorage.setItem("countDownTime", countDownTime);
  if (countDownTime <= 0) {
    clearInterval(interval);
    timer.textContent = "Tempo scaduto";
  }
}, 1000);
