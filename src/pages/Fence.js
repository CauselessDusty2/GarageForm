import React from 'react'
import '../App.css'
import QuoteSection from "../Components/QuoteSection";
import QuoteInfo from '../Components/QuoteInfo'
import UserInput from "../Components/UserInput"
import Price from "../Components/Price";
import data from "../data/fence.json"
import FileInput from '../Components/FileInput'

class Fence extends React.Component {
    constructor(props) {
        super(props);
        this.handleSimpleStateChange=this.handleSimpleStateChange.bind(this)
        this.showBasic=this.showBasic.bind(this)
        this.handleMaterialChange=this.handleMaterialChange.bind(this)
        this.omitBasic=this.omitBasic.bind(this)

        this.state = {
            files: null,
            toggleBasic: true,
            basic: {
              material: '',
              style: '',
              height: '',
              length: '',
            },
            material: '',
            style: '',
            height: '',
            heightCustom: '',
            postSize: '',
            spacing: '',
            length: '',
            gateQty: ''
        };
    }

    omitBasic() {
      let {basic, ...newState} = this.state
      return newState
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

    showBasic() {this.setState({toggleBasic: !this.state.toggleBasic})}


    render() {
        const BASIC_SECTION={
            basic_length : {
                showIf : true,
                stateGroup : "basic.length",
                input : "number",
                title : "Length",
                state : this.state.basic.length,
                summary : "The length of the fence in feet"
            },
            basic_material : {
                showIf : true,
                stateGroup : "basic.material",
                list : data.material,
                title : "Wood Type",
                state : this.state.basic.material,
                summary : "The type of wood for the fence"
            },
            basic_height : {
                showIf : true,
                stateGroup : "basic.height",
                list : data.basicHeight,
                title : "Height",
                state : this.state.basic.height,
                summary : "The Height of the fence"
            },
            basic_style : {
                showIf : true,
                stateGroup : "basic.style",
                list : data.style,
                title : "Style of Fence",
                state : this.state.basic.style,
                summary : "The style of the fence",
            }
        }

        const ADVANCED_SECTION = {
            length : {
                showIf : true,
                stateGroup : "length",
                input : "number",
                title : "Length",
                state : this.state.length,
                summary : "The length of the fence",
            },
            material : {
                showIf : true,
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
                showIf : this.state.material,
                stateGroup : "style",
                list : this.state.material === "Metal" ? data.advancedStyle : data.style,
                title : "Style of Fence",
                state : this.state.style,
                summary : "The style of the fence",
                additionalClass : "childSelection"
            },

            postSize: {
                showIf: this.state.material && this.state.material !== "Metal",
                stateGroup : "postSize",
                list : data.postSize,
                title : "Post Size",
                state : this.state.postSize,
                summary : "The size of the fence posts",
                additionalClass : "childSelection"
            },
            spacing: {
                showIf: this.state.material && this.state.material !== "Metal",
                stateGroup : "spacing",
                input: "number",
                title : "Post Spacing",
                state : this.state.spacing,
                summary : "The space between the fence posts",
                additionalClass : "childSelection"
            },
            gateQty: {

            }
        }

        return (
            <div>
                <button onClick={this.showBasic} className="basic">
                    Switch to {this.state.toggleBasic ? "Advanced Request" : "Basic Request"}
                </button>

                <QuoteSection
                    defaultClickHandler={this.handleSimpleStateChange}
                    section={this.state.toggleBasic ? BASIC_SECTION : ADVANCED_SECTION}
                />

                <QuoteInfo
                    title="Fence Info"
                    handleChange={this.handleSimpleStateChange}
                    state={this.state}
                    stateList={this.state.toggleBasic ? {"Length": this.state.basic.length, "Material": this.state.basic.material, "Height": this.state.basic.height, "Style": this.state.basic.style}
                      : {"Length": this.state.length, "Material": this.state.material, "Height": this.state.heightCustom || this.state.height, "Style": this.state.style, "PostSize": this.state.postSize, "Post Spacing": this.state.spacing}
                    }
                />
                {!this.state.toggleBasic && <FileInput setFilesState={files => this.setState({files})}/> }

                {this.state.toggleBasic &&
                    <Price
                        type="fence"
                        requirements = {[this.state.basic.material, this.state.basic.height, this.state.basic.style, this.state.basic.length]}
                    />
                }

                <UserInput
                    handleChange={this.handleSimpleStateChange}
                    state={this.state.toggleBasic ? this.state.basic : this.omitBasic()}
                    requestType="Fence"
                    files={this.state.files}
                />
            </div>
        );
    }
}

export default Fence;
