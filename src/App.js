import React from 'react'
import './App.css'
import Garage from "./pages/Garage"
import General from "./pages/General"
import Fence from "./pages/Fence"
import Card from "./Components/Card"
import Siding from "./pages/Siding"
import Roofing from "./pages/Roofing"
import Container from './Components/Container'

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
            {!this.state.selected && <Container className="appContainer">
                <Card stateGroup="selected" value="Garage" onChange={this.handleSimpleStateChange}/>
                <Card stateGroup="selected" value="Deck" onChange={this.handleSimpleStateChange}/>
                <Card stateGroup="selected" value="General" onChange={this.handleSimpleStateChange}/>
                <Card stateGroup="selected" value="Window" onChange={this.handleSimpleStateChange}/>
                <Card stateGroup="selected" value="Entry Door" onChange={this.handleSimpleStateChange}/>
                <Card stateGroup="selected" value="Fence" onChange={this.handleSimpleStateChange}/>
                <Card stateGroup="selected" value="Siding" onChange={this.handleSimpleStateChange}/>
                <Card stateGroup="selected" value="Roofing" onChange={this.handleSimpleStateChange}/>
                <Card stateGroup="selected" value="Storm Door" onChange={this.handleSimpleStateChange}/>
                <Card stateGroup="selected" value="Custom Building" onChange={this.handleSimpleStateChange}/>
                <Card stateGroup="selected" value="Interior Door" onChange={this.handleSimpleStateChange}/>
            </Container>}
            {this.state.selected && <button onClick={e => this.handleClick("")}>Back</button>}
            {this.state.selected === "Garage" && <Garage />}
            {this.state.selected === "Deck" && <img src="https://lh3.googleusercontent.com/proxy/EMfKTp8lvIyAaRNUkafBR5vDr5Dkzwghyrg47GDRdcNyQSamT52IVGuuH_X6Alk2DENMtyTme1X2jRhjkrBXvqdVBmq3pXvf8Z6ekqh34j9E-8vqCEvH4jFZbgCUql0mZaaN2eq6Xw" height="120%" width="120%"/>}
            {this.state.selected === "General" && <General />}
            {this.state.selected === "Window" && <img src="https://lh3.googleusercontent.com/proxy/EMfKTp8lvIyAaRNUkafBR5vDr5Dkzwghyrg47GDRdcNyQSamT52IVGuuH_X6Alk2DENMtyTme1X2jRhjkrBXvqdVBmq3pXvf8Z6ekqh34j9E-8vqCEvH4jFZbgCUql0mZaaN2eq6Xw" height="120%" width="120%"/>}
            {this.state.selected === "Entry Door" && <img src="https://lh3.googleusercontent.com/proxy/EMfKTp8lvIyAaRNUkafBR5vDr5Dkzwghyrg47GDRdcNyQSamT52IVGuuH_X6Alk2DENMtyTme1X2jRhjkrBXvqdVBmq3pXvf8Z6ekqh34j9E-8vqCEvH4jFZbgCUql0mZaaN2eq6Xw" height="120%" width="120%"/>}
            {this.state.selected === "Fence" && <Fence />}
            {this.state.selected === "Siding" && <Siding />}
            {this.state.selected === "Roofing" && <Roofing />}
            {this.state.selected === "Storm Door" && <img src="https://lh3.googleusercontent.com/proxy/EMfKTp8lvIyAaRNUkafBR5vDr5Dkzwghyrg47GDRdcNyQSamT52IVGuuH_X6Alk2DENMtyTme1X2jRhjkrBXvqdVBmq3pXvf8Z6ekqh34j9E-8vqCEvH4jFZbgCUql0mZaaN2eq6Xw" height="120%" width="120%"/>}
            {this.state.selected === "Custom Building" && <img src="https://lh3.googleusercontent.com/proxy/EMfKTp8lvIyAaRNUkafBR5vDr5Dkzwghyrg47GDRdcNyQSamT52IVGuuH_X6Alk2DENMtyTme1X2jRhjkrBXvqdVBmq3pXvf8Z6ekqh34j9E-8vqCEvH4jFZbgCUql0mZaaN2eq6Xw" height="120%" width="120%"/>}
            {this.state.selected === "Interior Door" && <img src="https://lh3.googleusercontent.com/proxy/EMfKTp8lvIyAaRNUkafBR5vDr5Dkzwghyrg47GDRdcNyQSamT52IVGuuH_X6Alk2DENMtyTme1X2jRhjkrBXvqdVBmq3pXvf8Z6ekqh34j9E-8vqCEvH4jFZbgCUql0mZaaN2eq6Xw" height="120%" width="120%"/>}
        </span>);
    }
}

export default App;
