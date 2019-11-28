<?php
function render_block_wpproz_blocks_template_block( $attributes, $content ) {

	$class = 'wp-block-wpproz-template-block';

	if (isset($attributes['className'])) {
			$class .= ' ' . $attributes['className'];
	}

	if ( isset( $attributes['align'] ) ) {
	$class .= ' align' . $attributes['align'];
	}

	$data = array();

	$data['class_names'] = $class;

	if ( isset( $attributes['theCustomTemplate'] ) ) {
		$template_file_name = $attributes['theCustomTemplate'];
	}

	if(empty($template_file_name)){
	  $template_file_name_path = 'template-block/default';
	} else {
	  $template_file_name_path = 'template-block/' . $template_file_name;
	}

		ob_start();

		$templates = new WPProz_Guten_Blocks_Template_Loader;
		$templates
				->set_template_data($data, 'guten_blocks')
		    ->get_template_part( $template_file_name_path );

		$output = ob_get_clean();

	 	return $output;

}

function wpproz_blocks_template_block() {

				register_block_type( 'wpproz/template-block', array(

				'attributes'      => array(
						'align'      => array(
							'type' => 'string',
							'default' => 'full',
						),

				),

							'render_callback' => 'render_block_wpproz_blocks_template_block',

				) );

 }
 add_action( 'init', 'wpproz_blocks_template_block', 20 );
