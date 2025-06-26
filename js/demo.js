// js/demo.js
$(document).ready(function () {
    $('.lightbox-toggle img').click(function () {
      $('.backdrop').fadeTo(300, 0.5).css('display', 'block');
      $('.box').fadeIn();
   
      $('.box img').remove(); // remove previous image if any
      var img = $(this).clone(); // clone clicked image
      $('.box').append(img); // add to lightbox
    });
   
    $('.close, .backdrop').click(function () {
      $('.backdrop').fadeOut(300);
      $('.box').fadeOut();
    });
  });