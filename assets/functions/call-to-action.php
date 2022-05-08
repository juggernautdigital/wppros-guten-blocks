<?php
function render_block_wppros_blocks_call_to_action( $attributes, $content ) {

	if ( isset( $attributes['mediaPosition'] ) ) {
		$media_position = $attributes['mediaPosition'];
		$layout_option = $media_position;
	}

	$class = 'wp-block-wppros-call-to-action';

	if ( isset( $attributes['align'] ) ) {
	$class .= ' align' . $attributes['align'];
	}

	if ( isset( $attributes['className'] ) ) {
	$class .= ' ' . $attributes['className'];
	}

	if ( isset( $attributes['verticalPadding'] ) ) {
	$class .= ' py-' . $attributes['verticalPadding'];
	}




	if ( isset( $attributes['verticalAlignment'] ) ) {
		$row_classes = $attributes['verticalAlignment'] . '-xs';
	}


	if ( isset( $attributes['icon'] ) ) {
	$icon = $attributes['icon'];
	}

	if ( isset( $attributes['iconSize'] ) ) {
	$icon_size = $attributes['iconSize'];
	}

	if ( isset( $attributes['iconMarginBottom'] ) ) {
	$icon_margin_bottom = $attributes['iconMarginBottom'];
	}

	if ( isset( $attributes['backgroundColor'] ) ) {
	$background_color = $attributes['backgroundColor'];
	}

	if ( isset( $attributes['mediaURL'] ) ) {
	$background_image = $attributes['mediaURL'];
	}

	if ( isset( $attributes['textColor'] ) ) {
	$text_color = $attributes['textColor'];
	}

	$the_content = $content;

		ob_start();
	 	include( plugin_dir_path( __FILE__ ) . '../includes/call-to-action.php');
		$output = ob_get_clean();

	 	return $output;

}


function wppros_blocks_call_to_action() {

				register_block_type( 'wppros/call-to-action', array(

'attributes'      => array(
	'align'      => array(
		'type' => 'string',
		'default' => 'full',
	),
			'mediaPosition'      => array(
				'type' => 'string',
				'default' => 'center',
			),
			'verticalAlignment'     => array(
				'type'    => 'string',
				'default' => 'middle',
			),
			'verticalPadding'     => array(
				'type'    => 'number',
				'default' => '5',
			),
			'backgroundColor'      => array(
				'type' => 'string',
				'default' => '#d51e41',
			),
			'textColor'     => array(
				'type'    => 'string',
				'default' => '#fff',
			),
			'icon'      => array(
				'type' => 'string',
				'default' => 'fa-award',
			),
			'iconSize'     => array(
				'type'    => 'number',
				'default' => '5',
			),
			'iconMarginBottom'     => array(
				'type'    => 'number',
				'default' => '0',
			),

),

							//'render_callback' => 'render_block_wppros_blocks_call_to_action',

				) );

 }
 add_action( 'init', 'wppros_blocks_call_to_action', 20 );
