<?php
function render_block_wppros_blocks_template_block( $attributes, $content ) {

	$class = 'wp-block-wppros-template-block';

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

		$templates = new WPPros_Guten_Blocks_Template_Loader;
		$templates
				->set_template_data($data, 'guten_blocks')
		    ->get_template_part( $template_file_name_path );

		$output = ob_get_clean();

	 	return $output;

}

function wppros_blocks_template_block() {

				register_block_type( 'wppros/template-block', array(

				'attributes'      => array(
						'align'      => array(
							'type' => 'string',
							'default' => 'full',
						),

				),

							'render_callback' => 'render_block_wppros_blocks_template_block',

				) );

 }
 add_action( 'init', 'wppros_blocks_template_block', 20 );
