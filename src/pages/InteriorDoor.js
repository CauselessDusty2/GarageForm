import React from 'react'

import QuoteSection from "../Components/QuoteSection"
import UserInput from "../Components/UserInput"
import FileInput from '../Components/FileInput'
import AdditionalInfo from '../Components/AdditionalInfo'
import SelectionList from '../Components/SelectionList'
import CardContainer from '../Components/CardContainer'

import * as utils from '../helperFunctions/interiorDoorUtils.js'

import data from "../data/interiorDoor.json"

import test from "../data/testComponentJson.json"

class InteriorDoor extends React.Component {
    constructor(props) {
        super(props);
        this.handleSimpleStateChange=this.handleSimpleStateChange.bind(this)
        this.handleStateChange=this.handleStateChange.bind(this)
        this.handleAddDoor=this.handleAddDoor.bind(this)
        this.handleWidthChange=this.handleWidthChange.bind(this)
        this.handleHeightChange=this.handleHeightChange.bind(this)
        this.handleMultiSelectChange=this.handleMultiSelectChange.bind(this)

        this.state = {
            files: null,
            additionalInfo: '',
            doors: {
              door1: {
                width: '1',
                widthCustom: '',
                height: '',
                heightCustom: '',
                style: '',
              }
            }
        };
    }

    handleSimpleStateChange(key, value) {
      this.setState({ [key]: value})
    }

    handleStateChange(key, value) {
      this.setState(prevState => ({
        [key[0]]: {
          ...prevState.doors,
          [key[1]]: {
            [key[2]]: value
          }
        }
      }))
    }

    handleAddDoor() {
      console.log(JSON.stringify(this.state))
      let newDoor = {
        width: '',
        widthCustom: '',
        height: '',
        heightCustom: '',
        style: '',
      }
      let newKey = "door" + (Object.keys(this.state.doors).length + 1)

      this.setState(prevState => ({
        doors: {
          ...prevState.doors,
          [newKey]: [newDoor]
        }
      }))
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
            width : {
                stateGroup : "width",
                list : data.passageWidth,
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
            },
            style : {
                stateGroup : "style",
                list : data.mouldedPanel,
                title : "Style",
                state : this.state.style,
            }
        }

        const DISPLAY_LIST = {
          "Width": this.state.widthCustom || this.state.width,
          "Height": this.state.heightCustom || this.state.height,
          "SECTION AdditionalInfo": "SECTION",
          "Additional Info": this.state.additionalInfo
        }

        return (
            <div>
                <button onClick={this.handleAddDoor}>Add Door</button>

                {console.log(Object.values(test).map(e => e.changeHandler || "handleSimpleStateChange"))}

                <CardContainer
                  title={test.width.title}
                  stateGroup={test.width.stateGroup}
                  list={data.[test.width.list]}
                  onChange={this.[test.width.changeHandler]}
                  state={this.state.[test.width.state]}
                />

                {Object.keys(this.state.doors).map(door => {return(
                  <span>
                    <CardContainer
                      title={"Style"}
                      stateGroup={["doors", door, "style"]}
                      list={data.mouldedPanel}
                      onChange={this.handleStateChange}
                      state={this.state.doors[door].style}
                    />
                  </span>
                )})}

                <FileInput setFilesState={files => this.setState({files})}/>

                <SelectionList
                    title="Interior Door Info"
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
                    requestType="Interior Door"
                    files={this.state.files}
                    stateList={DISPLAY_LIST}
                />
            </div>
        );
    }
}

export default InteriorDoor;
