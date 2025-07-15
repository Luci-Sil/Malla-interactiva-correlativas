document.addEventListener('DOMContentLoaded', () => {
  const subjects = document.querySelectorAll('.subject');
  let storedStates = JSON.parse(localStorage.getItem('subjectStates')) || {};

  // Inicializa estados guardados o vacíos
  subjects.forEach(subject => {
    const id = subject.dataset.id;
    const regularCheckbox = subject.querySelector('.regular');
    const approvedCheckbox = subject.querySelector('.approved');

    if (!storedStates[id]) {
      storedStates[id] = { regular: false, approved: false };
    }

    // Setea estado guardado
    regularCheckbox.checked = storedStates[id].regular;
    approvedCheckbox.checked = storedStates[id].approved;

    // Agrega eventos para marcar/desmarcar
    regularCheckbox.addEventListener('change', () => {
      storedStates[id].regular = regularCheckbox.checked;

      // Si marcó aprobado pero regular no está, activarlo
      if (approvedCheckbox.checked && !regularCheckbox.checked) {
        regularCheckbox.checked = true;
        storedStates[id].regular = true;
      }

      saveAndUpdate();
    });

    approvedCheckbox.addEventListener('change', () => {
      storedStates[id].approved = approvedCheckbox.checked;

      // Si marcó aprobado pero regular no está, activarlo
      if (approvedCheckbox.checked && !regularCheckbox.checked) {
        regularCheckbox.checked = true;
        storedStates[id].regular = true;
      }

      saveAndUpdate();
    });
  });

  function saveAndUpdate() {
    localStorage.setItem('subjectStates', JSON.stringify(storedStates));
    updateLockStates();
  }

  function updateLockStates() {
    subjects.forEach(subject => {
      const id = subject.dataset.id;
      const year = parseInt(subject.dataset.year);
      const prerequisites = JSON.parse(subject.dataset.prerequisites || '[]');
      const regularCheckbox = subject.querySelector('.regular');
      const approvedCheckbox = subject.querySelector('.approved');

      // El primer año siempre está desbloqueado
      if (year === 1) {
        subject.classList.remove('locked');
        regularCheckbox.disabled = false;
        approvedCheckbox.disabled = false;
        return;
      }

      // Para los demás años: validar requisitos
      let unlocked = true;
      for (const prereq of prerequisites) {
        const prereqState = storedStates[prereq.id];
        if (!prereqState) {
          unlocked = false;
          break;
        }
        // requisito regular o aprobado debe estar cumplido
        if (!prereqState[prereq.type]) {
          unlocked = false;
          break;
        }
      }

      if (unlocked) {
        subject.classList.remove('locked');
        regularCheckbox.disabled = false;
        approvedCheckbox.disabled = false;
      } else {
        subject.classList.add('locked');
        regularCheckbox.disabled = true;
        approvedCheckbox.disabled = true;

        // Opcional: para evitar que se quede marcado sin cumplir requisitos
        // Descomenta si querés que se desmarque al bloquear
        /*
        if (regularCheckbox.checked || approvedCheckbox.checked) {
          regularCheckbox.checked = false;
          approvedCheckbox.checked = false;
          storedStates[id].regular = false;
          storedStates[id].approved = false;
          localStorage.setItem('subjectStates', JSON.stringify(storedStates));
        }
        */
      }
    });
  }

  updateLockStates();
});




