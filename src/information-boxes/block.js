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



          const INFOTEMPLATE = [
            ['core/columns', {
          		columns: 2,
              verticalAlignment:'center',
              className:'mt-10 mb-5'
          	},[

          		['core/column', { width: 70 }, [
                ['core/heading', { placeholder: 'Enter a title...', level: 2 }],
          			['core/paragraph', { placeholder: 'Enter some text to display below the title...' }]
          		]],
          		['core/column', { width: 30 },[
                ['core/button', { placeholder: 'Enter text...', align: 'right' }],
          		]]

          	]
          ],
          	['core/columns', {
          		columns: 3,
              className: 'mb-10 outline-boxes',
          	},[

          		['core/column', {}, [
                ['core/heading', { placeholder: 'Enter heading...', level: 3 }],
          			['core/paragraph', { placeholder: 'Enter content...' }]
          		]],
          		['core/column', {},[
                ['core/heading', { placeholder: 'Enter heading...', level: 3 }],
          			['core/paragraph', { placeholder: 'Enter content...' }]
          		]],
          		['core/column', {},[
                ['core/heading', { placeholder: 'Enter heading...', level: 3 }],
          			['core/paragraph', { placeholder: 'Enter content...' }]
          		]]

          	]
            ]];




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


<InnerBlocks template={INFOTEMPLATE} />



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
              <div className={ className }>
                <InnerBlocks.Content />
              </div>

  		);
  	}
});
