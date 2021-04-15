import React from 'react'
import './App.css'
import Garage from "./pages/Garage"
import General from "./pages/General"
import Fence from "./pages/Fence"
import Card from "./Components/Card"
import Siding from "./pages/Siding"
import Roofing from "./pages/Roofing"
import Container from './Components/Container'
import CustomBuilding from './pages/CustomBuilding'
import Shed from './pages/Shed'
import Deck from './pages/Deck'
import StormDoor from './pages/StormDoor'
import InteriorDoor from './pages/InteriorDoor'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
        this.handleSimpleStateChange = this.handleSimpleStateChange.bind(this)
        this.getClassName = this.getClassName.bind(this)
        this.state = {
            selected: ""
        }
    }

    getClassName = () => {
      const NO_QUOTE = [
        "General",
        "Window",
        "Entry Door",
        "Custom Building"
      ]

      return NO_QUOTE.includes(this.state.selected) ? false : true;
    }

    handleClick = (selection) => {
        this.setState({selected: selection})
    }

    handleSimpleStateChange = (key, value) => {this.setState({ [key]: value})}
    render() {
        return (<span>
            {!this.state.selected && <Container id="appContainer">
                <Card stateGroup="selected" value="General" onChange={this.handleSimpleStateChange}/>
                <Card stateGroup="selected" value="Custom Building" onChange={this.handleSimpleStateChange}/>
                <Card stateGroup="selected" value="Garage" onChange={this.handleSimpleStateChange}/>
                <Card stateGroup="selected" value="Shed" onChange={this.handleSimpleStateChange}/>
                <Card stateGroup="selected" value="Deck" onChange={this.handleSimpleStateChange}/>
                <Card stateGroup="selected" value="Fence" onChange={this.handleSimpleStateChange}/>
                <Card stateGroup="selected" value="Siding" onChange={this.handleSimpleStateChange}/>
                <Card stateGroup="selected" value="Roofing" onChange={this.handleSimpleStateChange}/>
                <Card stateGroup="selected" value="Storm Door" onChange={this.handleSimpleStateChange}/>
                <Card stateGroup="selected" value="Window" onChange={this.handleSimpleStateChange}/>
                <Card stateGroup="selected" value="Entry Door" onChange={this.handleSimpleStateChange}/>
                <Card stateGroup="selected" value="Interior Door" onChange={this.handleSimpleStateChange}/>
            </Container>}
            <div className={this.getClassName() && "page"}>
            {this.state.selected && <button onClick={e => this.handleClick("")} id="backButton">Back</button>}
            {this.state.selected === "Garage" && <Garage />}
            {this.state.selected === "Shed" && <Shed />}
            {this.state.selected === "Deck" && <Deck />}
            {this.state.selected === "General" && <General />}
            {this.state.selected === "Window" && <h1>Under Construction</h1>}
            {this.state.selected === "Entry Door" && <h1>Under Construction</h1>}
            {this.state.selected === "Fence" && <Fence />}
            {this.state.selected === "Siding" && <Siding />}
            {this.state.selected === "Roofing" && <Roofing />}
            {this.state.selected === "Storm Door" && <StormDoor />}
            {this.state.selected === "Custom Building" && <CustomBuilding />}
            {this.state.selected === "Interior Door" && <h1><InteriorDoor /></h1>}
            </div>
        </span>);
    }
}



export default App;
