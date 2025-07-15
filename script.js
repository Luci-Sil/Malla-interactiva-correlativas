document.addEventListener('DOMContentLoaded', () => {
  const subjects = document.querySelectorAll('.subject');
  let storedStates = JSON.parse(localStorage.getItem('subjectStates')) || {};

  // Inicializa estado si no existe
  subjects.forEach(subject => {
    const id = subject.dataset.id;
    const regularCheckbox = subject.querySelector('.regular');
    const approvedCheckbox = subject.querySelector('.approved');

    if (!storedStates[id]) {
      storedStates[id] = { regular: false, approved: false };
    }

    regularCheckbox.checked = storedStates[id].regular;
    approvedCheckbox.checked = storedStates[id].approved;

    regularCheckbox.addEventListener('change', () => {
      storedStates[id].regular = regularCheckbox.checked;
      // Si marca aprobado, regular debe ser true también
      if (approvedCheckbox.checked && !regularCheckbox.checked) {
        regularCheckbox.checked = true;
        storedStates[id].regular = true;
      }
      saveAndUpdate();
    });

    approvedCheckbox.addEventListener('change', () => {
      storedStates[id].approved = approvedCheckbox.checked;
      // Si marca aprobado, regular debe ser true también
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
      const prerequisites = JSON.parse(subject.dataset.prerequisites || '[]');
      const regularCheckbox = subject.querySelector('.regular');
      const approvedCheckbox = subject.querySelector('.approved');

      let unlocked = true;

      // Las materias de primer año están siempre desbloqueadas
      if (subject.dataset.year !== '1') {
        // Revisa todos los requisitos
        for (const prereq of prerequisites) {
          const prereqState = storedStates[prereq.id];
          if (!prereqState) {
            unlocked = false;
            break;
          }
          // Para desbloquear, el requisito debe estar cumplido según tipo
          if (!prereqState[prereq.type]) {
            unlocked = false;
            break;
          }
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
        // Si estaba marcado, desmarcar
        regularCheckbox.checked = false;
        approvedCheckbox.checked = false;
        storedStates[id].regular = false;
        storedStates[id].approved = false;
      }
    });

    localStorage.setItem('subjectStates', JSON.stringify(storedStates));
  }

  updateLockStates();
});




