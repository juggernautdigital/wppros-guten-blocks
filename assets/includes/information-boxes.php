<section class="<?php echo $class ?>">

	<div class="wrapper container-fluid">

		<div class="row mb-0 middle-xs mb-5">

			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-8">

				<h2 class="mt-0 font-weight-bold"><?php if ( isset( $title ) ) { echo $title; } ?></h2>
				<p class="mb-0"><?php if ( isset( $sub_title ) ) { echo $sub_title; } ?></p>

      </div>
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4 end-xs">

				<a class="btn" href="<?php if ( isset( $button_url ) ) { echo $button_url; } ?>"><?php if ( isset( $button_label ) ) { echo $button_label; } ?></a>

			</div>

		</div>

		<div class="row">

			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-4">
				<div class="outline-box mb-5 mb-m-0">
					<h3><?php if ( isset( $box_one_title ) ) { echo $box_one_title; } ?></h3>
					<p><?php if ( isset( $box_one_content ) ) { echo $box_one_content; } ?></p>
				</div>
			</div>

			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-4">
				<div class="outline-box mb-5 mb-m-0">
					<h3><?php if ( isset( $box_two_title ) ) { echo $box_two_title; } ?></h3>
					<p><?php if ( isset( $box_two_content ) ) { echo $box_two_content; } ?></p>
				</div>
			</div>

			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-4">
				<div class="outline-box">
					<h3><?php if ( isset( $box_three_title ) ) { echo $box_three_title; } ?></h3>
					<p><?php if ( isset( $box_three_content ) ) { echo $box_three_content; } ?></p>
				</div>
			</div>


		</div>
	</div>

</section>
