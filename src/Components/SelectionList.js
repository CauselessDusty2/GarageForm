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
                  let value = props.stateList[key]

                  if (value) {
                    if (key.includes("SUBSECTION")) {
                      elem = <h3>{value}</h3>
                    } else if (key.includes("SECTION")) {
                      elem = <h2>{value}</h2>
                    } else {
                      if (typeof value === "object") {
                          elem = value.map(item => <li>{key}: {item}</li>)
                      } else {
                        elem = <li key={index}>{key}: {value}</li>
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
