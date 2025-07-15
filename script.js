





const materias = [
  {
    nombre: "Pedagogía",
    anio: 1,
    requisitos: []
  },
  {
    nombre: "Didáctica y currículum",
    anio: 1,
    requisitos: []
  },
  {
    nombre: "Psicología y educación",
    anio: 1,
    requisitos: []
  },
  // ... Agregaremos todas las materias aquí una por una más adelante
];

function guardarEstado(nombre, tipo) {
  const estado = JSON.parse(localStorage.getItem('estadoMaterias')) || {};
  estado[nombre] = estado[nombre] || {};
  estado[nombre][tipo] = true;
  localStorage.setItem('estadoMaterias', JSON.stringify(estado));
  renderMalla();
}

function cargarEstado(nombre) {
  const estado = JSON.parse(localStorage.getItem('estadoMaterias')) || {};
  return estado[nombre] || {};
}

function cumpleRequisitos(materia) {
  const estado = JSON.parse(localStorage.getItem('estadoMaterias')) || {};
  return materia.requisitos.every(req => {
    const est = estado[req.nombre] || {};
    return est[req.estado];
  });
}

function renderMalla() {
  const contenedor = document.getElementById("malla");
  contenedor.innerHTML = "";

  materias.forEach(materia => {
    const estado = cargarEstado(materia.nombre);
    const puedeCursar = cumpleRequisitos(materia);

    const div = document.createElement("div");
    div.className = "materia";
    if (!puedeCursar && materia.requisitos.length) div.classList.add("inactiva");
    if (estado.aprobado) div.classList.add("aprobada");

    const titulo = document.createElement("h3");
    titulo.textContent = materia.nombre;
    div.appendChild(titulo);

    const estadoDiv = document.createElement("div");
    estadoDiv.className = "estado";

    const btnRegular = document.createElement("button");
    btnRegular.textContent = "Regular";
    btnRegular.className = "regular";
    btnRegular.onclick = () => guardarEstado(materia.nombre, "regular");

    const btnAprobado = document.createElement("button");
    btnAprobado.textContent = "Aprobado";
    btnAprobado.className = "aprobado";
    btnAprobado.onclick = () => guardarEstado(materia.nombre, "aprobado");

    estadoDiv.appendChild(btnRegular);
    estadoDiv.appendChild(btnAprobado);
    div.appendChild(estadoDiv);
    contenedor.appendChild(div);
  });
}

document.addEventListener("DOMContentLoaded", renderMalla);
