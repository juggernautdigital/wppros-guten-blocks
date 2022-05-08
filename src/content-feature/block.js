/**
 * BLOCK: wppros-content-feature
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */
//  Import CSS.
import './style.scss';
import './editor.scss';
const { __ } = wp.i18n; // Import __() from wp.i18n
const {
	registerBlockType, // Basic block register function
	source, // For attribute sources
} = wp.blocks; // Import registerBlockType() from wp.blocks
const {
	InspectorControls,
	RichText,
	AlignmentToolbar,
	BlockControls,
	BlockAlignmentToolbar,
	InnerBlocks,
	Fragment,
	MediaUpload,
	MediaUploadCheck,
	withColors,
	PanelColorSettings,
	ColorPalette,
	getColorClassName
} = wp.editor;
const {
	Toolbar,
	Button,
	Tooltip,
	Panel,
	PanelBody,
	PanelRow,
	FormToggle,
	TextareaControl,
	TextControl,
	BaseControl,
  URLInput
} = wp.components;
const ALLOWED_BLOCKS = [ 'core/button', 'core/paragraph', 'core/heading', 'core/list' ];
registerBlockType( 'wppros/content-feature', {
	title: 'Content Feature',
	supports: {
		align: [
			"wide", "full"
		],
		default: 'wide'
	},
	icon: 'awards',
	category: 'wp-proz',
	attributes: {
		content_feature_style: {
			selector: 'div',
			source: 'attribute',
			attribute: 'style'
		},
		content_panel: {
			selector: 'div',
			source: 'attribute',
			attribute: 'style'
		},
		align: {
			"type": 'string',
			"default": 'full'
		},
		mediaID: {
			type: 'number'
		},
		mediaURL: {
			type: 'string'
		},
		iconID: {
			type: 'number'
		},
		iconURL: {
			type: 'string'
		},
		contentTitle: {
			type: 'string'
		},
		contentDescription: {
			type: 'string'
		},
		contentButton: {
			type: 'string'
		},
		contentFeatures: {
			type: 'string'
		},

    contentFeaturesButton: {
      type: 'string',
      selector: 'div',
    },

		contentColor: {
			type: 'string',
			default: '#d4d4d4'
		},
		contentTextColor: {
			type: 'string',
			default: '#ffffff'
		},
		contentQuote: {
			type: 'string'
		},
		contentQuoteName: {
			type: 'string'
		},
		photoCredit: {
			type: 'string'
		},
		mediaPosition: {
			type: 'string',
			default: 'left'
		}
	},
	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	edit: function ( props ) {
		const {
			attributes: {
				iconID,
				iconURL,
				mediaID,
				mediaURL,
				contentTitle,
				contentDescription,
				contentButton,
				contentFeatures,
        contentFeaturesButton,
				contentColor,
				contentTextColor,
				contentQuote,
				contentName,
				photoCredit,
				mediaPosition
			},
			className,
			setAttributes
		} = props;
		var content_color = props.attributes.contentColor // To bind button background colour
		var content_text_color = props.attributes.contentTextColor // To bind button background colour
		var media_url = props.attributes.mediaURL // To bind button background colour
		var content_feature_style = props.attributes.content_feature_style // To bind button background colour
		content_feature_style = {
			backgroundImage: 'url(' + media_url + ')',
			backgroundSize: 'cover'
		};
		var content_panel = props.attributes.content_panel // To bind button background colour
		content_panel = {
			backgroundColor: content_color,
			color: content_text_color
		}
		const onSelectImage = media => {
			setAttributes( { mediaURL: media.url, mediaID: media.id } );
		};
		const onSelectIcon = media => {
			setAttributes( { iconURL: media.url, iconID: media.id } );
		};
		const onRemoveIMG = () => {
			props.setAttributes( { mediaURL: null, mediaID: null } );
		};
		const onRemoveIcon = () => {
			props.setAttributes( { iconURL: null, iconID: null } );
		};
		const onChangeContentTitle = value => {
			props.setAttributes( { contentTitle: value } );
		};
		const onChangeContentDescription = value => {
			props.setAttributes( { contentDescription: value } );
		};
		const onChangeContentButton = value => {
			props.setAttributes( { contentButton: value } );
		};
		const onChangeContentFeatures = value => {
			props.setAttributes( { contentFeatures: value } );
		};
		const onChangeContentFeaturesButton = value => {
			props.setAttributes( { contentFeaturesButton: value } );
		};
		function onChangeContentColor( newContentColor ) {
			setAttributes( { contentColor: newContentColor } );
		};
		function onChangeContentTextColor( newContentTextColor ) {
			setAttributes( { contentTextColor: newContentTextColor } );
		};
		const onChangeContentQuote = value => {
			props.setAttributes( { contentQuote: value } );
		};
		const onChangeContentQuoteName = value => {
			props.setAttributes( { contentQuoteName: value } );
		};
		const onChangePhotoCredit = value => {
			props.setAttributes( { photoCredit: value } );
		};
		const enablePositions = {
			right: mediaPosition === 'left',
			left: mediaPosition === 'right'
		};
		const toolbarControls = [
			{
				icon: 'align-pull-left',
				title: __( 'Show content on left' ),
				isActive: mediaPosition === 'left',
				onClick: () => setAttributes( { mediaPosition: 'left' } )
			}, {
				icon: 'align-pull-right',
				title: __( 'Show content on right' ),
				isActive: mediaPosition === 'right',
				onClick: () => setAttributes( { mediaPosition: 'right' } )
			}
		];
		var media_position = props.attributes.mediaPosition
		var set_position;
		if ( media_position == 'left' ) {
			set_position = 'reverse';
		} else {
			set_position = '';
		}
		return [
			<InspectorControls key="inspector">
				<PanelBody title="Block Settings" initialOpen={true}>
        <PanelRow>
          <BaseControl id="background-image" label="Background Image" help="Select a background Image.">
              <MediaUpload onSelect={onSelectImage} type="image" value={mediaID} render={( { open } ) => (
                <Button className={mediaID ? 'image-button' : 'button button-large'} onClick={open}>
                  {
                    !mediaID
                      ? __( 'Upload Image' )
                      : <img src={mediaURL}/>
                  }
                </Button> )}/>
                {
                  !mediaID
                    ? __()
                    : <Button className={'components-button button button-large'} onClick={onRemoveIMG}>Remove</Button>
                }
          </BaseControl>
        </PanelRow>
					<PanelRow>
						<BaseControl id="panel-color" label="Panel Color" help="Choose the color of the panel">
							<ColorPalette value={contentColor} onChange={onChangeContentColor}/>
						</BaseControl>
					</PanelRow>
					<PanelRow>
						<BaseControl id="panel-text-color" label="Panel Text Color" help="Choose the color of the panel text">
							<ColorPalette value={contentTextColor} onChange={onChangeContentTextColor}/>
						</BaseControl>
					</PanelRow>
				</PanelBody>

			</InspectorControls>,
			<BlockControls>
				<Toolbar controls={toolbarControls}/>
			</BlockControls>,
			<div className={'content-feature ' + 'content-' + props.attributes.mediaPosition + ' ' + className} style={content_feature_style}>
				<div class="photo-credit">
					<span>Photograph Credit</span>
          <RichText
            tagName="span"
            value={props.attributes.photoCredit}
            onChange={onChangePhotoCredit}
            placeholder={ __( 'Enter name...', 'wppros' ) }
            keepPlaceholderOnFocus={true}
          />
				</div>
				<div class="wrapper container-fluid">
					<div className={set_position + ' row'}>
						<div class="col-xs-12 col-sm-12 col-md-12 col-lg-5 matchHeight pos-relative">
							<div class="quote">
              <RichText
                tagName="span"
                value={props.attributes.contentQuote}
                onChange={onChangeContentQuote}
                placeholder={ __( 'Enter quote...', 'wppros' ) }
                keepPlaceholderOnFocus={true}
              />
              <RichText
                tagName="span"
                value={props.attributes.contentQuoteName}
                onChange={onChangeContentQuoteName}
                placeholder={ __( 'Enter name...', 'wppros' ) }
                className={'font-weight-bold'}
                keepPlaceholderOnFocus={true}
              />
							</div>
						</div>
						<div class="col-xs-12 col-sm-12 col-md-12 col-lg-7 matchHeight">
							<div class="py-10 my-10">
								<div class="panel" style={content_panel}>
									<div class="inner-panel">


                    <MediaUpload onSelect={onSelectIcon} type="image" value={iconID} render={( { open } ) => (
                      <Button className={iconID ? 'image-button' : 'button button-large'} onClick={open}>
                        {
                          !iconID
                            ? __( 'Upload Icon' )
                            : <img src={iconURL}/>
                        }
                      </Button> )}/>

                    {
                    !iconID
                      ? __()
                      : <Button className={'components-button button button-large'} onClick={onRemoveIcon}>Remove Icon</Button>
                    }





                    <RichText
                      tagName="h3"
                      value={props.attributes.contentTitle}
                      onChange={onChangeContentTitle}
                      placeholder={ __( 'Enter title...', 'wppros' ) }
                      keepPlaceholderOnFocus={true}
                    />
                    <RichText
                      tagName="p"
                      value={props.attributes.contentDescription}
                      onChange={onChangeContentDescription}
                      placeholder={ __( 'Enter content...', 'wppros' ) }
                      keepPlaceholderOnFocus={true}
                    />

                    <RichText
                        tagName="div"
                        className="panel-button"
                        value={props.attributes.contentButton}
                        onChange={onChangeContentButton}
                        placeholder={ __( 'Your button...', 'wppros' ) }
                    />

									</div>
									<div class="panel-bullets">
										<div class="inner-bullets-panel" style={content_panel}></div>
										<div class="inner-bullets-panel-content">

                      <RichText
                        tagName="ul"
                        multiline="li"
                        onChange={onChangeContentFeatures}
                        value={props.attributes.contentFeatures}
                        placeholder={ __( 'Enter features...', 'wppros' ) }
                        keepPlaceholderOnFocus={true}
                      />
										</div>

                    <RichText
                        tagName="div"
                        className="find-out-more text-center"
                        value={props.attributes.contentFeaturesButton}
                        onChange={onChangeContentFeaturesButton}
                        placeholder={ __( 'Your button...', 'wppros' ) }
                    />




									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		];
	},
	save: props => {
		const {
			className,
			attributes: {
				photoCredit,
				contentColor,
				contentTextColor,
				mediaURL,
				iconURL,
				contentTitle,
				contentDescription,
				contentButton,
				contentFeatures,
        contentFeaturesButton,
				contentQuote,
				contentQuoteName,
				mediaPosition
			}
		} = props;
		return null;
	}
} );
