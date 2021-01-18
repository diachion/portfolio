/* Global Javascript */
new WOW().init();

/* Functions */
(function($) {

  $('.blog-recent').isotope({
    itemSelector: '.type-post',
  });

  $('.project-filter').on( 'click', 'button', function() {
    var filterValue = $( this ).attr('filter');
    // use filterFn if matches value
    // filterValue = filterFns[ filterValue ] || filterValue;
    $('.blog-recent').isotope({ filter: filterValue });
  });




})(jQuery);

// Lightbox

lightbox.option ({
  'showImageNumberLabel': false,
})