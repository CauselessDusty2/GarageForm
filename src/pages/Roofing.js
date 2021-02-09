import React from 'react'

import QuoteSection from "../Components/QuoteSection";
import QuoteInfo from '../Components/QuoteInfo'
import UserInput from "../Components/UserInput"
import FileInput from '../Components/FileInput'

import data from "../data/garage.json"
import * as garageUtils from "../helperFunctions/garageUtils.js"

class Roofing extends React.Component {
    constructor(props) {
        super(props);
        this.handleRoofGaugeChange=this.handleRoofGaugeChange.bind(this)
        this.handleRoofProfileChange=this.handleRoofProfileChange.bind(this)
        this.handleRoofTypeChange=this.handleRoofTypeChange.bind(this)
        this.handleSimpleStateChange=this.handleSimpleStateChange.bind(this)

        this.state = {
            files: null,
            additionalInfo: '',
            roofType: '',
            roofTypeCustom: '',
            roofProfile: '',
            roofGauge: '',
            roofColour: ''
        };
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
            this.setState({roofType, roofProfile: '', roofGauge: '', roofColour: '', roofTypeCustom: ''})
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
              showIf : this.state.roofProfile,
              stateGroup : "roofGauge",
              list : garageUtils.getGauge(this.state.roofProfile),
              title : "Gauge",
              state : this.state.roofGauge,
              summary : "The gauge of the metal",
              changeHandler : this.handleRoofGaugeChange,
              additionalClass : "childSelection2"
          },
          roofColour : {
              showIf : this.state.roofType === "Shingles" || this.state.roofGauge,
              stateGroup : "roofColour",
              list : this.state.roofType === "Shingles" ? data.shingleColour : garageUtils.getSidingColours(
                  this.state.roofType,
                  this.state.roofProfile,
                  this.state.roofGauge),
              title : this.state.roofType === "Domtek Metal" ? "Metal Roofing Colour" : "Shingle Colour",
              state : this.state.roofColour,
              summary : "The colour of the roofing",
              additionalClass :  this.state.roofType === "Shingles" ? "childSelection" : "childSelection3"
          }
        }

        const DISPLAY_LIST = {
          "Type":this.state.roofTypeCustom||this.state.roofType,
          "Profile":this.state.roofProfile,
          "Metal Gauge":this.state.roofGauge,
          "Colour":this.state.roofColour,
          "Additional Info": this.state.additionalInfo
        }

        return (
            <div>
                <QuoteSection
                    defaultClickHandler={this.handleSimpleStateChange}
                    section={SECTION}
                />

                <QuoteInfo
                    title="Roofing Info"
                    handleChange={this.handleSimpleStateChange}
                    state={this.state}
                    stateList={DISPLAY_LIST}
                />

                <FileInput setFilesState={files => this.setState({files})}/>

                <UserInput
                    handleChange={this.handleSimpleStateChange}
                    requestType="Roofing"
                    files={this.state.files}
                    stateList={DISPLAY_LIST}
                />
            </div>
        );
    }
}

export default Roofing
