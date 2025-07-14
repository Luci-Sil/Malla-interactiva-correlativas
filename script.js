// script.js

// Lista materias de primer año para desbloquear siempre
const primerAnoMaterias = [
  "Pedagogía",
  "Didáctica y currículum",
  "Psicología y educación",
  "Problemática de la cultura argentina y latinoamericana",
  "Problemática histórica del arte I",
  "Lenguaje visual I",
  "Dibujo I",
  "Pintura I",
  "Cerámica I",
  "Escultura I",
  "Forma y color I",
  "Práctica docente I"
];

// Requisitos detallados según lo que diste (simplificado y organizado)
const requisitos = {
  // Segundo año
  "Historia social y política de la educación Argentina": {
    regular: [
      { materia: "Pedagogía", estado: "regular" },
      { materia: "Problemática de la cultura argentina y latinoamericana", estado: "regular" }
    ],
    aprobada: [
      { materia: "Pedagogía", estado: "aprobada" }
    ]
  },
  "Antropología sociocultural": {
    regular: [
      { materia: "Problemática de la cultura argentina y latinoamericana", estado: "regular" }
    ],
    aprobada: []
  },
  "Sujeto de la educación I": {
    regular: [
      { materia: "Psicología y educación", estado: "regular" }
    ],
    aprobada: [
      { materia: "Psicología y educación", estado: "aprobada" }
    ]
  },
  "Didáctica de las artes visuales I": {
    regular: [
      { materia: "Didáctica y currículum", estado: "regular" }
    ],
    aprobada: [
      { materia: "Didáctica y currículum", estado: "aprobada" }
    ]
  },
  "Problemática histórica del arte II": {
    regular: [
      { materia: "Problemática histórica del arte I", estado: "regular" }
    ],
    aprobada: [
      { materia: "Problemática histórica del arte I", estado: "aprobada" }
    ]
  },
  "Lenguaje visual II": {
    regular: [
      { materia: "Lenguaje visual I", estado: "regular" }
    ],
    aprobada: [
      { materia: "Lenguaje visual I", estado: "aprobada" }
    ]
  },
  "Forma y color II": {
    regular: [],
    aprobada: [
      { materia: "Forma y color I", estado: "aprobada" }
    ]
  },
  "Dibujo II": {
    regular: [
      { materia: "Dibujo I", estado: "regular" }
    ],
    aprobada: [
      { materia: "Dibujo I", estado: "aprobada" }
    ]
  },
  "Pintura II": {
    regular: [
      { materia: "Pintura I", estado: "regular" }
    ],
    aprobada: [
      { materia: "Pintura I", estado: "aprobada" }
    ]
  },
  "Cerámica II": {
    regular: [
      { materia: "Cerámica I", estado: "regular" }
    ],
    aprobada: [
      { materia: "Cerámica I", estado: "aprobada" }
    ]
  },
  "Escultura II": {
    regular: [
      { materia: "Escultura I", estado: "regular" }
    ],
    aprobada: [
      { materia: "Escultura I", estado: "aprobada" }
    ]
  },
  "Gráfica y técnicas de impresión I": {
    regular: [],
    aprobada: []
  },
  "Práctica docente II": {
    aprobada: [
      { materia: "Práctica docente I", estado: "aprobada" }
    ],
    regular: []
  },

  // Tercer año
  "Problemática filosófica": {
    regular: [
      { materia: "Problemática de la cultura argentina y latinoamericana", estado: "regular" }
    ],
    aprobada: [
      { materia: "Problemática de la cultura argentina y latinoamericana", estado: "aprobada" }
    ]
  },
  "Problemática del arte argentino y latinoamericano": {
    regular: [
      { materia: "Problemática de la cultura argentina y latinoamericana", estado: "regular" }
    ],
    aprobada: [
      { materia: "Problemática de la cultura argentina y latinoamericano", estado: "aprobada" }
    ]
  },
  "Sujeto de la educación II": {
    aprobada: [
      { materia: "Psicología y educación", estado: "aprobada" }
    ],
    regular: []
  },
  "Didáctica de las artes visuales II": {
    aprobada: [
      { materia: "Didáctica y currículum", estado: "aprobada" }
    ],
    regular: []
  },
  "Lenguaje visual III": {
    regular: [
      { materia: "Lenguaje visual II", estado: "regular" }
    ],
    aprobada: [
      { materia: "Lenguaje visual II", estado: "aprobada" }
    ]
  },
  "Educación sexual integral": {
    regular: [
      { materia: "Psicología y educación", estado: "regular" }
    ],
    aprobada: []
  },
  "Dibujo III": {
    regular: [
      { materia: "Dibujo II", estado: "regular" }
    ],
    aprobada: [
      { materia: "Dibujo II", estado: "aprobada" }
    ]
  },
  "Pintura III": {
    regular: [
      { materia: "Pintura II", estado: "regular" }
    ],
    aprobada: [
      { materia: "Pintura II", estado: "aprobada" }
    ]
  },
  "Cerámica III": {
    regular: [
      { materia: "Cerámica II", estado: "regular" }
    ],
    aprobada: [
      { materia: "Cerámica II", estado: "aprobada" }
    ]
  },
  "Escultura III": {
    regular: [
      { materia: "Escultura II", estado: "regular" }
    ],
    aprobada: [
      { materia: "Escultura II", estado: "aprobada" }
    ]
  },
  "Gráfica y técnicas de impresión II": {
    regular: [
      { materia: "Gráfica y técnicas de impresión I", estado: "regular" }
    ],
    aprobada: [
      { materia: "Gráfica y técnicas de impresión I", estado: "aprobada" }
    ]
  },
  "Práctica docente III": {
    aprobada: [
      { materia: "Práctica docente II", estado: "aprobada" }
    ],
    regular: []
  },

  // Cuarto año (sin requisitos explícitos, asumidos desbloqueados si "Práctica docente III" aprobada)
  "Ética y trabajo docente": {
    aprobada: [
      { materia: "Problemática filosófica", estado: "aprobada" }
    ],
    regular: []
  },
  "Prácticas investigativas": {
    aprobada: [
      { materia: "Práctica docente I", estado: "aprobada" }
    ],
    regular: []
  },
  "Estética": {
    regular: [
      { materia: "Problemática filosófica", estado: "regular" }
    ],
    aprobada: []
  },
  "Estéticas contemporáneas": {
    regular: [
      { materia: "Problemática del arte argentino y latinoamericano", estado: "regular" }
    ],
    aprobada: []
  },
  "Proyecto final dibujo IV": {
    regular: [
      { materia: "Dibujo III", estado: "regular" }
    ],
    aprobada: []
  },
  "Proyecto final pintura IV": {
    regular: [
      { materia: "Pintura III", estado: "regular" }
    ],
    aprobada: []
  },
  "Proyecto final cerámica IV": {
    regular: [
      { materia: "Cerámica III", estado: "regular" }
    ],
    aprobada: []
  },
  "Proyecto final escultura IV": {
    regular: [
      { materia: "Escultura III", estado: "regular" }
    ],
    aprobada: []
  },
  "Gráfica y técnicas de impresión III": {
    regular: [
      { materia: "Gráfica y técnicas de impresión II", estado: "regular" }
    ],
    aprobada: []
  },
  "Tecnología de la imagen": {
    aprobada: [
      { materia: "Lenguaje visual III", estado: "aprobada" }
    ],
    regular: []
  },
  "Práctica docente IV": {
    aprobada: [
      { materia: "Práctica docente III", estado: "aprobada" }
    ],
    regular: []
  }
};

// Estado global para guardar los estados actuales
// estructura: { "Materia": ["regular","aprobada"] }
let estados = {};

// Guarda estados en localStorage
function guardarEstados() {
  localStorage.setItem('mallaEstados', JSON.stringify(estados));
}

// Carga estados de localStorage
function cargarEstados() {
  const data = localStorage.getItem('mallaEstados');
  if (data) {
    estados = JSON.parse(data);
  } else {
    estados = {};
  }
}

// Verifica si todos los requisitos de un estado están cumplidos
function cumpleRequisitos(materia, tipoEstado) {
  if (primerAnoMaterias.includes(materia)) return true; // primer año siempre desbloqueado

  if (!requisitos[materia]) return true; // si no tiene requisitos, desbloqueado

  const reqs = requisitos[materia][tipoEstado];
  if (!reqs || reqs.length === 0) return true; // sin requisitos específicos

  // Verificamos que todos los requisitos estén cumplidos
  return reqs.every(({materia: reqMat, estado: reqEst}) => {
    return estados[reqMat]?.includes(reqEst);
  });
}

// Actualiza habilitación de todos los checkboxes según requisitos
function actualizarHabilitacion() {
  document.querySelectorAll('.materia').forEach(div => {
    const materia = div.getAttribute('data-nombre');

    // Para cada checkbox
    div.querySelectorAll('input[type=checkbox]').forEach(checkbox => {
      const tipo = checkbox.name; // "regular" o "aprobada"
      const puede = cumpleRequisitos(materia, tipo);

      // Primer año siempre habilitado, los demás según requisitos
      if (primerAnoMaterias.includes(materia)) {
        checkbox.disabled = false;
      } else {
        checkbox.disabled = !puede;
      }
    });
  });
}

// Actualiza el objeto estados con los checkbox marcados
function actualizarEstadosDesdeUI() {
  estados = {}; // reset

  document.querySelectorAll('.materia').forEach(div => {
    const materia = div.getAttribute('data-nombre');
    const estadosMateria = [];

    div.querySelectorAll('input[type=checkbox]').forEach(checkbox => {
      if (checkbox.checked) {
        estadosMateria.push(checkbox.name);
      }
    });

    if (estadosMateria.length > 0) {
      estados[materia] = estadosMateria;
    }
  });
}

// Refresca la UI según estados
function actualizarUIDesdeEstados() {
  document.querySelectorAll('.materia').forEach(div => {
    const materia = div.getAttribute('data-nombre');
    const estadosMateria = estados[materia] || [];

    div.querySelectorAll('input[type=checkbox]').forEach(checkbox => {
      checkbox.checked = estadosMateria.includes(checkbox.name);
    });
  });
}

// Control de cambios en checkbox
function onCheckboxChange() {
  actualizarEstadosDesdeUI();
  actualizarHabilitacion();
  guardarEstados();
}

function main() {
  cargarEstados();
  actualizarUIDesdeEstados();
  actualizarHabilitacion();

  // Agregar eventos a todos los checkboxes
  document.querySelectorAll('input[type=checkbox]').forEach(checkbox => {
    checkbox.addEventListener('change', onCheckboxChange);
  });
}

window.addEventListener('load', main);


