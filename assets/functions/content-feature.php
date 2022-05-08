<?php
function render_block_wppros_content_feature( $attributes, $content ) {

		 $class = 'wp-block-wppros-content-feature';
		 if ( isset( $attributes['align'] ) ) {
		 $class .= ' align' . $attributes['align'];
		 }

		 if ( isset( $attributes['className'] ) ) {
		 $class .= ' ' . $attributes['className'];
		 }

		if ( isset( $attributes['mediaPosition'] ) ) {
		 $class .= ' content-' . $attributes['mediaPosition'];
		$content_position = $attributes['mediaPosition'];
		}

		if ( isset( $attributes['contentTitle'] ) ) {
		$content_title = $attributes['contentTitle'];
		}

		if ( isset( $attributes['contentDescription'] ) ) {
		$content_description = $attributes['contentDescription'];
		}

		if ( isset( $attributes['contentButton'] ) ) {
		$content_button = $attributes['contentButton'];
		}

		if ( isset( $attributes['contentFeatures'] ) ) {
		$content_features = $attributes['contentFeatures'];
		}

		if ( isset( $attributes['contentFeaturesButton'] ) ) {
		$content_features_button = $attributes['contentFeaturesButton'];
		}

		if ( isset( $attributes['mediaURL'] ) ) {
		$background_image = $attributes['mediaURL'];
		}

		if ( isset( $attributes['iconURL'] ) ) {
		$content_icon = $attributes['iconURL'];
		}

		if ( isset( $attributes['contentColor'] ) ) {
		$content_color = $attributes['contentColor'];
		}

		if ( isset( $attributes['contentTextColor'] ) ) {
		$content_text_color = $attributes['contentTextColor'];
		}

		if ( isset( $attributes['contentQuote'] ) ) {
		$content_quote = $attributes['contentQuote'];
		}

		if ( isset( $attributes['contentQuoteName'] ) ) {
		$content_quote_name = $attributes['contentQuoteName'];
		}

		if ( isset( $attributes['photoCredit'] ) ) {
		$photo_credit = $attributes['photoCredit'];
		}

		$the_content = $content;


		 ob_start();
		include( plugin_dir_path( __FILE__ ) . '../includes/content-feature.php');
		 $output = ob_get_clean();

		 return $output;
 }


function wppros_blocks_content_feature() {

				register_block_type( 'wppros/content-feature', array(

							'attributes'      => array(

											'contentColor' => array(
											'type'    => 'string',
											'default' => '#444'
											),

											'mediaPosition' => array(
											'type'    => 'string',
											'default' => 'left'
											),

											'align'          => array(
											'type' => 'string',
											'default' => 'full',
											),

							),

							'render_callback' => 'render_block_wppros_content_feature',

				) );

 }
 add_action( 'init', 'wppros_blocks_content_feature', 20 );
