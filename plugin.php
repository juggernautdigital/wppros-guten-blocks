<?php
/**
 * Plugin Name: WP-Proz Guten Blocks
 * Plugin URI: http://www.wp-proz.com/plugins/products
 * Description: This plugin add additional blocks to the WordPress editor
 * Version: 1.0
 * Author: WP-Proz
 * Author URI: http://www.wp-proz.com
 * GitHub Plugin URI: juggernautdigital/wpproz-guten-blocks
 * GitHub Plugin URI: https://github.com/juggernautdigital/wpproz-guten-blocks
 *
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

require_once plugin_dir_path( __FILE__ ) . 'wpproz-guten-blocks-template-loader.php';

require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
