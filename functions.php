<?php 

add_action( 'wp_enqueue_scripts', 'salient_child_enqueue_styles', 100);

function salient_child_enqueue_styles() {
		
		$nectar_theme_version = nectar_get_theme_version();
		wp_enqueue_style( 'salient-child-style', get_stylesheet_directory_uri() . '/style.css', '', $nectar_theme_version );
		wp_enqueue_script( 'animate', get_stylesheet_directory_uri() . '/js/wow.min.js', '', $nectar_theme_version );

		// Lightbox2
		wp_enqueue_style(  'lightbox2',  get_stylesheet_directory_uri(). '/includes/lightbox2-dev/dist/css/lightbox.min.css', '', $nectar_theme_version );
		wp_enqueue_script( 'lightbox2', get_stylesheet_directory_uri() . '/includes/lightbox2-dev/dist/js/lightbox.min.js', '', $nectar_theme_version );

		wp_enqueue_script( 'isotope', get_stylesheet_directory_uri() . '/js/isotope.min.js', '', $nectar_theme_version );
		wp_enqueue_script( 'global', get_stylesheet_directory_uri() . '/js/global.js', '', $nectar_theme_version,1 );
		
    if ( is_rtl() ) {
			 wp_enqueue_style(  'salient-rtl',  get_template_directory_uri(). '/rtl.css', array(), '1', 'screen' );
		}
}


?>