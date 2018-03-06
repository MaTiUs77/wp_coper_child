<?php
// Functions for the Newspaper TagDiv child theme
/** Load frontend scripts */
 add_action( 'wp_enqueue_scripts', 'frontend_scripts' );
 function frontend_scripts()
 {

	/* Scripts */
	wp_enqueue_script('scripts', get_stylesheet_directory_uri() . '/js/scripts.js', false, false, true);
	wp_localize_script( 'scripts', 'scripts_var', array(
			'site_url' => site_url(),
			'nightmode' => $_COOKIE['nightmode'],
			'ajax_url' => admin_url( 'admin-ajax.php' ),
			'template_url' => get_template_directory_uri(),
			'nonce' => wp_create_nonce( 'ajax-nonce' )
		)
	);
 }

 // Apply filter
add_filter('body_class', 'body_classes');
function body_classes($classes) {
	if ($_COOKIE['nightmode'] == 'on')
	{
    	$classes[] = 'night';
    }
    return $classes;
}