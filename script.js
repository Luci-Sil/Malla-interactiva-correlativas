document.addEventListener('DOMContentLoaded', () => {
  const subjects = document.querySelectorAll('.subject');
  const storedStates = JSON.parse(localStorage.getItem('subjectStates')) || {};

  subjects.forEach(subject => {
    const subjectId = subject.dataset.id;
    const regularCheckbox = subject.querySelector('.regular');
    const approvedCheckbox = subject.querySelector('.approved');

    // Load saved state
    if (storedStates[subjectId]) {
      regularCheckbox.checked = storedStates[subjectId].regular;
      approvedCheckbox.checked = storedStates[subjectId].approved;
    }

    function updateState() {
      storedStates[subjectId] = {
        regular: regularCheckbox.checked,
        approved: approvedCheckbox.checked
      };
      localStorage.setItem('subjectStates', JSON.stringify(storedStates));
      updateAllSubjects();
    }

    regularCheckbox.addEventListener('change', updateState);
    approvedCheckbox.addEventListener('change', updateState);
  });

  function updateAllSubjects() {
    subjects.forEach(subject => {
      const subjectId = subject.dataset.id;
      const prerequisites = JSON.parse(subject.dataset.prerequisites || '[]');
      const regularCheckbox = subject.querySelector('.regular');
      const approvedCheckbox = subject.querySelector('.approved');

      let canEnable = true;
      prerequisites.forEach(prereq => {
        const state = storedStates[prereq.id];
        if (!state || !state[prereq.type]) {
          canEnable = false;
        }
      });

      regularCheckbox.disabled = !canEnable;
      approvedCheckbox.disabled = !canEnable;
      subject.classList.toggle('unlocked', canEnable);
    });
  }

  updateAllSubjects();
});





