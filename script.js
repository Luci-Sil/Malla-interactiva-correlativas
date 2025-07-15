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
  
// TERCER AÑO
"problematica_filosofica": {
  regular: ["antropologia"],
  aprobado: ["problematica_cultural"]
},
"problematica_arte_latinoamericano": {
  regular: ["problematica_historica_II"],
  aprobado: ["problematica_cultural", "problematica_historica_I", "problematica_historica_II"]
},
"sujeto_II": {
  regular: ["sujeto_I"],
  aprobado: ["psicologia_educacion", "sujeto_I"]
},
"didactica_artes_II": {
  regular: ["didactica_artes_I", "forma_color_I", "lenguaje_visual_I", "sujeto_I"],
  aprobado: ["didactica_curriculum", "practica_docente_I", "pedagogia", "psicologia_educacion", "didactica_artes_I"]
},
"lenguaje_visual_III": {
  regular: ["lenguaje_visual_II"],
  aprobado: ["lenguaje_visual_I", "lenguaje_visual_II"]
},
"esi": {
  regular: ["psicologia_educacion"],
  aprobado: ["psicologia_educacion"]
},
"dibujo_III": {
  regular: ["dibujo_II", "pintura_II"],
  aprobado: ["dibujo_I", "pintura_I", "dibujo_II", "pintura_II", "forma_color_II"]
},
"pintura_III": {
  regular: ["dibujo_II", "pintura_II"],
  aprobado: ["dibujo_I", "pintura_I", "dibujo_II", "pintura_II", "forma_color_II"]
},
"ceramica_III": {
  regular: ["ceramica_II", "escultura_II"],
  aprobado: ["ceramica_I", "escultura_I", "ceramica_II", "escultura_II", "forma_color_II"]
},
"escultura_III": {
  regular: ["ceramica_II", "escultura_II"],
  aprobado: ["ceramica_I", "escultura_I", "ceramica_II", "escultura_II", "forma_color_II"]
},
"grafica_II": {
  regular: ["grafica_I"],
  aprobado: ["forma_color_I", "lenguaje_visual_I", "grafica_I"]
},
"practica_docente_III": {
  regular: ["dibujo_II", "pintura_II", "ceramica_II", "escultura_II", "forma_color_II", "lenguaje_visual_II", "problematica_historica_II"],
  aprobado: ["practica_docente_II", "didactica_artes_I", "sujeto_I", "pedagogia", "didactica_curriculum", "forma_color_I", "lenguaje_visual_I", "dibujo_I", "pintura_I", "ceramica_I", "escultura_I", "problematica_historica_I"]
},
"udi": {} // sin requisitos

// CUARTO AÑO
"etica_trabajo_docente": {
  regular: ["problematica_filosofica", "historia_social"],
  aprobado: ["problematica_filosofica", "historia_social"]
},
"practicas_investigativas": {
  regular: ["lenguaje_visual_III", "dibujo_II", "pintura_II", "ceramica_II", "escultura_II"],
  aprobado: ["pedagogia", "didactica_curriculum", "psicologia_educacion", "problematica_cultural", "problematica_historica_I", "lenguaje_visual_I", "dibujo_I", "pintura_I", "ceramica_I", "escultura_I", "forma_color_I", "practica_docente_I"]
},
"estetica": {
  regular: ["problematica_filosofica", "lenguaje_visual_III"],
  aprobado: ["problematica_filosofica"]
},
"esteticas_contemporaneas": {
  regular: ["lenguaje_visual_III", "problematica_arte_latinoamericano", "problematica_historica_II"],
  aprobado: ["problematica_cultural", "problematica_arte_latinoamericano", "problematica_historica_II"]
},
"proyecto_dibujo_IV": {
  regular: ["dibujo_III", "pintura_III", "ceramica_III", "escultura_III", "lenguaje_visual_III"],
  aprobado: ["dibujo_III", "pintura_III", "ceramica_III", "escultura_III"]
},
"proyecto_pintura_IV": {
  regular: ["dibujo_III", "pintura_III", "ceramica_III", "escultura_III", "lenguaje_visual_III"],
  aprobado: ["dibujo_III", "pintura_III", "ceramica_III", "escultura_III"]
},
"proyecto_ceramica_IV": {
  regular: ["dibujo_III", "pintura_III", "ceramica_III", "escultura_III", "lenguaje_visual_III"],
  aprobado: ["dibujo_III", "pintura_III", "ceramica_III", "escultura_III"]
},
"proyecto_escultura_IV": {
  regular: ["dibujo_III", "pintura_III", "ceramica_III", "escultura_III", "lenguaje_visual_III"],
  aprobado: ["dibujo_III", "pintura_III", "ceramica_III", "escultura_III"]
},
"grafica_III": {
  regular: ["grafica_II", "lenguaje_visual_III"],
  aprobado: ["grafica_I", "grafica_II"]
},
"tecnologia_imagen": {
  regular: ["lenguaje_visual_III"],
  aprobado: ["lenguaje_visual_III"]
},
"practica_docente_IV": {
  regular: ["dibujo_III", "pintura_III", "ceramica_III", "escultura_III", "lenguaje_visual_III", "problematica_arte_latinoamericano"],
  aprobado: ["practica_docente_III", "didactica_artes_II", "sujeto_II", "forma_color_II", "lenguaje_visual_II", "dibujo_II", "pintura_II", "ceramica_II", "escultura_II"]
}


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




