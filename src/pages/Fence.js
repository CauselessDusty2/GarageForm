import React from 'react'
import '../App.css'
import QuoteSection from "../Components/QuoteSection";
import QuoteInfo from '../Components/QuoteInfo'
import UserInput from "../Components/UserInput"
import Price from "../Components/Price";
import data from "../data/fence.json"

class Fence extends React.Component {
    constructor(props) {
        super(props);
        this.handleSimpleStateChange=this.handleSimpleStateChange.bind(this)
        this.showBasic=this.showBasic.bind(this)
        this.handleMaterialChange=this.handleMaterialChange.bind(this)

        this.state = {
            basic: true,
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

    handleSimpleStateChange(key, value) {this.setState({ [key]: value})}

    showBasic() {this.setState({basic: !this.state.basic})}


    render() {
        const BASIC_SECTION={
            length : {
                showIf : true,
                stateGroup : "length",
                input : "number",
                title : "Length",
                state : this.state.length,
                summary : "The length of the fence in feet"
            },
            material : {
                showIf : true,
                stateGroup : "material",
                list : data.material,
                title : "Wood Type",
                state : this.state.material,
                summary : "The type of wood for the fence"
            },
            height : {
                showIf : true,
                stateGroup : "height",
                list : data.basicHeight,
                title : "Height",
                state : this.state.height,
                summary : "The Height of the fence"
            },
            style : {
                showIf : true,
                stateGroup : "style",
                list : data.style,
                title : "Style of Fence",
                state : this.state.style,
                summary : "The style of the fence",
                changeHandler : this.handleSimpleStateChange
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
                    Switch to {this.state.basic ? "Advanced Request" : "Basic Request"}
                </button>

                <QuoteSection
                    defaultClickHandler={this.handleSimpleStateChange}
                    section={this.state.basic ? BASIC_SECTION : ADVANCED_SECTION}
                />

                <QuoteInfo
                    title="Fence Info"
                    handleChange={this.handleSimpleStateChange}
                    state={this.state}
                    stateList={this.state.basic ? {"Length": this.state.length, "Material": this.state.material, "Height": this.state.height, "Style": this.state.style}
                      : {"Length": this.state.length, "Material": this.state.material, "Height": this.state.heightCustom || this.state.height, "Style": this.state.style, "PostSize": this.state.postSize, "Post Spacing": this.state.spacing}
                    }
                />

                {this.state.basic &&
                    <Price
                        type="fence"
                        requirements = {[this.state.material, this.state.height, this.state.style, this.state.length]}
                    />
                }

                <UserInput
                    handleChange={this.handleSimpleStateChange}
                    state={this.state}
                />
            </div>
        );
    }
}

export default Fence;
