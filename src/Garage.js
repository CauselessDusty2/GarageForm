import React from 'react'
import './App.css'
import AdvancedQuoteSection from "./Components/AdvancedQuoteSection"
import BasicQuoteSection from './Components/BasicQuoteSection'
import QuoteInfo from './Components/QuoteInfo'
import UserInput from "./Components/UserInput"
import Price from "./Components/Price";

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
        return (
            <div>
                <button onClick={this.showBasic} className="basic">
                    Switch to {this.state.basic ? "Advanced Request" : "Basic Request"}
                </button>

                {this.state.basic ?
                    <BasicQuoteSection
                        onClick={this.handleSimpleStateChange}
                        state={this.state}
                    />
                    :
                    <AdvancedQuoteSection
                        handleGaugeChange={this.handleGaugeChange}
                        handleHardieFinishChange={this.handleHardieFinishChange}
                        handleHardieSizeChange={this.handleHardieSizeChange}
                        handleMittenLineChange={this.handleMittenLineChange}
                        handleOverheadGlassFinish={this.handleOverheadGlassFinish}
                        handleOverheadSeriesChange={this.handleOverheadSeriesChange}
                        handleOverheadWindowType={this.handleOverheadWindowType}
                        handleRoofGaugeChange={this.handleRoofGaugeChange}
                        handleRoofProfileChange={this.handleRoofProfileChange}
                        handleRoofTypeChange={this.handleRoofTypeChange}
                        handleSidingProfileChange={this.handleSidingProfileChange}
                        handleSidingTypeChange={this.handleSidingTypeChange}
                        handleWindowPaternChange={this.handleWindowPaternChange}
                        onClick={this.handleSimpleStateChange}
                        state={this.state}
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

export default Garage;
