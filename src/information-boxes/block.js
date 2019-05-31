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
} = wp.components;

const ALLOWED_BLOCKS = ['core/button', 'core/paragraph', 'core/heading', 'core/list'];

registerBlockType('wpproz/information-boxes', {

			title: 'Information Boxes',
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

				align: {
					"type": 'string',
				},

				title: {
					type: 'string',
				},

				subTitle: {
					type: 'string',
				},

        buttonLabel: {
					type: 'string',
				},

        buttonURL: {
					type: 'string',
				},

				boxOneTitle: {
					type: 'string',
				},

        boxOneContent: {
					type: 'string',
				},

				boxTwoTitle: {
					type: 'string',
				},

        boxTwoContent: {
					type: 'string',
				},

				boxThreeTitle: {
					type: 'string',
				},

        boxThreeContent: {
					type: 'string',
				},


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
              align,
							title,
              subTitle,
              buttonLabel,
              buttonURL,
              boxOneTitle,
              boxOneContent,
              boxTwoTitle,
              boxTwoContent,
              boxThreeTitle,
              boxThreeContent
						},
						className,
						setAttributes
					} = props;


					var block_style_one = props.attributes.block_style_one // To bind button background colour

					block_style_one = {
						color: '#000',
						padding: '14px 25px',
						fontSize: '16px',
					};


					const onChangeTitle = value => {
						props.setAttributes({
							title: value
						});
					};

					const onChangeSubTitle = value => {
						props.setAttributes({
							subTitle: value
						});
					};


          const onChangeButtonLabel = value => {
						props.setAttributes({
							buttonLabel: value
						});
					};

          const onChangeButtonURL = value => {
						props.setAttributes({
							buttonURL: value
						});
					};



          const onChangeBoxOneTitle = value => {
            props.setAttributes({
              boxOneTitle: value
            });
          };
          const onChangeBoxOneContent = value => {
            props.setAttributes({
              boxOneContent: value
            });
          };


          const onChangeBoxTwoTitle = value => {
            props.setAttributes({
              boxTwoTitle: value
            });
          };
          const onChangeBoxTwoContent = value => {
            props.setAttributes({
              boxTwoContent: value
            });
          };


          const onChangeBoxThreeTitle = value => {
            props.setAttributes({
              boxThreeTitle: value
            });
          };
          const onChangeBoxThreeContent = value => {
            props.setAttributes({
              boxThreeContent: value
            });
          };

					return [

<InspectorControls key="inspector">


            <PanelBody
            title="Heading Area"
            initialOpen={ false }
            >


                    <PanelRow>

                          <TextControl
                          label={ __( 'Title' ) }
                          value={ props.attributes.title }
                          onChange={ onChangeTitle }
                          help={ __( 'You can add hashtags and mentions here that will be part of the actual tweet, but not of the display on your post.' ) }
                          />

                    </PanelRow>
                    <PanelRow>

                          <TextareaControl
                          label={ __( 'Sub Title' ) }
                          value={ props.attributes.subTitle }
                          onChange={ onChangeSubTitle }
                          help={ __( 'You can add hashtags and mentions here that will be part of the actual tweet, but not of the display on your post.' ) }
                          />

                    </PanelRow>

                    <PanelRow>

                    <TextControl
                    label={ __( 'Button Label' ) }
                    value={ props.attributes.buttonLabel }
                    onChange={ onChangeButtonLabel }
                    help={ __( 'You can add hashtags and mentions here that will be part of the actual tweet, but not of the display on your post.' ) }
                    />

                    </PanelRow>

                    <PanelRow>

                    <TextControl
                    label={ __( 'Button URL' ) }
                    value={ props.attributes.buttonURL }
                    onChange={ onChangeButtonURL }
                    help={ __( 'You can add hashtags and mentions here that will be part of the actual tweet, but not of the display on your post.' ) }
                    />

                    </PanelRow>

            </PanelBody>

            <PanelBody
            title="Box One"
            initialOpen={ false }
            >


                    <PanelRow>

                          <TextControl
                          label={ __( 'Title' ) }
                          value={ props.attributes.boxOneTitle }
                          onChange={ onChangeBoxOneTitle }
                          help={ __( 'You can add hashtags and mentions here that will be part of the actual tweet, but not of the display on your post.' ) }
                          />

                    </PanelRow>
                    <PanelRow>

                          <TextareaControl
                          label={ __( 'Content' ) }
                          value={ props.attributes.boxOneContent }
                          onChange={ onChangeBoxOneContent }
                          help={ __( 'You can add hashtags and mentions here that will be part of the actual tweet, but not of the display on your post.' ) }
                          />

                    </PanelRow>

            </PanelBody>

            <PanelBody
            title="Box Two"
            initialOpen={ false }
            >


                    <PanelRow>

                          <TextControl
                          label={ __( 'Title' ) }
                          value={ props.attributes.boxTwoTitle }
                          onChange={ onChangeBoxTwoTitle }
                          help={ __( 'You can add hashtags and mentions here that will be part of the actual tweet, but not of the display on your post.' ) }
                          />

                    </PanelRow>
                    <PanelRow>

                          <TextareaControl
                          label={ __( 'Content' ) }
                          value={ props.attributes.boxTwoContent }
                          onChange={ onChangeBoxTwoContent }
                          help={ __( 'You can add hashtags and mentions here that will be part of the actual tweet, but not of the display on your post.' ) }
                          />

                    </PanelRow>

            </PanelBody>

            <PanelBody
            title="Box Three"
            initialOpen={ false }
            >


                    <PanelRow>

                          <TextControl
                          label={ __( 'Title' ) }
                          value={ props.attributes.boxThreeTitle }
                          onChange={ onChangeBoxThreeTitle }
                          help={ __( 'You can add hashtags and mentions here that will be part of the actual tweet, but not of the display on your post.' ) }
                          />

                    </PanelRow>
                    <PanelRow>

                          <TextareaControl
                          label={ __( 'Content' ) }
                          value={ props.attributes.boxThreeContent }
                          onChange={ onChangeBoxThreeContent }
                          help={ __( 'You can add hashtags and mentions here that will be part of the actual tweet, but not of the display on your post.' ) }
                          />

                    </PanelRow>

            </PanelBody>


</InspectorControls>,
<div className={ className } style={ block_style_one }>

	<div class="wrapper container-fluid">

		<div class="row mb-0 middle-xs mb-5">

			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-8">

				<h2 class="mt-0 font-weight-bold">{ props.attributes.title }</h2>
				<p class="mb-0">{ props.attributes.subTitle }</p>

      </div>
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4 end-xs">

				<a class="btn" href="#">{ props.attributes.buttonLabel }</a>

			</div>

		</div>

		<div class="row">

			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-4">
				<div class="outline-box mb-5 mb-m-0">
					<h3>{ props.attributes.boxOneTitle }</h3>
					<p>{ props.attributes.boxOneContent }</p>
				</div>
			</div>

			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-4">
				<div class="outline-box mb-5 mb-m-0">
        <h3>{ props.attributes.boxTwoTitle }</h3>
        <p>{ props.attributes.boxTwoContent }</p>
				</div>
			</div>

			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-4">
				<div class="outline-box">
        <h3>{ props.attributes.boxThreeTitle }</h3>
        <p>{ props.attributes.boxThreeContent }</p>
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
        title,
        subTitle,
        buttonLabel,
        buttonURL,
        boxOneTitle,
        boxOneContent,
        boxTwoTitle,
        boxTwoContent,
        boxThreeTitle,
        boxThreeContent
			}
		} = props;



		return (

  				null

  		);
  	}
});
