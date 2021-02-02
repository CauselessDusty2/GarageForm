import React from 'react'
import Card from './Card'
import PropTypes from 'prop-types'

const CardContainer = props => {
    return (
        <section className={props.additionalClass + " cardSection"}>
            <div className="title">
                {props.title}
            </div>
            <summary className="cardContainerSummary">{props.summary}</summary>
            <span className="cardContainer">
                {props.list && props.list.map( (item, i)=>
                    <Card
                        key={i}
                        value={item.value}
                        imgSrc={item.imgSrc}
                        onChange={props.onChange}
                        stateGroup={props.stateGroup}
                        selected={props.state === item.value ? "selectedState" : ""}
                        description={item?.description}
                    />
                )}
                {props.input && <input
                    className={"textInput"}
                    type="text"
                    onChange={e => {
                        /^[0-9]*$/.test(e.target.value) &&
                        props.onChange(props.stateGroup, e.target.value)
                    }}
                    value={props.state}
                    placeholder="enter width in feet"
                />}
                {props.state === "Other" && <input
                    className={"textInput"}
                    type="text"
                    placeholder="Enter custom value"
                    value={props.customState}
                    onChange={e => {
                        /^[0-9]*$/.test(e.target.value) &&
                        props.onChange(props.stateGroup + "Custom", e.target.value)
                    }}
                />}
            </span>
        </section>
    )
}

CardContainer.propTypes ={
    additionalClass: PropTypes.string, //Any additional classNames to add to the card container
    imgSrc: PropTypes.string,//The image source for the card
    list: PropTypes.array, //the list of items to populate the cards in the container
    onChange: PropTypes.func, //click handler
    state: PropTypes.string, //The state of the quote form
    stateGroup: PropTypes.string, //The state this container effects
    summary: PropTypes.string, //the summary for the card section
    title: PropTypes.string, //The title for the container
    value: PropTypes.string,//The value of the card
}

export default CardContainer
