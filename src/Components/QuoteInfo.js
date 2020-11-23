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
            <h1>
                Garage Info
            </h1>

            <ul>
                {props.state.width &&
                <li>
                    Width: {props.state.width}
                </li>
                }
                {props.state.length &&
                <li>
                    Length: {props.state.length}
                </li>
                }
                {props.state.basic ? <>
                    {props.state.basicVinylColour && <li>Vinyl Siding Colour: {props.state.basicVinylColour}</li>}
                    {props.state.shingleColour && <li>Shingle Colour: {props.state.shingleColour}</li>}
                </>:<>
                    {props.state.height && <li>Height: {props.state.height}</li>}
                    {props.state.studSize && <li>Stud Size: {props.state.studSize}</li>}
                    {props.state.sidingType && <li>Siding Type: {props.state.sidingType}</li>}
                    {props.state.sidingProfile && <li>Siding Profile: {props.state.sidingProfile}</li>}
                    {props.state.mittenLine && <li>Siding Line: {props.state.mittenLine}</li>}
                    {props.state.gauge && <li>Siding Gauge: {props.state.gauge}</li>}
                    {props.state.sidingColour && <li>Siding Colour: {props.state.sidingColour}</li>}
                </>
                }
            </ul>
        </section>
    )
}

export default QuoteInfo