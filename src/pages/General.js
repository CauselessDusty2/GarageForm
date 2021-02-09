import {React, useState} from 'react'

import UserInput from "../Components/UserInput"
import FileInput from '../Components/FileInput'
import Container from '../Components/Container'

const General = props => {
    const [additionalInfo, setAdditionalInfo] = useState("")
    const [files, setFiles] = useState(null)
    const handleSimpleStateChange = value => setAdditionalInfo(value)

    return(<span>
        <h1>General Request</h1>
        <Container className="infoSection" id="general">
            <label>Request</label>
                <textarea
                    className="addInfoText textInput"
                    placeholder="Enter quote request"
                    value={additionalInfo}
                    onChange={(e) => handleSimpleStateChange(e.target.value)}/>
        </Container>

        <FileInput setFilesState={setFiles}/>

        <UserInput
            stateList={{"Request": additionalInfo}}
            requestType="General"
            files={files}
        />
    </span>)

}

export default General
