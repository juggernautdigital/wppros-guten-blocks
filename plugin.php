<?php
/**
 * Plugin Name: WP-Pros Guten Blocks
 * Plugin URI: http://www.wp-pros.co.uk/plugins/products
 * Description: This plugin add additional blocks to the WordPress editor
 * Version: 1.0.5
 * Author: WP-Proz
 * Author URI: http://www.wp-pros.co.uk
 *
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

require_once plugin_dir_path( __FILE__ ) . 'wppros-guten-blocks-template-loader.php';

require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
