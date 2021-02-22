import {React, useState} from 'react'

import UserInput from "../Components/UserInput"
import FileInput from '../Components/FileInput'
import Container from '../Components/Container'

const CustomBuilding = props => {
    const [additionalInfo, setAdditionalInfo] = useState("")
    const [files, setFiles] = useState(null)
    const handleSimpleStateChange = value => setAdditionalInfo(value)

    return(<span>
        <h1>Custom Building Request</h1>
        <p>A stamped engineered drawing is required to quote a custom building</p>

        <FileInput title="ATTACH STAMPED ENGINEERED DRAWINGS" setFilesState={setFiles}/>

        {files && files.length >= 1 &&
          <Container className="infoSection" id="general">
              <label>Additional Info</label>
                  <textarea
                      className="addInfoText textInput"
                      placeholder="Enter quote request"
                      value={additionalInfo}
                      onChange={(e) => handleSimpleStateChange(e.target.value)}/>
          </Container>
        }

        {files && files.length >= 1 &&
          <UserInput
              stateList={{"Additional Info": additionalInfo}}
              requestType="Custom Building"
              files={files}
          />
        }

    </span>)

}

export default CustomBuilding
