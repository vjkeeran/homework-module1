/*
    PARTNERS
*/

//Partners Data
var partners = [
  {
      name: 'Partner 1',
      logo: 'partner-logo-1.png',
      url: 'http://example.com/partner1'
  },
  {
      name: 'Partner 2',
      logo: 'partner-logo-2.png',
      url: 'http://example.com/partner2'
  },
  {
      name: 'Partner 3',
      logo: 'partner-logo-3.png',
      url: 'http://example.com/partner3'
  },
  {
      name: 'Partner 4',
      logo: 'partner-logo-4.png',
      url: 'http://example.com/partner4'
  },
  {
      name: 'Partner 5',
      logo: 'partner-logo-5.png',
      url: 'http://example.com/partner5'
  }
];

// Function to load partners dynamically
function loadPartners() {
  var partnersContainer = document.querySelector('.partners');
  if (partnersContainer) {
      partners.forEach(function(partner) {
          var partnerDiv = document.createElement('div');
          partnerDiv.className = 'partner';
          partnerDiv.innerHTML = `
              <a href="${partner.url}" target="_blank">
                  <img src="images/${partner.logo}" alt="${partner.name}">
              </a>
          `;
          partnersContainer.appendChild(partnerDiv);
      });
  }
}

// Call the function to load partners when the page loads
window.addEventListener('load', loadPartners);