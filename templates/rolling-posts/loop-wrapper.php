<?php
$classes = $guten_blocks->class_names;
if(isset($guten_blocks->the_post_type)) {
  $the_post_type = $guten_blocks->the_post_type;
};
if(isset($guten_blocks->the_custom_post_template)) {
  $the_custom_post_template = $guten_blocks->the_custom_post_template;
};
if(isset($guten_blocks->posts_per_page)) {
  $posts_per_page = $guten_blocks->posts_per_page;
};
if(isset($guten_blocks->the_taxonomy)) {
  $the_taxonomy = $guten_blocks->the_taxonomy;
};
if(isset($guten_blocks->the_term)) {
  $the_term = $guten_blocks->the_term;
};
if(isset($guten_blocks->show_featured_only)) {
  $show_featured_only = $guten_blocks->show_featured_only;
};
if(isset($guten_blocks->featured_meta_name)) {
  $featured_meta_name = $guten_blocks->featured_meta_name;
};
if(empty($the_custom_post_template)){
  $rp_post_template = 'rolling-posts/loop-post';
} else {
  $rp_post_template = 'rolling-posts/loop-post-' . $the_custom_post_template;
};
?>

<section class="blog-wrapper blog-snippet <?php echo $classes ?>">

  <div class="wrapper container-fluid">

    <?php echo $guten_blocks->rp_content; ?>

    <div class="row">

      <div class="col-xs-12">

        <?php
        if(empty($the_post_type)){
          $args['post_type'] = 'post';
        } else {
          $args['post_type'] = $the_post_type;
        };
        if(!empty($posts_per_page )  ) {
            $args['posts_per_page'] = $posts_per_page;
        };
        if(!empty($posts_per_page )  ) {
            $args['posts_per_page'] = $posts_per_page;
        };
        if(!empty($the_taxonomy && $the_term)){
            $args['tax_query'][] = array(
                'taxonomy' => $the_taxonomy,
                'field' => 'slug',
                'terms' => $the_term
            );
        };
        if( (isset($show_featured_only)) && (!empty($featured_meta_name )) ) {
            $args['meta_query'][] = array(
              	'key' => $featured_meta_name,
                'value'     => 1,
                'compare'   => 'IN',
            );
        };
        $query = new WP_Query( $args );
        ?>

        <?php if ( $query->have_posts() ) : ?>

        <div class="row">

        <?php
        while ( $query->have_posts() ) : $query->the_post();
        $templates = new WPPros_Guten_Blocks_Template_Loader;
        $templates->get_template_part( $rp_post_template );
        endwhile;
        ?>

        </div>

        <div class="row">
            <div class="col-xs-12">
                <div class="pagination">
                    <?php
                    the_posts_pagination( array(
                    	'mid_size'  => 2,
                    	'prev_text' => __( 'Newer Posts', 'wp-proz' ),
                    	'next_text' => __( 'Older Posts', 'wp-proz' ),
                    ) );
                    ?>
                </div>
            </div>
        </div>

        <?php endif; ?>

      </div>

    </div>

  </div>

</section>
