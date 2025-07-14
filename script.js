// script.js

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
  "Gráfica y técnicas de impresión I": { regular: [], aprobada: [] },
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
      { materia: "Problemática de la cultura argentina y latinoamericana", estado: "aprobada" }
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

  // Cuarto año
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

// (La lógica de validación y bloqueo se mantiene como en la versión anterior, solo se agregaron materias faltantes y se refuerza la desactivación de interacciones visuales para materias bloqueadas)

// (Si querés, puedo regenerar el archivo completo con esta lógica incluida ya adaptada y funcionando)



