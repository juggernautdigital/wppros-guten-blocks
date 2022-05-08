/**
 * BLOCK: wppros-munster-information-boxes
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

registerBlockType('wppros/carousel', {

			title: 'Carousel',
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

				align: {
					"type": 'string',
					"default": 'full'
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

						},
						className,
						setAttributes
					} = props;

					var block_style_one = props.attributes.block_style_one // To bind button background colour

					block_style_one = {
						color: '#000',
            backgroundColor: 'rgba(139,139,150,.1)',
            padding: '50px',
            textAlign: 'center'
					};

					return [

              <InspectorControls></InspectorControls>,
              <div className={ className } style={ block_style_one }>
                <div className={ 'components-placeholder__label' }>Page Carousel</div>
                <div className={ 'components-placeholder__instructions' }>Select your pages to show on this carousel on the options page.</div>
              </div>

		];
	},


save: props => {

		const {
			className,
			attributes: {

			}
		} = props;



		return (

  				null

  		);
  	}
});
