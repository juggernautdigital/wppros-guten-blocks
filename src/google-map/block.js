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

registerBlockType( 'wpproz/google-map', {

	title: 'Google Map',
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

    mapHeight: {
      type: 'number',
      default: 250,
    },

    mapZoom: {
      type: 'number',
    },

    addressLineOne: {
			"type": 'string',
		},

    addressLineTwo: {
			"type": 'string',
		},

    addressTown: {
			"type": 'string',
		},

    addressPostCode: {
			"type": 'string',
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
        mapHeight,
        mapZoom,
        addressLineOne,
        addressLineTwo,
        addressTown,
        addressPostCode
			},
			className,
			setAttributes
		} = props;

    const map_height = {
      height: props.attributes.mapHeight,
      backgroundColor: '#f4f4f4'
    };

    const onChangeMapHeight = value => {
      props.setAttributes({
        mapHeight: value
      });
    };

    const onChangeMapZoom = value => {
      props.setAttributes({
        mapZoom: value
      });
    };

    const onChangeAddressLineOne = value => {
      props.setAttributes({
        addressLineOne: value
      });
    };

    const onChangeAddressLineTwo = value => {
      props.setAttributes({
        addressLineTwo: value
      });
    };

    const onChangeAddressTown = value => {
      props.setAttributes({
        addressTown: value
      });
    };

    const onChangeAddressPostCode = value => {
      props.setAttributes({
        addressPostCode: value
      });
    };

		return [

			<InspectorControls key="inspector">

      <PanelBody
      title="Block Styling"
      initialOpen={ true }
      >

      <RangeControl
      label={ __( 'Map Height' ) }
      value={ props.attributes.mapHeight }
      onChange={ onChangeMapHeight }
      initialPosition={ 250 }
      min={ 250 }
      max={ 1000 }
      help={ __( 'Select the height of your map' ) }
      />

      <RangeControl
      label={ __( 'Map Zoom' ) }
      value={ props.attributes.mapZoom }
      onChange={ onChangeMapZoom }
      initialPosition={ 15 }
      min={ 10 }
      max={ 20 }
      help={ __( 'Select the zoom level of your map' ) }
      />

      </PanelBody>

      <PanelBody
      title="Map Address"
      initialOpen={ false }
      >

      <TextControl
      label={ __( 'Adress Line One' ) }
      value={ props.attributes.addressLineOne }
      onChange={ onChangeAddressLineOne }
      help={ __( '' ) }
      />

      <TextControl
      label={ __( 'Adress Line Two' ) }
      value={ props.attributes.addressLineTwo }
      onChange={ onChangeAddressLineTwo }
      help={ __( '' ) }
      />

      <TextControl
      label={ __( 'Town' ) }
      value={ props.attributes.addressTown }
      onChange={ onChangeAddressTown }
      help={ __( '' ) }
      />

      <TextControl
      label={ __( 'Post Code' ) }
      value={ props.attributes.addressPostCode }
      onChange={ onChangeAddressPostCode }
      help={ __( '' ) }
      />

      </PanelBody>

      </InspectorControls>,

      <div className={ className }>

          <div id="map" style={ map_height }></div>

      </div>

		];
	},

	save: props => {

		const {
			className,
			attributes: {
        align,
        mapHeight,
        mapZoom,
        addressLineOne,
        addressLineTwo,
        addressTown,
        addressPostCode
			}
		} = props;

		return (
      null
    );

	},

} );
