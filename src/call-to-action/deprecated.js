deprecated: [
        {

            save: props => {



              const {
                className,
          			attributes: {
                  backgroundColor,
                  textColor,
                  mediaURL,
                  mediaPosition,
                  verticalAlignment,
                  icon,
                  iconSize,
                  iconColor,
                  verticalPadding,
                  align,
                  showIcon



          			}
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

              const icon_style = {
                color: iconColor
              }

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

              const vertical_padding = ' py-' + props.attributes.verticalPadding // To bind button background colour

              const isLeft = mediaPosition === 'left' ? false : true;

              const isCenter = mediaPosition === 'center' ? false : true;

              const isAlignFull = align === 'full' ? false : true;

              const isAlignWide = align === 'wide' ? false : true;

              const isShowIcon = showIcon === true ? false : true;


          		return (


          <div className={ className } style={ (isLeft) ? ( block_style_center ) : ( block_style_left) }>



                  { (isLeft) ? ({}) : (

                  <div className={ vertical_padding }>

                          <div className={ 'background-image' } style={ faded_image }></div>

                          <div className={ 'background-image-overlay' } style={ image_fade }></div>

                          <div className={ (isAlignFull && isAlignWide) ? ({}) : ( 'wrapper container-fluid' ) }>

                                  <div className={ 'row' + ' ' + props.attributes.verticalAlignment + '-xs' }>

                                          <div className={ 'col-xs-4 text-center content' }>

          { (isShowIcon) ? ({}) : ( <i className={ 'fal ' + props.attributes.icon + ' fa-' + props.attributes.iconSize + 'x ' + 'mb-' + props.attributes.iconMarginBottom } style={ icon_style }></i> ) }



                                          </div>

                                          <div className={ 'col-xs-8 content' }>

                                                  <InnerBlocks.Content />

                                          </div>

                                  </div>

                          </div>

                  </div>


                   ) }

                  { (isCenter) ? ({}) : (


                  <div className={ vertical_padding }>

                          <div className={ (isAlignFull && isAlignWide) ? ({}) : ( 'wrapper container-fluid' ) }>

                                  <div className={ 'row' + ' ' + props.attributes.verticalAlignment + '-xs center-xs' }>

                                          <div className={ 'col-xs-12' }>

                                                  { (isShowIcon) ? ({}) : ( <i className={ 'fal ' + props.attributes.icon + ' fa-' + props.attributes.iconSize + 'x ' + 'mb-' + props.attributes.iconMarginBottom }></i> ) }

                                                  <InnerBlocks.Content />

                                          </div>

                                  </div>

                          </div>

                  </div>


                   ) }

          </div>



          );



            },
        }
    ]
