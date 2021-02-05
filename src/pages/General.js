import {React, useState} from 'react'
import '../App.css'
import UserInput from "../Components/UserInput"
import FileInput from '../Components/FileInput'
//import QuoteInfo from "../Components/QuoteInfo";



const General = props => {
    const [additionalInfo, setAdditionalInfo] = useState("")
    const [files, setFiles] = useState(null)
    const handleSimpleStateChange = value => setAdditionalInfo(value)

    return(<span>
        <h1>General Request</h1>

        <section className="infoSection" id="general">

            <label>Request</label>
                <textarea
                    className="addInfoText textInput"
                    placeholder="Enter quote request"
                    value={additionalInfo}
                    onChange={(e) => handleSimpleStateChange(e.target.value)}/>
        </section>
        <FileInput setFilesState={setFiles}/>
        <UserInput
            state={{"Request": additionalInfo}}
            requestType="General"
            files={files}
        />
    </span>)

}

export default General
