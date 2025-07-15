// script.js

// Estructura: idMateria: { requisitos: [...], tipoRequisito: "regular" o "aprobado" para cada item }
const requisitos = {
  // PRIMER AÑO (no tiene prerequisitos)
  "pedagogia": {},
  "didactica_curriculum": {},
  "psicologia_educacion": {},
  "problematica_cultural": {},
  "problematica_historica_I": {},
  "lenguaje_visual_I": {},
  "dibujo_I": {},
  "pintura_I": {},
  "ceramica_I": {},
  "escultura_I": {},
  "forma_color_I": {},
  "practica_docente_I": {},

  // SEGUNDO AÑO
  "historia_social": {
    regular: ["pedagogia", "problematica_cultural"]
  },
  "antropologia": {
    regular: ["problematica_cultural"]
  },
  "sujeto_I": {
    regular: ["psicologia_educacion"]
  },
  "didactica_artes_I": {
    regular: ["didactica_curriculum", "pedagogia"],
    aprobado: ["didactica_curriculum"]
  },
  "problematica_historica_II": {
    aprobado: ["problematica_historica_I"]
  },
  "lenguaje_visual_II": {
    regular: ["lenguaje_visual_I"],
    aprobado: ["forma_color_I"]
  },
  "forma_color_II": {
    regular: ["forma_color_I"],
    aprobado: ["forma_color_I"]
  },
  "dibujo_II": {
    regular: ["dibujo_I", "pintura_I"],
    aprobado: ["dibujo_I", "pintura_I"]
  },
  "pintura_II": {
    regular: ["dibujo_I", "pintura_I"],
    aprobado: ["dibujo_I", "pintura_I"]
  },
  "ceramica_II": {
    regular: ["ceramica_I", "escultura_I"],
    aprobado: ["ceramica_I", "escultura_I"]
  },
  "escultura_II": {
    regular: ["ceramica_I", "escultura_I"],
    aprobado: ["ceramica_I", "escultura_I"]
  },
  "grafica_I": {
    regular: ["forma_color_I", "lenguaje_visual_I"]
  },
  "practica_docente_II": {
    regular: ["pedagogia"],
    aprobado: ["practica_docente_I", "psicologia_educacion"]
  }
  // Resto de los años continuará...
};

function guardarEstado() {
  const estados = {};
  document.querySelectorAll('.materia input').forEach(input => {
    estados[input.id] = input.checked;
  });
  localStorage.setItem('estadoMaterias', JSON.stringify(estados));
}

function cargarEstado() {
  const estados = JSON.parse(localStorage.getItem('estadoMaterias')) || {};
  for (let id in estados) {
    const input = document.getElementById(id);
    if (input) input.checked = estados[id];
  }
}

function verificarDesbloqueos() {
  document.querySelectorAll('.materia').forEach(materia => {
    const id = materia.dataset.id;
    const regla = requisitos[id];
    let habilitado = true;

    if (regla) {
      if (regla.regular) {
        for (let req of regla.regular) {
          if (!document.getElementById(req + '_regular')?.checked) {
            habilitado = false;
            break;
          }
        }
      }
      if (habilitado && regla.aprobado) {
        for (let req of regla.aprobado) {
          if (!document.getElementById(req + '_aprobado')?.checked) {
            habilitado = false;
            break;
          }
        }
      }
    }

    materia.querySelectorAll('input').forEach(input => {
      input.disabled = !habilitado;
      if (!habilitado) input.checked = false;
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  cargarEstado();
  verificarDesbloqueos();

  document.querySelectorAll('.materia input').forEach(input => {
    input.addEventListener('change', () => {
      guardarEstado();
      verificarDesbloqueos();
    });
  });
});




