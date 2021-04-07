import React from 'react'

import UserInput from "../Components/UserInput"
import Price from "../Components/Price"
import FileInput from '../Components/FileInput'
import AdditionalInfo from '../Components/AdditionalInfo'
import SelectionList from '../Components/SelectionList'
import CardContainer from '../Components/CardContainer'

import data from "../data/garage.json"
import * as garageUtils from "../helperFunctions/garageUtils.js"


class Garage extends React.Component {
    constructor(props) {
        super(props);
        this.handleGaugeChange=this.handleGaugeChange.bind(this)
        this.handleGdoChange=this.handleGdoChange.bind(this)
        this.handleHardieFinishChange=this.handleHardieFinishChange.bind(this)
        this.handleHardieSizeChange=this.handleHardieSizeChange.bind(this)
        this.handleMittenLineChange=this.handleMittenLineChange.bind(this)
        this.handleOverheadGlassFinish=this.handleOverheadGlassFinish.bind(this)
        this.handleOverheadSeriesChange=this.handleOverheadSeriesChange.bind(this)
        this.handleOverheadWindowType=this.handleOverheadWindowType.bind(this)
        this.handleRoofGaugeChange=this.handleRoofGaugeChange.bind(this)
        this.handleRoofProfileChange=this.handleRoofProfileChange.bind(this)
        this.handleRoofTypeChange=this.handleRoofTypeChange.bind(this)
        this.handleSidingProfileChange=this.handleSidingProfileChange.bind(this)
        this.handleSidingTypeChange=this.handleSidingTypeChange.bind(this)
        this.handleSimpleStateChange=this.handleSimpleStateChange.bind(this)
        this.handleMultiSelectChange=this.handleMultiSelectChange.bind(this)
        this.handleWindowPaternChange=this.handleWindowPaternChange.bind(this)
        this.showBasic=this.showBasic.bind(this)

        this.state = {
            files: null,
            toggleBasic: true,
            basic: {
              garageWidth: '',
              garageLength: '',
              siding: '',
              shingleColour: '',
            },
            additionalInfo: '',
            garageWidth: '',
            garageWidthCustom: '',
            garageLength: '',
            garageLengthCustom: '',
            garageHeight: '',
            garageHeightCustom: '',
            studSize: '',
            sidingType: '',
            sidingTypeCustom: '',
            sidingProfile: '',
            mittenLine: '',
            gauge: '',
            gdo: '',
            hardieFinish: '',
            hardieSize: '',
            sidingColour: '',
            intSheathing: '',
            intSheathingCustom: '',
            insulation: '',
            overheadSize: '',
            overheadSizeCustom: '',
            overheadSeries: '',
            overheadEliteStyle: '',
            overheadColour: '',
            overheadWindowPatern: '',
            overheadWindowPaternCustom: '',
            overheadWindowType: '',
            overheadGlassFinish: '',
            overheadWindowFrameColour: '',
            overheadMuntinStyle: '',
            overheadMuntinColour: '',
            overheadSnapInDesign: '',
            overheadGlassType: '',
            overheadDecorativeHandle: '',
            overheadDecorativeHinge: '',
            gdoHp: '',
            gdoDrive: '',
            gdoOption: [],
            roofType: '',
            roofTypeCustom: '',
            roofProfile: '',
            roofGauge: '',
            roofColour: ''
        };
    }

    handleGaugeChange(state, gauge) {
        if (gauge !== this.state.gauge ){
            this.setState({gauge, sidingColour: ''})
        }
    }

    handleGdoChange(state, gdo) {
        if (gdo !== this.state.gdo ){
            this.setState({gdo, gdoHp: '', gdoDrive: '', gdoOption: []})
        }
    }

    handleHardieFinishChange(state, hardieFinish ) {
        if (hardieFinish !== this.state.hardieFinish ){
            this.setState({hardieFinish, hardieSize: '', sidingColour: ''})
        }
    }

    handleHardieSizeChange(state, hardieSize ) {
        if (hardieSize !== this.state.hardieSize ){
            this.setState({hardieSize, sidingColour: ''})
        }
    }

    handleMittenLineChange(state, mittenLine) {
        if (mittenLine !== this.state.mittenLine ){
            this.setState({mittenLine, sidingColour: ''})
        }
    }

    handleOverheadGlassFinish(state, overheadGlassFinish) {
        if ( overheadGlassFinish !== this.overheadGlassFinish ) {
            this.setState({overheadGlassFinish, overheadWindowFrameColour: '', overheadMuntinColour: ''})
        }
        if ( this.state.overheadGlassFinish === "Dark Tint Clear" ) {
            this.setState({overheadWindowType: ''})
        }
    }

    handleMultiSelectChange(key, value){
      let newState = this.state.gdoOption

      if (newState.includes(value)){
          newState = newState.filter(v => v !== value)
      } else {
        newState.push(value)
      }

      this.setState({ [key]: newState})
    }

    handleOverheadSeriesChange(state, overheadSeries) {
        if ( overheadSeries !== this.state.overheadSeries) {
            this.setState({
                overheadSeries,
                overheadEliteStyle: '',
                overheadColour: '',
                overheadWindowPatern: '',
                overheadWindowType: '',
                overheadGlassFinish: '',
                overheadWindowFrameColour: '',
                overheadMuntinStyle: '',
                overheadMuntinColour: '',
                overheadSnapInDesign: '',
                overheadGlassType: '',
                overheadDecorativeHandle: '',
                overheadDecorativeHinge: ''
            })
        }
    }

    handleOverheadWindowType(state, overheadWindowType) {
        if ( overheadWindowType !== this.state.overheadWindowType ) {
            this.setState({overheadWindowType, overheadMuntinStyle: '', overheadMuntinColour: '', overheadSnapInDesign: ''})
        }
    }

    handleRoofGaugeChange(state, roofGauge){
        if ( roofGauge !== this.state.roofGauge ) {
            this.setState({roofGauge, roofColour: ''})
        }
    }

    handleRoofProfileChange(state, roofProfile){
        if ( roofProfile !== this.state.roofProfile ) {
            this.setState({roofProfile, roofGauge: '', roofColour: ''})
        }
    }

    handleRoofTypeChange(state, roofType){
        if ( roofType !== this.state.roofType ) {
            this.setState({roofType, roofProfile: '', roofGauge: '', roofColour: ''})
        }
    }

    handleSidingProfileChange(state, sidingProfile) {
        if (sidingProfile !== this.state.sidingProfile ){
            this.setState({sidingProfile, sidingColour: '', mittenLine: '', gauge: '', hardieFinish: '', hardieSize: ''})
        }
    }

    handleSidingTypeChange( state, sidingType) {
        if (sidingType !== this.state.sidingType ){
            this.setState({sidingType, sidingProfile: '', sidingColour: '', mittenLine: '', gauge: '', hardieFinish: '', hardieSize: ''})
        }
    }

    handleSimpleStateChange(key, value) {
        if (key.includes('basic.')){
            this.setState(
              {basic : {
                ...this.state.basic,
                [key.split('.')[1]]: value
              }
            })
        } else {
          this.setState({ [key]: value})
        }
    }

    handleWindowPaternChange(state, overheadWindowPatern) {
        if (overheadWindowPatern !== this.state.overheadWindowPatern && overheadWindowPatern === "None") {
            this.setState({overheadWindowPatern, overheadWindowType: '', overheadGlassFinish: '', overheadWindowFrameColout:'', overheadMuntinStyle: '', overheadMuntinColour: '', overheadSnapInDesign: '', overheadGlassType: ''})
        } else if (overheadWindowPatern !== this.state.overheadWindowPatern) {
            this.setState({overheadWindowPatern})
        }
    }

    showBasic() {this.setState({toggleBasic: !this.state.toggleBasic})}

    render() {
        const DISPLAY_LIST_BASIC = {
          "Width":this.state.basic.garageWidth,
          "Length":this.state.basic.garageLength,
          "Siding":this.state.basic.siding,
          "Shingle Colour":this.state.basic.shingleColour,
          "Additional Info": this.state.additionalInfo
        }

        const DISPLAY_LIST_ADVANCED ={
          "SIZE SECTION": garageUtils.toggleSectionHeading("Size", this.state) && "Garage Size",
          "Width":this.state.garageWidthCustom||this.state.garageWidth,
          "Length": this.state.garageLengthCustom||this.state.garageLength,
          "Height":this.state.garageHeightCustom||this.state.garageHeight,
          "WALL SECTION": garageUtils.toggleSectionHeading("Wall", this.state) && "Walls",
          "Stud Size":this.state.studSize,
          "Interior Sheathing":this.state.intSheathingCustom||this.state.intSheathing,
          "Insulation":this.state.insulation,
          "SIDING SECTION": garageUtils.toggleSectionHeading("Siding", this.state) && "Siding",
          "Siding Type":this.state.sidingTypeCustom||this.state.sidingType,
          "Siding Profile":this.state.sidingProfile,
          "Siding Line":this.state.mittenLine,
          "Siding Gauge":this.state.gauge,
          "Siding Finish":this.state.hardieFinish,
          "Siding Size":this.state.hardieSize,
          "Siding Colour":this.state.sidingColour,
          "ROOFING SECTION": garageUtils.toggleSectionHeading("Roofing", this.state) && "Roofing",
          "Roofing Type":this.state.roofTypeCustom||this.state.roofType,
          "Roofing Profile":this.state.roofProfile,
          "Roofing Metal Gauge":this.state.roofGauge,
          "Roofing Colour":this.state.roofColour,
          "OVERHEAD DOOR SECTION": garageUtils.toggleSectionHeading("Overhead", this.state) && "Overhead Door",
          "Overhead Door Size":this.state.overheadSizeCustom||this.state.overheadSize,
          "Overhead Door Series":this.state.overheadSeries,
          "Overhead Door Style":this.state.overheadEliteStyle,
          "Overhead Door Colour":this.state.overheadColour,
          "Overhead Door Decorative Handle":this.state.overheadDecorativeHandle,
          "Overhead Door Decorative Hinge":this.state.overheadDecorativeHinge,
          "WINDOW SUBSECTION": garageUtils.toggleSectionHeading("Window", this.state) && "Window",
          "Overhead Door Window Patern":this.state.overheadWindowPaternCustom||this.state.overheadWindowPatern,
          "Overhead Door Glass Type":this.state.overheadGlassType,
          "Overhead Door Glass Finish":this.state.overheadGlassFinish,
          "Overhead Door Window Type":this.state.overheadWindowType,
          "Overhead Door Frame Colour":this.state.overheadWindowFrameColour,
          "Overhead Door Muntin Style":this.state.overheadMuntinStyle,
          "Overhead Door Muntin Colour":this.state.overheadMuntinColour,
          "Overhead Door Snap In Design":this.state.overheadSnapInDesign,
          "GDO SECTION": garageUtils.toggleSectionHeading("GDO", this.state) && "Garage Door Opener",
          "Garage Door Opener Horse Power":this.state.gdoHp,
          "Garage Door Opener Drive Type":this.state.gdoDrive,
          "Garage Door Opener Additional Options":this.state.gdoOption,
          "AdditionalInfo SECTION": this.state.additionalInfo && "AdditionalInfo",
          "Additional Info": this.state.additionalInfo
        }

        return (
            <div>
                <button onClick={this.showBasic} className="basic">
                    Switch to {this.state.toggleBasic ? "Advanced Request" : "Basic Request"}
                </button>

                {this.state.toggleBasic && <>
                  <CardContainer
                    stateGroup="basic.garageWidth"
                    list={this.state.basic.garageLength > 30 ? data.basicWidthAlt : data.basicWidth}
                    title="Width"
                    state={this.state.basic.garageWidth}
                    summary="The width of the garage means the gable end of the garage, the side that the overhead door will be on"
                    onChange={this.handleSimpleStateChange}
                  />

                  <CardContainer
                    stateGroup="basic.garageLength"
                    list={this.state.basic.garageWidth ? this.state.basic.garageWidth < 16 ? data.basicLengthAlt : data.basicLength : data.basicLength}
                    title="Length"
                    state={this.state.basic.garageLength}
                    summary="The length of the garage means the eave end of the garage, the side that the man door will be on"
                    onChange={this.handleSimpleStateChange}
                  />

                  <CardContainer
                    stateGroup="basic.siding"
                    list={data.siding}
                    title="Siding"
                    state={this.state.basic.siding}
                    summary="The garage can either have Mitten vinyl siding in one of three stocked colours, or sheathing only"
                    onChange={this.handleSimpleStateChange}
                  />

                  <CardContainer
                    stateGroup="basic.shingleColour"
                    list={data.shingleColour}
                    title="Shingle Colour"
                    state={this.state.basic.shingleColour}
                    summary="The duration colours come in 10 different colour option"
                    onChange={this.handleSimpleStateChange}
                  />
                </>}

                {!this.state.toggleBasic && <>
                  <CardContainer
                    stateGroup="garageWidth"
                    list={this.state.overheadSize === "16x7" ? data.width2 : this.state.overheadSize === "16x8" ? data.width2 : this.state.garageLength > 30 ? data.widthAlt : data.width}
                    title="Width"
                    state={this.state.garageWidth}
                    summary="The width of the garage means the gable end of the garage, the side that the overhead door will be on"
                    customState={this.state.garageWidthCustom}
                    customClickHandler={this.handleSimpleStateChange}
                    onChange={this.handleSimpleStateChange}
                  />

                  <CardContainer
                    stateGroup="garageLength"
                    list={this.state.garageWidth ? this.state.garageWidth < 16 ? data.lengthAlt : data.length : data.length}
                    title="Length"
                    state={this.state.garageLength}
                    summary="The length of the garage means the eave end of the garage, the side that the man door will be on"
                    customState={this.state.garageLengthCustom}
                    customClickHandler={this.handleSimpleStateChange}
                    onChange={this.handleSimpleStateChange}
                  />

                  <CardContainer
                    stateGroup="garageHeight"
                    list={this.state.overheadSize === "9x8" ? data.height2 : this.state.overheadSize === "16x8" ? data.height2 : data.height}
                    title="Height"
                    state={this.state.garageHeight}
                    summary="The height of the garage walls, measured from the ground to the bottom of the roof line"
                    customState={this.state.garageHeightCustom}
                    customClickHandler={this.handleSimpleStateChange}
                    onChange={this.handleSimpleStateChange}
                  />

                  <CardContainer
                    stateGroup="studSize"
                    list={data.studSize}
                    title="Stud Size"
                    state={this.state.studSize}
                    summary="The size of the studs for the walls, either 2x4 or 2x6 studs"
                    onChange={this.handleSimpleStateChange}
                  />

                  <CardContainer
                    stateGroup="intSheathing"
                    list={data.intFinish}
                    title="Interior Sheathing"
                    state={this.state.intSheathing}
                    summary="Options for interior sheathing"
                    onChange={this.handleSimpleStateChange}
                    customState={this.state.intSheathingCustom}
                    customClickHandler={this.handleSimpleStateChange}
                  />

                  <CardContainer
                    stateGroup="insulation"
                    list={data.yesNo}
                    title="Include Insulation"
                    state={this.state.insulation}
                    summary="Option to include batt insulation between studs"
                    onChange={this.handleSimpleStateChange}
                  />

                  <CardContainer
                    stateGroup="sidingType"
                    list={data.sidingType}
                    title="Siding Type"
                    state={this.state.sidingType}
                    summary="The diferent types of siding for the garage, vinyl, metal, engineered, stucco prep"
                    onChange={this.handleSidingTypeChange}
                    customState={this.state.sidingTypeCustom}
                    customClickHandler={this.handleSimpleStateChange}
                  />

                  {garageUtils.getProfileType(this.state.sidingType) &&
                    <CardContainer
                      stateGroup="sidingProfile"
                      list={garageUtils.getProfileType(this.state.sidingType)}
                      title="Siding Profile"
                      state={this.state.sidingProfile}
                      summary="The different profile options for the siding type"
                      onChange={this.handleSidingProfileChange}
                      additionalClass="childSelection animate"
                    />
                  }

                  {garageUtils.getMittenLineType(this.state.sidingProfile) &&
                    <CardContainer
                      stateGroup="mittenLine"
                      list={garageUtils.getMittenLineType(this.state.sidingProfile)}
                      title="Siding Product Line"
                      state={this.state.mittenLine}
                      summary="The different mitten product lines"
                      onChange={this.handleMittenLineChange}
                      additionalClass="childSelection2"
                    />
                  }

                  {garageUtils.getGauge(this.state.sidingProfile) &&
                    <CardContainer
                      stateGroup="gauge"
                      list={garageUtils.getGauge(this.state.sidingProfile)}
                      title="Gauge"
                      state={this.state.gauge}
                      summary="The gauge of the metal"
                      onChange={this.handleGaugeChange}
                      additionalClass="childSelection2"
                    />
                  }

                  {garageUtils.getHardieFinish(this.state.sidingProfile) &&
                    <CardContainer
                      stateGroup="hardieFinish"
                      list={garageUtils.getHardieFinish(this.state.sidingProfile)}
                      title="Siding Finish"
                      state={this.state.hardieFinish}
                      summary="The finish of the siding"
                      onChange={this.handleHardieFinishChange}
                      additionalClass="childSelection2"
                    />
                  }

                  {garageUtils.getHardieSizes(this.state.sidingProfile, this.state.hardieFinish) &&
                    <CardContainer
                      stateGroup="hardieSize"
                      list={garageUtils.getHardieSizes(this.state.sidingProfile, this.state.hardieFinish)}
                      title="Siding Size"
                      state={this.state.hardieSize}
                      summary="The size of the siding"
                      onChange={this.handleHardieSizeChange}
                      additionalClass="childSelection3"
                    />
                  }

                  {garageUtils.getSidingColours(
                      this.state.sidingType,
                      this.state.sidingProfile,
                      this.state.gauge,
                      this.state.mittenLine,
                      this.state.hardieFinish,
                      this.state.hardieSize
                  ) && <CardContainer
                      stateGroup="sidingColour"
                      list={garageUtils.getSidingColours(
                          this.state.sidingType,
                          this.state.sidingProfile,
                          this.state.gauge,
                          this.state.mittenLine,
                          this.state.hardieFinish,
                          this.state.hardieSize
                      )}
                      title="Siding Colour"
                      state={this.state.sidingColour}
                      summary="The colour of the siding"
                      onChange={this.handleSimpleStateChange}
                      additionalClass="childSelection3"
                    />
                  }

                  <CardContainer
                    stateGroup="roofType"
                    list={data.roofingTypes}
                    title="Roofing Type"
                    state={this.state.roofType}
                    summary="The type of roofing"
                    onChange={this.handleRoofTypeChange}
                    customState={this.state.roofTypeCustom}
                    customClickHandler={this.handleSimpleStateChange}
                  />

                  {this.state.roofType === "Domtek Metal" &&
                    <CardContainer
                      stateGroup="roofProfile"
                      list={garageUtils.getProfileType(this.state.roofType)}
                      title="Roofing Profile"
                      state={this.state.roofProfile}
                      summary="The different profile options for the roofing type"
                      onChange={this.handleRoofProfileChange}
                      additionalClass="childSelection"
                    />
                  }

                  {this.state.roofProfile !== "Unsure" && this.state.roofProfile &&
                    <CardContainer
                      stateGroup="roofGauge"
                      list={garageUtils.getGauge(this.state.roofProfile)}
                      title="Gauge"
                      state={this.state.roofGauge}
                      summary="The gauge of the metal"
                      onChange={this.handleRoofGaugeChange}
                      additionalClass="childSelection2"
                    />
                  }

                  {(this.state.roofType === "Shingles" ||  garageUtils.getDomtekColours(this.state.roofProfile,this.state.roofGauge)) &&
                    <CardContainer
                      stateGroup="roofColour"
                      list={this.state.roofType === "Shingles" ? data.shingleColour : garageUtils.getDomtekColours(
                          this.state.roofProfile,
                          this.state.roofGauge)}
                      title={this.state.roofType === "Domtek Metal" ? "Metal Roofing Colour" : "Shingle Colour"}
                      state={this.state.roofColour}
                      summary="The colour of the roofing"
                      onChange={this.handleSimpleStateChange}
                      additionalClass={this.state.roofType === "Shingles" ? "childSelection" : this.state.roofProfile === "Unsure" ? "childSelection2" : "childSelection3"}
                    />
                  }

                  <CardContainer
                    stateGroup="overheadSize"
                    list={garageUtils.getOverheadSizes(this.state.garageWidth, this.state.garageHeight)}
                    title="Overhead Door Size"
                    state={this.state.overheadSize}
                    summary="Overhead door size options"
                    onChange={this.handleSimpleStateChange}
                    customState={this.state.overheadSizeCustom}
                    customClickHandler={this.handleSimpleStateChange}
                  />

                  <CardContainer
                    stateGroup="overheadSeries"
                    list={data.overheadDoorSeries}
                    title="Overhead Door Series"
                    state={this.state.overheadSeries}
                    summary="Overhead door series options"
                    onChange={this.handleOverheadSeriesChange}
                  />

                  {this.state.overheadSeries === "Elite" &&
                    <CardContainer
                      stateGroup="overheadEliteStyle"
                      list={data.eliteStyle}
                      title="Overhead Door Style"
                      state={this.state.overheadEliteStyle}
                      summary="Overhead door style options"
                      onChange={this.handleSimpleStateChange}
                      additionalClass="childSelection"
                    />
                  }

                  {this.state.overheadSeries &&
                    <CardContainer
                      stateGroup="overheadColour"
                      list={garageUtils.getOverheadColours(this.state.overheadSeries)}
                      title="Overhead Door Colour"
                      state={this.state.overheadColour}
                      summary="Overhead door colour options"
                      onChange={this.handleSimpleStateChange}
                      additionalClass="childSelection"
                    />
                  }

                  {garageUtils.getDecorativeHandle(this.state.overheadSeries) &&
                    <CardContainer
                      stateGroup="overheadDecorativeHandle"
                      list={garageUtils.getDecorativeHandle(this.state.overheadSeries)}
                      title="Overhead Door Decorative Handle"
                      state={this.state.overheadColour}
                      summary="Overhead door colour options"
                      onChange={this.handleSimpleStateChange}
                      additionalClass="childSelection"
                    />
                  }

                  {garageUtils.getDecorativeHinge(this.state.overheadSeries) &&
                    <CardContainer
                      stateGroup="overheadDecorativeHinge"
                      list={garageUtils.getDecorativeHinge(this.state.overheadSeries)}
                      title="Overhead Door Decorative Hinge"
                      state={this.state.overheadDecorativeHinge}
                      summary="Overhead door decorative hinge options"
                      onChange={this.handleSimpleStateChange}
                      additionalClass="childSelection"
                    />
                  }

                  {garageUtils.getOverheadWindowPaterns(this.state.overheadSeries) &&
                    <CardContainer
                      stateGroup="overheadWindowPatern"
                      list={garageUtils.getOverheadWindowPaterns(this.state.overheadSeries)}
                      title="Overhead Door Window Patern"
                      state={this.state.overheadWindowPatern}
                      summary="Overhead door window patern options"
                      onChange={this.handleWindowPaternChange}
                      additionalClass="childSelection"
                      customState={this.state.overheadWindowPaternCustom}
                      customClickHandler={this.handleSimpleStateChange}
                    />
                  }

                  {garageUtils.getOverheadGlassType(this.state.overheadWindowPatern) &&
                    <CardContainer
                      stateGroup="overheadGlassType"
                      list={garageUtils.getOverheadGlassType(this.state.overheadWindowPatern)}
                      title="Overhead Door Glass Type"
                      state={this.state.overheadGlassType}
                      summary="Overhead door glass type options"
                      onChange={this.handleSimpleStateChange}
                      additionalClass="childSelection2"
                    />
                  }

                  {garageUtils.getOverheadGlassFinishes(this.state.overheadSeries, this.state.overheadWindowPatern) &&
                    <CardContainer
                      stateGroup="overheadGlassFinish"
                      list={garageUtils.getOverheadGlassFinishes(this.state.overheadSeries, this.state.overheadWindowPatern)}
                      title="Overhead Door Glass Finish"
                      state={this.state.overheadGlassFinish}
                      summary="Overhead door glass finish options"
                      onChange={this.handleOverheadGlassFinish}
                      additionalClass="childSelection2"
                    />
                  }

                  {garageUtils.getOverheadWindowFrames(this.state.overheadSeries, this.state.overheadWindowPatern, this.state.overheadGlassFinish) &&
                    <CardContainer
                      stateGroup="overheadWindowFrameColour"
                      list={garageUtils.getOverheadWindowFrames(this.state.overheadSeries, this.state.overheadWindowPatern, this.state.overheadGlassFinish)}
                      title="Overhead Door Window Frame Colour"
                      state={this.state.overheadWindowFrameColour}
                      summary="Overhead door window frame colour options"
                      onChange={this.handleSimpleStateChange}
                      additionalClass="childSelection3"
                    />
                  }

                  {garageUtils.getOverheadWindowTypes(this.state.overheadSeries, this.state.overheadWindowPatern, this.state.overheadGlassFinish) &&
                    <CardContainer
                      stateGroup="overheadWindowType"
                      list={garageUtils.getOverheadWindowTypes(this.state.overheadSeries, this.state.overheadWindowPatern, this.state.overheadGlassFinish)}
                      title="Overhead Door Window Type"
                      state={this.state.overheadWindowType}
                      summary="Overhead door window type options"
                      onChange={this.handleOverheadWindowType}
                      additionalClass="childSelection2"
                    />
                  }

                  {garageUtils.getOverheadMuntinStyles(this.state.overheadSeries, this.state.overheadWindowType) &&
                    <CardContainer
                      stateGroup="overheadMuntinStyle"
                      list={garageUtils.getOverheadMuntinStyles(this.state.overheadSeries, this.state.overheadWindowType)}
                      title="Overhead Door Muntin Style"
                      state={this.state.overheadMuntinStyle}
                      summary="Overhead door muntin style options"
                      onChange={this.handleSimpleStateChange}
                      additionalClass="childSelection3"
                    />
                  }

                  {garageUtils.getOverheadMuntinColours(this.state.overheadSeries, this.state.overheadWindowType, this.state.overheadGlassFinish) &&
                    <CardContainer
                      stateGroup="overheadMuntinColour"
                      list={garageUtils.getOverheadMuntinColours(this.state.overheadSeries, this.state.overheadWindowType, this.state.overheadGlassFinish)}
                      title="Overhead Door Muntin Colour"
                      state={this.state.overheadMuntinColour}
                      summary="Overhead door muntin colour options"
                      onChange={this.handleSimpleStateChange}
                      additionalClass="childSelection3"
                    />
                  }

                  {garageUtils.getOverheadSnapInDesigns(this.state.overheadSeries, this.state.overheadWindowType) &&
                    <CardContainer
                      stateGroup="overheadSnapInDesign"
                      list={garageUtils.getOverheadSnapInDesigns(this.state.overheadSeries, this.state.overheadWindowType)}
                      title="Overhead Door Snap-In Design"
                      state={this.state.overheadSnapInDesign}
                      summary="Overhead door snap-in design options"
                      onChange={this.handleSimpleStateChange}
                      additionalClass="childSelection3"
                    />
                  }

                  <CardContainer
                    stateGroup="gdo"
                    list={data.yesNo}
                    title="Include Garage Door Opener"
                    state={this.state.gdo}
                    summary="Would you like to include a garage door opener with the quote?"
                    onChange={this.handleGdoChange}
                  />

                  {this.state.gdo === "Yes" &&
                    <CardContainer
                      stateGroup="gdoHp"
                      list={data.horsePower}
                      title="Garage Door Opener Horse Power"
                      state={this.state.gdoHp}
                      summary="Garage door openers horse power is the power it has to lift the door"
                      onChange={this.handleSimpleStateChange}
                      additionalClass="childSelection"
                    />
                  }

                  {this.state.gdo === "Yes" &&
                    <CardContainer
                      stateGroup="gdoDrive"
                      list={data.driveType}
                      title="Garage Door Opener Drive Type"
                      state={this.state.gdoDrive}
                      summary="Chain drive costs less but is louder than the belt drive"
                      onChange={this.handleSimpleStateChange}
                      additionalClass="childSelection"
                    />
                  }

                  {this.state.gdo === "Yes" &&
                    <CardContainer
                      stateGroup="gdoOption"
                      list={data.openerOptions}
                      title="Garage Door Opener Additional Options"
                      state={this.state.gdoOption}
                      summary="Openers can come with additional options, built in lights and MyQ smart phone connectivity"
                      onChange={this.handleMultiSelectChange}
                      additionalClass="childSelection"
                    />
                  }

                  <FileInput setFilesState={files => this.setState({files})}/>
                </>}


                <SelectionList
                    title="Garage Info"
                    handleChange={this.handleSimpleStateChange}
                    state={this.state}
                    stateList={this.state.toggleBasic ? DISPLAY_LIST_BASIC : DISPLAY_LIST_ADVANCED}
                />

                {this.state.toggleBasic &&
                    <Price
                        type="garage"
                        requirements = {[this.state.basic.garageWidth, this.state.basic.garageLength, this.state.basic.siding, this.state.basic.shingleColour]}
                    />
                }

                <AdditionalInfo
                    handleChange={this.handleSimpleStateChange}
                    state={this.state}
                />

                <UserInput
                    handleChange={this.handleSimpleStateChange}
                    requestType={this.state.toggleBasic ? "Basic Garage" : "Garage"}
                    files={!this.state.toggleBasic && this.state.files}
                    stateList={this.state.toggleBasic ? DISPLAY_LIST_BASIC : DISPLAY_LIST_ADVANCED}
                />
            </div>
        );
    }
}

export default Garage;
