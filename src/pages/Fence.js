import React from 'react'

import QuoteSection from "../Components/QuoteSection"
import UserInput from "../Components/UserInput"
import FileInput from '../Components/FileInput'
import AdditionalInfo from '../Components/AdditionalInfo'
import SelectionList from '../Components/SelectionList'

import {toggleSectionHeading} from '../helperFunctions/fenceUtils.js'

import data from "../data/fence.json"

class Fence extends React.Component {
    constructor(props) {
        super(props);
        this.handleSimpleStateChange=this.handleSimpleStateChange.bind(this)
        this.handleMaterialChange=this.handleMaterialChange.bind(this)

        this.state = {
            files: null,
            length: '',
            material: '',
            height: '',
            heightCustom: '',
            style: '',
            postSize: '',
            postSpacing: '',
            postOptions: '',
            picketType: '',
            picketTypeCustom: '',
            picketDirection: '',
            picketSpacing: '',
            railQty: '',
            topCap: ''
        };
    }

    handleMaterialChange(state, material) {
        if (material !== this.state.material) {
            if (this.state.material === "Metal" || material === "Metal"){
                this.setState({
                    material: material,
                    style: '',
                    height: '',
                    heightCustom: '',
                    postSize: '',
                    spacing: ''
                })
            } else {
                this.setState({material: material})
            }
        }
    }

    handleSimpleStateChange(key, value) {
      this.setState({ [key]: value})
    }

    render() {
        const SECTION = {
            length : {
                stateGroup : "length",
                input : "text",
                title : "Length",
                state : this.state.length,
                summary : "The length of the fence",
            },
            material : {
                stateGroup : "material",
                list : data.advancedMaterial,
                title : "Wood Type",
                state : this.state.material,
                summary : "The type of wood for the fence",
                changeHandler : this.handleMaterialChange,
            },
            height : {
                showIf: this.state.material,
                stateGroup : "height",
                list : this.state.material === "Metal" ? data.heightMetal : data.heightWood,
                title : "Height",
                state : this.state.height,
                summary : "The Height of the fence",
                customState : this.state.heightCustom,
                additionalClass : "childSelection"
            },
            style : {
                showIf : this.state.material === "Metal",
                stateGroup : "style",
                list : data.style,
                title : "Style of Fence",
                state : this.state.style,
                summary : "The style of the fence",
                additionalClass : "childSelection"
            },
            postSize: {
                showIf: !!this.state.material && this.state.material !== "Metal",
                stateGroup : "postSize",
                list : this.state.topCap === "2x6"? data.postSize2x6TC : data.postSize,
                title : "Post Size",
                state : this.state.postSize,
                summary : "The size of the fence posts",
                additionalClass : "childSelection"
            },
            postSpacing: {
                showIf: !!this.state.material && this.state.material !== "Metal",
                stateGroup : "postSpacing",
                input: "text",
                title : "Post Spacing",
                state : this.state.postSpacing,
                summary : "The space between the fence posts",
                additionalClass : "childSelection"
            },
            postOptions: {
                showIf: !!this.state.material && this.state.material !== "Metal",
                stateGroup : "postOptions",
                title : "Post Options",
                list : data.postOptions,
                state : this.state.postOptions,
                summary : "The options for the top of the posts",
                additionalClass : "childSelection"
            },
            picketType: {
                showIf: !!this.state.material && this.state.material !== "Metal",
                stateGroup : "picketType",
                list : data.picketType,
                title : "Picket Type",
                state : this.state.picketType,
                summary : "The size of pickets for the fence",
                additionalClass : "childSelection"
            },
            picketDirection: {
                showIf: !!this.state.material && this.state.material !== "Metal",
                stateGroup : "picketDirection",
                list : data.picketDirection,
                title : "Picket Direction",
                state : this.state.picketDirection,
                summary : "The directions for the pickets of the fence",
                additionalClass : "childSelection"
            },
            picketSpacing: {
                showIf: !!this.state.material && this.state.material !== "Metal",
                stateGroup : "picketSpacing",
                input: "text",
                title : "Picket Spacing",
                state : this.state.picketSpacing,
                summary : "The space between the fence pickets",
                additionalClass : "childSelection"
            },
            railQty: {
                showIf: this.state.picketDirection === "Vertical",
                stateGroup : "railQty",
                input: "text",
                title : "Horizontal Rail Quantity",
                state : this.state.railQty,
                summary : "The horizontal board going between posts that the pickets are nailed to",
                additionalClass : "childSelection2"
            },
            topCap: {
                showIf: !!this.state.material && this.state.material !== "Metal",
                stateGroup : "topCap",
                title : "Top Cap",
                list : this.state.postSize === "4x4" ? data.topCap4x4Post : data.topCap,
                state : this.state.topCap,
                summary : "The board that is at the top of the pickets",
                additionalClass : "childSelection"
            },
        }

        const DISPLAY_LIST = {
          "Length": this.state.length,
          "Material": this.state.material,
          "Height": this.state.heightCustom || this.state.height,
          "Style": this.state.style,
          "POST SECTION": toggleSectionHeading("post", this.state) && "Post",
          "Post Size": this.state.postSize,
          "Post Spacing": this.state.postSpacing,
          "Post Options": this.state.postOptions,
          "PICKET SECTION": toggleSectionHeading("picket", this.state) && "Picket",
          "Picket Type": this.state.picketType,
          "Picket Direction": this.state.picketDirection,
          "Picket Spacing": this.state.picketSpacing,
          "RAIL SECTION": toggleSectionHeading("rail", this.state) && "Rail",
          "Horizontal Rail Quantity": this.state.railQty,
          "TOP CAP SECTION": toggleSectionHeading("topCap", this.state) && "Top Cap",
          "Top Cap": this.state.topCap,
          "ADDITIONAL INFO SECTION": "Additional info",
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
                    title="Fence Info"
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
                    requestType="Fence"
                    files={this.state.files}
                    stateList={DISPLAY_LIST}
                />
            </div>
        );
    }
}

export default Fence;
