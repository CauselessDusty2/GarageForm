import React from 'react'
import PropTypes from 'prop-types'

import './Card.css'

const getClickHandler = (className, disabled, handleClick) => {
  let clickHandler = null

  if (className!=="noSelect" && !disabled){
    clickHandler = handleClick
  }

  return clickHandler
}

const getClassNames = (disabled, selected, className) => {

}

const Card = props => {
    const handleClick = () => {
        props.onChange(props.stateGroup, props.value);
    }
    return(
        <div onClick={getClickHandler(props.className, props.disabled, handleClick)} className={["card", props.selected, props.className, props.disabled?"card-disabled":""].join(' ')}>

            {/* Image portion of the card */}
            <img src={props.imgSrc} className={["cardImage", props.disabled?"cardImage-disabled":""].join(' ')} alt={props.value}/>

            {/* Value or name portion of card */}
            <span className={["cardValue", props.disabled?"cardtext-disabled":""].join(' ')}>
                {props.value}
            </span>

            {/* Description of the card, if one is passed */}
            {props.description &&
                <div className={["cardDescription", props.disabled?"cardtext-disabled":""].join(' ')}>
                    {props.description}
                </div>
            }
        </div>
    )
}

Card.defaultProps = {
    imgSrc: "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-512.png"
}

Card.propTypes ={
    imgSrc: PropTypes.string, //The image that displays on the card
    onChange: PropTypes.func, //The change handler passed through the card container from a given quote form
    optionalDescription: PropTypes.string, //The description of the card
    selected: PropTypes.string, // A class name to style a card as selected
    stateGroup: PropTypes.string, // The name of the state the card is in
    value: PropTypes.string, //The value or name for the card
}

export default Card
