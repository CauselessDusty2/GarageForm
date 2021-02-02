import React from 'react'
import CardContainer from "./CardContainer";
import PropTypes from 'prop-types'

const BasicQuoteSection = props => <section id="basicSection">
    {Object.keys(props.section).map( (section, i) => <>
        {props.section[section].showIf &&
            <CardContainer
                key={i}
                onChange={props.section[section].changeHandler || props.defaultClickHandler}
                stateGroup={props.section[section].stateGroup}
                list={props.section[section].list}
                title={props.section[section].title}
                state={props.section[section].state}
                customState={props.section[section].customState}
                input={props.section[section].input}
                summary={props.section[section].summary}
                additionalClass = {props.section[section].additionalClass}
            />
        }
    </>)}
</section>

BasicQuoteSection.propTypes = {
    section: PropTypes.shape({
        defaultClickHandler: PropTypes.object, // default click handler if none is passed
        changeHandler: PropTypes.object,
        stateGroup: PropTypes.string,
        list: PropTypes.string,
        title: PropTypes.string,
        state: PropTypes.object,
        customState: PropTypes.string,
        input: PropTypes.string,
        summary: PropTypes.string
    }),
}

export default BasicQuoteSection
