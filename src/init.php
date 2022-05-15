<?php
/**
 * WP-Proz Blocks Initializer
 *
 * Enqueue CSS/JS of all the blocks.
 *
 * @since   1.0.0
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function wp_proz_block_category( $categories, $post ) {
	return array_merge(
		$categories,
		array(
			array(
				'slug' => 'wp-proz',
				'title' => __( 'WP-Proz', 'wp-proz' ),
			),
		)
	);
}
add_filter( 'block_categories_all', 'wp_proz_block_category', 10, 2);


/**
 * Enqueue
 *
*/

function wppros_blocks_editor_includes() {

    // Enqueue block editor JS
    wp_enqueue_script(
        'wppros-blocks',
        plugins_url( '../dist/blocks.build.js', __FILE__ ),
        [ 'wp-editor', 'wp-element', 'wp-plugins', 'wp-edit-post' ]
    );

		// Enqueue block editor styles
		wp_enqueue_script(
				'fontawesome', 'https://kit.fontawesome.com/aa4cc95836.js'
		);

		// Enqueue block editor styles
    wp_enqueue_style(
        'wppros-blocks-editor-css',
        plugins_url( '../dist/blocks.editor.build.css', __FILE__ ),
        [ 'wp-editor', 'wp-edit-blocks' ]
    );

		// Enqueue block editor styles
		wp_enqueue_style(
				'wppros-blocks-global-css',
				plugins_url( '../assets/css/global.min.css', __FILE__ )
		);

		// Enqueue block editor styles
		wp_enqueue_style(
				'fontawesome',
				plugins_url( '../assets/plugins/FontAwesome/css/all.min.css', __FILE__ )
		);

		// Enqueue block editor styles
		wp_enqueue_script(
				'wppros-scripts',
				plugins_url( '../assets/js/wp-proz-scripts.min.js', __FILE__ ),
				[ 'jquery', 'slick-slider-core' ]
		);

}

// Hook the enqueue functions into the editor
add_action( 'enqueue_block_editor_assets', 'wppros_blocks_editor_includes' );

/**
 * Enqueue
 */
function wppros_blocks_includes() {

    // Enqueue block editor styles
    wp_enqueue_style(
        'wppros-blocks-css',
        plugins_url( '../dist/blocks.style.build.css', __FILE__ )
    );

		// Enqueue block editor styles
		wp_enqueue_script(
				'fontawesome', 'https://kit.fontawesome.com/aa4cc95836.js'
		);

		// Enqueue block editor styles
		wp_enqueue_script(
				'wppros-scripts',
				plugins_url( '../assets/js/wp-proz-scripts.min.js', __FILE__ ),
				[ 'jquery', 'slick-slider-core' ]
		);

		if (function_exists('add_google_map_api')) {
			if(has_block('wppros/google-map')){
        wp_enqueue_script(
        'wppros-google-api',
        'https://maps.googleapis.com/maps/api/js?key=' . add_google_map_api() . '&callback=initMap',
        array( 'jquery' ), false, true
        );
			}
    }

}

// Hook the enqueue functions into the frontend and editor
add_action( 'enqueue_block_assets', 'wppros_blocks_includes' );

/**
 * Block registration functions.
 *
 * @package gutenberg
 */

/**
 * Substitutes the implementation of a core-registered block type, if exists,
 * with the built result from the plugin.
 */
function wppros_register_block_types() {
	// Blocks directory may not exist if working from a fresh clone.
	$blocks_dir = dirname( __FILE__ ) . '/../assets/functions/';
	if ( ! file_exists( $blocks_dir ) ) {
		return;
	}

	$block_names = array(
		'content-feature.php'        		=> 'wppros/content-feature',
		'information-boxes.php'         => 'wppros/information-boxes',
		'call-to-action.php'           	=> 'wppros/call-to-action',
		'google-map.php'           			=> 'wppros/google-map',
		'rolling-posts.php'           	=> 'wppros/rolling-posts',
		'template-block.php'           	=> 'wppros/template-block',
	);

	foreach ( $block_names as $file => $block_name ) {
		if ( ! file_exists( $blocks_dir . $file ) ) {
			return;
		}

		require $blocks_dir . $file;
	}
}
add_action( 'init', 'wppros_register_block_types' );
