<?php
function render_block_wpproz_blocks_carousel( $attributes, $content ) {

	$class = 'wp-block-wpproz-carousel';
	if ( isset( $attributes['align'] ) ) {
	$class .= ' align' . $attributes['align'];
	}

	if ( isset( $attributes['className'] ) ) {
	$class .= ' ' . $attributes['className'];
	}

	ob_start();
 include( plugin_dir_path( __FILE__ ) . '../includes/carousel.php');
	$output = ob_get_clean();

	 return $output;

}


function wpproz_blocks_carousel() {

				register_block_type( 'wpproz/carousel', array(

							'render_callback' => 'render_block_wpproz_blocks_carousel',

				) );

 }
 add_action( 'init', 'wpproz_blocks_carousel', 20 );
