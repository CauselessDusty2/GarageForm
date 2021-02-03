import React from 'react'

const QuoteInfo = props => {
    return (
        <section className="infoSection">
            <label>Additional Info</label>
            <textarea
                className="addInfoText textInput"
                placeholder="Enter any other additional requests for your quote"
                value={props.state.additionalInfo}
                onChange={(e) => props.handleChange("additionalInfo",e.target.value)}/>
            <h1 id="infoHeader">
                {props.title}
            </h1>

            {props.stateList &&
              <ul>
                {Object.keys(props.stateList).map( (key, index) => {
                  return props.stateList[key] ? <li key={index}>{key}: {props.stateList[key]}</li> : null
                })}
              </ul>
            }
        </section>
    )
}

export default QuoteInfo
