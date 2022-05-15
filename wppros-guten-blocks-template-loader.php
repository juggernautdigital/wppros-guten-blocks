<?php
// Exit if accessed directly.
if (! defined('ABSPATH')) {
    exit;
}

/**
 ** Template Loader
 */
define('WPPROS_GUTEN_BLOCKS_PLUGIN_DIR', plugin_dir_path(__FILE__));

if (! class_exists('Gamajo_Template_Loader')) {
    require WPPROS_GUTEN_BLOCKS_PLUGIN_DIR . 'class-gamajo-template-loader.php';
}
require WPPROS_GUTEN_BLOCKS_PLUGIN_DIR . 'class-wppros-template-loader.php';
