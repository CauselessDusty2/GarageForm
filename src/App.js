import React from 'react'
import './App.css'
import Garage from "./Garage";
import General from "./pages/General";
import Fence from "./pages/Fence";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
        this.state = {
            selected: ""
        }
    }

    handleClick = (selection) => {
        this.setState({selected: selection})
    }
    render() {
        return (<span>
            {this.state.selected === "" && <button onClick={e => this.handleClick("garage")}>Garage</button>}
            {this.state.selected === "" && <button onClick={e => this.handleClick("deck")}>Deck</button>}
            {this.state.selected === "" && <button onClick={e => this.handleClick("general")}>General</button>}
            {this.state.selected === "" && <button onClick={e => this.handleClick("window")}>Window</button>}
            {this.state.selected === "" && <button onClick={e => this.handleClick("entryDoor")}>Entry Door</button>}
            {this.state.selected === "" && <button onClick={e => this.handleClick("fence")}>Fence</button>}
            {this.state.selected === "" && <button onClick={e => this.handleClick("siding")}>Siding</button>}
            {this.state.selected === "" && <button onClick={e => this.handleClick("roofing")}>Roofing</button>}
            {this.state.selected === "" && <button onClick={e => this.handleClick("stormDoor")}>Storm Door</button>}
            {this.state.selected === "" && <button onClick={e => this.handleClick("customBuilding")}>Custom Building</button>}
            {this.state.selected === "" && <button onClick={e => this.handleClick("interiorDoor")}>Interior Door</button>}
            {this.state.selected !== "" && <button onClick={e => this.handleClick("")}>Back</button>}
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
