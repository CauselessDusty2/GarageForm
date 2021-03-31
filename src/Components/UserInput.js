import React from 'react'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'

import Container from './Container'

import './UserInput.css'

const handleSubmit = (requestType, name, email, phoneNumber, files, stateList) => {
  let formData = new FormData();

  let body = getMessage(requestType, name, email, phoneNumber, files, stateList)
  let subject = `Web Request: ${requestType}`

  formData.append('Customer Name', name)
  formData.append('Customer Email', email)
  formData.append('Customer Phone Number', phoneNumber)
  formData.append('subject', subject)

  for (let file in files) {
    formData.append(files[file].name, files[file], files[file].name)
  }

  for (let key in stateList) {
    if (stateList[key]){
      formData.append(key, stateList[key])
    }
  }

  // for (let key of formData.entries()) {
  //     console.log(key[0], key[1])
  // }
  console.log(body)
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
  body += `Customer Phone Number: ${phoneNumber}\n`

  {stateList &&
      Object.keys(stateList).map( (key, index) => {
        let res = ""
        if (stateList[key]) {
          //If the value inclusdes SUBSECTION add a new line above
          if (stateList[key].includes("SUBSECTION")) {
              res = `\n${stateList[key].replace("SUBSECTION", "")}\n`
          //If the value inclusdes SECTION add a new line above and below
          } else if (stateList[key].includes("SECTION")) {
              res = `\n${stateList[key].replace("SECTION", "")}\n\n`
          } else if (stateList[key]){
            //for files and multi select items
            if (typeof stateList[key] === "object") {
                res = stateList[key].map(item => `\u2022 ${key}: ${item}\n`)
            } else {
                res = `\u2022 ${key}: ${stateList[key]}\n`
            }
          }
        }

        body += res
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
            onSubmit={values => handleSubmit(props.requestType, values.name, values.email, values.phoneNumber, props.files, props.stateList)}
        >
            {({ errors, touched, dirty }) => (
                <Container className="infoSection">
                    <Form>
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

                        <button type="submit" id="submitButton" disabled={!!errors.phoneNumber || !!errors.name || !!errors.email || !touched.name}>Submit</button>
                    </Form>
                </Container>
            )}
        </Formik>
    )
}

export default UserInput
