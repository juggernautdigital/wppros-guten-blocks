/**
 * BLOCK: wpproz-munster-insurance-product
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
  BaseControl
} = wp.components;

const ALLOWED_BLOCKS = ['core/button', 'core/paragraph', 'core/heading', 'core/list'];

registerBlockType('wpproz/content-feature', {

			title: 'Content Feature',
			supports: {
				align: ["wide", "full"],
				default: 'wide'
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
					"default": 'full'
				},

				mediaID: {
					type: 'number',
				},

				mediaURL: {
					type: 'string',
				},

				iconID: {
					type: 'number',
				},

				iconURL: {
					type: 'string',
				},

				productTitle: {
					type: 'string',
				},

				productDescription: {
					type: 'string',
				},

				productFeatureOne: {
					type: 'string',
				},

        productFeatureTwo: {
					type: 'string',
				},

        productFeatureThree: {
					type: 'string',
				},

        productFeatureFour: {
					type: 'string',
				},

        productFeatureFive: {
					type: 'string',
				},

        productFeatureLink: {
					type: 'string',
				},

				productColor: {
					type: 'string',
					default: '#d4d4d4'
				},

				productQuote: {
					type: 'string',
				},

				productQuoteName: {
					type: 'string',
				},

				photoCredit: {
					type: 'string',
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

			edit: function(props) {



					const {
						attributes: {
							iconID,
							iconURL,
							mediaID,
							mediaURL,
							productTitle,
							productDescription,
							productFeatureOne,
              productFeatureTwo,
              productFeatureThree,
              productFeatureFour,
              productFeatureFive,
              productFeatureLink,
							productColor,
							productQuote,
							productName,
							photoCredit,
							mediaPosition,
						},
						className,
						setAttributes
					} = props;

					var product_color = props.attributes.productColor // To bind button background colour

					var media_url = props.attributes.mediaURL // To bind button background colour

					var block_style_one = props.attributes.block_style_one // To bind button background colour

					block_style_one = {
						backgroundImage: 'url(' + media_url + ')',
            backgroundSize: 'cover',
					};

					var product_panel = props.attributes.product_panel // To bind button background colour

					product_panel = {
						backgroundColor: product_color,
					}

					const onSelectImage = media => {
						setAttributes({
							mediaURL: media.url,
							mediaID: media.id,
						});
					};

					const onSelectIcon = media => {
						setAttributes({
							iconURL: media.url,
							iconID: media.id,
						});
					};

					const onRemoveIMG = () => {
						props.setAttributes({
							mediaURL: null,
							mediaID: null
						});
					};

					const onRemoveIcon = () => {
						props.setAttributes({
							iconURL: null,
							iconID: null
						});
					};

					const onChangeProductTitle = value => {
						props.setAttributes({
							productTitle: value
						});
					};

					const onChangeProductDescription = value => {
						props.setAttributes({
							productDescription: value
						});
					};

					const onChangeProductFeatureOne = value => {
						props.setAttributes({
							productFeatureOne: value
						});
					};

          const onChangeProductFeatureTwo = value => {
						props.setAttributes({
							productFeatureTwo: value
						});
					};

          const onChangeProductFeatureThree = value => {
						props.setAttributes({
							productFeatureThree: value
						});
					};

          const onChangeProductFeatureFour = value => {
						props.setAttributes({
							productFeatureFour: value
						});
					};

          const onChangeProductFeatureFive = value => {
						props.setAttributes({
							productFeatureFive: value
						});
					};

          const onChangeProductFeatureLink = value => {
						props.setAttributes({
							productFeatureLink: value
						});
					};


					function onChangeProductColor(newProductColor) {
						setAttributes({
							productColor: newProductColor
						});
					};

					const onChangeProductQuote = value => {
						props.setAttributes({
							productQuote: value
						});
					};

					const onChangeProductQuoteName = value => {
						props.setAttributes({
							productQuoteName: value
						});
					};

					const onChangePhotoCredit = value => {
						props.setAttributes({
							photoCredit: value
						});
					};

					const enablePositions = {
						right: mediaPosition === 'left',
						left: mediaPosition === 'right',
					};

					const toolbarControls = [{
						icon: 'align-pull-left',
						title: __('Show content on left'),
						isActive: mediaPosition === 'left',
						onClick: () => setAttributes({
							mediaPosition: 'left'
					  }),

					}, {
						icon: 'align-pull-right',
						title: __('Show content on right'),
						isActive: mediaPosition === 'right',
						onClick: () => setAttributes({
							mediaPosition: 'right'
						}),
					}];


var media_position = props.attributes.mediaPosition

          var set_position;
          if (media_position == 'left') {
            set_position = 'reverse';
          } else {
            set_position = '';
          }




					return [

<InspectorControls key="inspector">

        <PanelColorSettings
                title={ __( 'Product Colour' ) }
                colorValue={ productColor }
                initialOpen={ false }
                colorSettings={ [ {
                 value: productColor,
                 onChange: onChangeProductColor,
                 label: __( 'Choose a background color' ),
                } ] }
        >
        </PanelColorSettings>

            <PanelBody
            title="Product Image & Credit"
            initialOpen={ false }
            >
                    <PanelRow>

                          <div class="components-base-control">
                          <div clas="components-base-control__field">

                          <label class="components-base-control__label">Background Image</label>
                          <MediaUpload
                          onSelect={onSelectImage}
                          type="image"
                          value={mediaID}
                          render={( { open } ) => (
                          <Button className={mediaID ? 'image-button' : 'button button-large'} onClick={open}>
                          {!mediaID ? __( 'Upload Image' ) : <img src={mediaURL} />}
                          </Button>)}
                          />
                          </div>
                          <Button onClick={onRemoveIMG}>Remove</Button>
                          </div>

                    </PanelRow>

                    <PanelRow>

                          <TextControl
                          label={ __( 'Photogragh Credit' ) }
                          value={ props.attributes.photoCredit }
                          onChange={ onChangePhotoCredit }
                          help={ __( 'You can add hashtags and mentions here that will be part of the actual tweet, but not of the display on your post.' ) }
                          />

                    </PanelRow>

            </PanelBody>

            <PanelBody
            title="Product Information"
            initialOpen={ false }
            >

                  <PanelRow>
                  <div class="components-base-control">
                        <div clas="components-base-control__field">

                        <label class="components-base-control__label">Product Icon</label>
                        <MediaUpload
                        onSelect={onSelectIcon}
                        type="image"
                        value={iconID}
                        render={( { open } ) => (
                        <Button className={iconID ? 'image-button' : 'button button-large'} onClick={open}>
                        {!iconID ? __( 'Upload Icon' ) : <img src={iconURL} />}
                        </Button>)}
                        />
                        </div>
                        {!iconID ? __() : <Button className={'components-button button button-large'} onClick={onRemoveIcon}>Remove</Button>}
                        </div>

                  </PanelRow>
                  <PanelRow>

                        <TextControl
                        label={ __( 'Product Title' ) }
                        value={ props.attributes.productTitle }
                        onChange={ onChangeProductTitle }
                        help={ __( 'You can add hashtags and mentions here that will be part of the actual tweet, but not of the display on your post.' ) }
                        />

                  </PanelRow>
                  <PanelRow>

                        <TextareaControl
                        label={ __( 'Product Description' ) }
                        value={ props.attributes.productDescription }
                        onChange={ onChangeProductDescription }
                        help={ __( 'You can add hashtags and mentions here that will be part of the actual tweet, but not of the display on your post.' ) }
                        />

                  </PanelRow>


          </PanelBody>
          <PanelBody
          title="Product Features"
          initialOpen={ false }
          >


                  <BaseControl label="Product Feature One">

                        <TextControl
                        value={ props.attributes.productFeatureOne }
                        onChange={ onChangeProductFeatureOne }
                        />

                  </BaseControl>

                  <BaseControl label="Product Feature Two">

                        <TextControl
                        value={ props.attributes.productFeatureTwo }
                        onChange={ onChangeProductFeatureTwo }
                        />

                  </BaseControl>

                  <BaseControl label="Product Feature Three">

                        <TextControl
                        value={ props.attributes.productFeatureThree }
                        onChange={ onChangeProductFeatureThree }
                        />

                  </BaseControl>

                  <BaseControl label="Product Feature Four">

                        <TextControl
                        value={ props.attributes.productFeatureFour }
                        onChange={ onChangeProductFeatureFour }
                        />

                  </BaseControl>

                  <BaseControl label="Product Feature Five">

                        <TextControl
                        value={ props.attributes.productFeatureFive }
                        onChange={ onChangeProductFeatureFive }
                        />

                  </BaseControl>

                  <BaseControl label="Product Feature Link">

                        <TextControl
                        value={ props.attributes.productFeatureLink }
                        onChange={ onChangeProductFeatureLink }
                        />

                  </BaseControl>
         </PanelBody>
         <PanelBody
         title="Product Quote"
         initialOpen={ false }
         >
                 <PanelRow>
                       <TextareaControl
                       label={ __( 'Quote' ) }
                       value={ props.attributes.productQuote }
                       onChange={ onChangeProductQuote }
                       help={ __( 'You can add hashtags and mentions here that will be part of the actual tweet, but not of the display on your post.' ) }
                       />
                </PanelRow>
                <PanelRow>
                       <TextControl
                       label={ __( 'Quote Name' ) }
                       value={ props.attributes.productQuoteName }
                       onChange={ onChangeProductQuoteName }
                       help={ __( 'You can add hashtags and mentions here that will be part of the actual tweet, but not of the display on your post.' ) }
                       />
                 </PanelRow>
         </PanelBody>
</InspectorControls>,
<BlockControls>
        <Toolbar
        controls={ toolbarControls }
        />
</BlockControls>,
<div className={'insurance-product ' + 'content-' + props.attributes.mediaPosition + ' ' + className } style={ block_style_one }>
    <div class="photo-credit">
        <span>Photograph Credit</span>
        <span>{ props.attributes.photoCredit }</span>
    </div>
    <div class="wrapper container-fluid">


        <div className={set_position + ' row'}>

            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-5 matchHeight pos-relative">
                <div class="quote">
                    <span>{ props.attributes.productQuote }</span>
                    <span class="font-weight-bold">{ props.attributes.productQuoteName }</span>
                </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-7 matchHeight">
                <div class="py-10 my-10">
                    <div class="panel" style={ product_panel }>
                        <div class="inner-panel">
                            <img src={ props.attributes.iconURL } />
                            <h3>{ props.attributes.productTitle }</h3>
                            <p>{ props.attributes.productDescription }</p>
                            <a href="#" class="get-quote product-home-text-color">Get A Quote</a>
                        </div>
                        <div class="panel-bullets">
                            <div class="inner-bullets-panel" style={ product_panel }></div>
                            <div class="inner-bullets-panel-content">
                                <ul>
                                <li>{ props.attributes.productFeatureOne }</li>
                                <li>{ props.attributes.productFeatureTwo }</li>
                                <li>{ props.attributes.productFeatureThree }</li>
                                <li>{ props.attributes.productFeatureFour }</li>
                                <li>{ props.attributes.productFeatureFive }</li>
                                </ul>
                            </div>
                            <div class="find-out-more text-center"><a href="#">Find out more</a></div>
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
        productColor,
        mediaURL,
				iconURL,
				productTitle,
        productDescription,
        productFeatureOne,
        productFeatureTwo,
        productFeatureThree,
        productFeatureFour,
        productFeatureFive,
        productFeatureLink,
        productQuote,
        productQuoteName,
        mediaPosition


			}
		} = props;



		return null;

  	}
});
