import React from 'react'

import QuoteSection from "../Components/QuoteSection"
import UserInput from "../Components/UserInput"
import Price from "../Components/Price"
import AdditionalInfo from '../Components/AdditionalInfo'
import SelectionList from '../Components/SelectionList'

import data from "../data/shed.json"
import {getWidthList, getLengthList} from '../helperFunctions/shedUtils'

class Shed extends React.Component {
    constructor(props) {
        super(props);
        this.handleSimpleStateChange=this.handleSimpleStateChange.bind(this)
        this.handleMultiSelectChange=this.handleMultiSelectChange.bind(this)

        this.state = {
            width: '',
            length: '',
            siding: '',
            shingleColour: '',
            options: [],
            additionalInfo: ''
        };
    }

    handleSimpleStateChange(key, value) {
      this.setState({ [key]: value})
    }

    handleMultiSelectChange(key, value){
      let newState = this.state.options

      if (newState.includes(value)){
          newState = newState.filter(v => v !== value)
      } else {
        newState.push(value)
      }

      this.setState({ [key]: newState})
    }

    render() {
        const SECTION = {
            width : {
                stateGroup : "width",
                list : getWidthList(this.state.length),
                title : "Shed Width",
                state : this.state.width,
                summary : "The width of the shed, the gable end",
                changeHandler : this.handleSimpleStateChange,
            },
            length : {
                stateGroup : "length",
                list : getLengthList(this.state.width),
                title : "Length",
                state : this.state.length,
                summary : "The length of the garage",
            },
            siding : {
                stateGroup : "siding",
                list : data.siding,
                title : "Siding",
                state : this.state.siding,
                summary : "The siding for the shed",
            },
            shingleColour : {
                stateGroup : "shingleColour",
                list : data.shingleColour,
                title : "Shingle Colour",
                state : this.state.shingleColour,
                summary : "The colour of the shingles for the roof",
            },
            options: {
                multi: true,
                stateGroup : "options",
                list : data.options,
                title : "Options",
                state : this.state.options,
                summary : "Select all that apply",
                changeHandler: this.handleMultiSelectChange
            }
        }

        const DISPLAY_LIST = {
          "Width": this.state.width,
          "Length": this.state.length,
          "Siding": this.state.siding,
          "Shingle Colour": this.state.shingleColour,
          "Options": this.state.options,
          "Additional Info": this.state.additionalInfo,
        }

        return (
            <div>
                <QuoteSection
                    defaultClickHandler={this.handleSimpleStateChange}
                    section={SECTION}
                />

                <SelectionList
                    title="Shed Info"
                    handleChange={this.handleSimpleStateChange}
                    state={this.state}
                    stateList={DISPLAY_LIST}
                />

                <Price
                    type="shed"
                    requirements = {[this.state.width, this.state.length, this.state.siding, this.state.shingleColour, this.state.options]}
                />

                <AdditionalInfo
                    handleChange={this.handleSimpleStateChange}
                    state={this.state}
                />

                <UserInput
                    handleChange={this.handleSimpleStateChange}
                    requestType="Shed"
                    files={this.state.files}
                    stateList={DISPLAY_LIST}
                />
            </div>
        );
    }
}

export default Shed;
