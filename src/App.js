import React from 'react'
import './App.css'
import Garage from "./pages/Garage";
import General from "./pages/General";
import Fence from "./pages/Fence";
import Card from "./Components/Card"

class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
        this.handleSimpleStateChange = this.handleSimpleStateChange.bind(this)
        this.state = {
            selected: ""
        }
    }

    handleClick = (selection) => {
        this.setState({selected: selection})
    }

    handleSimpleStateChange = (key, value) => {this.setState({ [key]: value})}
    render() {
        return (<span>
            {!this.state.selected && <span className="appContainer">
                <Card stateGroup="selected" value="garage" onChange={this.handleSimpleStateChange}/>
                <Card stateGroup="selected" value="deck" onChange={this.handleSimpleStateChange}/>
                <Card stateGroup="selected" value="general" onChange={this.handleSimpleStateChange}/>
                <Card stateGroup="selected" value="window" onChange={this.handleSimpleStateChange}/>
                <Card stateGroup="selected" value="entryDoor" onChange={this.handleSimpleStateChange}/>
                <Card stateGroup="selected" value="fence" onChange={this.handleSimpleStateChange}/>
                <Card stateGroup="selected" value="siding" onChange={this.handleSimpleStateChange}/>
                <Card stateGroup="selected" value="roofing" onChange={this.handleSimpleStateChange}/>
                <Card stateGroup="selected" value="stormDoor" onChange={this.handleSimpleStateChange}/>
                <Card stateGroup="selected" value="customBuilding" onChange={this.handleSimpleStateChange}/>
                <Card stateGroup="selected" value="interiorDoor" onChange={this.handleSimpleStateChange}/>
            </span>}
            {this.state.selected && <button onClick={e => this.handleClick("")}>Back</button>}
            {this.state.selected === "garage" && <Garage />}
            {this.state.selected === "deck" && <span>Deck quote generator</span>}
            {this.state.selected === "general" && <General/>}
            {this.state.selected === "window" && <span>Deck Window generator</span>}
            {this.state.selected === "entryDoor" && <span>Entry Door quote generator</span>}
            {this.state.selected === "fence" && <Fence />}
            {this.state.selected === "siding" && <span>Siding quote generator</span>}
            {this.state.selected === "roofing" && <span>Roofing quote generator</span>}
            {this.state.selected === "stormDoor" && <span>Storm Door quote generator</span>}
            {this.state.selected === "customBuilding" && <span>Custom Building quote generator</span>}
            {this.state.selected === "interiorDoor" && <span>Interior Door quote generator</span>}
        </span>);
    }
}

export default App;
