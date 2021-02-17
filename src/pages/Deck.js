import React from 'react'

import QuoteSection from "../Components/QuoteSection"
import QuoteInfo from '../Components/QuoteInfo'
import UserInput from "../Components/UserInput"
import Price from "../Components/Price"
import FileInput from '../Components/FileInput'
import {getAttachmentList, getSupportList, getPostSizeList, getDeckingColourList, getPictureframeColourList, getFasciaSize} from '../helperFunctions/deckUtils.js'

import data from "../data/deck.json"

class Deck extends React.Component {
    constructor(props) {
        super(props);
        this.handleSimpleStateChange=this.handleSimpleStateChange.bind(this)
        this.handleHeightChange=this.handleHeightChange.bind(this)
        this.handleframingMaterialChange=this.handleframingMaterialChange.bind(this)
        this.handleJoistSpacingChange=this.handleJoistSpacingChange.bind(this)
        this.handleDeckingTypeChange=this.handleDeckingTypeChange.bind(this)
        this.handleTrexDeckingLineChange=this.handleTrexDeckingLineChange.bind(this)
        this.handlePictureframeChange=this.handlePictureframeChange.bind(this)

        this.state = {
            files: null,
            attachment: '',
            height: '',
            heightCustom: '',
            support: '',
            framingMaterial: '',
            framingMaterialCustom: '',
            postSize: '',
            beamSize: '',
            beamPly: '',
            joistSize: '',
            joistSpacing: '',
            joistSpacingCustom: '',
            deckingType: '',
            trexDeckingLine: '',
            deckingColour: '',
            pictureframe: '',
            pictureframeCustom: '',
            pictureframeColour: '',
            fasciaSize: '',
            fasciaColour: ''
        };
    }

    handleSimpleStateChange(key, value) {
        this.setState({ [key]: value})
    }

    handleHeightChange( state, height) {
        if (height !== this.state.height ){
            this.setState({height, heightCustom: ''})
        }
    }

    handleframingMaterialChange( state, framingMaterial) {
        if (framingMaterial !== this.state.framingMaterial ){
            this.setState({framingMaterial, framingMaterialCustom: ''})
        }
    }

    handleJoistSpacingChange( state, joistSpacing) {
        if (joistSpacing !== this.state.joistSpacing ){
            this.setState({joistSpacing, joistSpacingCustom: ''})
        }
    }

    handleDeckingTypeChange( state, deckingType) {
        if (deckingType !== this.state.deckingType ){
            this.setState({deckingType, trexDeckingLine: '', deckingColour: '', pictureframe: '', pictureframeCustom: '', pictureframeColour: '', fasciaSize: '', fasciaColour: ''})
        }
    }

    handleTrexDeckingLineChange( state, trexDeckingLine) {
        if (trexDeckingLine !== this.state.trexDeckingLine ){
            this.setState({trexDeckingLine, deckingColour: '', pictureframeColour: '', fasciaColour: ''})
        }
    }

    handlePictureframeChange( state, pictureframe) {
        if (pictureframe !== this.state.pictureframe ){
            this.setState({pictureframe, pictureframeCustom: '', pictureframeColour: ''})
        }
    }

    render() {
        const SECTION = {
            attachment : {
                stateGroup : "attachment",
                title : "Type",
                state : this.state.attachment,
                summary : "If the deck is attached to the house ledger or if it is freestanding (Attached option is not available with pads)",
                list : getAttachmentList(this.state.support)
            },
            height : {
                stateGroup : "height",
                title : "Deck Height",
                state : this.state.height,
                summary : "The height from the ground to the top of the decking",
                list : data.height,
                customState : this.state.heightCustom,
                changeHandler : this.handleHeightChange,
            },
            support : {
                stateGroup : "support",
                title : "Deck Support",
                state : this.state.support,
                summary : "The type of support for the deck",
                list : getSupportList(this.state.attachment)
            },
            attachment : {
                stateGroup : "attachment",
                title : "Type",
                state : this.state.attachment,
                summary : "If the deck is attached to the house ledger or if it is freestanding",
                list : getAttachmentList(this.state.support)
            },
            framingMaterial : {
                stateGroup : "framingMaterial",
                title : "Deck Frame Material",
                state : this.state.framingMaterial,
                summary : "The material for the posts, beams, and joists",
                list : this.state.postSize === "8x8" ? data.framingMaterialLargePost : data.framingMaterial,
                customState : this.state.framingMaterialCustom,
                changeHandler : this.handleframingMaterialChange,
            },
            postSize : {
                stateGroup : "postSize",
                title : "Post Size",
                state : this.state.postSize,
                summary : "The size of post to support the deck",
                list : getPostSizeList(this.state.framingMaterial, this.state.beamPly)
            },
            beamSize : {
                stateGroup : "beamSize",
                title : "Beam Size",
                state : this.state.beamSize,
                summary : "The size of the beam material",
                list : data.beamSize
            },
            beamPly : {
                stateGroup : "beamPly",
                title : "Beam Thickness",
                state : this.state.beamPly,
                summary : "The beam lamination quantity",
                list : this.state.postSize === "4x4" ? data.beamPlySmallPost : data.beamPly,
            },
            joistSize : {
                stateGroup : "joistSize",
                title : "Joist Size",
                state : this.state.joistSize,
                summary : "The size of the joist material",
                list : data.joistSize
            },
            joistSpacing : {
                stateGroup : "joistSpacing",
                title : "Joist Spacing",
                state : this.state.joistSpacing,
                summary : "The spacing of the joists",
                list : data.joistSpacing,
                customState : this.state.joistSpacingCustom,
                changeHandler : this.handleJoistSpacingChange
            },
            deckingType : {
                stateGroup : "deckingType",
                title : "Decking",
                state : this.state.deckingType,
                summary : "The material for the decking planks",
                list : data.deckingType,
                changeHandler : this.handleDeckingTypeChange
            },
            trexDeckingLine : {
                showIf : this.state.deckingType === "Trex",
                stateGroup : "trexDeckingLine",
                title : "Trex product line",
                state : this.state.trexDeckingLine,
                summary : "The product line of the trex decking",
                list : data.trexDeckingLine,
                changeHandler : this.handleTrexDeckingLineChange,
                additionalClass : "childSelection"
            },
            deckingColour : {
                showIf : getDeckingColourList(this.state.deckingType, this.state.trexDeckingLine),
                stateGroup : "deckingColour",
                title : "Composite Decking Colour",
                state : this.state.deckingColour,
                summary : "The colour of the composite decking boards",
                list : getDeckingColourList(this.state.deckingType, this.state.trexDeckingLine),
                additionalClass : this.state.deckingType === "Trex" ? "childSelection2" : "childSelection"
            },
            pictureframe : {
                showIf : this.state.deckingType,
                stateGroup : "pictureframe",
                title : "Picture Frame",
                state : this.state.pictureframe,
                summary : "A picture frame is a perimeter board or boards that go around the whole peremiter of the deck",
                list : data.pictureframe,
                changeHandler : this.handlePictureframeChange,
                additionalClass : "childSelection"
            },
            pictureframeColour : {
                showIf : this.state.pictureframe && this.state.pictureframe !== "None" && getPictureframeColourList(this.state.deckingType, this.state.trexDeckingLine),
                stateGroup : "pictureframeColour",
                title : "Picture Frame Colour",
                state : this.state.pictureframeColour,
                summary : "The colour of the picture frame boards",
                list : getPictureframeColourList(this.state.deckingType, this.state.trexDeckingLine),
                additionalClass : "childSelection2"
            },
            fasciaSize : {
                showIf : this.state.deckingType,
                stateGroup : "fasciaSize",
                title : "Fascia Size",
                state : this.state.fasciaSize,
                summary : "The size of the fascia board for the deck",
                list : getFasciaSize(this.state.deckingType),
                additionalClass : "childSelection"
            },
            fasciaColour : {
                showIf : getPictureframeColourList(this.state.deckingType, this.state.trexDeckingLine),
                stateGroup : "fasciaColour",
                title : "Fascia Colour",
                state : this.state.fasciaColour,
                summary : "The colour of the fascia boards",
                list : getPictureframeColourList(this.state.deckingType, this.state.trexDeckingLine),
                additionalClass : "childSelection"
            },
        }

        const DISPLAY_LIST = {
          "Type": this.state.attachment,
          "Height": this.state.heightCustom || this.state.height,
          "Support": this.state.support,
          "Frame Material": this.state.framingMaterialCustom || this.state.framingMaterial,
          "Post Size": this.state.postSize,
          "Beam Size": this.state.beamSize,
          "Beam Thickness": this.state.beamPly,
          "Joist Size": this.state.joistSize,
          "Joist Spacing": this.state.joistSpacingCustom || this.state.joistSpacing,
          "Additional Info": this.state.additionalInfo,
          "Decking Type": this.state.deckingType,
          "Trex Product Line": this.state.trexDeckingLine,
          "Decking Colour": this.state.deckingColour,
          "Picture Frame": this.state.pictureframeCustom || this.state.pictureframe,
          "Picture Frame Colour": this.state.pictureframeColour,
          "Fascia Size": this.state.fasciaSize,
          "Fascia Colour": this.state.fasciaColour
        }

        return (
            <div>
                <QuoteSection
                    defaultClickHandler={this.handleSimpleStateChange}
                    section={SECTION}
                />

                <FileInput setFilesState={files => this.setState({files})}/>

                <QuoteInfo
                    title="Deck Info"
                    handleChange={this.handleSimpleStateChange}
                    state={this.state}
                    stateList={DISPLAY_LIST}
                />

                <UserInput
                    handleChange={this.handleSimpleStateChange}
                    requestType="Fence"
                    files={this.state.files}
                    stateList={DISPLAY_LIST}
                />
            </div>
        );
    }
}

export default Deck;
