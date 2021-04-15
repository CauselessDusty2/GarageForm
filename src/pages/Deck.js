import React from 'react'

import UserInput from "../Components/UserInput"
import FileInput from '../Components/FileInput'
import AdditionalInfo from '../Components/AdditionalInfo'
import SelectionList from '../Components/SelectionList'
import CardContainer from '../Components/CardContainer'

import {getAttachmentList, getSupportList, getPostSizeList, getDeckingColourList, getPictureframeColourList, getFasciaSize, getBalusterList, getSkirtingList, toggleSectionHeading, getRailingLightingList} from '../helperFunctions/deckUtils.js'

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
        this.handleRailingChange=this.handleRailingChange.bind(this)
        this.generateQuote=this.generateQuote.bind(this)
        this.handleStringerChange=this.handleStringerChange.bind(this)
        this.handleSkirtingChange=this.handleSkirtingChange.bind(this)
        this.handleRiserLightingChange=this.handleRiserLightingChange.bind(this)
        this.handleSurfaceLightingChange=this.handleSurfaceLightingChange.bind(this)

        this.state = {
            quoteKey: '',
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
            fasciaColour: '',
            railing: '',
            railingCustom: '',
            baluster: '',
            balusterCustom: '',
            railingColour: '',
            stairStringerType: '',
            stairConfigureation: '',
            skirting: '',
            skirtingCustom: '',
            skirtingMaterial: '',
            additionalInfo: '',
            riserLighting: '',
            riserLightingCustom: '',
            surfaceLighting: '',
            surfaceLightingCustom: '',
        };
    }

    generateQuote(e, key) {
      e.preventDefault();
      if (key === "aaa111"){
        this.setState({
          attachment: 'Attached',
          height: '2ft',
          heightCustom: '',
          support: '8\' Ground Hog',
          framingMaterial: 'Brown Treated',
          framingMaterialCustom: '',
          postSize: '4x4',
          beamSize: '2x8',
          beamPly: '2-Ply',
          joistSize: '2x8',
          joistSpacing: '16" on center',
          joistSpacingCustom: '',
          deckingType: 'Trex',
          trexDeckingLine: 'Select',
          deckingColour: 'Pebble Grey',
          pictureframe: 'Single',
          pictureframeCustom: '',
          pictureframeColour: 'Winchester Grey',
          fasciaSize: '1"x12"x12\' Fascia',
          fasciaColour: 'Winchester Grey',
          railing: 'Regal',
          railingCustom: '',
          baluster: 'Wide Pickets',
          railingColour: 'Textured Black',
          skirting: 'Horizontal',
          skirtingMaterial: 'Pebble Grey'
        })
      } else {
        alert(`The key "${key}" is not a valid quote key`)
      }
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

    handleRailingChange( state, railing) {
        if (railing !== this.state.railing ){
            this.setState({railing, railingCustom: '', baluster: '', balusterCustom: '', railingLighting: ''})
        }
    }

    handleStringerChange(state, stairStringerType) {
      if (stairStringerType !== this.state.stairStringerType ){
          this.setState({stairStringerType, stairConfiguration: ''})
      }
    }

    handleSkirtingChange(state, skirting) {
      if (skirting !== this.state.skirting ){
          this.setState({skirting, skirtingCustom: '', skirtingMaterial: ''})
      }
    }

    handleRiserLightingChange(state, riserLighting) {
      if (riserLighting !== this.state.riserLighting ){
          this.setState({riserLighting, riserLightingCustom: ''})
      }
    }

    handleSurfaceLightingChange(state, surfaceLighting) {
      if (surfaceLighting !== this.state.surfaceLighting ){
          this.setState({surfaceLighting, surfaceLightingCustom: ''})
      }
    }

    render() {
        const DISPLAY_LIST = {
          "FRAME SECTION": toggleSectionHeading("Frame", this.state) && "Frame",
          "Type": this.state.attachment,
          "Height": this.state.heightCustom || this.state.height,
          "Support": this.state.support,
          "Frame Material": this.state.framingMaterialCustom || this.state.framingMaterial,
          "POST SUBSECTION":  toggleSectionHeading("Post", this.state) && "Post",
          "Post Size": this.state.postSize,
          "BEAM SUBSECTION":  toggleSectionHeading("Beam", this.state) && "Beam",
          "Beam Size": this.state.beamSize,
          "Beam Thickness": this.state.beamPly,
          "JOIST SUBSECTION":  toggleSectionHeading("Joist", this.state) && "Joist",
          "Joist Size": this.state.joistSize,
          "Joist Spacing": this.state.joistSpacingCustom || this.state.joistSpacing,
          "DECKING SECTION": toggleSectionHeading("Decking", this.state) && "Decking",
          "Decking Type": this.state.deckingType,
          "Trex Product Line": this.state.trexDeckingLine,
          "Decking Colour": this.state.deckingColour,
          "PICTURE FRAME SUBSECTION":  toggleSectionHeading("Pictureframe", this.state) && "Picture Frame",
          "Picture Frame": this.state.pictureframeCustom || this.state.pictureframe,
          "Picture Frame Colour": this.state.pictureframeColour,
          "FASCIA SUBSECTION":  toggleSectionHeading("Fascia", this.state) && "Fascia",
          "Fascia Size": this.state.fasciaSize,
          "Fascia Colour": this.state.fasciaColour,
          "RAILING SECTION": toggleSectionHeading("Railing", this.state) && "Railing",
          "Railing": this.state.railingCustom || this.state.railing,
          "Configuration": this.state.balusterCustom || this.state.baluster,
          "Colour": this.state.railingColour,
          "Railing Lighting": this.state.railingLighting,
          "STAIRS SECTION": toggleSectionHeading("Stairs", this.state) && "Stairs",
          "Stair Stringer": this.state.stairStringerType,
          "Strair Configuration": this.state.stairConfiguration,
          "SKIRTING SECTION": toggleSectionHeading("Skirting", this.state) && "Skirting",
          "Skirting": this.state.skirtingCustom || this.state.skirting,
          "Skirting Material": this.state.skirtingMaterial,
          "LIGHTING SECTION": toggleSectionHeading("Lighting", this.state) && "Lighting",
          "Stair riser lighting": this.state.riserLightingCustom || this.state.riserLighting,
          "Deck Surface lighting": this.state.surfaceLightingCustom || this.state.surfaceLighting,
          "ADDITIONAL INFO SECTION": this.state.additionalInfo && "Additional Info",
          "Additional Info": this.state.additionalInfo,
        }

        return (
            <div>
                <CardContainer
                  stateGroup="attachment"
                  list={getAttachmentList(this.state.support)}
                  title="Type"
                  state={this.state.attachment}
                  summary="If the deck is attached to the house ledger or if it is freestanding (Attached option is not available with pads)"
                  onChange={this.handleSimpleStateChange}
                />

                <CardContainer
                  stateGroup="height"
                  list={data.height}
                  title="Deck Height"
                  state={this.state.height}
                  summary="The height from the ground to the top of the decking"
                  customClickHandler={this.handleSimpleStateChange}
                  onChange={this.handleSimpleStateChange}
                />

                <CardContainer
                  stateGroup="support"
                  list={getSupportList(this.state.attachment)}
                  title="Deck Support"
                  state={this.state.support}
                  summary="The type of support for the deck"
                  onChange={this.handleSimpleStateChange}
                />

                <CardContainer
                  stateGroup="framingMaterial"
                  list={this.state.postSize === "8x8" ? data.framingMaterialLargePost : data.framingMaterial}
                  title="Deck Frame Material"
                  state={this.state.framingMaterial}
                  summary="The material for the posts, beams, and joists"
                  customClickHandler={this.handleSimpleStateChange}
                  onChange={this.handleframingMaterialChange}
                />

                <CardContainer
                  stateGroup="postSize"
                  list={getPostSizeList(this.state.framingMaterial, this.state.beamPly)}
                  title="Post Size"
                  state={this.state.postSize}
                  summary="The size of post to support the deck"
                  onChange={this.handleSimpleStateChange}
                />

                <CardContainer
                  stateGroup="beamSize"
                  list={data.beamSize}
                  title="Beam Size"
                  state={this.state.beamSize}
                  summary="The size of the beam material"
                  onChange={this.handleSimpleStateChange}
                />

                <CardContainer
                  stateGroup="beamPly"
                  list={this.state.postSize === "4x4" ? data.beamPlySmallPost : data.beamPly}
                  title="Beam Thickness"
                  state={this.state.beamPly}
                  summary="The beam lamination quantity"
                  onChange={this.handleSimpleStateChange}
                />

                <CardContainer
                  stateGroup="joistSize"
                  list={data.joistSize}
                  title="Joist Size"
                  state={this.state.joistSize}
                  summary="The size of the joist material"
                  onChange={this.handleSimpleStateChange}
                />

                <CardContainer
                  stateGroup="joistSpacing"
                  list={data.joistSpacing}
                  title="Joist Spacing"
                  state={this.state.joistSpacing}
                  summary="The spacing of the joists"
                  customClickHandler={this.handleSimpleStateChange}
                  onChange={this.handleJoistSpacingChange}
                />

                <CardContainer
                  stateGroup="deckingType"
                  list={data.deckingType}
                  title="Decking"
                  state={this.state.deckingType}
                  summary="The material for the decking planks"
                  onChange={this.handleDeckingTypeChange}
                />

                {this.state.deckingType === "Trex" &&
                  <CardContainer
                    stateGroup="trexDeckingLine"
                    list={data.trexDeckingLine}
                    title="Trex product line"
                    state={this.state.trexDeckingLine}
                    summary="The product line of the trex decking"
                    onChange={this.handleTrexDeckingLineChange}
                    additionalClass="childSelection"
                  />
                }

                {getDeckingColourList(this.state.deckingType, this.state.trexDeckingLine) &&
                  <CardContainer
                    stateGroup="deckingColour"
                    list={getDeckingColourList(this.state.deckingType, this.state.trexDeckingLine)}
                    title="Composite Decking Colour"
                    state={this.state.deckingColour}
                    summary="The colour of the composite decking boards"
                    onChange={this.handleSimpleStateChange}
                    additionalClass={this.state.deckingType === "Trex" ? "childSelection2" : "childSelection"}
                  />
                }

                {this.state.deckingType &&
                  <CardContainer
                    stateGroup="pictureframe"
                    list={data.pictureframe}
                    title="Picture Frame"
                    state={this.state.pictureframe}
                    summary="A picture frame is a perimeter board or boards that go around the whole peremiter of the deck"
                    customClickHandler={this.handleSimpleStateChange}
                    onChange={this.handlePictureframeChange}
                    additionalClass="childSelection"
                  />
                }

                {this.state.pictureframe && this.state.pictureframe !== "None" && getPictureframeColourList(this.state.deckingType, this.state.trexDeckingLine) &&
                  <CardContainer
                    stateGroup="pictureframeColour"
                    list={getPictureframeColourList(this.state.deckingType, this.state.trexDeckingLine)}
                    title="Picture Frame Colour"
                    state={this.state.pictureframeColour}
                    summary="The colour of the picture frame boards"
                    onChange={this.handleSimpleStateChange}
                    additionalClass="childSelection2"
                  />
                }

                {this.state.deckingType &&
                  <CardContainer
                    stateGroup="fasciaSize"
                    list={getFasciaSize(this.state.deckingType)}
                    title="Fascia Size"
                    state={this.state.fasciaSize}
                    summary="The size of the fascia board for the deck"
                    onChange={this.handleSimpleStateChange}
                    additionalClass="childSelection"
                  />
                }

                {getPictureframeColourList(this.state.deckingType, this.state.trexDeckingLine) &&
                  <CardContainer
                    stateGroup="fasciaColour"
                    list={getPictureframeColourList(this.state.deckingType, this.state.trexDeckingLine)}
                    title="Fascia Colour"
                    state={this.state.fasciaColour}
                    summary="The colour of the fascia boards"
                    onChange={this.handleSimpleStateChange}
                    additionalClass="childSelection"
                  />
                }

                <CardContainer
                  stateGroup="railing"
                  list={data.railing}
                  title="Railing"
                  state={this.state.railing}
                  summary="The railing options for the deck"
                  customClickHandler={this.handleSimpleStateChange}
                  onChange={this.handleRailingChange}
                />

                {getBalusterList(this.state.railing) &&
                  <CardContainer
                    stateGroup="baluster"
                    list={getBalusterList(this.state.railing)}
                    title="Railing Configuration"
                    state={this.state.baluster}
                    summary="The railing configuration for the balusters"
                    customClickHandler={this.handleSimpleStateChange}
                    onChange={this.handleSimpleStateChange}
                    additionalClass="childSelection"
                  />
                }

                {this.state.railing === "Regal" &&
                  <CardContainer
                    stateGroup="railingColour"
                    list={data.regalColour}
                    title="Railing Colour"
                    state={this.state.railingColour}
                    summary="The colour of the railing"
                    onChange={this.handleSimpleStateChange}
                    additionalClass="childSelection"
                  />
                }

                {this.state.railing && this.state.railing !== "Nuvo" &&
                  <CardContainer
                    stateGroup="railingLighting"
                    list={getRailingLightingList(this.state.railing)}
                    title="Railing Lighting"
                    state={this.state.railingLighting}
                    summary="The lighting for the railing"
                    onChange={this.handleSimpleStateChange}
                    additionalClass="childSelection"
                  />
                }

                <CardContainer
                  stateGroup="stairStringerType"
                  list={data.stairStringerType}
                  title="Stair Stringer"
                  state={this.state.stairStringerType}
                  summary="The type of stair stringers for the deck"
                  onChange={this.handleStringerChange}
                />

                {this.state.stairStringerType &&
                  <CardContainer
                    stateGroup="stairConfiguration"
                    list={this.state.stairStringerType === "Regal" ? data.stairConfigurationRegal :  data.stairConfiguration}
                    title="Stair Configuration"
                    state={this.state.stairConfiguration}
                    summary="The configuration of the stairs"
                    onChange={this.handleSimpleStateChange}
                    additionalClass="childSelection"
                  />
                }

                <CardContainer
                  stateGroup="skirting"
                  list={data.skirtingDirection}
                  title="Skirting"
                  state={this.state.skirting}
                  summary="Skirting for the deck between the ground and the top of the deck"
                  customClickHandler={this.handleSimpleStateChange}
                  onChange={this.handleSkirtingChange}
                />

                {!!this.state.skirting && this.state.skirting !== "None" && getSkirtingList(this.state.deckingType, this.state.trexDeckingLine) &&
                  <CardContainer
                    stateGroup="skirtingMaterial"
                    list={getSkirtingList(this.state.deckingType, this.state.trexDeckingLine)}
                    title="Skirting Material"
                    state={this.state.skirtingMaterial}
                    summary="The colour of the railing"
                    onChange={this.handleSimpleStateChange}
                    additionalClass="childSelection"
                  />
                }

                <CardContainer
                  stateGroup="riserLighting"
                  list={data.riserLighting}
                  title="Stair Riser Lighting"
                  state={this.state.riserLighting}
                  summary="Lighting for the stair risers"
                  customClickHandler={this.handleSimpleStateChange}
                  onChange={this.handleRiserLightingChange}
                />

                <CardContainer
                  stateGroup="surfaceLighting"
                  list={data.surfaceLighting}
                  title="Deck surface Lighting"
                  state={this.state.surfaceLighting}
                  summary="Lighting for the deck surface"
                  customClickHandler={this.handleSimpleStateChange}
                  onChange={this.handleSurfaceLightingChange}
                />

                <FileInput setFilesState={files => this.setState({files})} title="Attach a sketch of the deck layout and size"/>

                <SelectionList
                    title="Deck Info"
                    stateList={DISPLAY_LIST}
                    generateQuote={this.generateQuote}
                />

                <AdditionalInfo
                    handleChange={this.handleSimpleStateChange}
                    state={this.state}
                />

                <UserInput
                    handleChange={this.handleSimpleStateChange}
                    requestType="Deck"
                    files={this.state.files}
                    stateList={DISPLAY_LIST}
                />
            </div>
        );
    }
}

export default Deck;
