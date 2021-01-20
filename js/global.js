/* Global Javascript */
new WOW().init();

/* Functions */
(function($) {

  $('.blog-recent').isotope({
    itemSelector: '.col',
    layoutMode: 'fitRows'
  });
  
  $('.blog-recent').isotope({filter: ''});

  $('.project-filter').on( 'click', 'button', function(){
    var filterValue = $( this ).attr('filter');
    $('.blog-recent').isotope({ filter: filterValue });

    $(this).addClass('selected');
    $(this).siblings().removeClass('selected');
  });




})(jQuery);

// Lightbox

lightbox.option ({
  'showImageNumberLabel': false,
})