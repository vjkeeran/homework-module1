$(document).ready(function() {
  // Make activity cells selectable, except not-available and header cells
  $('table tbody td').each(function() {
    if (!$(this).hasClass('not-available')) {
      $(this).addClass('selectable');
    }
  });

  // Toggle selection on click
  $('table').on('click', 'td.selectable', function() {
    $(this).toggleClass('selected');
  });
});