import React from 'react'
import CardContainer from "./CardContainer";

const BasicQuoteSection = props => <section id="basicSection">
    {Object.keys(props.section).map(section => <>
        {props.section[section].if &&
            <CardContainer
                onChange={props.onClick}
                stateGroup={props.section[section].stateGroup}
                list={props.section[section].list}
                title={props.section[section].title}
                state={props.section[section].state}
                customState={props.section[section].customState}
                input={props.section[section].input}
                summary={props.section[section].summary}
            />
        }
    </>)}
</section>

export default BasicQuoteSection