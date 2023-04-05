// declarations
const formKelilingSegitiga = document.querySelector("#form-keliling-segitiga");
const resetKelilingSegitiga = document.querySelector(
  "#reset-keliling-segitiga"
);
const formLuasSegitiga = document.querySelector("#form-luas-segitiga");
const resetLuasSegitiga = document.querySelector("#reset-luas-segitiga");

const formKelilingJG = document.querySelector("#form-keliling-jg");
const resetKelilingJG = document.querySelector("#reset-keliling-jg");
const formLuasJG = document.querySelector("#form-luas-jg");
const resetLuasJG = document.querySelector("#reset-luas-jg");

// common
function resetInputs(form) {
  const inputs = form.querySelectorAll("input[type='number']");
  const resetBtn = form.querySelector(".result");

  resetBtn.innerHTML = "";
  inputs.forEach((input) => (input.value = ""));
}

// luas segitiga
function calculateLuasSegitiga(event) {
  event.preventDefault();
  let a = Number(formLuasSegitiga.elements["alas"].value);
  let t = Number(formLuasSegitiga.elements["tinggi"].value);

  const result = document.querySelector(".result-luas-segitiga");
  const error = document.querySelector(".error-luas-segitiga");

  if (a <= 0 || t <= 0 || isNaN(a) || isNaN(t)) {
    error.innerHTML =
      "<p style='color: red'>Nilai alas dan tinggi harus diisi dan positif!</p>";
    result.innerHTML = "";
  } else {
    let luas = 0.5 * a * t;

    const rumusP = document.createElement("p");
    const valueP = document.createElement("p");
    const resultP = document.createElement("p");
    rumusP.innerText = `L = 1/2 x a x t`;
    valueP.innerText = `L = 1/2 x ${a} x ${t}`;
    resultP.innerText = `Luas segitiga adalah ${luas}`;

    result.appendChild(rumusP);
    result.appendChild(valueP);
    result.appendChild(resultP);
    error.innerHTML = "";
  }
}

// keliling segitiga
function calculateKelilingSegitiga(event) {
  event.preventDefault();
  let a = Number(formKelilingSegitiga.elements["a"].value);
  let b = Number(formKelilingSegitiga.elements["b"].value);
  let c = Number(formKelilingSegitiga.elements["c"].value);

  const result = document.querySelector(".result-keliling-segitiga");
  const error = document.querySelector(".error-keliling-segitiga");

  if (a <= 0 || b <= 0 || c <= 0 || isNaN(a) || isNaN(b) || isNaN(c)) {
    error.innerHTML =
      "<p style='color: red'>Nilai sisi harus diisi dan positif!</p>";
    result.innerHTML = "";
  } else {
    let keliling = a + b + c;

    const rumusP = document.createElement("p");
    const valueP = document.createElement("p");
    const resultP = document.createElement("p");
    rumusP.innerText = `K = S1 + S2 + S3`;
    valueP.innerText = `K = ${a} + ${b} + ${c}`;
    resultP.innerText = `Keliling segitiga adalah ${keliling}`;

    result.appendChild(rumusP);
    result.appendChild(valueP);
    result.appendChild(resultP);
    error.innerHTML = "";
  }
}

// luas jajargenjang
function calculateLuasJG(event) {
  event.preventDefault();
  let a = Number(formLuasJG.elements["alas"].value);
  let t = Number(formLuasJG.elements["tinggi"].value);

  const result = document.querySelector(".result-luas-jg");
  const error = document.querySelector(".error-luas-jg");

  if (a <= 0 || t <= 0 || isNaN(a) || isNaN(t)) {
    error.innerHTML =
      "<p style='color: red'>Nilai alas dan tinggi harus diisi dan positif!</p>";
    result.innerHTML = "";
  } else {
    let luas = a * t;

    const rumusP = document.createElement("p");
    const valueP = document.createElement("p");
    const resultP = document.createElement("p");
    rumusP.innerText = `L = a x t`;
    valueP.innerText = `L = ${a} x ${t}`;
    resultP.innerText = `Luas jajar genjang adalah ${luas}`;

    result.appendChild(rumusP);
    result.appendChild(valueP);
    result.appendChild(resultP);
    error.innerHTML = "";
  }
}

// keliling jajargenjang
function calculateKelilingJG(event) {
  event.preventDefault();
  let a = Number(formKelilingJG.elements["a"].value);
  let m = Number(formKelilingJG.elements["m"].value);

  const result = document.querySelector(".result-keliling-jg");
  const error = document.querySelector(".error-keliling-jg");

  if (a <= 0 || m <= 0 || isNaN(a) || isNaN(m)) {
    error.innerHTML =
      "<p style='color: red'>Nilai alas dan sisi miring harus diisi dan positif!</p>";
    result.innerHTML = "";
  } else {
    let keliling = 2 * (a + m);

    const rumusP = document.createElement("p");
    const valueP = document.createElement("p");
    const resultP = document.createElement("p");
    rumusP.innerText = `K = 2 (a + m)`;
    valueP.innerText = `K = 2 (${a} + ${m})`;
    resultP.innerText = `Keliling jajar genjang adalah ${keliling}`;

    result.appendChild(rumusP);
    result.appendChild(valueP);
    result.appendChild(resultP);
    error.innerHTML = "";
  }
}

// calculate event listeners
formKelilingSegitiga.addEventListener("submit", calculateKelilingSegitiga);
formLuasSegitiga.addEventListener("submit", calculateLuasSegitiga);

formKelilingJG.addEventListener("submit", calculateKelilingJG);
formLuasJG.addEventListener("submit", calculateLuasJG);

// reset event listeners
resetKelilingSegitiga.addEventListener("click", function (e) {
  e.preventDefault();
  resetInputs(formKelilingSegitiga);
});
resetLuasSegitiga.addEventListener("click", function (e) {
  e.preventDefault();
  resetInputs(formLuasSegitiga);
});
resetKelilingJG.addEventListener("click", function (e) {
  e.preventDefault();
  resetInputs(formKelilingJG);
});
resetLuasJG.addEventListener("click", function (e) {
  e.preventDefault();
  resetInputs(formLuasJG);
});

// navbar event listeners
const segitigaNav = document.querySelector("#segitiga");
const jgNav = document.querySelector("#jajar");

segitigaNav.addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector(".segitiga").classList.remove("none");
  document.querySelector(".jajargenjang").classList.add("none");
  segitigaNav.classList.add("active");
  jgNav.classList.remove("active");
});

jgNav.addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector(".jajargenjang").classList.remove("none");
  document.querySelector(".segitiga").classList.add("none");
  jgNav.classList.add("active");
  segitigaNav.classList.remove("active");
});
