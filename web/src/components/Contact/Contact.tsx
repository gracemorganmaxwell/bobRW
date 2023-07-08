import { useState } from 'react'

import {
  TextField,
  TextAreaField,
  Submit,
  Form,
  SubmitHandler,
  FieldError,
  EmailField,
  DatetimeLocalField,
} from '@redwoodjs/forms'
import { MetaTags } from '@redwoodjs/web'
import { Toaster } from '@redwoodjs/web/dist/toast'
const ContactPage = () => {
  const [formType, setFormType] = useState('')
  const onSubmit: SubmitHandler<formValues> = (data) => {
    if (formType === 'onsite free quote' && !data.when) {
      alert('Please select a date and time for the visit.')
      return
    }
    console.log(data)
  }

  interface formValues {
    contactType: string
    firstName: string
    lastName: string
    email: string
    address: string
    contactNumber: string
    message: string
    when?: string
  }

  return (
    <>
      <MetaTags title="Contact" description="Contact page" />

      <div>
        <h1>Contact & Booking form:</h1>
        <h3>
          Book a free onsite quote, or get in touch with any queries you and we
          will be touch.
        </h3>

        <Form onSubmit={onSubmit} config={{ mode: 'onBlur' }}>
          <label htmlFor="contactType">Form Type:</label>
          <select
            required
            name="contactType"
            onChange={(e) => setFormType(e.target.value)}
          >
            <option value="">Choose an option:</option>
            <option value="onsite free quote">Onsite Free Quote</option>
            <option value="inquiry">Inquiry</option>
          </select>
          <br />
          {formType === 'onsite free quote' && (
            <>
              <label htmlFor="when">Date and Time for Visit:</label>
              <DatetimeLocalField name="when" />
            </>
          )}
          <label htmlFor="first name">First Name:</label>
          <TextField name="first name" validation={{ required: true }} />
          <FieldError name="first name" />
          <label htmlFor="last name">Last Name:</label>
          <TextField name="last name" validation={{ required: true }} />
          <FieldError name="last name" />
          <label htmlFor="email">Email:</label>
          <EmailField
            name="email address"
            validation={{
              required: true,
              pattern: {
                value: /[^@]+@[^.]+\..+/,
                message: 'Please enter a valid email address',
              },
            }}
          />
          <FieldError name="email address" />
          <label htmlFor="home address">Address:</label>
          <TextField name="home address" validation={{ required: true }} />
          <FieldError name="home address" />
          <label htmlFor="contact-number">Contact Number:</label>
          <TextField name="contact-number" validation={{ required: true }} />
          <FieldError name="contact-number" />
          <label htmlFor="message">Message:</label>
          <TextAreaField name="message" validation={{ required: true }} />
          <FieldError name="message" />
          <br />
          <Submit>Submit</Submit>
        </Form>
      </div>
      <Toaster />
    </>
  )
}

export default ContactPage
