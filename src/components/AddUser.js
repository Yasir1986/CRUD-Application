import React from 'react'
import { Field, reduxForm } from 'redux-form'

const AddUser = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit} className="form-inline">
        <label>Name</label>
          <Field
            name="name"
            component="input"
            type="text"
            placeholder="Name"
          />
        <label>Email</label>
          <Field
            name="email"
            component="input"
            type="email"
            placeholder="Email"
          />
        <label>Country</label>
          <Field
            name="country"
            component="input"
            type="text"
            placeholder="Country"
          />
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
    </form>
  )
}

export default reduxForm({
  form: 'addUser' // a unique identifier for this form
})(AddUser)
