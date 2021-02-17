import React from 'react'

import QuoteSection from "../Components/QuoteSection";
import QuoteInfo from '../Components/QuoteInfo'
import UserInput from "../Components/UserInput"
import FileInput from '../Components/FileInput'

import data from "../data/garage.json"
import * as garageUtils from "../helperFunctions/garageUtils.js"

class Siding extends React.Component {
    constructor(props) {
        super(props);
        this.handleGaugeChange=this.handleGaugeChange.bind(this)
        this.handleHardieFinishChange=this.handleHardieFinishChange.bind(this)
        this.handleHardieSizeChange=this.handleHardieSizeChange.bind(this)
        this.handleMittenLineChange=this.handleMittenLineChange.bind(this)
        this.handleSidingProfileChange=this.handleSidingProfileChange.bind(this)
        this.handleSidingTypeChange=this.handleSidingTypeChange.bind(this)
        this.handleGableGaugeChange=this.handleGableGaugeChange.bind(this)
        this.handleGableHardieFinishChange=this.handleGableHardieFinishChange.bind(this)
        this.handleGableHardieSizeChange=this.handleGableHardieSizeChange.bind(this)
        this.handleGableMittenLineChange=this.handleGableMittenLineChange.bind(this)
        this.handleGableSidingProfileChange=this.handleGableSidingProfileChange.bind(this)
        this.handleGableSidingTypeChange=this.handleGableSidingTypeChange.bind(this)
        this.handleSimpleStateChange=this.handleSimpleStateChange.bind(this)
        this.handleDifGableChange=this.handleDifGableChange.bind(this)
        this.handleSkirtingGaugeChange=this.handleSkirtingGaugeChange.bind(this)
        this.handleSkirtingHardieFinishChange=this.handleSkirtingHardieFinishChange.bind(this)
        this.handleSkirtingHardieSizeChange=this.handleSkirtingHardieSizeChange.bind(this)
        this.handleSkirtingMittenLineChange=this.handleSkirtingMittenLineChange.bind(this)
        this.handleSkirtingSidingProfileChange=this.handleSkirtingSidingProfileChange.bind(this)
        this.handleSkirtingSidingTypeChange=this.handleSkirtingSidingTypeChange.bind(this)
        this.handleSimpleStateChange=this.handleSimpleStateChange.bind(this)
        this.handleDifSkirtingChange=this.handleDifSkirtingChange.bind(this)

        this.state = {
            files: null,
            additionalInfo: '',
            sidingType: '',
            sidingTypeCustom: '',
            sidingProfile: '',
            mittenLine: '',
            gauge: '',
            hardieFinish: '',
            hardieSize: '',
            sidingColour: '',
            difGableSiding: '',
            gableSidingType: '',
            gableSidingTypeCustom: '',
            gableSidingProfile: '',
            gableMittenLine: '',
            gableGauge: '',
            gableHardieFinish: '',
            gableHardieSize: '',
            gableSidingColour: '',
            difSkirtingSiding: '',
            skirtingSidingType: '',
            skirtingSidingTypeCustom: '',
            skirtingSidingProfile: '',
            skirtingMittenLine: '',
            skirtingGauge: '',
            skirtingHardieFinish: '',
            skirtingHardieSize: '',
            skirtingSidingColour: '',
            trimColour: '',
        };
    }

    handleGaugeChange(state, gauge) {
        if (gauge !== this.state.gauge ){
            this.setState({gauge, sidingColour: '', trimColour: ''})
        }
    }

    handleHardieFinishChange(state, hardieFinish ) {
        if (hardieFinish !== this.state.hardieFinish ){
            this.setState({hardieFinish, hardieSize: '', sidingColour: '', trimColour: ''})
        }
    }

    handleHardieSizeChange(state, hardieSize ) {
        if (hardieSize !== this.state.hardieSize ){
            this.setState({hardieSize, sidingColour: '', trimColour: ''})
        }
    }

    handleMittenLineChange(state, mittenLine) {
        if (mittenLine !== this.state.mittenLine ){
            this.setState({mittenLine, sidingColour: '', trimColour: ''})
        }
    }

    handleSidingProfileChange(state, sidingProfile) {
        if (sidingProfile !== this.state.sidingProfile ){
            this.setState({sidingProfile, sidingColour: '', mittenLine: '', gauge: '', hardieFinish: '', hardieSize: '', trimColour: ''})
        }
    }

    handleSidingTypeChange( state, sidingType) {
        if (sidingType !== this.state.sidingType ){
            this.setState({sidingType, sidingProfile: '', sidingColour: '', mittenLine: '', gauge: '', hardieFinish: '', hardieSize: '', sidingTypeCustom: '', trimColour: ''})
        }
    }
    handleGableGaugeChange(state, gableGauge) {
        if (gableGauge !== this.state.gableGauge ){
            this.setState({gableGauge, gableSidingColour: ''})
        }
    }

    handleGableHardieFinishChange(state, gableHardieFinish ) {
        if (gableHardieFinish !== this.state.gableHardieFinish ){
            this.setState({gableHardieFinish, gableHardieSize: '', gableSidingColour: ''})
        }
    }

    handleGableHardieSizeChange(state, gableHardieSize ) {
        if (gableHardieSize !== this.state.gableHardieSize ){
            this.setState({gableHardieSize, gableSidingColour: ''})
        }
    }

    handleGableMittenLineChange(state, gableMittenLine) {
        if (gableMittenLine !== this.state.gableMittenLine ){
            this.setState({gableMittenLine, gableSidingColour: ''})
        }
    }

    handleGableSidingProfileChange(state, gableSidingProfile) {
        if (gableSidingProfile !== this.state.gableSidingProfile ){
            this.setState({gableSidingProfile, gableSidingColour: '', gableMittenLine: '', gableGauge: '', gableHardieFinish: '', gableHardieSize: ''})
        }
    }

    handleGableSidingTypeChange( state, gableSidingType) {
        if (gableSidingType !== this.state.gableSidingType ){
            this.setState({gableSidingType, gableSidingProfile: '', gableSidingColour: '', gableMittenLine: '', gableGauge: '', gableHardieFinish: '', gableHardieSize: '', gableSidingTypeCustom: ''})
        }
    }
    handleDifGableChange( state, difGableSiding) {
      if (difGableSiding !== this.state.difGableSiding) {
        this.setState({difGableSiding, gableSidingType: '',
        gableSidingTypeCustom: '',
        gableSidingProfile: '',
        gableMittenLine: '',
        gableGauge: '',
        gableHardieFinish: '',
        gableHardieSize: '',
        gableSidingColour: '',})
      }
    }
    handleSkirtingGaugeChange(state, skirtingGauge) {
        if (skirtingGauge !== this.state.skirtingGauge ){
            this.setState({skirtingGauge, skirtingSidingColour: ''})
        }
    }

    handleSkirtingHardieFinishChange(state, skirtingHardieFinish ) {
        if (skirtingHardieFinish !== this.state.skirtingHardieFinish ){
            this.setState({skirtingHardieFinish, skirtingHardieSize: '', skirtingSidingColour: ''})
        }
    }

    handleSkirtingHardieSizeChange(state, skirtingHardieSize ) {
        if (skirtingHardieSize !== this.state.skirtingHardieSize ){
            this.setState({skirtingHardieSize, skirtingSidingColour: ''})
        }
    }

    handleSkirtingMittenLineChange(state, skirtingMittenLine) {
        if (skirtingMittenLine !== this.state.skirtingMittenLine ){
            this.setState({skirtingMittenLine, skirtingSidingColour: ''})
        }
    }

    handleSkirtingSidingProfileChange(state, skirtingSidingProfile) {
        if (skirtingSidingProfile !== this.state.skirtingSidingProfile ){
            this.setState({skirtingSidingProfile, skirtingSidingColour: '', skirtingMittenLine: '', skirtingGauge: '', skirtingHardieFinish: '', skirtingHardieSize: ''})
        }
    }

    handleSkirtingSidingTypeChange( state, skirtingSidingType) {
        if (skirtingSidingType !== this.state.skirtingSidingType ){
            this.setState({skirtingSidingType, skirtingSidingProfile: '', skirtingSidingColour: '', skirtingMittenLine: '', skirtingGauge: '', skirtingHardieFinish: '', skirtingHardieSize: '', skirtingSidingTypeCustom: ''})
        }
    }
    handleDifSkirtingChange( state, difSkirtingSiding) {
      if (difSkirtingSiding !== this.state.difSkirtingSiding) {
        this.setState({difSkirtingSiding, skirtingSidingType: '',
        skirtingSidingTypeCustom: '',
        skirtingSidingProfile: '',
        skirtingMittenLine: '',
        skirtingGauge: '',
        skirtingHardieFinish: '',
        skirtingHardieSize: '',
        skirtingSidingColour: '',})
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

    render() {
        const SECTION = {
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
          difGableSiding : {
              stateGroup : "difGableSiding",
              list : data.yesNo,
              title : "Gable Siding",
              state : this.state.difGableSiding,
              summary : "Will the gable siding be different than the rest of the siding",
              changeHandler : this.handleDifGableChange,
          },
          gableSidingType : {
              showIf: this.state.difGableSiding === "Yes",
              stateGroup : "gableSidingType",
              list : data.sidingType,
              title : "Gable Siding Type",
              state : this.state.gableSidingType,
              summary : "The diferent types of siding for the gable section of the building",
              changeHandler : this.handleGableSidingTypeChange,
              additionalClass : "childSelection"
          },
          gableSidingProfile : {
              showIf : garageUtils.getProfileType(this.state.gableSidingType),
              stateGroup : "gableSidingProfile",
              list : garageUtils.getProfileType(this.state.gableSidingType),
              title : "Gable Siding Profile",
              state : this.state.gableSidingProfile,
              summary : "The different profile options for the gable siding",
              changeHandler : this.handleGableSidingProfileChange,
              additionalClass : "childSelection2"
          },
          gableMittenLine : {
              showIf : garageUtils.getMittenLineType(this.state.gableSidingProfile),
              stateGroup : "gableMittenLine",
              list : garageUtils.getMittenLineType(this.state.gableSidingProfile),
              title : "Gable Siding Product Line",
              state : this.state.gableMittenLine,
              summary : "The different product lines",
              changeHandler : this.handleGableMittenLineChange,
              additionalClass : "childSelection3"
          },
          gableGauge : {
              showIf : garageUtils.getGauge(this.state.gableSidingProfile),
              stateGroup : "gableGauge",
              list : garageUtils.getGauge(this.state.gableSidingProfile),
              title : "Gable Gauge",
              state : this.state.gableGauge,
              summary : "The gauge of the metal for the Gables",
              changeHandler : this.handleGableGaugeChange,
              additionalClass : "childSelection3"
          },
          gableHardieFinish : {
              showIf : garageUtils.getHardieFinish(this.state.gableSidingProfile),
              stateGroup : "gableHardieFinish",
              list : garageUtils.getHardieFinish(this.state.gableSidingProfile),
              title : "Gable Siding Finish",
              state : this.state.gableHardieFinish,
              summary : "The finish of the gable siding",
              changeHandler : this.handleGableHardieFinishChange,
              additionalClass : "childSelection3"
          },
          gableHardieSize : {
              showIf : garageUtils.getHardieSizes(this.state.gableSidingProfile, this.state.gableHardieFinish),
              stateGroup : "gableHardieSize",
              list : garageUtils.getHardieSizes(this.state.gableSidingProfile, this.state.gableHardieFinish),
              title : "Gable siding Size",
              state : this.state.gableHardieSize,
              summary : "The size of the siding",
              changeHandler : this.handleGableHardieSizeChange,
              additionalClass : "childSelection4"
          },
          gableSidingColour : {
              showIf : garageUtils.getSidingColours(
                  this.state.gableSidingType,
                  this.state.gableSidingProfile,
                  this.state.gableGauge,
                  this.state.gableMittenLine,
                  this.state.gableHardieFinish,
                  this.state.gableHardieSize
              ),
              stateGroup : "gableSidingColour",
              list : garageUtils.getSidingColours(
                  this.state.gableSidingType,
                  this.state.gableSidingProfile,
                  this.state.gableGauge,
                  this.state.gableMittenLine,
                  this.state.gableHardieFinish,
                  this.state.gableHardieSize
              ),
              title : "Siding Colour",
              state : this.state.gableSidingColour,
              summary : "The colour of the siding of the gable",
              additionalClass : this.state.gableSidingType === "Hardie" ? "childSelection4" : this.state.gableSidingType === "Canexel" ? "childSelection3" : this.state.gableSidingType === "KWP" ? "childSelection3" : "childSelection4"
          },
          difSkirtingSiding : {
              stateGroup : "difSkirtingSiding",
              list : data.yesNo,
              title : "Skirting Siding",
              state : this.state.difSkirtingSiding,
              summary : "Will the skirting siding be different than the rest of the siding",
              changeHandler : this.handleDifSkirtingChange,
          },
          skirtingSidingType : {
              showIf: this.state.difSkirtingSiding === "Yes",
              stateGroup : "skirtingSidingType",
              list : data.sidingType,
              title : "Skirting Siding Type",
              state : this.state.skirtingSidingType,
              summary : "The diferent types of siding for the skirting section of the building",
              changeHandler : this.handleSkirtingSidingTypeChange,
              additionalClass : "childSelection"
          },
          skirtingSidingProfile : {
              showIf : garageUtils.getProfileType(this.state.skirtingSidingType),
              stateGroup : "skirtingSidingProfile",
              list : garageUtils.getProfileType(this.state.skirtingSidingType),
              title : "Skirting Siding Profile",
              state : this.state.skirtingSidingProfile,
              summary : "The different profile options for the skirting siding",
              changeHandler : this.handleSkirtingSidingProfileChange,
              additionalClass : "childSelection2"
          },
          skirtingMittenLine : {
              showIf : garageUtils.getMittenLineType(this.state.skirtingSidingProfile),
              stateGroup : "skirtingMittenLine",
              list : garageUtils.getMittenLineType(this.state.skirtingSidingProfile),
              title : "Skirting Siding Product Line",
              state : this.state.skirtingMittenLine,
              summary : "The different product lines",
              changeHandler : this.handleSkirtingMittenLineChange,
              additionalClass : "childSelection3"
          },
          skirtingGauge : {
              showIf : garageUtils.getGauge(this.state.skirtingSidingProfile),
              stateGroup : "skirtingGauge",
              list : garageUtils.getGauge(this.state.skirtingSidingProfile),
              title : "Skirting Gauge",
              state : this.state.skirtingGauge,
              summary : "The gauge of the metal for the Skirtings",
              changeHandler : this.handleSkirtingGaugeChange,
              additionalClass : "childSelection3"
          },
          skirtingHardieFinish : {
              showIf : garageUtils.getHardieFinish(this.state.skirtingSidingProfile),
              stateGroup : "skirtingHardieFinish",
              list : garageUtils.getHardieFinish(this.state.skirtingSidingProfile),
              title : "Skirting Siding Finish",
              state : this.state.skirtingHardieFinish,
              summary : "The finish of the skirting siding",
              changeHandler : this.handleSkirtingHardieFinishChange,
              additionalClass : "childSelection3"
          },
          skirtingHardieSize : {
              showIf : garageUtils.getHardieSizes(this.state.skirtingSidingProfile, this.state.skirtingHardieFinish),
              stateGroup : "skirtingHardieSize",
              list : garageUtils.getHardieSizes(this.state.skirtingSidingProfile, this.state.skirtingHardieFinish),
              title : "Skirting siding Size",
              state : this.state.skirtingHardieSize,
              summary : "The size of the siding",
              changeHandler : this.handleSkirtingHardieSizeChange,
              additionalClass : "childSelection4"
          },
          skirtingSidingColour : {
              showIf : garageUtils.getSidingColours(
                  this.state.skirtingSidingType,
                  this.state.skirtingSidingProfile,
                  this.state.skirtingGauge,
                  this.state.skirtingMittenLine,
                  this.state.skirtingHardieFinish,
                  this.state.skirtingHardieSize
              ),
              stateGroup : "skirtingSidingColour",
              list : garageUtils.getSidingColours(
                  this.state.skirtingSidingType,
                  this.state.skirtingSidingProfile,
                  this.state.skirtingGauge,
                  this.state.skirtingMittenLine,
                  this.state.skirtingHardieFinish,
                  this.state.skirtingHardieSize
              ),
              title : "Siding Colour",
              state : this.state.skirtingSidingColour,
              summary : "The colour of the siding of the skirting",
              additionalClass : this.state.skirtingSidingType === "Hardie" ? "childSelection4" : this.state.skirtingSidingType === "Canexel" ? "childSelection3" : this.state.skirtingSidingType === "KWP" ? "childSelection3" : "childSelection4"
          },
          trimColour : {
            showIf : this.state.sidingColour,
            stateGroup : "trimColour",
            list : garageUtils.getSidingColours(
                this.state.sidingType,
                this.state.sidingProfile,
                this.state.gauge,
                this.state.mittenLine,
                this.state.hardieFinish,
                this.state.hardieSize
            ),
            title : "Different Trim Colour?",
            state : this.state.trimColour,
            summary : "Select a trim colour if you want a different one then the rest of the siding",
            changeHandler : this.handleSimpleStateChange
          }
        }

        const DISPLAY_LIST = {
          "Type": this.state.sidingTypeCustom||this.state.sidingType,
          "Profile": this.state.sidingProfile,
          "Line": this.state.mittenLine,
          "Gauge": this.state.gauge,
          "Finish": this.state.hardieFinish,
          "Size": this.state.hardieSize,
          "Colour": this.state.sidingColour,
          "Different Gable Siding": this.state.difGableSiding === "Yes" ? "Yes" : null,
          "Gable Type": this.state.gableSidingTypeCustom||this.state.gableSidingType,
          "Gable Profile": this.state.gableSidingProfile,
          "Gable Line": this.state.gableMittenLine,
          "Gable Gauge": this.state.gableGauge,
          "Gable Finish": this.state.gableHardieFinish,
          "Gable Size": this.state.gableHardieSize,
          "Gable Colour": this.state.gableSidingColour,
          "Different Skirting Siding": this.state.difSkirtingSiding === "Yes" ? "Yes" : null,
          "Skirting Type": this.state.skirtingSidingTypeCustom||this.state.skirtingSidingType,
          "Skirting Profile": this.state.skirtingSidingProfile,
          "Skirting Line": this.state.skirtingMittenLine,
          "Skirting Gauge": this.state.skirtingGauge,
          "Skirting Finish": this.state.skirtingHardieFinish,
          "Skirting Size": this.state.skirtingHardieSize,
          "Skirting Colour": this.state.skirtingSidingColour,
          "Trim Colour": this.state.trimColour,
          "Additional Info": this.state.additionalInfo
        }

        return (
            <div>
                <QuoteSection
                    defaultClickHandler={this.handleSimpleStateChange}
                    section={SECTION}
                />

                <FileInput title="ATTACH A SKETCH OF THE WALLS THE SIDING IS NEEDED FOR" setFilesState={files => this.setState({files})}/>

                <QuoteInfo
                    title="Siding Info"
                    handleChange={this.handleSimpleStateChange}
                    state={this.state}
                    stateList={DISPLAY_LIST}
                />

                <UserInput
                    handleChange={this.handleSimpleStateChange}
                    requestType="Siding"
                    files={this.state.files}
                    stateList={DISPLAY_LIST}
                />
            </div>
        );
    }
}

export default Siding
