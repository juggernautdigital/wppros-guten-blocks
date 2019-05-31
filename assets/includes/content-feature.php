<section class="<?php echo $class ?> insurance-product" style="background-size: cover; background-position: center; background-image:url('<?php if ( isset( $background_image ) ) { echo $background_image; } ?>')">

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
            <span><?php if ( isset( $product_quote ) ) { echo $product_quote; } ?></span>
            <span class="font-weight-bold"><?php if ( isset( $product_quote_name ) ) { echo $product_quote_name; } ?></span>
          </div>
      </div>


      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-7 matchHeight">
        <div class="py-10 my-10">

          <div class="panel" style="background-color:<?php if ( isset( $product_color ) ) { echo $product_color; } ?>">

            <div class="inner-panel">
              <img src="<?php if ( isset( $product_icon ) ) { echo $product_icon; } ?>" />
              <h3><?php if ( isset( $product_title ) ) { echo $product_title; } ?></h3>
              <p><?php if ( isset( $product_description ) ) { echo $product_description; } ?></p>
              <a href="#" class="get-quote" style="color:<?php if ( isset( $product_color ) ) { echo $product_color; } ?>">Get A Quote</a>
            </div>

            <div class="panel-bullets">
              <div class="inner-bullets-panel" style="background-color:<?php if ( isset( $product_color ) ) { echo $product_color; } ?>"></div>
              <div class="inner-bullets-panel-content">

                <ul>
                  <?php if ( isset( $product_feature_one ) ) { echo '<li>' . $product_feature_one . '</li>'; } ?>
                  <?php if ( isset( $product_feature_two ) ) { echo '<li>' . $product_feature_two . '</li>'; } ?>
                  <?php if ( isset( $product_feature_three ) ) { echo '<li>' . $product_feature_three . '</li>'; } ?>
                  <?php if ( isset( $product_feature_four ) ) { echo '<li>' . $product_feature_four . '</li>'; } ?>
                  <?php if ( isset( $product_feature_five ) ) { echo '<li>' . $product_feature_five . '</li>'; } ?>
                </ul>

              </div>
              <div class="text-center find-out-more"><a href="<?php if ( isset( $product_feature_link ) ) { echo $product_feature_link; } ?>">Find out more</a></div>
            </div>

          </div>

        </div>
      </div>






    </div>
  </div>
</section>
