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

elimina.onclick = function () {
  deleteName(nameUtente.value);
};

const utente = document.querySelector("#nomeUtente");
function userName() {
  let nomeUser = localStorage.getItem("nameUtente");
  return (utente.innerHTML = nomeUser);
}
userName();

let countDownTime = 60;
const timer = document.querySelector(".timer");
const interval = setInterval(function () {
  countDownTime--;
  timer.textContent = countDownTime + " secondi rimanenti";
  if (countDownTime <= 0) {
    clearInterval(interval);
    timer.textContent = "Tempo scaduto";
  }
}, 1000);
