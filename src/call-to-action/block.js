/**
 * BLOCK: wpproz-munster-information-boxes
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';

const {
	__
} = wp.i18n; // Import __() from wp.i18n




//import edit from './edit';
//import save from './save';
//import deprecated from './deprecated';



const {
	registerBlockType, // Basic block register function
	source, // For attribute sources
} = wp.blocks; // Import registerBlockType() from wp.blocks



const {
	withState, // For attribute sources
} = wp.compose; // Import registerBlockType() from wp.blocks



const {
	AlignmentToolbar,
	BlockAlignmentToolbar,
	Fragment,
	MediaUploadCheck,
	withColors,
  ColorPalette,
	getColorClassName
} = wp.editor;

const {
	InspectorControls,
	RichText,
	BlockControls,
	InnerBlocks,
	MediaUpload,
	PanelColorSettings,
} = wp.blockEditor;

const {
	Toolbar,
	Button,
  ButtonGroup,
	Tooltip,
	Panel,
	PanelBody,
	PanelRow,
	FormToggle,
	TextareaControl,
	TextControl,
  BaseControl,
  RangeControl,
  ToggleControl,
  SelectControl,
  Path,
  SVG
} = wp.components;

const ALLOWED_BLOCKS = ['core/button', 'core/paragraph', 'core/heading', 'core/list'];

const TEMPLATE = [ [ 'core/heading', { placeholder: 'Enter a call to action title here...'} ], [ 'core/paragraph', { placeholder: 'Enter your content here for your call to action...' } ] ];

function convertHex(hex,opacity){

    if (hex != null) {

		var hex = hex.replace('#','');

		var r = parseInt(hex.substring(0,2), 16);
		var g = parseInt(hex.substring(2,4), 16);
		var b = parseInt(hex.substring(4,6), 16);

		var result = 'rgba('+r+','+g+','+b+','+opacity/100+')';
		return result;

    } else {

      var hex = 'ffffff'

  		var r = parseInt(hex.substring(0,2), 16);
  		var g = parseInt(hex.substring(2,4), 16);
  		var b = parseInt(hex.substring(4,6), 16);

  		var result = 'rgba('+r+','+g+','+b+','+opacity/100+')';
  		return result;

    }
}

registerBlockType('wpproz/call-to-action', {

			title: 'Call to Action',
			supports: {
				align: ["wide", "full"],
			},
			icon: 'awards',
			category: 'wp-proz',
			attributes: {

				block_style_one: {
					selector: 'div',
					source: 'attribute',
					attribute: 'style',
				},

				product_panel: {
					selector: 'div',
					source: 'attribute',
					attribute: 'style',
				},

				align: {
					"type": 'string',
          default: 'full',
				},

				mediaID: {
					type: 'number',
				},

				mediaURL: {
					type: 'string',
				},

				backgroundColor: {
					type: 'string',
					default: '#d51e41'
				},

        textColor: {
					type: 'string',
					default: '#fff'
				},

        icon: {
					type: 'string',
          default: 'fa-award',
				},

        iconSize: {
          type: 'number',
          deafult: 5
        },

        iconWeight: {
          type: 'string'
        },

        iconColor: {
					type: 'string',
					default: '#444444'
				},

        iconMarginBottom: {
          type: 'number',
          deafult: 0
        },

        iconMarginBottomSmall: {
          type: 'number',
          deafult: 0
        },

        mediaPosition: {
					type: 'string',
          default: 'center',
				},

        verticalAlignment: {
    			type: 'string',
          default: 'middle',
    		},

        verticalPadding: {
          type: 'number',
          deafult: 5
        },

        showIcon: {
    			type: 'boolean',
    			default: false
    		},

			},

      edit: function(props) {



          const {
            attributes: {
              mediaID,
              mediaURL,
              backgroundColor,
              textColor,
              mediaPosition,
              verticalAlignment,
              iconSize,
              iconWeight,
              icon,
              iconColor,
              iconMarginBottom,
              iconMarginBottomSmall,
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
            backgroundPosition: 'center center',
            backgroundSize:'cover'
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

          const onChangeIconMarginBottomSmall = value => {
            props.setAttributes({
              iconMarginBottomSmall: value
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

          const onChangeIconWeight = newIconWeight => {
            setAttributes( { iconWeight: newIconWeight } );
          };


          function renderTheIcon() {
            if (props.attributes.showIcon == true) {
              return (

      <i className={ props.attributes.iconWeight + ' ' + props.attributes.icon + ' fa-' + props.attributes.iconSize + 'x ' + 'mb-' + props.attributes.iconMarginBottomSmall + ' mb-md-' + props.attributes.iconMarginBottom } style={ icon_style }></i>

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

                      <div className={ 'col-xs-12 col-md-4 text-center content' }>

                              { renderTheIcon() }

                      </div>

                      <div className={ 'col-xs-12 col-md-8 content text-center text-md-left' }>

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

            <SelectControl
                label="Icon Weight"
                value={ iconWeight }
                options={ [
                    { label: 'Solid', value: 'fas' },
                    { label: 'Regular', value: 'far' },
                    { label: 'Light', value: 'fal' },
                ] }
                onChange={ onChangeIconWeight }
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

            <RangeControl
            label={ __( 'Icon Margin Bottom Small Screen' ) }
            value={ props.attributes.iconMarginBottomSmall }
            onChange={ onChangeIconMarginBottomSmall }
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
      },

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
             backgroundPosition: 'center center',
             backgroundSize:'cover'
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

                                       <div className={ 'col-xs-12 col-md-4 text-center content' }>

       { (isShowIcon) ? ({}) : ( <i className={ props.attributes.iconWeight + ' ' + props.attributes.icon + ' fa-' + props.attributes.iconSize + 'x ' + 'mb-' + props.attributes.iconMarginBottomSmall + ' mb-md-' + props.attributes.iconMarginBottom } style={ icon_style }></i> ) }



                                       </div>

                                       <div className={ 'col-xs-12 col-md-8 content text-center text-md-left' }>

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

                                               { (isShowIcon) ? ({}) : ( <i className={ props.attributes.iconWeight + ' ' + props.attributes.icon + ' fa-' + props.attributes.iconSize + 'x ' + 'mb-' + props.attributes.iconMarginBottomSmall + ' mb-md-' + props.attributes.iconMarginBottom }></i> ) }

                                               <InnerBlocks.Content />

                                       </div>

                               </div>

                       </div>

               </div>


                ) }

       </div>



       );
       },
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

                 { (isShowIcon) ? ({}) : ( <i className={ props.attributes.iconWeight + ' ' + props.attributes.icon + ' fa-' + props.attributes.iconSize + 'x ' + 'mb-' + props.attributes.iconMarginBottom } style={ icon_style }></i> ) }



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

                                                         { (isShowIcon) ? ({}) : ( <i className={ props.attributes.iconWeight + ' ' + props.attributes.icon + ' fa-' + props.attributes.iconSize + 'x ' + 'mb-' + props.attributes.iconMarginBottom }></i> ) }

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

});
