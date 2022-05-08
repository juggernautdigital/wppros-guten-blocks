<?php
function render_block_wppros_blocks_rolling_posts( $attributes, $content ) {

	$class = 'wp-block-wppros-rolling-posts';

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

	$data['rp_content'] = $content;

	$data['class_names'] = $class;

	if ( isset( $attributes['verticalPadding'] ) ) {
	$data['vertical_padding'] = $attributes['verticalPadding'];
	}

	if ( isset( $attributes['thePostType'] ) ) {
	$data['the_post_type'] = $attributes['thePostType'];
	}

	if ( isset( $attributes['postsPerPage'] ) ) {
	$data['posts_per_page'] = $attributes['postsPerPage'];
	}

	if ( isset( $attributes['theCustomLoopTemplate'] ) ) {
	$the_custom_loop_template = $attributes['theCustomLoopTemplate'];
	}

	if(empty($the_custom_loop_template)){
		$rp_loop_template = 'rolling-posts/loop-wrapper';
	} else {
		$rp_loop_template = 'rolling-posts/loop-wrapper-' . $the_custom_loop_template;
	}

	if ( isset( $attributes['theCustomPostTemplate'] ) ) {
	$data['the_custom_post_template'] = $attributes['theCustomPostTemplate'];
	}

	if ( isset( $attributes['theTaxonomy'] ) ) {
	$data['the_taxonomy'] = $attributes['theTaxonomy'];
	}

	if ( isset( $attributes['theTerm'] ) ) {
	$data['the_term'] = $attributes['theTerm'];
	}

	if ( isset( $attributes['showFeaturedOnly'] ) ) {
	$data['show_featured_only'] = $attributes['showFeaturedOnly'];
	}

	if ( isset( $attributes['featuredMetaName'] ) ) {
	$data['featured_meta_name'] = $attributes['featuredMetaName'];
	}

		ob_start();

		$templates = new WPProz_Guten_Blocks_Template_Loader;
		$templates
				->set_template_data($data, 'guten_blocks')
				->get_template_part( $rp_loop_template );

		$output = ob_get_clean();

	 	return $output;

}

function wppros_blocks_rolling_posts() {

				register_block_type( 'wppros/rolling-posts', array(

				'attributes'      => array(
						'align'      => array(
							'type' => 'string',
						),
						'verticalPadding'      => array(
							'type' => 'number',
						),
						'postType'      => array(
							'type' => 'number',
						),

				),

							'render_callback' => 'render_block_wppros_blocks_rolling_posts',

				) );

 }
 add_action( 'init', 'wppros_blocks_rolling_posts', 20 );
