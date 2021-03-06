import {React, useState} from 'react'

import Card from './Card'
import Container from './Container'

import '../App.css'
import './FileInput.css'

const imageFileTypes = [
  "image/apng",
  "image/bmp",
  "image/gif",
  "image/jpeg",
  "image/pjpeg",
  "image/png",
  "image/svg+xml",
  "image/tiff",
  "image/webp",
  "image/x-icon"
]
const fileTypes = [
  ...imageFileTypes, "application/pdf"
]

const FileInput = props => {
    const [files, setFiles] = useState(null)

    const handleFileUpload = files => {
      let fileList = []
      for( const file of files){
        if (fileTypes.includes(file.type)){
          fileList.push(file)
        } else {
          alert(`incorect file type\n${file.name} is not a valid pdf or image type`)
        }
      }
      setFiles(fileList)
      props.setFilesState(fileList)
    }

    return(
      <section>
        {props.title && <h2>{props.title}</h2>}
        <Container className="infoSection">
            <label for="file_upload" className="fileInputButton">Select images or pdfs to upload</label>
            <input type="file" id="file_upload" name="file_upload" className="file_upload" accept="image/*, .pdf" multiple onChange={(e) => handleFileUpload(e.target.files)}/>

            <div className="fileContainer">
              {files && Object.keys(files).map(key => {
                if (imageFileTypes.includes(files[key].type)){
                  return <Card value={files[key].name} imgSrc={URL.createObjectURL(files[key])} className="noSelect"/>
                } else if (fileTypes.includes(files[key].type)){
                  return <object data={URL.createObjectURL(files[key])} id="pdf">PDF</object>
                }
                return null
              })}
            </div>
        </Container>
      </section>
    )
}


export default FileInput
