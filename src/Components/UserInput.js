import React from 'react'
import Email from './Email.js'

const UserInput = props => {
    return(
        <section className="infoSection">
            <label>Name</label>
            <input
                type="text"
                className="textInput"
                placeholder="Enter your name"
                value={props.state.name}
                onChange={(e) => props.handleChange("name", e.target.value)}
                id="name"/>

            <label>Phone Number</label>
            <input
                type="tel"
                className="textInput"
                placeholder="Enter your phone number"
                value={props.state.phoneNumber}
                onChange={(e) => props.handleChange("phoneNumber", e.target.value)}
                id="phoneNumber"/>

            <label>Email</label>
            <input
                type="email"
                className="textInput"
                placeholder="Enter your email address"
                value={props.state.email}
                onChange={(e) => props.handleChange("email", e.target.value)}
                id="email"/>

            <Email
                state={props.state}/>
        </section>
    )
}

export default UserInput