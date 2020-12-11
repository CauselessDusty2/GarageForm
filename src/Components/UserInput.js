import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const handleSubmit = async(name, email, phoneNumber, state) => {
    console.log("Submit Clicked and user input has been validated")
    //state is an object that contains all the state values in App.js, I have destructured it so there is a variable for each value.
    //if an option was not selected the value of the variable will be ''

    /*let {basic, additionalInfo, basicWidth, basicLength, basicSiding, basicShingleColour,
        width, length, height, studSize, sidingType, sidingProfiles, mittenLine, gauge,
        hardieFinish, hardieSize, sidingColour, drywall, insulation, overheadsize,
        overheadSeries, overheadEliteStyle, overheadColour, overheadWindowPatern,
        overheadWindowType, overheadGlassfinish, overheadWindowFrameColour,
        overheadMuntinStyle, overheadMuntinColour, overheadSnapInDesign,
        overheadGlassType, overheadDecorativeHandle, overheadDecorativeHinge, gdoHP,
        gdoDrive, gdoOption, roofType, roofProfile, roofGauge, roofColour} = state
    */
}

const initialValues = {
    customerInfo:
        {
            name: '',
            email: '',
            phoneNumber: '',
        }
}

const phoneRegExp = /^[0-9]{3}[-]{1}[0-9]{3}[-]{1}[0-9]{4}$/

const UserInput = props => {
    return(
        <Formik
            initialValues={initialValues}
            validationSchema={Yup.object({
                customerInfo: Yup.object({
                    name: Yup.string().required('Required'),
                    email: Yup.string()
                        .email('Invalid email!')
                        .required('Required'),
                    phoneNumber: Yup.string().matches(phoneRegExp,"Not a valid phone number").required('Required')
                })
            })}
            onSubmit={values => handleSubmit(values.customerInfo.name, values.customerInfo.email, values.customerInfo.phoneNumber, props.state)}
        >
            {({ values, setFieldValue }) => (
                <Form className="infoSection">
                    {/*Only allows numeric input*/}
                    {values.customerInfo.phoneNumber.length !== 0
                    && parseInt(values.customerInfo.phoneNumber.charAt(values.customerInfo.phoneNumber.length-1)) !== 0
                    && !parseInt(values.customerInfo.phoneNumber.charAt(values.customerInfo.phoneNumber.length-1))
                    && setFieldValue('customerInfo.phoneNumber', values.customerInfo.phoneNumber.slice(0,values.customerInfo.phoneNumber.length-1))}

                    {/*adds a - when adding the fourth character*/}
                    {values.customerInfo.phoneNumber.length===4
                    && values.customerInfo.phoneNumber.charAt(3) !== '-'
                    && setFieldValue('customerInfo.phoneNumber', values.customerInfo.phoneNumber.slice(0,3) + '-' + values.customerInfo.phoneNumber.slice(3,4))}

                    {/*adds a - when adding the 8th character*/}
                    {values.customerInfo.phoneNumber.length===8
                    && values.customerInfo.phoneNumber.charAt(7) !== '-'
                    && setFieldValue('customerInfo.phoneNumber', values.customerInfo.phoneNumber.slice(0,7) + '-' + values.customerInfo.phoneNumber.slice(7,8))}

                    <label>Name</label>
                    <Field
                        name="customerInfo.name"
                        type="text"
                        placeholder="John Doe"
                        className="textInput"
                    />
                    <ErrorMessage
                        name="customerInfo.name">
                        {msg => <div className="errorMsg">{msg}</div>}
                    </ErrorMessage>

                    <label>Email</label>
                    <Field
                        name="customerInfo.email"
                        type="text"
                        placeholder="john@doe.com"
                        className="textInput"
                    />
                    <ErrorMessage
                        name="customerInfo.email">
                        {msg => <div className="errorMsg" >{msg}</div>}
                    </ErrorMessage>

                    <label>Phone Number</label>
                    <Field
                        name="customerInfo.phoneNumber"
                        type="text"
                        placeholder="123-456-7890"
                        className="textInput"
                    />
                    <ErrorMessage
                        name="customerInfo.phoneNumber">
                        {msg => <div className="errorMsg">{msg}</div>}
                    </ErrorMessage>

                    <button type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    )
}

export default UserInput