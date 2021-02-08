import React from 'react'
import CardContainer from "./CardContainer";
import PropTypes from 'prop-types'

const showList = showIf => !(showIf === undefined || showIf) ? false : true

const BasicQuoteSection = props => <section id="basicSection">
    {Object.keys(props.section).map( (section, i) => <>
        {showList(props.section[section].showIf) &&
            <CardContainer
                key={i}
                {...props.section[section]}
                customClickHandler={props.defaultClickHandler}
                onChange={props.section[section].changeHandler || props.defaultClickHandler}
            />
        }
    </>)}
</section>

BasicQuoteSection.propTypes = {
    customClickHandler: PropTypes.object,
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
