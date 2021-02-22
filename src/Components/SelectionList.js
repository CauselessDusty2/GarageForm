import {React, useState} from 'react'

import Container from './Container'

import './SelectionList.css'



const QuoteInfo = props => {
    const [key, setkey] = useState("")
    return (
        <Container className="sidenav">
            {/*<form onSubmit={e => props.generateQuote(e, key)}>
                <label for="keyInput">Quote Key:</label>
                <input type="text" value={key} onChange={e => setkey(e.target.value)} name="keyInput" id="keyInput" placeholder="enter quote key here"/>
                <input type="submit" />
            </form>*/}
            <h1 id="infoHeader">
                {props.title}
            </h1>
            {props.stateList &&
              <ul id="selectionList">
                {Object.keys(props.stateList).map( (key, index) => {
                  let elem = null
                  if (props.stateList[key]) {
                    if (props.stateList[key].includes("SUBSECTION")) {
                      elem = <h3>{props.stateList[key].replace("SUBSECTION", "")}</h3>
                    } else if (props.stateList[key].includes("SECTION")) {
                      elem = <h2>{props.stateList[key].replace("SECTION", "")}</h2>
                    } else {
                      elem = props.stateList[key] ? <li key={index}>{key}: {props.stateList[key]}</li> : null
                    }
                  }
                  return elem
                })}
              </ul>
            }
        </Container>
    )
}

export default QuoteInfo
