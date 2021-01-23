/* Global Javascript */
new WOW().init();

/* Functions */
(function($) {
  (function($) { // Tell wordpress that everything in here is going to use Jquery
    // Initiate Isotope
    $('.blog-recent').imagesLoaded( function() {
        $('.blog-recent').isotope({
            itemSelector: '.col',
            layoutMode: 'fitRows'
        });
        $('.blog-recent').isotope({filter: ''});
    });
    // Bind the click event
    $('.project-filter').on('click','button',function(){
        var filterValue = $(this).attr('filter');
        $('.blog-recent').isotope({ filter: filterValue });
        $(this).addClass('selected');
        $(this).siblings().removeClass('selected');
        console.log('WORK DAMNIT');
    });
  });
});(jQuery);

// Lightbox

lightbox.option ({
  'showImageNumberLabel': false,
})