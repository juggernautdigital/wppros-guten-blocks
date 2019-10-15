<?php

/**
 * Template loader for PW Sample Plugin.
 *
 * Only need to specify class properties here.
 *
 */

 // Exit if accessed directly.
 if ( ! defined( 'ABSPATH' ) ) {
 	exit;
 }

class WPProz_Guten_Blocks_Template_Loader extends Gamajo_Template_Loader {

	/**
	 * Prefix for filter names.
	 *
	 * @since 1.0.0
	 * @type string
	 */
	protected $filter_prefix = 'pw';

	/**
	 * Directory name where custom templates for this plugin should be found in the theme.
	 *
	 * @since 1.0.0
	 * @type string
	 */
	protected $theme_template_directory = 'wpproz-templates';

	/**
	 * Reference to the root directory path of this plugin.
	 *
	 * @since 1.0.0
	 * @type string
	 */
	protected $plugin_directory = WPPROZ_GUTEN_BLOCKS_PLUGIN_DIR;

}
