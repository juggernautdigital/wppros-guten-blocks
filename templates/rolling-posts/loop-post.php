<div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">

  <div class="blog-item">


  <?php if ( has_post_thumbnail() ) : ?>
    <div class="blog-image">
      <a href="<?php the_permalink(); ?>" title="<?php the_title_attribute(); ?>">
          <?php the_post_thumbnail('medium'); ?>
      </a>
    </div>
  <?php endif; ?>

  <div class="blog-content matchHeight">

  <h2><a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>"><?php the_title(); ?></a></h2>
  <?php the_excerpt(); ?>

  </div>

  </div>



</div>
