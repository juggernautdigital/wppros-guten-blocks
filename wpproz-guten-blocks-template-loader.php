<?php

// Exit if accessed directly.
if (! defined('ABSPATH')) {
    exit;
}

/**
 ** Template Loader
 */
define('WPPROZ_GUTEN_BLOCKS_PLUGIN_DIR', plugin_dir_path(__FILE__));

if (! class_exists('Gamajo_Template_Loader')) {
    require WPPROZ_GUTEN_BLOCKS_PLUGIN_DIR . 'class-gamajo-template-loader.php';
}
require WPPROZ_GUTEN_BLOCKS_PLUGIN_DIR . 'class-wpproz-template-loader.php';
