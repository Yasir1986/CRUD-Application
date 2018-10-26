import React from 'react'
import { Field, reduxForm } from 'redux-form'

const EditUser = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit} className="form-inline">
      <div>
        <label>Name:</label>
        <div>
          <Field
            name="name"
            component="input"
            type="text"
            placeholder="Name"
          />
        </div>
      </div>
      <div>
        <label>Email:</label>
        <div>
          <Field
            name="email"
            component="input"
            type="email"
            placeholder="Email"
          />
        </div>
      </div>
      <div>
        <label>Country</label>
        <div>
          <Field
            name="country"
            component="input"
            type="text"
            placeholder="Country"
          />
        </div>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'editUser', // a unique identifier for this form
  enableReinitialize: true,
})(EditUser)
