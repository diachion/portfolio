/* Global Javascript */
new WOW().init();

/* Functions */
(function($) {
  (function($) { // Tell wordpress that everything in here is going to use Jquery
    $(document).ready(function(){
        // Initiate Isotope
        $('.blog-recent').isotope({
            itemSelector: '.col',
            layoutMode: 'fitRows'
        });
        // Bind the click event
        $('.project-filter button').on( 'click',function(){
            var filterValue = $( this ).attr('filter');
            $('.blog-recent').isotope({ filter: filterValue });

            $(this).addClass('selected');
            $(this).siblings().removeClass('selected');

            console.log('hi');
        });
        // Run as soon as all the images finish loading
        $(window).load(function(){
            $('.blog-recent').isotope({filter: ''});
        });
    }); // Document.ready
});
});

(jQuery);

// Lightbox

lightbox.option ({
  'showImageNumberLabel': false,
})