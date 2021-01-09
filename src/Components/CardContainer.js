import React from 'react'
import Card from './Card'

const CardContainer = props => {
    return (
        <section className={props.additionalClass + " cardSection"}>
            <div className="title">
                {props.title}
            </div>
            <summary className="cardContainerSummary">{props.summary}</summary>
            <span className="cardContainer">
                {props.list && props.list.map( item =>
                    <Card
                        key={item.key}
                        value={item.value}
                        imgSrc={item.imgSrc}
                        onChange={props.onChange}
                        stateGroup={props.stateGroup}
                        click={props.click}
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

export default CardContainer