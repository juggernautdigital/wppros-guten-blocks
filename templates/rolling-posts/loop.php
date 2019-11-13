<?php $classes = $guten_blocks->class_names; ?>
<?php $the_post_type = $guten_blocks->the_post_type; ?>
<?php $the_post_loop = $guten_blocks->the_post_loop; ?>

<section class="blog-wrapper blog-snippet <?php echo $classes ?>">

<?php
if(empty($the_post_type)){
  $rp_post_type = 'post';
} else {
  $rp_post_type = $the_post_type;
}
?>

<?php
if(empty($the_post_loop)){
  $rp_post_loop = 'rolling-posts/loop-post';
} else {
  $rp_post_loop = 'rolling-posts/loop-' . $the_post_loop;
}
?>

  <div class="wrapper container-fluid">
  <div class="row">



    <div class="col-xs-12">

  <div class="pb-10">


<?php
$args = array(
    'post_type' => $rp_post_type,
    'posts_per_page' => 3
);
$query = new WP_Query( $args );
?>
  <?php if ( $query->have_posts() ) : ?>

    <div class="row">

    <?php while ( $query->have_posts() ) : $query->the_post(); ?>

<?php
$templates = new WPProz_Guten_Blocks_Template_Loader;
$templates
    ->get_template_part( $rp_post_loop );
?>

<?php endwhile; ?>
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

  </div>





</section>
