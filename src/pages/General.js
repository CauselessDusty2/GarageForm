import {React, useState} from 'react'
import '../App.css'
import UserInput from "../Components/UserInput";
//import QuoteInfo from "../Components/QuoteInfo";

const General = props => {
    const [additionalInfo, setAdditionalInfo] = useState("")
    const [files, setfiles] = useState("")
    const handleSimpleStateChange = value => setAdditionalInfo(value)
    const handleFileUpload = target => console.log(target)
    return(<span>
        <h1>General Request</h1>
        <input type="file" id="file" multiple name="file" accept="image/*, .pdf" onChange={(e) => handleFileUpload(e.target.files)}/>
        <section className="infoSection">
            <label>Request</label>
                <textarea
                    className="addInfoText textInput"
                    placeholder="Enter quote request"
                    value={additionalInfo}
                    onChange={(e) => handleSimpleStateChange(e.target.value)}/>
        </section>

        <UserInput
            state={{"Request": additionalInfo}}

        />
    </span>)

}

export default General
