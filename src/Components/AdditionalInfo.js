import React from 'react'

import Container from './Container'

import './QuoteInfo.css'

const AdditionalInfo = props => {
    return (
        <Container className="infoSection">
            <label>Additional Info</label>
            <textarea
                className="textInput"
                id="addInfoText"
                placeholder="Enter any other additional requests for your quote"
                value={props.state.additionalInfo}
                onChange={(e) => props.handleChange("additionalInfo",e.target.value)}/>
        </Container>
    )
}

export default AdditionalInfo
