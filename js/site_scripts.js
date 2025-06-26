// js/site_scripts.js
/*-
PARTNERS - REMOVED AUTO SCROLLING AS PER REQUIREMENTS FOR RESPONSIVE GRID
*/


/*-
DAY 3 HOMEWORK: DYNAMIC CONTACT FORM FIELDS
*/
document.addEventListener("DOMContentLoaded", function() {
  const howContactSelect = document.getElementById('howContact');
  const emailDiv = document.getElementById('emailDiv');
  const phoneDiv = document.getElementById('phoneDiv');

  if (howContactSelect) {
    howContactSelect.addEventListener('change', function() {
      const selectedValue = this.value;

      emailDiv.style.display = 'none';
      phoneDiv.style.display = 'none';

      if (selectedValue === 'email') {
        emailDiv.style.display = 'block';
      } else if (selectedValue === 'phone') {
        phoneDiv.style.display = 'block';
      }
    });
  }
});