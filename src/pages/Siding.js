import React from 'react'
import '../App.css'
import QuoteSection from "../Components/QuoteSection";
import QuoteInfo from '../Components/QuoteInfo'
import UserInput from "../Components/UserInput"
import data from "../data/garage.json"
import * as garageUtils from "../helperFunctions/garageUtils.js"
import FileInput from '../Components/FileInput'

class Siding extends React.Component {
    constructor(props) {
        super(props);
        this.handleGaugeChange=this.handleGaugeChange.bind(this)
        this.handleHardieFinishChange=this.handleHardieFinishChange.bind(this)
        this.handleHardieSizeChange=this.handleHardieSizeChange.bind(this)
        this.handleMittenLineChange=this.handleMittenLineChange.bind(this)
        this.handleSidingProfileChange=this.handleSidingProfileChange.bind(this)
        this.handleSidingTypeChange=this.handleSidingTypeChange.bind(this)
        this.handleSimpleStateChange=this.handleSimpleStateChange.bind(this)

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
        };
    }

    handleGaugeChange(state, gauge) {
        if (gauge !== this.state.gauge ){
            this.setState({gauge, sidingColour: ''})
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

    render() {
        const SECTION = {
          sidingType : {
              showIf : true,
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
          }
        }

        return (
            <div>
                <QuoteSection
                    defaultClickHandler={this.handleSimpleStateChange}
                    section={SECTION}
                />

                <QuoteInfo
                    title="Siding Info"
                    handleChange={this.handleSimpleStateChange}
                    state={this.state}
                    stateList={
                      {"Siding Type": this.state.sidingTypeCustom||this.state.sidingType,
                      "Siding Profile": this.state.sidingProfile,
                      "Siding Line": this.state.mittenLine,
                      "Siding Gauge": this.state.gauge,
                      "Siding Finish": this.state.hardieFinish,
                      "Siding Size": this.state.hardieSize,
                      "Siding Colour": this.state.sidingColour}
                    }
                />

                <FileInput setFilesState={files => this.setState({files})}/>

                <UserInput
                    handleChange={this.handleSimpleStateChange}
                    state={this.state}
                    requestType="Siding"
                    files={this.state.files}
                />
            </div>
        );
    }
}

export default Siding
