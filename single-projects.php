<?php

get_header();

global $post;
$id = $post->ID;

$context['projects'] = Timber::get_post( $id );


Timber::render( 'templates/single-projects.twig', $context );

get_footer();

?>