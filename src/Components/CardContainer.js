import React from 'react'
import Card from './Card'

const CardContainer = props => {
    if ( props.list.length>0 ) {
        return (
            <section className="cardSection">
                <div className="title">
                    {props.title}
                </div>
                <span className="cardContainer">
          {props.list?.map( item =>
              <Card
                  key={item.key}
                  value={item.value}
                  imgSrc={item.imgSrc}
                  onChange={props.onChange}
                  stateGroup={props.stateGroup}
                  click={props.click}
                  selected={props.state === item.value ? "selectedState" : ""}
              />
          )}
        </span>
            </section>
        )
    }
    return null
}

export default CardContainer