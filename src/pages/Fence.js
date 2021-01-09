import React from 'react'
import '../App.css'
import BasicQuoteSection from "../Components/BasicQuoteSectionFence";
import QuoteInfo from '../Components/QuoteInfo'
import UserInput from "../Components/UserInput"
import Price from "../Components/Price";
import data from "../data/fence.json"

const HEIGHT = [
    {value: "5ft"},
    {value: "6ft", imgSrc: ""}
]

const POST_SIZE = [
    {value: "4x4"},
    {value: "6x6"}
]

class Fence extends React.Component {
    constructor(props) {
        super(props);
        this.handleSimpleStateChange=this.handleSimpleStateChange.bind(this)
        this.showBasic=this.showBasic.bind(this)

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

    handleSimpleStateChange(key, value) {this.setState({ [key]: value})}
    showBasic() {this.setState({basic: !this.state.basic})}

    render() {
        const BASIC_SECTION = {
            style : {
                if: true,
                stateGroup : "style",
                list : data.style,
                title : "Style of Fence",
                state : this.state.style,
                summary : "The style of the fence",
                changeHandler : this.handleSimpleStateChange
            },
            height : {
                if: true,
                stateGroup : "height",
                list : HEIGHT,
                title : "Height",
                state : this.state.height,
                summary : "The Height of the fence"
            },
            material : {
                if: true,
                stateGroup : "material",
                list : data.material,
                title : "Wood Type",
                state : this.state.material,
                summary : "The type of wood for the fence"
            },
            length : {
                if: true,
                stateGroup : "length",
                list : null,
                input : true,
                title : "Length",
                state : this.state.length,
                summary : "The length of the fence"
            }
        }

        const ADVANCED_SECTION = {
            length : {
                if: true,
                stateGroup : "length",
                input : true,
                title : "Length",
                state : this.state.length,
                summary : "The length of the fence"
            },
            material : {
                if: true,
                stateGroup : "material",
                list : data.advancedMaterial,
                title : "Wood Type",
                state : this.state.material,
                summary : "The type of wood for the fence"
            },
            height : {
                if: this.state.material,
                stateGroup : "height",
                list : this.state.material === "Metal" ? data.heightMetal : data.heightWood,
                title : "Height",
                state : this.state.height,
                summary : "The Height of the fence",
                customState : this.state.heightCustom
            },
            style : {
                if : this.state.material,
                stateGroup : "style",
                list : this.state.material === "Metal" ? data.advancedStyle : data.style,
                title : "Style of Fence",
                state : this.state.style,
                summary : "The style of the fence",
                changeHandler : this.handleSimpleStateChange
            },

            postSize: {
                if: this.state.material && this.state.material !== "Metal",
                stateGroup : "postSize",
                list : POST_SIZE,
                title : "Post Size",
                state : this.state.postSize,
                summary : "The size of the fence posts"
            },
            spacing: {
                if: this.state.material && this.state.material !== "Metal",
                stateGroup : "spacing",
                input: true,
                title : "Post Spacing",
                state : this.state.spacing,
                summary : "The space between the fence posts"
            },
            gateQty: {

            }
        }

        return (
            <div>
                <button onClick={this.showBasic} className="basic">
                    Switch to {this.state.basic ? "Advanced Request" : "Basic Request"}
                </button>

                {this.state.basic ?
                    <BasicQuoteSection
                        onClick={this.handleSimpleStateChange}
                        section={BASIC_SECTION}
                    />
                    :
                    <BasicQuoteSection
                        onClick={this.handleSimpleStateChange}
                        section={ADVANCED_SECTION}
                    />
                }
                <QuoteInfo
                    handleChange={this.handleSimpleStateChange}
                    state={this.state}
                />
                <Price
                    width={this.state.basicWidth}
                    length={this.state.basicLength}
                    siding={this.state.basicSiding}
                />
                <UserInput
                    handleChange={this.handleSimpleStateChange}
                    state={this.state}
                />
            </div>
        );
    }
}

export default Fence;


