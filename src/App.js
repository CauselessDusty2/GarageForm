import React from 'react'
import './App.css'
import AdvancedQuoteSection from "./Components/AdvancedQuoteSection"
import BasicQuoteSection from './Components/BasicQuoteSection'
import QuoteInfo from './Components/QuoteInfo'
import UserInput from "./Components/UserInput"

class App extends React.Component {
    constructor(props) {
        super(props);
        this.showBasic = this.showBasic.bind(this);
        this.handleSimpleStateChange = this.handleSimpleStateChange.bind(this);
        this.handleSidingTypeChange=this.handleSidingTypeChange.bind(this)
        this.handleSidingProfileChange=this.handleSidingProfileChange.bind(this)
        this.handleGaugeChange=this.handleGaugeChange.bind(this)
        this.handleMittenLineChange=this.handleMittenLineChange.bind(this)

        this.state = {
            basic: true,
            additionalInfo: '',
            name: '',
            phoneNumber: '',
            email: '',
            width: '',
            length: '',
            basicVinylColour: '',
            shingleColour: '',
            height: '',
            studSize: '',
            sidingType: '',
            sidingProfile: '',
            mittenLine: '',
            gauge: '',
            sidingColour: ''
        };
    }

    showBasic() { this.setState({basic: !this.state.basic}) }
    handleSimpleStateChange(key, value) {this.setState({ [key]: value})}

    handleSidingTypeChange( state, sidingType) {
        if (sidingType !== this.state.sidingType ){
            this.setState({sidingType, sidingProfile: '', sidingColour: '', mittenLine: '', gauge: ''})
        }
    }

    handleSidingProfileChange(state, sidingProfile) {
        if (sidingProfile !== this.state.sidingProfile ){
            this.setState({sidingProfile, sidingColour: '', mittenLine: '', gauge: ''})
        }
    }

    handleGaugeChange(state, gauge) {
        if (gauge !== this.state.gauge ){
            this.setState({gauge, sidingColour: ''})
        }
    }

    handleMittenLineChange(state, mittenLine) {
        if (mittenLine !== this.state.mittenLine ){
            this.setState({mittenLine, sidingColour: ''})
        }
    }

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
                        state={this.state}
                        onClick={this.handleSimpleStateChange}
                        handleSidingTypeChange={this.handleSidingTypeChange}
                        handleSidingProfileChange={this.handleSidingProfileChange}
                        handleGaugeChange={this.handleGaugeChange}
                        handleMittenLineChange={this.handleMittenLineChange}
                    />
                }
                <QuoteInfo
                    handleChange={this.handleSimpleStateChange}
                    state={this.state}
                />
                <UserInput
                    handleChange={this.handleSimpleStateChange}
                    state={this.state}
                />
            </div>
        );
    }
}

export default App;
