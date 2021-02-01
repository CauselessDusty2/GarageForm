import {React, useState} from 'react'
import '../App.css'
import UserInput from "../Components/UserInput";
//import QuoteInfo from "../Components/QuoteInfo";

const General = props => {
    const [additionalInfo, setAdditionalInfo] = useState("")
    const handleSimpleStateChange = value => setAdditionalInfo(value)

    return(<span>
        <h1>General Request</h1>
        <input type="file" multiple name="file"/>
        <section className="infoSection">
            <label>Request</label>
                <textarea
                    className="addInfoText textInput"
                    placeholder="Enter quote request"
                    value={additionalInfo}
                    onChange={(e) => handleSimpleStateChange(e.target.value)}/>
        </section>

        <UserInput
            state={additionalInfo}
        />
    </span>)

}

export default General