import React from 'react'

import QuoteSection from "../Components/QuoteSection"
import UserInput from "../Components/UserInput"
import FileInput from '../Components/FileInput'
import AdditionalInfo from '../Components/AdditionalInfo'
import SelectionList from '../Components/SelectionList'

import * as utils from '../helperFunctions/stormDoorUtils.js'

import data from "../data/stormDoor.json"

class Fence extends React.Component {
    constructor(props) {
        super(props);
        this.handleSimpleStateChange=this.handleSimpleStateChange.bind(this)
        this.handleWidthChange=this.handleWidthChange.bind(this)
        this.handleHeightChange=this.handleHeightChange.bind(this)
        this.handleMultiSelectChange=this.handleMultiSelectChange.bind(this)

        this.state = {
            files: null,
            view: '',
            ventilation: '',
            colour: '',
            handleColour: '',
            features: [],
            width: '',
            widthCustom: '',
            height: '',
            heightCustom: '',
            additionalInfo: ''
        };
    }

    handleSimpleStateChange(key, value) {
      this.setState({ [key]: value})
    }

    handleMultiSelectChange(key, value){
      let newState = this.state.features

      if (newState.includes(value)){
          newState = newState.filter(v => v !== value)
      } else {
        newState.push(value)
      }

      this.setState({ [key]: newState})
    }

    handleWidthChange(state, width) {
      if ( width !== this.state.width ) {
        this.setState({width, widthCustom: ''})
      }
    }

    handleHeightChange(state, height) {
      if ( height !== this.state.height ) {
        this.setState({height, heightCustom: ''})
      }
    }

    render() {
        const SECTION = {
            view : {
                stateGroup : "view",
                list : utils.getViewList(this.state),
                title : "View",
                state : this.state.view
            },
            ventilation : {
                stateGroup : "ventilation",
                list : utils.getVentilationList(this.state),
                title : "Ventilation",
                state : this.state.ventilation
            },
            colour : {
                stateGroup : "colour",
                list : utils.getColourList(this.state),
                title : "Colour",
                state : this.state.colour
            },
            handleColour : {
                stateGroup : "handleColour",
                list : utils.getHandleColourList(this.state),
                title : "Handle Colour",
                state : this.state.handleColour
            },
            features : {
                multi: true,
                stateGroup : "features",
                list : utils.getFeaturesList(this.state),
                title : "Features",
                summary : "Select all that apply",
                state : this.state.features,
                changeHandler: this.handleMultiSelectChange
            },
            width : {
                stateGroup : "width",
                list : data.width,
                title : "Width",
                state : this.state.width,
                changeHandler: this.handleWidthChange
            },
            height : {
                stateGroup : "height",
                list : data.height,
                title : "Height",
                state : this.state.height,
                changeHandler: this.handleHeightChange
            }
        }

        const DISPLAY_LIST = {
          "View": this.state.view,
          "Ventilation": this.state.ventilation,
          "Colour": this.state.colour,
          "Handle Colour": this.state.handleColour,
          "Feature": this.state.features,
          "Width": this.state.widthCustom || this.state.width,
          "Height": this.state.heightCustom || this.state.height,
          "SECTION AdditionalInfo": "SECTION",
          "Additional Info": this.state.additionalInfo
        }

        return (
            <div>
                <QuoteSection
                    defaultClickHandler={this.handleSimpleStateChange}
                    section={SECTION}
                />

                <FileInput setFilesState={files => this.setState({files})}/>

                <SelectionList
                    title="Storm Door Info"
                    handleChange={this.handleSimpleStateChange}
                    state={this.state}
                    stateList={DISPLAY_LIST}
                />

                <AdditionalInfo
                    handleChange={this.handleSimpleStateChange}
                    state={this.state}
                />

                <UserInput
                    handleChange={this.handleSimpleStateChange}
                    requestType="Storm Door"
                    files={this.state.files}
                    stateList={DISPLAY_LIST}
                />
            </div>
        );
    }
}

export default Fence;
