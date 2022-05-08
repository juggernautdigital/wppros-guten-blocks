<?php
function render_block_wppros_blocks_information_boxes( $attributes, $content ) {

	$class = 'wp-block-wppros-information-boxes';
	if ( isset( $attributes['align'] ) ) {
	$class .= ' align' . $attributes['align'];
	}

	if ( isset( $attributes['className'] ) ) {
	$class .= ' ' . $attributes['className'];
	}

	if ( isset( $attributes['title'] ) ) {
	$title = ' ' . $attributes['title'];
	}

	if ( isset( $attributes['subTitle'] ) ) {
	$sub_title = ' ' . $attributes['subTitle'];
	}

	if ( isset( $attributes['buttonLabel'] ) ) {
	$button_label = ' ' . $attributes['buttonLabel'];
	}

	if ( isset( $attributes['buttonURL'] ) ) {
	$button_url = ' ' . $attributes['buttonURL'];
	}

	if ( isset( $attributes['boxOneTitle'] ) ) {
	$box_one_title = ' ' . $attributes['boxOneTitle'];
	}

	if ( isset( $attributes['boxOneContent'] ) ) {
	$box_one_content = ' ' . $attributes['boxOneContent'];
	}

	if ( isset( $attributes['boxTwoTitle'] ) ) {
	$box_two_title = ' ' . $attributes['boxTwoTitle'];
	}

	if ( isset( $attributes['boxTwoContent'] ) ) {
	$box_two_content = ' ' . $attributes['boxTwoContent'];
	}

	if ( isset( $attributes['boxThreeTitle'] ) ) {
	$box_three_title = ' ' . $attributes['boxThreeTitle'];
	}

	if ( isset( $attributes['boxThreeContent'] ) ) {
	$box_three_content = ' ' . $attributes['boxThreeContent'];
	}

	ob_start();
 	include( plugin_dir_path( __FILE__ ) . '../includes/information-boxes.php');
	$output = ob_get_clean();

 	return $output;

}


function wppros_blocks_information_boxes() {

				register_block_type( 'wppros/information-boxes', array(

							//'render_callback' => 'render_block_wppros_blocks_information_boxes',

				) );

 }
 add_action( 'init', 'wppros_blocks_information_boxes', 20 );
