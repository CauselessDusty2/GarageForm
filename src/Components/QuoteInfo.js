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
            <h1 id="quoteInfoHeader">
                Garage Info
            </h1>

            {props.state.basic ? <ul>
                {props.state.basicWidth &&<li>Width: {props.state.basicWidth}</li>}
                {props.state.basicLength &&<li>Length: {props.state.basicLength}</li>}
                {props.state.basicSiding && <li>Siding: {props.state.basicSiding}</li>}
                {props.state.basicShingleColour && <li>Shingle Colour: {props.state.basicShingleColour}</li>}
            </ul>:<ul>
                {props.state.width &&<li>Width: {props.state.width}</li>}
                {props.state.length &&<li>Length: {props.state.length}</li>}
                {props.state.height && <li>Height: {props.state.height}</li>}
                {props.state.studSize && <li>Stud Size: {props.state.studSize}</li>}
                {props.state.drywall &&<li>Drywall: {props.state.drywall}</li>}
                {props.state.insulation && <li>Insulation: {props.state.insulation}</li>}
                {props.state.sidingType && <li>Siding Type: {props.state.sidingType}</li>}
                {props.state.sidingProfile && <li>Siding Profile: {props.state.sidingProfile}</li>}
                {props.state.mittenLine && <li>Siding Line: {props.state.mittenLine}</li>}
                {props.state.gauge && <li>Siding Gauge: {props.state.gauge}</li>}
                {props.state.hardieFinish && <li>Siding Finish: {props.state.hardieFinish}</li>}
                {props.state.hardieSize && <li>Siding Size: {props.state.hardieSize}</li>}
                {props.state.sidingColour && <li>Siding Colour: {props.state.sidingColour}</li>}
                {props.state.roofType && <li>Roofing Type: {props.state.roofType}</li>}
                {props.state.roofProfile && <li>Roofing Profile: {props.state.roofProfile}</li>}
                {props.state.roofGauge && <li>Roofing Metal Gauge: {props.state.roofGauge}</li>}
                {props.state.roofColour && <li>Roofing Colour: {props.state.roofColour}</li>}
                {props.state.overheadSize && <li>Overhead Door Size: {props.state.overheadSize}</li>}
                {props.state.overheadSeries && <li>Overhead Door Series: {props.state.overheadSeries}</li>}
                {props.state.overheadEliteStyle && <li>Overhead Door Style: {props.state.overheadEliteStyle}</li>}
                {props.state.overheadColour && <li>Overhead Door Colour: {props.state.overheadColour}</li>}
                {props.state.overheadDecorativeHandle && <li>Overhead Door Decorative Handle: {props.state.overheadDecorativeHandle}</li>}
                {props.state.overheadDecorativeHinge && <li>Overhead Door Decorative Glass: {props.state.overheadDecorativeHinge}</li>}
                {props.state.overheadWindowPatern && <li>Overhead Door Window Patern: {props.state.overheadWindowPatern}</li>}
                {props.state.overheadGlassType && <li>Overhead Door Glass Type: {props.state.overheadGlassType}</li>}
                {props.state.overheadGlassFinish && <li>Overhead Door Glass Finish: {props.state.overheadGlassFinish}</li>}
                {props.state.overheadWindowType && <li>Overhead Door Window Type: {props.state.overheadWindowType}</li>}
                {props.state.overheadWindowFrameColour && <li>Overhead Door Frame Colour: {props.state.overheadWindowFrameColour}</li>}
                {props.state.overheadMuntinStyle && <li>Overhead Door Muntin Style: {props.state.overheadMuntinStyle}</li>}
                {props.state.overheadMuntinColour && <li>Overhead Door Muntin Colour: {props.state.overheadMuntinColour}</li>}
                {props.state.overheadSnapInDesign && <li>Overhead Door Snap In Design: {props.state.overheadSnapInDesign}</li>}
                {props.state.gdoHp && <li>Garage Door Opener Horse Power: {props.state.gdoHp}</li>}
                {props.state.gdoDrive && <li>Garage Door Opener Drive Type: {props.state.gdoDrive}</li>}
                {props.state.gdoOption && <li>Garage Door Opener Additional Options: {props.state.gdoOption}</li>}
            </ul>}
        </section>
    )
}

export default QuoteInfo