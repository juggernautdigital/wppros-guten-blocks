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
add_filter( 'block_categories', 'wp_proz_block_category', 10, 2);




/**
 * Enqueue
 *
*/

function wpproz_blocks_editor_includes() {

    // Enqueue block editor JS
    wp_enqueue_script(
        'wpproz-blocks',
        plugins_url( '../dist/blocks.build.js', __FILE__ ),
        [ 'wp-editor', 'wp-element', 'wp-plugins', 'wp-edit-post' ]
    );

		// Enqueue block editor styles
    wp_enqueue_style(
        'wpproz-blocks-editor-css',
        plugins_url( '../dist/blocks.editor.build.css', __FILE__ ),
        [ 'wp-editor', 'wp-edit-blocks' ]
    );

		// Enqueue block editor styles
		wp_enqueue_style(
				'wpproz-blocks-global-css',
				plugins_url( '../assets/css/global.min.css', __FILE__ )
		);

		// Enqueue block editor styles
		wp_enqueue_style(
				'fontawesome',
				plugins_url( '../assets/plugins/FontAwesome/css/all.min.css', __FILE__ )
		);

		// Enqueue block editor styles
		wp_enqueue_script(
				'slick-slider-core',
				plugins_url( '../assets/plugins/Slick/slick.min.js', __FILE__ ),
				[ 'jquery' ]
		);
		wp_enqueue_style(
				'slick-slider-core',
				plugins_url( '../assets/plugins/Slick/slick.min.css', __FILE__ )
		);
		wp_enqueue_style(
				'slick-slider-core-theme',
				plugins_url( '../assets/plugins/Slick/slick-theme.min.css', __FILE__ )
		);

		// Enqueue block editor styles
		wp_enqueue_script(
				'wpproz-scripts',
				plugins_url( '../assets/js/wp-proz-scripts.min.js', __FILE__ ),
				[ 'jquery', 'slick-slider-core' ]
		);

}

// Hook the enqueue functions into the editor
add_action( 'enqueue_block_editor_assets', 'wpproz_blocks_editor_includes' );

/**
 * Enqueue
 */
function wpproz_blocks_includes() {

    // Enqueue block editor styles
    wp_enqueue_style(
        'wpproz-blocks-css',
        plugins_url( '../dist/blocks.style.build.css', __FILE__ )
    );

		// Enqueue block editor styles
		wp_enqueue_style(
				'fontawesome',
				plugins_url( '../assets/plugins/FontAwesome/css/all.min.css', __FILE__ )
		);

		// Enqueue block editor styles
		wp_enqueue_script(
				'slick-slider-core',
				plugins_url( '../assets/plugins/Slick/slick.min.js', __FILE__ ),
				[ 'jquery' ]
		);
		wp_enqueue_style(
				'slick-slider-core',
				plugins_url( '../assets/plugins/Slick/slick.min.css', __FILE__ )
		);
		wp_enqueue_style(
				'slick-slider-core-theme',
				plugins_url( '../assets/plugins/Slick/slick-theme.min.css', __FILE__ )
		);

		// Enqueue block editor styles
		wp_enqueue_script(
				'wpproz-scripts',
				plugins_url( '../assets/js/wp-proz-scripts.min.js', __FILE__ ),
				[ 'jquery', 'slick-slider-core' ]
		);

		if (function_exists('add_google_map_api')) {
			if(has_block('wpproz/google-map')){
        wp_enqueue_script(
        'wpproz-google-api',
        'https://maps.googleapis.com/maps/api/js?key=' . add_google_map_api() . '&callback=initMap',
        array( 'jquery' ), false, true
        );
			}
    }

}

// Hook the enqueue functions into the frontend and editor
add_action( 'enqueue_block_assets', 'wpproz_blocks_includes' );

/**
 * Block registration functions.
 *
 * @package gutenberg
 */

/**
 * Substitutes the implementation of a core-registered block type, if exists,
 * with the built result from the plugin.
 */
function wpproz_register_block_types() {
	// Blocks directory may not exist if working from a fresh clone.
	$blocks_dir = dirname( __FILE__ ) . '/../assets/functions/';
	if ( ! file_exists( $blocks_dir ) ) {
		return;
	}

	$block_names = array(
		'content-feature.php'        		=> 'wpproz/content-feature',
		'information-boxes.php'         => 'wpproz/information-boxes',
		'call-to-action.php'           	=> 'wpproz/call-to-action',
		'google-map.php'           			=> 'wpproz/google-map',
		'rolling-posts.php'           	=> 'wpproz/rolling-posts',
		'template-block.php'           	=> 'wpproz/template-block',
	);

	foreach ( $block_names as $file => $block_name ) {
		if ( ! file_exists( $blocks_dir . $file ) ) {
			return;
		}

		require $blocks_dir . $file;
	}
}
add_action( 'init', 'wpproz_register_block_types' );
