<?php
function render_block_wpproz_blocks_google_map( $attributes, $content ) {

	$class = 'wp-block-wpproz-google-map';

	if ( isset( $attributes['align'] ) ) {
	$class .= ' align' . $attributes['align'];
	}

	if ( isset( $attributes['className'] ) ) {
	$class .= ' ' . $attributes['className'];
	}

	if ( isset( $attributes['mapHeight'] ) ) {
	$map_height = $attributes['mapHeight'];
	}

	if ( isset( $attributes['mapZoom'] ) ) {
	$map_zoom = $attributes['mapZoom'];
	}





	if ( isset( $attributes['addressLineOne'] ) ) {
	$address_line_one = $attributes['addressLineOne'];
	}

	if ( isset( $attributes['addressLineTwo'] ) ) {
	$address_line_two = $attributes['addressLineTwo'];
	}

	if ( isset( $attributes['addressTown'] ) ) {
	$address_town = $attributes['addressTown'];
	}

	if ( isset( $attributes['addressPostCode'] ) ) {
	$address_post_code = $attributes['addressPostCode'];
	}



	$the_content = $content;

		ob_start();
	 	include( plugin_dir_path( __FILE__ ) . '../includes/google-map.php');
		$output = ob_get_clean();

	 	return $output;

}


function wpproz_blocks_google_map() {

				register_block_type( 'wpproz/google-map', array(

				'attributes'      => array(
						'align'      => array(
							'type' => 'string',
							'default' => 'full',
						),
						'mapHeight'      => array(
							'type' => 'number',
						),

				),

							'render_callback' => 'render_block_wpproz_blocks_google_map',

				) );

 }
 add_action( 'init', 'wpproz_blocks_google_map', 20 );
