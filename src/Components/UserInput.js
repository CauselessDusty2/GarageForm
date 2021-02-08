import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const handleSubmit = async(body) => {
    alert(body)
    //PLACE CODE HERE
}

const initialValues = {
    customerInfo:
        {
            name: '',
            email: '',
            phoneNumber: '',
        }
}

const phoneRegExp = /^(1? ?\(?)-?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(100, "Too Long")
    .required('Required'),
  email: Yup.string()
    .email('Invalid Email')
    .required('Required'),
  phoneNumber: Yup.string()
  .matches(phoneRegExp,"Not a valid phone number")
  .required('Required')
})

const getMessage = (requestType, name, email, phoneNumber, files, stateList) => {
  let body = ""
  body += `${requestType} quote request\n\n`
  body += `Customer Name: ${name}\n`
  body += `Customer Email: ${email}\n`
  body += `Customer Phone Number: ${phoneNumber}\n\n`

  {stateList &&
      Object.keys(stateList).map( (key, index) => {
        body+=  stateList[key] ? `${key}: ${stateList[key]}\n` : ""
      })
  }

  body += files ? "\nFiles:\n" : ""

  {files && Object.keys(files).map(key => {
    body+= `${files[key].name}\n`
  })}

  return body
}

const UserInput = props => {
    return(
        <Formik
            initialValues={initialValues}
            dirty
            validationSchema={validationSchema}
            onSubmit={values => handleSubmit(getMessage(props.requestType, values.name, values.email, values.phoneNumber, props.files, props.stateList))}
        >
            {({ errors, touched, dirty }) => (
                <Form className="infoSection">

                    <label>Name</label>
                    <Field
                        name="name"
                        type="text"
                        placeholder="John Doe"
                        className="textInput"
                    />
                    {errors.name && touched.name && <div>{errors.name}</div>}

                    <label>Email</label>
                    <Field
                        name="email"
                        type="text"
                        placeholder="john@doe.com"
                        className="textInput"
                    />
                    {errors.email && touched.email && <div>{errors.email}</div>}

                    <label>Phone Number</label>
                    <Field
                        name="phoneNumber"
                        type="text"
                        placeholder="123-456-7890"
                        className="textInput"
                    />
                    {errors.phoneNumber && touched.phoneNumber && <div>{errors.phoneNumber}</div>}

                    <button type="submit" disabled={!!errors.phoneNumber || !!errors.name || !!errors.email || !touched.name}>Submit</button>
                </Form>
            )}
        </Formik>
    )
}

export default UserInput
