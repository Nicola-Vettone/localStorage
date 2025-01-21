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

let countDownTime = sessionStorage.getItem("countDownTime") || 0;
const timer = document.querySelector(".timer");

timer.textContent = countDownTime + " secondi trascorsi";
const interval = setInterval(function () {
  countDownTime++;

  timer.textContent = countDownTime + " secondi trascorsi";
  sessionStorage.setItem("countDownTime", countDownTime);
}, 1000);
