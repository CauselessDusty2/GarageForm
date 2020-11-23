import React from 'react'

const Card = props => {
    Card.defaultProps = {
        imgSrc: "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-512.png"
    }

    const handleClick = () => {
        props.onChange(props.stateGroup, props.value);
    }

    return(
        <div onClick={handleClick} className={"card " + props.selected}>
            <img src={props.imgSrc || Card.defaultProps.imgSrc} className="cardImage" alt="Item"/>
            <span className="cardValue">
                {props.value}
            </span>
        </div>
    )
}

export default Card