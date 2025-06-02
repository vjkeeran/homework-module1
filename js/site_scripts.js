/*-
PARTNERS
*/

const partners = document.getElementById('partners');
if (partners) { // Check if partners element exists before trying to access it
  let scrollAmount = 0;
  setInterval(() => {
    scrollAmount += 1;
    if (scrollAmount >= partners.scrollWidth - partners.clientWidth) {
      scrollAmount = 0;
    }
    partners.scrollTo({
      left: scrollAmount,
      behavior: 'smooth'
    });
  }, 50);
}


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

      // Hide all divs first
      emailDiv.style.display = 'none';
      phoneDiv.style.display = 'none';

      // Show the relevant div based on selection
      if (selectedValue === 'email') {
        emailDiv.style.display = 'block';
      } else if (selectedValue === 'phone') {
        phoneDiv.style.display = 'block';
      }
    });
  }
});