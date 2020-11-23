import React from 'react'

const Email = props => {
    const body = () => {
        let quoteType = "Garage"
        let body
        let emailText = "mailto:dustin.auger@starbuilding.ca?subject=Web Request: " + quoteType + " Quote&body=Garage Quote Request%0A%0A"
        let bodyAddInfo = "%0AAdditional Info:%0A" + props.state.additionalInfo + "%0A"
        let bodyName = "Name: " + props.state.name + "%0A"
        let bodyPhoneNumber = "Phone Number: " + props.state.phoneNumber + "%0A"
        let bodyEmail = "Email Address: " + props.state.email + "%0A"
        let newLine= "%0A"

        body = emailText + bodyName + bodyPhoneNumber + bodyEmail + newLine
        body += props.state.width && "Garage Width: " + props.state.width + newLine
        body += props.state.length && "Garage Length: " + props.state.length + newLine

        if ( props.state.basic ) {
            body += props.state.basicVinylColour && "Vinyl Siding Colour: " + props.state.basicVinylColour + newLine
            body += props.state.shingleColour && "Shingle Colour: " + props.state.shingleColour + newLine
        } else {
            body += props.state.height && "Height: " + props.state.height + newLine
            body += props.state.studSize && "Stud Size: " + props.state.studSize + newLine
            body += props.state.sidingType && "Siding Type: " + props.state.sidingType + newLine
            body += props.state.sidingProfile && "Siding Profile: " + props.state.sidingProfile + newLine
            body += props.state.mittenLine && "Siding Line: " + props.state.mittenLine + newLine
            body += props.state.gauge && "Siding Gauge: " + props.state.gauge + newLine
            body += props.state.sidingColour && "Siding Colour: " + props.state.sidingColour + newLine
        }

        body += newLine + bodyAddInfo
        return body
    }
    return (
        <a
            className="submit"
            href={body()}
            target="_blank"
            rel="noreferrer">
            Send Request Email
        </a>
    )
}

export default Email