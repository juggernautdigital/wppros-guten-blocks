<?php global $post; ?>

<section class="<?php echo $class ?>">
  <div class="wrapper container-fluid">
    <div class="row">
      <div class="col-xs-12">

        <?php $products_for_carousel = get_field('products_for_carousel', 'options');
              if( $products_for_carousel ):
        ?>

        <ul class="slick-carousel">

        <?php foreach( $products_for_carousel as $post): // variable must be called $post (IMPORTANT) ?>
            <?php setup_postdata($post); ?>

            <li>
              <div class="slide-item matchHeight" style="background-color:<?php the_field('page_colour') ?>">
                <div><img width="100" src="<?php the_field('page_icon') ?>"/></div>
                <h2><?php if ( get_field('page_title') ) { the_field('page_title'); } else { the_title(); } ?></h2>
                <p><?php the_field('page_description') ?></p>
                <div class="button-group">
                  <a href="<?php the_permalink(); ?>" class="get-quote">Get a Quote</a> <a href="#">Learn More</a>
                </div>
              </div>
            </li>

          <?php endforeach; ?>

        </ul>

        <?php wp_reset_postdata(); // IMPORTANT - reset the $post object so the rest of the page works correctly ?>
        <?php endif; ?>

      </div>
    </div>
  </div>
</section>
