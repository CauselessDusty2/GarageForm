import React from 'react'

import Container from './Container'

import './QuoteInfo.css'

const QuoteInfo = props => {
    return (
        <Container className="infoSection">
            <label>Additional Info</label>
            <textarea
                className="textInput"
                id="addInfoText"
                placeholder="Enter any other additional requests for your quote"
                value={props.state.additionalInfo}
                onChange={(e) => props.handleChange("additionalInfo",e.target.value)}/>

            <h1 id="infoHeader">
                {props.title}
            </h1>
            {props.stateList &&
              <ul id="selectionList">
                {Object.keys(props.stateList).map( (key, index) => {
                  return props.stateList[key] ? <li key={index}>{key}: {props.stateList[key]}</li> : null
                })}
              </ul>
            }
        </Container>
    )
}

export default QuoteInfo
