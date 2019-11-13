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

registerBlockType( 'wpproz/rolling-posts', {

	title: 'Rolling Posts',
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

    verticalPadding: {
      type: 'number',
      deafult: 5,
    },

    thePostType: {
      type: 'string',
    },

    theCustomTemplate: {
      type: 'string',
    },

    block_style_one: {
      selector: 'div',
      source: 'attribute',
      attribute: 'style',
    },

	},

	edit: function ( props ) {

		const {
			attributes: {
				align,
        verticalPadding,
        thePostType
			},
			className,
			setAttributes
		} = props;

    const vertical_padding = ' py-' + props.attributes.verticalPadding // To bind button background colour

    const onChangeVerticalPadding = value => {
      props.setAttributes({
        verticalPadding: value
      });
    };

    const onChangeThePostType = value => {
      props.setAttributes({
        thePostType: value
      });
    };

    const onChangeTheCustomTemplate = value => {
      props.setAttributes({
        theCustomTemplate: value
      });
    };


		return [

			<InspectorControls key="inspector">

      <PanelBody
      title="Block Styling"
      initialOpen={ true }
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

      </PanelBody>

      <PanelBody
      title="Settings"
      initialOpen={ false }
      >

      <TextControl
      label={ __( 'Post Type' ) }
      value={ props.attributes.thePostType }
      onChange={ onChangeThePostType }
      help={ __( '' ) }
      />

      <TextControl
      label={ __( 'Custom Template' ) }
      value={ props.attributes.theCustomTemplate }
      onChange={ onChangeTheCustomTemplate }
      help={ __( '' ) }
      />

      </PanelBody>

      </InspectorControls>,

      <div className={ className + vertical_padding }>
        <div class="wrapper container-fluid">
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-4">
              <div class="blog-item">
                <p>Your post will be displayed here</p>
              </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-4">
              <div class="blog-item">
                <p>Your post will be displayed here</p>
              </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-4">
              <div class="blog-item">
                <p>Your post will be displayed here</p>
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
        align,
        verticalPadding,
        thePostType,
        theCustomTemplate
			}
		} = props;

		return (
      null
    );

	},

} );
