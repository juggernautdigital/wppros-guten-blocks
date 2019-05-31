<?php
function render_block_wpproz_blocks_insurance_product( $attributes, $content ) {

		 $class = 'wp-block-wpproz-insurance-product';
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

		if ( isset( $attributes['productTitle'] ) ) {
		$product_title = $attributes['productTitle'];
		}

		if ( isset( $attributes['productDescription'] ) ) {
		$product_description = $attributes['productDescription'];
		}

		if ( isset( $attributes['productFeatureOne'] ) ) {
		$product_feature_one = $attributes['productFeatureOne'];
		}

		if ( isset( $attributes['productFeatureTwo'] ) ) {
		$product_feature_two = $attributes['productFeatureTwo'];
		}

		if ( isset( $attributes['productFeatureThree'] ) ) {
		$product_feature_three = $attributes['productFeatureThree'];
		}

		if ( isset( $attributes['productFeatureFour'] ) ) {
		$product_feature_four = $attributes['productFeatureFour'];
		}

		if ( isset( $attributes['productFeatureFive'] ) ) {
		$product_feature_five = $attributes['productFeatureFive'];
		}

		if ( isset( $attributes['productFeatureLink'] ) ) {
		$product_feature_link = $attributes['productFeatureLink'];
		}

		if ( isset( $attributes['mediaURL'] ) ) {
		$background_image = $attributes['mediaURL'];
		}

		if ( isset( $attributes['iconURL'] ) ) {
		$product_icon = $attributes['iconURL'];
		}

		if ( isset( $attributes['productColor'] ) ) {
		$product_color = $attributes['productColor'];
		}

		if ( isset( $attributes['productQuote'] ) ) {
		$product_quote = $attributes['productQuote'];
		}

		if ( isset( $attributes['productQuoteName'] ) ) {
		$product_quote_name = $attributes['productQuoteName'];
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


function wpproz_blocks_munster_insurance_products() {

				register_block_type( 'wpproz/content-feature', array(

							'attributes'      => array(

											'productColor' => array(
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

							'render_callback' => 'render_block_wpproz_blocks_insurance_product',

				) );

 }
 add_action( 'init', 'wpproz_blocks_munster_insurance_products', 20 );
