jQuery(document).ready(function($) {
  // Header fixed and Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
      $('.back-to-top').fadeIn('slow');
      $('#header').addClass('header-fixed');
    } else {
      $('.back-to-top').fadeOut('slow');
      $('#header').removeClass('header-fixed');
    }
  });
  $('.back-to-top').click(function() {
    $('html, body').animate(
      {
        scrollTop: 0
      },
      1500,
      'easeInOutExpo'
    );
    return false;
  });

  //Added Class for home page only
  var siteUrl = window.location.pathname;
  if (siteUrl.toLowerCase() == '/' || siteUrl.toLowerCase().indexOf('/quotes/steps/1') > -1) {
    $('body').addClass('home-page');
  } else {
    $('body').removeClass('home-page');
  }
});
