import { useState } from 'react'

import { gql } from '@apollo/client'

import './contact.css'

import {
  TextField,
  TextAreaField,
  Submit,
  Form,
  FieldError,
  EmailField,
  DatetimeLocalField,
  SubmitHandler,
} from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'
import { MetaTags } from '@redwoodjs/web'
import { Toaster, toast } from '@redwoodjs/web/toast'

const CREATE_CONTACT_MUTATION = gql`
  mutation CreateContactMutation($input: CreateContactInput!) {
    createContact(input: $input) {
      id
    }
  }
`

const Contact = () => {
  const [formType, setFormType] = useState('')
  const [createContact, { loading, error }] = useMutation(
    CREATE_CONTACT_MUTATION
  )

  interface formValues {
    contactType: string
    firstName: string
    lastName: string
    email: string
    address: string
    contactNumber: string
    message: string
    when?: string // This is now an optional field
  }

  const onSubmit: SubmitHandler<formValues> = async (data) => {
    if (formType === 'onsite free quote' && !data.when) {
      toast.error('Please select a date and time for the visit.')
      return
    }
    try {
      await createContact({ variables: { input: data } })
      toast.success('Contact created successfully')
    } catch (err) {
      toast.error('Failed to create contact')
    }
    console.log('Form data:', data)
    createContact({ variables: { input: data } })
  }

  return (
    <>
      <MetaTags title="Contact" description="Contact" />

      <div className="contact-container">
        <h1>Contact & Booking form:</h1>
        <h3>
          Book a free onsite quote, or get in touch with any queries you and we
          will be touch.
        </h3>

        <Form
          onSubmit={onSubmit}
          config={{ mode: 'onBlur' }}
          className="contact-form"
        >
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
          <label htmlFor="firstName">First Name:</label>
          <TextField name="firstName" validation={{ required: true }} />
          <FieldError name="firstName" />
          <label htmlFor="lastName">Last Name:</label>
          <TextField name="lastName" validation={{ required: true }} />
          <FieldError name="lastName" />
          <label htmlFor="email">Email:</label>
          <EmailField
            name="email"
            validation={{
              required: true,
              pattern: {
                value: /[^@]+@[^.]+\..+/,
                message: 'Please enter a valid email address',
              },
            }}
          />
          <FieldError name="email" />
          <label htmlFor="address">Address:</label>
          <TextField name="address" validation={{ required: true }} />
          <FieldError name="address" />
          <label htmlFor="contactNumber">Contact Number:</label>
          <TextField name="contactNumber" validation={{ required: true }} />
          <FieldError name="contactNumber" />
          <label htmlFor="message">Message:</label>
          <TextAreaField name="message" validation={{ required: true }} />
          <FieldError name="message" />
          <br />
          <Submit disabled={loading}>
            {loading ? 'Submitting...' : 'Submit'}
          </Submit>
        </Form>
        {error && <p>{error.message}</p>}
      </div>
      <Toaster />
    </>
  )
}

export default Contact
