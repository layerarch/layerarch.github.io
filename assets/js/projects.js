// Filter for projects page
document.addEventListener('DOMContentLoaded', function () {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.card-container');
  const programFilterButton = document.querySelector('.program-filter-toggle');
  const programFilterCollapse = document.querySelector('#filterProgram');
  const typeFilterButton = document.querySelector('.type-filter-toggle');
  const typeFilterCollapse = document.querySelector('#filterType');
  const noProjectsMessage = document.querySelector('.no-projects-message'); // Message element

  let filters = { program: '', type: '' };

  filterButtons.forEach(button => {
      button.addEventListener('click', function () {
          const filterType = this.getAttribute('data-filter');
          const filterValue = this.getAttribute('data-value').toLowerCase();  // Convert filter value to lowercase

          // Update the filters object
          filters[filterType] = filterValue;

          // Remove the 'active' class from all buttons of the same filter type
          filterButtons.forEach(btn => {
              if (btn.getAttribute('data-filter') === filterType) {
                  btn.classList.remove('active');
              }
          });

          // Add the 'active' class to the clicked button
          this.classList.add('active');

          // Filter the projects based on the selected filters
          filterProjects();
      });
  });

  function filterProjects() {
    let visibleProjects = 0;

      projectCards.forEach(card => {
          const cardProgram = card.getAttribute('program').toLowerCase();  // Convert program to lowercase
          const cardType = card.getAttribute('type').toLowerCase();            // Convert type to lowercase

          const matchesProgram = filters.program === '' || cardProgram.includes(filters.program);
          const matchesType = filters.type === '' || cardType === filters.type;

          if (matchesProgram && matchesType) {
              card.style.display = 'block';
              visibleProjects++;
          } else {
              card.style.display = 'none';
          }
      });
      // Show or hide the "no projects" message
      if (visibleProjects === 0) {
        noProjectsMessage.style.display = 'block';
    } else {
        noProjectsMessage.style.display = 'none';
    }
  }
    // Event listeners for program filter toggle
    if (programFilterButton && programFilterCollapse) {
        // Update text when collapse is shown
        programFilterCollapse.addEventListener('shown.bs.collapse', function () {
            programFilterButton.textContent = '- PROGRAM FILTER';
        });

        // Update text when collapse is hidden
        programFilterCollapse.addEventListener('hidden.bs.collapse', function () {
            programFilterButton.textContent = '+ PROGRAM FILTER';
        });
    }
    // Event listeners for type filter toggle
    if (typeFilterButton && typeFilterCollapse) {
        // Update text when collapse is shown
        typeFilterCollapse.addEventListener('shown.bs.collapse', function () {
            typeFilterButton.textContent = '- TYPE FILTER';
        });

        // Update text when collapse is hidden
        typeFilterCollapse.addEventListener('hidden.bs.collapse', function () {
            typeFilterButton.textContent = '+ TYPE FILTER';
        });
    }
});