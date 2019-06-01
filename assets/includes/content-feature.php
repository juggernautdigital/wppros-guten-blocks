<section class="<?php echo $class ?> content-feature" style="background-size: cover; background-position: center; background-image:url('<?php if ( isset( $background_image ) ) { echo $background_image; } ?>')">

  <div class="photo-credit">
    <span>Photograph Credit</span>
    <span><?php if ( isset( $photo_credit ) ) { echo $photo_credit; } ?></span>
  </div>

  <?php if ( isset( $content_position ) ) {

          if ($content_position == 'left') {

            $reverse = ' reverse';

          } elseif ($content_position == 'right') {

            $reverse = '';

          }

  } ?>

  <div class="wrapper container-fluid">
    <div class="row<?php echo $reverse ?>">


      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-5 matchHeight pos-relative">
          <div class="quote">
            <span><?php if ( isset( $content_quote ) ) { echo $content_quote; } ?></span>
            <span class="font-weight-bold"><?php if ( isset( $content_quote_name ) ) { echo $content_quote_name; } ?></span>
          </div>
      </div>


      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-7 matchHeight">
        <div class="py-10 my-10">

          <div class="panel" style="background-color:<?php if ( isset( $content_color ) ) { echo $content_color; } ?>; color:<?php if ( isset( $content_text_color ) ) { echo $content_text_color; } ?>">

            <div class="inner-panel">
              <img src="<?php if ( isset( $content_icon ) ) { echo $content_icon; } ?>" />
              <h3><?php if ( isset( $content_title ) ) { echo $content_title; } ?></h3>
              <p><?php if ( isset( $content_description ) ) { echo $content_description; } ?></p>

<div class="panel-button" style="color:<?php if ( isset( $content_color ) ) { echo $content_color; } ?>"><?php if ( isset( $content_button ) ) { echo $content_button; } ?></div>
            </div>

            <div class="panel-bullets">
              <div class="inner-bullets-panel" style="background-color:<?php if ( isset( $content_color ) ) { echo $content_color; } ?>"></div>
              <div class="inner-bullets-panel-content">

                <ul>
                  <?php if ( isset( $content_features ) ) { echo $content_features; } ?>
                </ul>

              </div>

              <div class="text-center find-out-more"><?php if ( isset( $content_features_button ) ) { echo $content_features_button; } ?></div>
            </div>

          </div>

        </div>
      </div>






    </div>
  </div>
</section>
