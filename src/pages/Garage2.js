import React from 'react'

import QuoteSection from "../Components/QuoteSection"
import UserInput from "../Components/UserInput"
import Price from "../Components/Price"
import FileInput from '../Components/FileInput'
import AdditionalInfo from '../Components/AdditionalInfo'
import SelectionList from '../Components/SelectionList'
import CardContainer from '../Components/CardContainer'

import data from "../data/garage.json"
import pricing from "../data/pricing.json"
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
            gdoOption: '',
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
            this.setState({gdo, gdoHp: '', gdoDrive: '', gdoOption: ''})
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
        const BASIC_SECTION={
            basic_garageWidth : {
                stateGroup : "basic.garageWidth",
                list : this.state.basic.garageLength > 30 ? data.basicWidthAlt : data.basicWidth,
                title : "Width",
                state : this.state.basic.garageWidth,
                summary : "The width of the garage means the gable end of the garage, the side that the overhead door will be on"
            },
            basic_garageLength : {
                stateGroup : "basic.garageLength",
                list : this.state.basic.garageWidth ? this.state.basic.garageWidth < 16 ? data.basicLengthAlt : data.basicLength : data.basicLength,
                title : "Length",
                state : this.state.basic.garageLength,
                summary : "The length of the garage means the eave end of the garage, the side that the man door will be on"
            },
            basic_siding : {
                stateGroup : "basic.siding",
                list : data.siding,
                title : "Siding",
                state : this.state.basic.siding,
                summary : "The garage can either have Mitten vinyl siding in one of three stocked colours, or sheathing only"
            },
            basic_shingleColour : {
                stateGroup : "basic.shingleColour",
                list : data.shingleColour,
                title : "Shingle Colour",
                state : this.state.basic.shingleColour,
                summary : "The duration colours come in 10 different colour option"
            }
        }

        const ADVANCED_SECTION = {
          garageWidth : {
              stateGroup : "garageWidth",
              list : this.state.overheadSize === "16x7" ? data.width2 : this.state.overheadSize === "16x8" ? data.width2 : this.state.garageLength > 30 ? data.widthAlt : data.width,
              title : "Width",
              state : this.state.garageWidth,
              summary : "The width of the garage means the gable end of the garage, the side that the overhead door will be on",
              customState : this.state.garageWidthCustom
          },
          garageLength : {
              stateGroup : "garageLength",
              list : this.state.garageWidth ? this.state.garageWidth < 16 ? data.lengthAlt : data.length : data.length,
              title : "Length",
              state : this.state.garageLength,
              summary : "The length of the garage means the eave end of the garage, the side that the man door will be on",
              customState : this.state.garageLengthCustom
          },
          garageHeight : {
              stateGroup : "garageHeight",
              list : this.state.overheadSize === "9x8" ? data.height2 : this.state.overheadSize === "16x8" ? data.height2 : data.height,
              title : "Height",
              state : this.state.garageHeight,
              summary : "The height of the garage walls, measured from the ground to the bottom of the roof line",
              customState : this.state.garageHeightCustom
          },
          studSize : {
              stateGroup : "studSize",
              list : data.studSize,
              title : "Stud Size",
              state : this.state.studSize,
              summary : "The size of the studs for the walls, either 2x4 or 2x6 studs"
          },
          intSheathing : {
              stateGroup : "intSheathing",
              list : data.intFinish,
              title : "Interior Sheathing",
              state : this.state.intSheathing,
              summary : "Options for interior sheathing"
          },
          insulation : {
              stateGroup : "insulation",
              list : data.yesNo,
              title : "Include Insulation",
              state : this.state.insulation,
              summary : "Option to include batt insulation between studs"
          },
          sidingType : {
              stateGroup : "sidingType",
              list : data.sidingType,
              title : "Siding Type",
              state : this.state.sidingType,
              summary : "The diferent types of siding for the garage, vinyl, metal, engineered, stucco prep",
              changeHandler : this.handleSidingTypeChange,
              customState : this.state.sidingTypeCustom
          },
          sidingProfile : {
              showIf : garageUtils.getProfileType(this.state.sidingType),
              stateGroup : "sidingProfile",
              list : garageUtils.getProfileType(this.state.sidingType),
              title : "Siding Profile",
              state : this.state.sidingProfile,
              summary : "The different profile options for the siding type",
              changeHandler : this.handleSidingProfileChange,
              additionalClass : "childSelection"
          },
          mittenLine : {
              showIf : garageUtils.getMittenLineType(this.state.sidingProfile),
              stateGroup : "mittenLine",
              list : garageUtils.getMittenLineType(this.state.sidingProfile),
              title : "Siding Product Line",
              state : this.state.mittenLine,
              summary : "The different mitten product lines",
              changeHandler : this.handleMittenLineChange,
              additionalClass : "childSelection2"
          },
          gauge : {
              showIf : garageUtils.getGauge(this.state.sidingProfile),
              stateGroup : "gauge",
              list : garageUtils.getGauge(this.state.sidingProfile),
              title : "Gauge",
              state : this.state.gauge,
              summary : "The gauge of the metal",
              changeHandler : this.handleGaugeChange,
              additionalClass : "childSelection2"
          },
          hardieFinish : {
              showIf : garageUtils.getHardieFinish(this.state.sidingProfile),
              stateGroup : "hardieFinish",
              list : garageUtils.getHardieFinish(this.state.sidingProfile),
              title : "Siding Finish",
              state : this.state.hardieFinish,
              summary : "The finish of the siding",
              changeHandler : this.handleHardieFinishChange,
              additionalClass : "childSelection2"
          },
          hardieSize : {
              showIf : garageUtils.getHardieSizes(this.state.sidingProfile, this.state.hardieFinish),
              stateGroup : "hardieSize",
              list : garageUtils.getHardieSizes(this.state.sidingProfile, this.state.hardieFinish),
              title : "Siding Size",
              state : this.state.hardieSize,
              summary : "The size of the siding",
              changeHandler : this.handleHardieSizeChange,
              additionalClass : "childSelection3"
          },
          sidingColour : {
              showIf : garageUtils.getSidingColours(
                  this.state.sidingType,
                  this.state.sidingProfile,
                  this.state.gauge,
                  this.state.mittenLine,
                  this.state.hardieFinish,
                  this.state.hardieSize
              ),

              stateGroup : "sidingColour",
              list : garageUtils.getSidingColours(
                  this.state.sidingType,
                  this.state.sidingProfile,
                  this.state.gauge,
                  this.state.mittenLine,
                  this.state.hardieFinish,
                  this.state.hardieSize
              ),
              title : "Siding Colour",
              state : this.state.sidingColour,
              summary : "The colour of the siding",
              additionalClass : this.state.sidingType === "Hardie" ? "childSelection4" : this.state.sidingType === "Canexel" ? "childSelection2" : this.state.sidingType === "KWP" ? "childSelection2" : "childSelection3"
          },
          roofType : {
              stateGroup : "roofType",
              list : data.roofingTypes,
              title : "Roofing Type",
              state : this.state.roofType,
              summary : "The type of roofing",
              changeHandler : this.handleRoofTypeChange,
              customState : this.state.roofTypeCustom
          },
          roofProfile : {
              showIf : this.state.roofType === "Domtek Metal",
              stateGroup : "roofProfile",
              list : garageUtils.getProfileType(this.state.roofType),
              title : "Roofing Profile",
              state : this.state.roofProfile,
              summary : "The different profile options for the roofing type",
              changeHandler : this.handleRoofProfileChange,
              additionalClass : "childSelection"
          },
          roofGauge : {
              showIf : this.state.roofProfile !== "Unsure" && this.state.roofProfile,
              stateGroup : "roofGauge",
              list : garageUtils.getGauge(this.state.roofProfile),
              title : "Gauge",
              state : this.state.roofGauge,
              summary : "The gauge of the metal",
              changeHandler : this.handleRoofGaugeChange,
              additionalClass : "childSelection2"
          },
          roofColour : {
              showIf : this.state.roofType === "Shingles" ||  garageUtils.getDomtekColours(this.state.roofProfile,this.state.roofGauge),
              stateGroup : "roofColour",
              list : this.state.roofType === "Shingles" ? data.shingleColour : garageUtils.getDomtekColours(
                  this.state.roofProfile,
                  this.state.roofGauge),
              title : this.state.roofType === "Domtek Metal" ? "Metal Roofing Colour" : "Shingle Colour",
              state : this.state.roofColour,
              summary : "The colour of the roofing",
              additionalClass :  this.state.roofType === "Shingles" ? "childSelection" : this.state.roofProfile === "Unsure" ? "childSelection2" : "childSelection3"
          },
          overheadSize : {
              stateGroup : "overheadSize",
              list : garageUtils.getOverheadSizes(this.state.garageWidth, this.state.garageHeight),
              title : "Overhead Door Size",
              state : this.state.overheadSize,
              summary : "Overhead door size options",
              customState : this.state.overheadSizeCustom
          },
          overheadSeries : {
              stateGroup : "overheadSeries",
              list : data.overheadDoorSeries,
              title : "Overhead Door Series",
              state : this.state.overheadSeries,
              changeHandler : this.handleOverheadSeriesChange,
              summary : "Overhead door series options",
          },
          overheadEliteStyle : {
              showIf : this.state.overheadSeries === "Elite",
              stateGroup : "overheadEliteStyle",
              list : data.eliteStyle,
              title : "Overhead Door Style",
              state : this.state.overheadEliteStyle,
              summary : "Overhead door style options",
              additionalClass : "childSelection"
          },
          overheadColour : {
              showIf : this.state.overheadSeries,
              stateGroup : "overheadColour",
              list : garageUtils.getOverheadColours(this.state.overheadSeries),
              title : "Overhead Door Colour",
              state : this.state.overheadColour,
              summary : "Overhead door colour options",
              additionalClass : "childSelection"
          },
          overheadDecorativeHandle : {
              showIf : garageUtils.getDecorativeHandle(this.state.overheadSeries),
              stateGroup : "overheadDecorativeHandle",
              list : garageUtils.getDecorativeHandle(this.state.overheadSeries),
              title : "Overhead Door Decorative Handle",
              state : this.state.overheadDecorativeHandle,
              summary : "Overhead door decorative handle options",
              additionalClass : "childSelection"
          },
          overheadDecorativeHinge : {
              showIf : garageUtils.getDecorativeHinge(this.state.overheadSeries),
              stateGroup : "overheadDecorativeHinge",
              list : garageUtils.getDecorativeHinge(this.state.overheadSeries),
              title : "Overhead Door Decorative Hinge",
              state : this.state.overheadDecorativeHinge,
              summary : "Overhead door decorative hinge options",
              additionalClass : "childSelection"
          },
          overheadWindowPatern : {
              showIf : garageUtils.getOverheadWindowPaterns(this.state.overheadSeries),
              stateGroup : "overheadWindowPatern",
              list : garageUtils.getOverheadWindowPaterns(this.state.overheadSeries),
              title : "Overhead Door Window Patern",
              state : this.state.overheadWindowPatern,
              changeHandler : this.handleWindowPaternChange,
              summary : "Overhead door window patern options",
              additionalClass : "childSelection",
              customState : this.state.overheadWindowPaternCustom
          },
          overheadGlassType : {
              showIf : garageUtils.getOverheadGlassType(this.state.overheadWindowPatern),
              stateGroup : "overheadGlassType",
              list : garageUtils.getOverheadGlassType(this.state.overheadWindowPatern),
              title : "Overhead Door Glass Type",
              state : this.state.overheadGlassType,
              summary : "Overhead door glass type options",
              additionalClass : "childSelection2"
          },
          overheadGlassFinish : {
              showIf : garageUtils.getOverheadGlassFinishes(this.state.overheadSeries, this.state.overheadWindowPatern),
              stateGroup : "overheadGlassFinish",
              list : garageUtils.getOverheadGlassFinishes(this.state.overheadSeries, this.state.overheadWindowPatern),
              title : "Overhead Door Glass Finish",
              state : this.state.overheadGlassFinish,
              changeHandler : this.handleOverheadGlassFinish,
              summary : "Overhead door glass finish options",
              additionalClass : "childSelection2"
          },
          overheadWindowFrameColour : {
              showIf : garageUtils.getOverheadWindowFrames(this.state.overheadSeries, this.state.overheadWindowPatern, this.state.overheadGlassFinish),
              stateGroup : "overheadWindowFrameColour",
              list : garageUtils.getOverheadWindowFrames(this.state.overheadSeries, this.state.overheadWindowPatern, this.state.overheadGlassFinish),
              title : "Overhead Door Window Frame Colour",
              state : this.state.overheadWindowFrameColour,
              summary : "overhead door window frame colour options",
              additionalClass : "childSelection3"
          },
          overheadWindowType : {
              showIf : garageUtils.getOverheadWindowTypes(this.state.overheadSeries, this.state.overheadWindowPatern, this.state.overheadGlassFinish),
              stateGroup : "overheadWindowType",
              list : garageUtils.getOverheadWindowTypes(this.state.overheadSeries, this.state.overheadWindowPatern, this.state.overheadGlassFinish),
              title : "Overhead Door Window Type",
              state : this.state.overheadWindowType,
              changeHandler : this.handleOverheadWindowType,
              summary : "overhead door window type options",
              additionalClass : "childSelection2"
          },
          overheadMuntinStyle : {
              showIf : garageUtils.getOverheadMuntinStyles(this.state.overheadSeries, this.state.overheadWindowType),
              stateGroup : "overheadMuntinStyle",
              list : garageUtils.getOverheadMuntinStyles(this.state.overheadSeries, this.state.overheadWindowType),
              title : "Overhead Door Muntin Style",
              state : this.state.overheadMuntinStyle,
              summary : "overhead door muntin style options",
              additionalClass : "childSelection3"
          },
          overheadMuntinColour : {
              showIf : garageUtils.getOverheadMuntinColours(this.state.overheadSeries, this.state.overheadWindowType, this.state.overheadGlassFinish),
              stateGroup : "overheadMuntinColour",
              title : "Overhead Door Muntin Colour",
              list : garageUtils.getOverheadMuntinColours(this.state.overheadSeries, this.state.overheadWindowType, this.state.overheadGlassFinish),
              state : this.state.overheadMuntinColour,
              summary : "overhead door muntin colour options",
              additionalClass : "childSelection3"
          },
          overheadSnapInDesign : {
              showIf : garageUtils.getOverheadSnapInDesigns(this.state.overheadSeries, this.state.overheadWindowType),
              stateGroup : "overheadSnapInDesign",
              title : "Overhead Door Snap-In Design",
              list : garageUtils.getOverheadSnapInDesigns(this.state.overheadSeries, this.state.overheadWindowType),
              state : this.state.overheadSnapInDesign,
              summary : "overhead door snap-in design options",
              additionalClass : "childSelection3"
          },
          gdo : {
            stateGroup : "gdo",
            title : "Include Garage Door Opener",
            list : data.yesNo,
            state : this.state.gdo,
            changeHandler : this.handleGdoChange,
            summary : "Would you like to include a garage door opener with the quote?"
          },
          gdoHp : {
              showIf : this.state.gdo === "Yes",
              stateGroup : "gdoHp",
              title : "Garage Door Opener Horse Power",
              list : data.horsePower,
              state : this.state.gdoHp,
              summary : "Garage door openers horse power is the power it has to lift the door",
              additionalClass : "childSelection"
          },
          gdoDrive : {
              showIf : this.state.gdo === "Yes",
              stateGroup : "gdoDrive",
              title : "Garage Door Opener Drive Type",
              list : data.driveType,
              state : this.state.gdoDrive,
              summary : "Chain drive costs less but is louder than the belt drive",
              additionalClass : "childSelection"
          },
          gdoOption : {
              showIf : this.state.gdo === "Yes",
              stateGroup : "gdoOption",
              title : "Garage Door Opener Additional Options",
              list : data.openerOptions,
              state : this.state.gdoOption,
              summary : "Openers can come with additional options, built in lights and MyQ smart phone connectivity",
              additionalClass : "childSelection"
          }
        }

        const DISPLAY_LIST_BASIC = {
          "Width":this.state.basic.garageWidth,
          "Length":this.state.basic.garageLength,
          "Siding":this.state.basic.siding,
          "Shingle Colour":this.state.basic.shingleColour,
          "Additional Info": this.state.additionalInfo
        }

        const DISPLAY_LIST_ADVANCED ={
          "SIZE SECTION": garageUtils.toggleSectionHeading("Size", this.state) && "SECTION Garage Size",
          "Width":this.state.customGarageWidth||this.state.garageWidth,
          "Length": this.state.customGarageLength||this.state.garageLength,
          "Height":this.state.heightCustom||this.state.garageHeight,
          "WALL SECTION": garageUtils.toggleSectionHeading("Wall", this.state) && "SECTION Walls",
          "Stud Size":this.state.studSize,
          "Interior Sheathing":this.state.intSheathingCustom||this.state.intSheathing,
          "Insulation":this.state.insulation,
          "SIDING SECTION": garageUtils.toggleSectionHeading("Siding", this.state) && "SECTION Siding",
          "Siding Type":this.state.sidingTypeCustom||this.state.sidingType,
          "Siding Profile":this.state.sidingProfile,
          "Siding Line":this.state.mittenLine,
          "Siding Gauge":this.state.gauge,
          "Siding Finish":this.state.hardieFinish,
          "Siding Size":this.state.hardieSize,
          "Siding Colour":this.state.sidingColour,
          "ROOFING HEADING": garageUtils.toggleSectionHeading("Roofing", this.state) && "SECTION Roofing",
          "Roofing Type":this.state.roofTypeCustom||this.state.roofType,
          "Roofing Profile":this.state.roofProfile,
          "Roofing Metal Gauge":this.state.roofGauge,
          "Roofing Colour":this.state.roofColour,
          "OVERHEAD DOOR HEADING": garageUtils.toggleSectionHeading("Overhead", this.state) && "SECTION Overhead Door",
          "Overhead Door Size":this.state.overheadSizeCustom||this.state.overheadSize,
          "Overhead Door Series":this.state.overheadSeries,
          "Overhead Door Style":this.state.overheadEliteStyle,
          "Overhead Door Colour":this.state.overheadColour,
          "Overhead Door Decorative Handle":this.state.overheadDecorativeHandle,
          "Overhead Door Decorative Hinge":this.state.overheadDecorativeHinge,
          "WINDOW SUBHEADING": garageUtils.toggleSectionHeading("Window", this.state) && "SUBSECTION Window",
          "Overhead Door Window Patern":this.state.overheadWindowPaternCustom||this.state.overheadWindowPatern,
          "Overhead Door Glass Type":this.state.overheadGlassType,
          "Overhead Door Glass Finish":this.state.overheadGlassFinish,
          "Overhead Door Window Type":this.state.overheadWindowType,
          "Overhead Door Frame Colour":this.state.overheadWindowFrameColour,
          "Overhead Door Muntin Style":this.state.overheadMuntinStyle,
          "Overhead Door Muntin Colour":this.state.overheadMuntinColour,
          "Overhead Door Snap In Design":this.state.overheadSnapInDesign,
          "GDO HEADING": garageUtils.toggleSectionHeading("GDO", this.state) && "SECTION Garage Door Opener",
          "Garage Door Opener Horse Power":this.state.gdoHp,
          "Garage Door Opener Drive Type":this.state.gdoDrive,
          "Garage Door Opener Additional Options":this.state.gdoOption,
          "AdditionalInfo HEADING": "SECTION",
          "Additional Info": this.state.additionalInfo
        }

        return (
            <div>
                <button onClick={this.showBasic} className="basic">
                    Switch to {this.state.toggleBasic ? "Advanced Request" : "Basic Request"}
                </button>


                <CardContainer
                  stateGroup="basic.garageWidth",
                  list={this.state.basic.garageLength > 30 ? data.basicWidthAlt : data.basicWidth},
                  title="Width",
                  state={this.state.basic.garageWidth},
                  summary="The width of the garage means the gable end of the garage, the side that the overhead door will be on"
                  defaultClickHandler={this.handleSimpleStateChange}
                />

                <QuoteSection
                    defaultClickHandler={this.handleSimpleStateChange}
                    section={this.state.toggleBasic ? BASIC_SECTION : ADVANCED_SECTION}
                />

                {!this.state.toggleBasic && <FileInput setFilesState={files => this.setState({files})}/>}

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
                    requestType="Garage"
                    files={!this.state.toggleBasic && this.state.files}
                    stateList={this.state.toggleBasic ? DISPLAY_LIST_BASIC : DISPLAY_LIST_ADVANCED}
                />
            </div>
        );
    }
}

export default Garage;
