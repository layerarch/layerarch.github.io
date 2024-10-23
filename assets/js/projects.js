// Filter for projects page
document.addEventListener('DOMContentLoaded', function () {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.card-container');

  let filters = { occupancy: '', type: '' };

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
      projectCards.forEach(card => {
          const cardOccupancy = card.getAttribute('occupancy').toLowerCase();  // Convert occupancy to lowercase
          const cardType = card.getAttribute('type').toLowerCase();            // Convert type to lowercase

          const matchesOccupancy = filters.occupancy === '' || cardOccupancy === filters.occupancy;
          const matchesType = filters.type === '' || cardType === filters.type;

          if (matchesOccupancy && matchesType) {
              card.style.display = 'block';
          } else {
              card.style.display = 'none';
          }
      });
  }
});



// document.addEventListener("DOMContentLoaded", function() {
//   const occupancyFilter = document.getElementById("occupancy-filter");
//   const typeFilter = document.getElementById("type-filter");
//   const cards = document.querySelectorAll(".card-project");

//   function filterProjects() {
//     const selectedOccupancy = occupancyFilter.value.toLowerCase();
//     const selectedType = typeFilter.value.toLowerCase();

//     cards.forEach(card => {
//       const cardOccupancy = card.getAttribute("occupancy");
//       const cardType = card.getAttribute("type");

//       // Check if the card matches the selected filters
//       const matchesOccupancy = selectedOccupancy === "" || cardOccupancy === selectedOccupancy;
//       const matchesType = selectedType === "" || cardType === selectedType;

//       // Show or hide the card based on filter matches
//       if (matchesOccupancy && matchesType) {
//         card.style.display = "";
//       } else {
//         card.style.display = "none";
//       }
//     });
//   }

//   // Add event listeners to the filters
//   occupancyFilter.addEventListener("change", filterProjects);
//   typeFilter.addEventListener("change", filterProjects);
// });
