// Este script permite activar materias en base al estado de regular/aprobada de sus correlativas

document.addEventListener("DOMContentLoaded", function () {
  const checkboxMap = {};

  // Mapear todos los checkboxes por materia y tipo
  document.querySelectorAll(".materia").forEach((materiaDiv) => {
    const nombre = materiaDiv.getAttribute("data-nombre");
    checkboxMap[nombre] = {
      regular: materiaDiv.querySelector("input[name='regular']"),
      aprobada: materiaDiv.querySelector("input[name='aprobada']")
    };
  });

  // Reglas de desbloqueo
  const reglas = {
    "Pedagogía": {
      regular: ["Práctica docente II", "Didáctica de las artes visuales I"],
      aprobada: ["Práctica docente III", "Prácticas investigativas"]
    },
    "Didáctica y currículum": {
      regular: ["Didáctica de las artes visuales I"],
      aprobada: ["Práctica docente III", "Didáctica de las artes visuales II", "Prácticas investigativas"]
    },
    "Psicología y educación": {
      regular: ["Educación sexual integral"],
      aprobada: ["Prácticas investigativas", "Sujeto de la educación II"]
    },
    "Problemática de la cultura argentina y latinoamericana": {
      aprobada: ["Prácticas investigativas", "Problemática del arte argentino y latinoamericano", "Estéticas contemporáneas"]
    },
    "Problemática histórica del arte I": {
      aprobada: ["Prácticas investigativas", "Problemática del arte argentino y latinoamericano"]
    },
    "Lenguaje visual I": {
      regular: ["Lenguaje visual II", "Didáctica de las artes visuales II"],
      aprobada: ["Prácticas investigativas", "Lenguaje visual III"]
    },
    "Dibujo I": {
      regular: ["Dibujo II", "Pintura II"],
      aprobada: ["Prácticas investigativas", "Dibujo III"]
    },
    "Pintura I": {
      regular: ["Dibujo II", "Pintura II"],
      aprobada: ["Prácticas investigativas", "Pintura III"]
    },
    "Cerámica I": {
      regular: ["Cerámica II", "Escultura II"],
      aprobada: ["Prácticas investigativas", "Cerámica III"]
    },
    "Escultura I": {
      regular: ["Cerámica II", "Escultura II"],
      aprobada: ["Prácticas investigativas", "Escultura III"]
    },
    "Forma y color I": {
      regular: ["Forma y color II"],
      aprobada: ["Prácticas investigativas", "Dibujo I", "Pintura I"]
    },
    "Práctica docente I": {
      aprobada: ["Práctica docente II", "Prácticas investigativas"]
    }
  };

  // Escuchar cambios en cada checkbox y aplicar reglas
  for (let materia in checkboxMap) {
    const { regular, aprobada } = checkboxMap[materia];

    regular.addEventListener("change", () => actualizarReglas(materia));
    aprobada.addEventListener("change", () => actualizarReglas(materia));
  }

  function actualizarReglas(materia) {
    const reglasMateria = reglas[materia];
    if (!reglasMateria) return;

    if (reglasMateria.regular && checkboxMap[materia].regular.checked) {
      reglasMateria.regular.forEach((destino) => habilitar(destino));
    }
    if (reglasMateria.aprobada && checkboxMap[materia].aprobada.checked) {
      reglasMateria.aprobada.forEach((destino) => habilitar(destino));
    }
  }

  function habilitar(nombre) {
    if (checkboxMap[nombre]) {
      checkboxMap[nombre].regular.disabled = false;
      checkboxMap[nombre].aprobada.disabled = false;
    }
  }

  // Inicialmente deshabilitar todas menos las de primer año
  for (let nombre in checkboxMap) {
    const materiaDiv = document.querySelector(`[data-nombre="${nombre}"]`);
    const anio = materiaDiv.closest(".anio").querySelector("h2").textContent;
    if (anio !== "Primer año") {
      checkboxMap[nombre].regular.disabled = true;
      checkboxMap[nombre].aprobada.disabled = true;
    }
  }
});

