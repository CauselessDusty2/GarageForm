import React from 'react'
import '../App.css'
import BasicQuoteSection from "../Components/BasicQuoteSectionFence";
import QuoteInfo from '../Components/QuoteInfo'
import UserInput from "../Components/UserInput"
import Price from "../Components/Price";
import data from "../data/garage.json"
//import {getProfileType} from "../helperFunctions/garage/getProfileType"
import * as garageFunctions from "../helperFunctions/garage.js"

class Garage extends React.Component {
    constructor(props) {
        super(props);
        this.handleGaugeChange=this.handleGaugeChange.bind(this)
        this.handleHardieFinishChange=this.handleHardieFinishChange.bind(this)
        this.handleHardieSizeChange=this.handleHardieSizeChange.bind(this)
        this.handleMittenLineChange=this.handleMittenLineChange.bind(this)
        this.handleOverheadGlassFinish=this.handleOverheadGlassFinish.bind(this)
        this.handleOverheadSeriesChange=this.handleOverheadSeriesChange.bind(this)
        this.handleOverheadWindowType=this.handleOverheadWindowType.bind(this)
        this.handleRoofGaugeChange=this.handleRoofGaugeChange.bind(this)
        this.handleRoofProfileChange=this.handleRoofProfileChange.bind(this)
        this.handleRoofTypeChange=this.handleRoofTypeChange.bind(this)
        this.handleSidingProfileChange=this.handleSidingProfileChange.bind(this)
        this.handleSidingTypeChange=this.handleSidingTypeChange.bind(this)
        this.handleSimpleStateChange=this.handleSimpleStateChange.bind(this)
        this.handleWindowPaternChange=this.handleWindowPaternChange.bind(this)
        this.showBasic=this.showBasic.bind(this)

        this.state = {
            basic: true,
            additionalInfo: '',
            name: '',
            phoneNumber: '',
            email: '',
            width: '',
            widthCustom: '',
            length: '',
            lengthCustom: '',
            basicWidth: '',
            basicLength: '',
            basicSiding: '',
            basicShingleColour: '',
            height: '',
            heightCustom: '',
            studSize: '',
            sidingType: '',
            sidingProfile: '',
            mittenLine: '',
            gauge: '',
            hardieFinish: '',
            hardieSize: '',
            sidingColour: '',
            drywall: '',
            insulation: '',
            overheadSize: '',
            overheadSeries: '',
            overheadEliteStyle: '',
            overheadColour: '',
            overheadWindowPatern: '',
            overheadWindowType: '',
            overheadGlassFinish: '',
            overheadWindowFrameColour: '',
            overheadMuntinStyle: '',
            overheadMuntinColour: '',
            overheadSnapInDesign: '',
            overheadGlassType: '',
            overheadDecorativeHandle: '',
            overheadDecorativeHinge: '',
            gdoHp: '',
            gdoDrive: '',
            gdoOption: '',
            roofType: '',
            roofProfile: '',
            roofGauge: '',
            roofColour: ''
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

    handleOverheadGlassFinish(state, overheadGlassFinish) {
        if ( overheadGlassFinish !== this.overheadGlassFinish ) {
            this.setState({overheadGlassFinish, overheadWindowFrameColour: '', overheadMuntinColour: ''})
        }
        if ( this.state.overheadGlassFinish === "Dark Tint Clear" ) {
            this.setState({overheadWindowType: ''})
        }
    }

    handleOverheadSeriesChange(state, overheadSeries) {
        if ( overheadSeries !== this.state.overheadSeries) {
            this.setState({
                overheadSeries,
                overheadEliteStyle: '',
                overheadColour: '',
                overheadWindowPatern: '',
                overheadWindowType: '',
                overheadGlassFinish: '',
                overheadWindowFrameColour: '',
                overheadMuntinStyle: '',
                overheadMuntinColour: '',
                overheadSnapInDesign: '',
                overheadGlassType: '',
                overheadDecorativeHandle: '',
                overheadDecorativeHinge: ''
            })
        }
    }

    handleOverheadWindowType(state, overheadWindowType) {
        if ( overheadWindowType !== this.state.overheadWindowType ) {
            this.setState({overheadWindowType, overheadMuntinStyle: '', overheadMuntinColour: '', overheadSnapInDesign: ''})
        }
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
            this.setState({roofType, roofProfile: '', roofGauge: '', roofColour: ''})
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

    handleSimpleStateChange(key, value) {this.setState({ [key]: value})}

    handleWindowPaternChange(state, overheadWindowPatern) {
        if (overheadWindowPatern !== this.state.overheadWindowPatern && overheadWindowPatern === "None") {
            this.setState({overheadWindowPatern, overheadWindowType: '', overheadGlassFinish: '', overheadWindowFrameColout:'', overheadMuntinStyle: '', overheadMuntinColour: '', overheadSnapInDesign: '', overheadGlassType: ''})
        } else if (overheadWindowPatern !== this.state.overheadWindowPatern) {
            this.setState({overheadWindowPatern})
        }
    }

    showBasic() {this.setState({basic: !this.state.basic})}

    render() {
        const BASIC_SECTION={
            width : {
                showIf : true,
                stateGroup : "basicWidth",
                list : this.state.basicLength <= 30 ? data.width : data.widthAlt,
                title : "Width",
                state : this.state.basicWidth,
                summary : "The width of the garage means the gable end of the garage, the side that the overhead door will be on"
            },
            length : {
                showIf : true,
                stateGroup : "basicLength",
                list : this.state.basicWidth ? this.state.basicWidth < 16 ? data.lengthAlt : data.length : data.length,
                title : "Length",
                state : this.state.basicLength,
                summary : "The length of the garage means the eave end of the garage, the side that the man door will be on"
            },
            siding : {
                showIf : true,
                stateGroup : "basicSiding",
                list : data.siding,
                title : "Siding",
                state : this.state.basicSiding,
                summary : "The garage can either have Mitten vinyl siding in one of three stocked colours, or sheathing only"
            },
            shingleColour : {
                showIf : true,
                stateGroup : "basicShingleColour",
                list : data.shingleColour,
                title : "Shingle Colour",
                state : this.state.basicShingleColour,
                summary : "The duration colours come in 10 different colour option"
            }
        }

        const ADVANCED_SECTION = {
          width : {
              showIf : true,
              stateGroup : "width",
              list : this.state.length <= 30 ? data.width : data.widthAlt,
              title : "Width",
              state : this.state.width,
              summary : "The width of the garage means the gable end of the garage, the side that the overhead door will be on"
          },
          length : {
              showIf : true,
              stateGroup : "length",
              list : this.state.width ? this.state.width < 16 ? data.lengthAlt : data.length : data.length,
              title : "Length",
              state : this.state.length,
              summary : "The length of the garage means the eave end of the garage, the side that the man door will be on"
          },
          height : {
              showIf : true,
              stateGroup : "height",
              list : data.height,
              title : "Height",
              state : this.state.height,
              summary : "The height of the garage walls, measured from the ground to the bottom of the roof line"
          },
          studSize : {
              showIf : true,
              stateGroup : "studSize",
              list : data.studSize,
              title : "Stud Size",
              state : this.state.studSize,
              summary : "The size of the studs for the walls, either 2x4 or 2x6 studs"
          },
          drywall : {
              showIf : true,
              stateGroup : "drywall",
              list : data.yesNo,
              title : "Include Drywall",
              state : this.state.drywall,
              summary : "Option to add drywall"
          },
          insulation : {
              showIf : true,
              stateGroup : "insulation",
              list : data.yesNo,
              title : "Include Insulation",
              state : this.state.insulation,
              summary : "Option to include batt insulation between studs"
          },
          sidingType : {
              showIf : true,
              stateGroup : "sidingType",
              list : data.sidingType,
              title : "Siding Type",
              state : this.state.sidingType,
              summary : "The diferent types of siding for the garage, vinyl, metal, engineered, stucco prep",
              changeHandler : this.handleSidingTypeChange
          },
          sidingProfile : {
              showIf : garageFunctions.getProfileType(this.state.sidingType),
              stateGroup : "sidingProfile",
              list : garageFunctions.getProfileType(this.state.sidingType),
              title : "Siding Profile",
              state : this.state.sidingProfile,
              summary : "The different profile options for the siding type",
              changeHandler : this.handleSidingProfileChange,
              additionalClass : "childSelection"
          },
          mittenLine : {
              showIf : garageFunctions.getMittenLineType(this.state.sidingProfile),
              stateGroup : "mittenLine",
              list : garageFunctions.getMittenLineType(this.state.sidingProfile),
              title : "Siding Product Line",
              state : this.state.mittenLine,
              summary : "The different mitten product lines",
              changeHandler : this.handleMittenLineChange,
              additionalClass : "childSelection"
          },
          gauge : {
              showIf : garageFunctions.getGauge(this.state.sidingProfile),
              stateGroup : "gauge",
              list : garageFunctions.getGauge(this.state.sidingProfile),
              title : "Gauge",
              state : this.state.gauge,
              summary : "The gauge of the metal",
              changeHandler : this.handleGaugeChange,
              additionalClass : "childSelection"
          },
        }

        return (
            <div>
                <button onClick={this.showBasic} className="basic">
                    Switch to {this.state.basic ? "Advanced Request" : "Basic Request"}
                </button>

                <BasicQuoteSection
                    defaultClickHandler={this.handleSimpleStateChange}
                    section={this.state.basic ? BASIC_SECTION : ADVANCED_SECTION}
                />

                <QuoteInfo
                    handleChange={this.handleSimpleStateChange}
                    state={this.state}
                />

                {this.state.basic &&
                    <Price
                        type="garage"
                        requirements = {[this.state.basicWidth, this.state.basicLength, this.state.basicSiding, this.state.basicShingleColour]}
                        width={this.state.basicWidth}
                        length={this.state.basicLength}
                        siding={this.state.basicSiding}
                        shingleColour={this.state.basicShingleColour}
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

export default Garage;
