<section class="<?php echo $class ?>" style="background-color:<?php if ( isset( $background_color ) ) { echo $background_color; } ?>">

	<div class="background-image" style="background-image:url('<?php if ( isset( $background_image ) ) { echo $background_image; } ?>');"></div>

	<div class="background-image-overlay"></div>

	<div class="wrapper container-fluid">

		<div class="row <?php echo $row_classes ?>">

<?php if ( isset( $layout_option ) ) { ?>

			<?php if ($layout_option == 'left') { ?>

				<div class="col-xs-4 text-center">
					<i style="color: <?php echo $text_color ?>" class="fal <?php echo $icon ?> fa-<?php echo $icon_size ?>x mb-<?php echo $icon_margin_bottom ?>"></i>
        </div>
        <div class="col-xs-8">
					<div style="color: <?php echo $text_color ?>">
          	<?php echo $the_content ?>
					</div>
        </div>

			<?php } elseif ( $layout_option == 'center' ) { ?>

				<div class="col-xs-12 center-xs">
					<i style="color: <?php echo $text_color ?>" class="fal <?php echo $icon ?> fa-<?php echo $icon_size ?>x mb-<?php echo $icon_margin_bottom ?>"></i>
					<div style="color: <?php echo $text_color ?>">
						<?php echo $the_content ?>
					</div>
				</div>

			<?php } ?>

<?php } ?>

		</div>

	</div>

</section>

<script>

function convertHex(hex,opacity){
    hex = hex.replace('#','');
    r = parseInt(hex.substring(0,2), 16);
    g = parseInt(hex.substring(2,4), 16);
    b = parseInt(hex.substring(4,6), 16);

    result = 'rgba('+r+','+g+','+b+','+opacity/100+')';
    return result;
}


var bg_rgba_color_start = convertHex( background_color, 0);
var bg_rgba_color_end = convertHex( background_color, 100);

const image_fade = {
	background: '-moz-linear-gradient(90deg, ' + bg_rgba_color_start + '0%, ' + bg_rgba_color_end + ' 100%)',
	background: '-webkit-linear-gradient(90deg, ' + bg_rgba_color_start + '0%, ' + bg_rgba_color_end + ' 100%)',
	background: 'linear-gradient(90deg, ' + bg_rgba_color_start + '0%, ' + bg_rgba_color_end + ' 100%)',
}

</script>

<style>

	background: -moz-linear-gradient(90deg, rgba(213,30,65,0) 0%, rgba() 100%);
	background: -webkit-linear-gradient(90deg, rgba(213,30,65,0) 0%, rgba() 100%);
	background: linear-gradient(90deg, rgba(213,30,65,0) 0%, rgba() 100%);

</style>
