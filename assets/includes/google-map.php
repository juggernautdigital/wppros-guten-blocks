<section class="<?php echo $class ?>">



<?php
if ( isset( $address_line_one ) ) {
$address = $address_line_one;
}
?>

<?php
if ( isset( $address_line_two ) ) {
$address .= $address_line_two;
}
?>

<?php
if ( isset( $address_town ) ) {
$address .= $address_town;
}
?>

<?php
if ( isset( $address_post_code ) ) {
$address .= $address_post_code;
}
?>

<div id="map" style="height:<?php if ( isset( $map_height ) ) { echo $map_height; } ?>px;"></div>
<script>
  var geocoder;
  var map;
  var address = "<?php echo $address; ?>";
  function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: <?php if ( isset( $map_zoom ) ) { echo $map_zoom; } ?>,
      center: {lat: -34.397, lng: 150.644}
    });
    geocoder = new google.maps.Geocoder();
    codeAddress(geocoder, map);
  }

  function codeAddress(geocoder, map) {
    geocoder.geocode({'address': address}, function(results, status) {
      if (status === 'OK') {
        map.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location
        });
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }
</script>

</section>
