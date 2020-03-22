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
	withState, // For attribute sources
} = wp.compose; // Import registerBlockType() from wp.blocks

const {
	AlignmentToolbar,
	BlockAlignmentToolbar,
	Fragment,
	MediaUploadCheck,
	withColors,
	ColorPalette,
	getColorClassName,
  InnerBlocks
} = wp.editor;

const {
	InspectorControls,
	RichText,
	BlockControls,
	MediaUpload,
	PanelColorSettings,
} = wp.blockEditor;

const {
	Toolbar,
  Placeholder,
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

const TEMPLATE = [ [ 'core/heading', { placeholder: 'Enter a call to action title here...'} ], [ 'core/paragraph', { placeholder: 'Enter your content here for your call to action...' } ] ];

registerBlockType( 'wpproz/template-block', {

	title: 'Template File',
	supports: {
		align: [ "wide", "full" ],
	},
	icon: 'awards',
	category: 'wp-proz',
	attributes: {

		align: {
			"type": 'string',
			default: 'full',
		},

    theCustomTemplate: {
      type: 'string',
    },

	},

	edit: function ( props ) {

		const {
			attributes: {
				align,
        theCustomTemplate
			},
			className,
			setAttributes
		} = props;


    const onChangeTheCustomTemplate = value => {
      props.setAttributes({
        theCustomTemplate: value
      });
    };

		return [

			<InspectorControls key="inspector">

      <PanelBody
      title="Settings"
      initialOpen={ false }
      >

      <TextControl
      label={ __( 'Custom Template' ) }
      value={ props.attributes.theCustomTemplate }
      onChange={ onChangeTheCustomTemplate }
      help={ __( '' ) }
      />

      </PanelBody>

      </InspectorControls>,

      <div>

        <Placeholder
            icon="portfolio"
            label="Template File Block"
            instructions="This block enables you to create and include a template file within your theme folder. Simply type the file name excluding the extension in the settings of this block and create a file in your theme folder and locate it in wpproz/guten-blocks/template-block/YOURFILENAME.php"
          />

      </div>


		];
	},

	save: props => {

		const {
			className,
			attributes: {
        content,
        align,
        theCustomTemplate
			}
		} = props;

		return (
      <InnerBlocks.Content />
    );

	},

} );
