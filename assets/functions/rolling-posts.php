<?php
function render_block_wpproz_blocks_rolling_posts( $attributes, $content ) {

	$class = 'wp-block-wpproz-rolling-posts';

	if (isset($attributes['className'])) {
			$class .= ' ' . $attributes['className'];
	}

	if ( isset( $attributes['align'] ) ) {
	$class .= ' align' . $attributes['align'];
	}

	if ( isset( $attributes['verticalPadding'] ) ) {
	$class .= ' py-' . $attributes['verticalPadding'];
	}

	$data = array();

	$data['class_names'] = $class;

	if ( isset( $attributes['verticalPadding'] ) ) {
	$data['vertical_padding'] = $attributes['verticalPadding'];
	}

	if ( isset( $attributes['thePostType'] ) ) {
	$data['the_post_type'] = $attributes['thePostType'];
	}

		ob_start();

		$templates = new WPProz_Guten_Blocks_Template_Loader;
		$templates
				->set_template_data($data, 'guten_blocks')
				->get_template_part('rolling-posts/loop');

	 	//include( plugin_dir_path( __FILE__ ) . '../includes/rolling-posts.php');
		$output = ob_get_clean();

	 	return $output;

}

function wpproz_blocks_rolling_posts() {

				register_block_type( 'wpproz/rolling-posts', array(

				'attributes'      => array(
						'align'      => array(
							'type' => 'string',
							'default' => 'full',
						),
						'verticalPadding'      => array(
							'type' => 'number',
						),
						'postType'      => array(
							'type' => 'number',
						),

				),

							'render_callback' => 'render_block_wpproz_blocks_rolling_posts',

				) );

 }
 add_action( 'init', 'wpproz_blocks_rolling_posts', 20 );
