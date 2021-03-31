import {React} from 'react'

import Container from './Container'

import './SelectionList.css'



const QuoteInfo = props => {
    return (
        <Container className="sidenav">
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
                      if (typeof props.stateList[key] === "object") {
                          elem = props.stateList[key].map(item => <li>{key}: {item}</li>)
                      } else {
                        elem = props.stateList[key] ? <li key={index}>{key}: {props.stateList[key]}</li> : null
                      }
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
