export default function edit( { props } ) {

    const {
      attributes: {
        mediaID,
        mediaURL,
        backgroundColor,
        textColor,
        mediaPosition,
        verticalAlignment,
        iconSize,
        icon,
        iconColor,
        verticalPadding,
        showIcon

      },
      className,
      setAttributes
    } = props;

    const background_color = props.attributes.backgroundColor // To bind button background colour

    const text_color = props.attributes.textColor // To bind button background colour

    const media_url = props.attributes.mediaURL // To bind button background colour

    const block_style_center = {
      backgroundImage: 'url(' + media_url + ')',
      backgroundColor: background_color,
      color: text_color,
    };

    const block_style_left = {
      backgroundColor: background_color,
      color: text_color,
    };

    var bg_rgba_color_start = convertHex( background_color, 0);
    var bg_rgba_color_end = convertHex( background_color, 100);

    const image_fade = {
      background: '-moz-linear-gradient(90deg, ' + bg_rgba_color_start + '0%, ' + bg_rgba_color_end + ' 100%)',
      background: '-webkit-linear-gradient(90deg, ' + bg_rgba_color_start + '0%, ' + bg_rgba_color_end + ' 100%)',
      background: 'linear-gradient(90deg, ' + bg_rgba_color_start + '0%, ' + bg_rgba_color_end + ' 100%)',
    }


    const faded_image = {
      backgroundImage: 'url(' + media_url + ')',
    }

    const icon_style = {
      color: iconColor
    }




    const onSelectImage = media => {
      setAttributes({
        mediaURL: media.url,
        mediaID: media.id,
      });
    };


    const onRemoveIMG = () => {
      props.setAttributes({
        mediaURL: null,
        mediaID: null
      });
    };


    function onChangeBackgroundColor(newBackgroundColor) {
      setAttributes({
        backgroundColor: newBackgroundColor
      });
    };

    function onChangeTextColor(newTextColor) {
      setAttributes({
        textColor: newTextColor
      });
    };

    const onChangeIcon = value => {
      props.setAttributes({
        icon: value
      });
    };

    const onChangeIconSize = value => {
      props.setAttributes({
        iconSize: value
      });
    };

    function onChangeIconColor(newIconColor) {
      setAttributes({
        iconColor: newIconColor
      });
    };

    const onChangeIconMarginBottom = value => {
      props.setAttributes({
        iconMarginBottom: value
      });
    };

    function onChangeTextColor(newTextColor) {
      setAttributes({
        textColor: newTextColor
      });
    };

    const enablePositions = {
      center: mediaPosition === 'center',
      left: mediaPosition === 'left',
      top: verticalAlignment === 'top',
      middle: verticalAlignment === 'middle',
    };

    const toolbarControls = [{
      icon: 'align-pull-left',
      title: __('Show content on left'),
      isActive: mediaPosition === 'left',
      onClick: () => setAttributes({
        mediaPosition: 'left'
      }),

    },{
      icon: 'align-center',
      title: __('Show in Center'),
      isActive: mediaPosition === 'center',
      onClick: () => setAttributes({
        mediaPosition: 'center'
      }),

    }];


    const alignBottom = (
      <SVG xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
        <Path fill="none" d="M0 0h24v24H0V0z" />
        <Path d="M16 13h-3V3h-2v10H8l4 4 4-4zM4 19v2h16v-2H4z" />
      </SVG>
    );

    const alignCenter = (
      <SVG xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
        <Path fill="none" d="M0 0h24v24H0V0z" />
        <Path d="M8 19h3v4h2v-4h3l-4-4-4 4zm8-14h-3V1h-2v4H8l4 4 4-4zM4 11v2h16v-2H4z"
        />
      </SVG>
    );

    const alignTop = (
      <SVG xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
        <Path fill="none" d="M0 0h24v24H0V0z" />
        <Path d="M8 11h3v10h2V11h3l-4-4-4 4zM4 3v2h16V3H4z" />
      </SVG>
    );

    const alignmentControls = [{
      icon: alignTop,
      title: __('Show content on left'),
      isActive: verticalAlignment === 'top',
      onClick: () => setAttributes({
        verticalAlignment: 'top'
      }),

    },{
      icon: alignCenter,
      title: __('Show in Center'),
      isActive: verticalAlignment === 'middle',
      onClick: () => setAttributes({
        verticalAlignment: 'middle'
      }),

    }];


    const vertical_padding = ' py-' + props.attributes.verticalPadding // To bind button background colour

    const onChangeVerticalPadding = value => {
      props.setAttributes({
        verticalPadding: value
      });
    };

    const onChangeShowIcon = newURL => {
      setAttributes( { showIcon: newURL } );
    };


    function renderTheIcon() {
      if (props.attributes.showIcon == true) {
        return (

<i className={ 'fal ' + props.attributes.icon + ' fa-' + props.attributes.iconSize + 'x ' + 'mb-' + props.attributes.iconMarginBottom } style={ icon_style }></i>

        );
      }
    };


    function renderContent() {
      if (props.attributes.mediaPosition == 'left') {
        return (




          <div className={ className + vertical_padding } style={ block_style_left }>

          <div className={ 'background-image' } style={ faded_image }></div>

          <div className={ 'background-image-overlay' } style={ image_fade }></div>

            <div className={ 'wrapper container-fluid' }>




            <div className={ 'row' + ' ' + props.attributes.verticalAlignment + '-xs' }>

                <div className={ 'col-sm-12 col-lg-4 text-center content' }>

                        { renderTheIcon() }

                </div>

                <div className={ 'col-sm-12 col-lg-8 content' }>
                <InnerBlocks template={ TEMPLATE } />
                </div>

            </div>

            </div>




          </div>

        );
      } if (props.attributes.mediaPosition == 'center') {
        return (


          <div className={ className + vertical_padding } style={ block_style_center }>


            <div className={ 'wrapper container-fluid' }>



            <div className={ 'row' + ' ' + props.attributes.verticalAlignment + '-xs center-xs' }>

                <div className={ 'col-xs-12 content' }>

                  { renderTheIcon() }

                  <InnerBlocks template={ TEMPLATE } />

                </div>

            </div>

            </div>




          </div>


        );
      }
    };






    return [

<InspectorControls key="inspector">


<PanelBody
title="Block Styling"
initialOpen={ false }
>

<RangeControl
label={ __( 'Vertical Padding' ) }
value={ props.attributes.verticalPadding }
onChange={ onChangeVerticalPadding }
initialPosition={ 5 }
min={ 0 }
max={ 15 }
help={ __( '' ) }
/>



<BaseControl
id="background-color"
label="Background Color"
help="Choose your background color"
>
<ColorPalette
value={ backgroundColor }
onChange={ onChangeBackgroundColor }
/>

</BaseControl>

<BaseControl
id="background-image"
label="Background Image"
help="Choose your background settings"
>

<MediaUpload
onSelect={onSelectImage}
type="image"
value={mediaID}
render={( { open } ) => (
<Button className={mediaID ? 'image-button' : 'button button-large'} onClick={open}>
{!mediaID ? __( 'Upload Image' ) : <img src={mediaURL} />}
</Button>)}
/>

<Button onClick={onRemoveIMG}>Remove</Button>

</BaseControl>


</PanelBody>


  <PanelColorSettings
          title={ __( 'Text Colour' ) }
          colorValue={ textColor }
          initialOpen={ false }
          colorSettings={ [ {
           value: textColor,
           onChange: onChangeTextColor,
           label: __( 'Choose a text color' ),
          } ] }
  >
  </PanelColorSettings>


      <PanelBody
      title="Icon"
      initialOpen={ false }
      >


      <BaseControl
        id="icon-display"
        label="Icon Display"
        help="Choose if to show an icon"
      >

      <ToggleControl
        label={ __('Display an Icon') }
        checked={ showIcon }
        onChange={ onChangeShowIcon }
      />

      </BaseControl>

      <BaseControl
        id="icon-color"
        label="Icon Color"
        help="Select the color for your icon"
      >

      <ColorPalette
        value={ iconColor }
        onChange={ onChangeIconColor }
      />

      </BaseControl>



      <TextControl
      label={ __( 'Icon' ) }
      value={ props.attributes.icon }
      onChange={ onChangeIcon }
      help={ __( '' ) }
      />

      <RangeControl
      label={ __( 'Icon Size' ) }
      value={ props.attributes.iconSize }
      onChange={ onChangeIconSize }
      initialPosition={ 5 }
      min={ 1 }
      max={ 10 }
      help={ __( '' ) }
      />

      <RangeControl
      label={ __( 'Icon Margin Bottom' ) }
      value={ props.attributes.iconMarginBottom }
      onChange={ onChangeIconMarginBottom }
      initialPosition={ 0 }
      min={ 0 }
      max={ 15 }
      help={ __( '' ) }
      />



      </PanelBody>


</InspectorControls>,
<BlockControls>
  <Toolbar
  controls={ [ toolbarControls, alignmentControls] }
  />
</BlockControls>,



renderContent()







];
}
