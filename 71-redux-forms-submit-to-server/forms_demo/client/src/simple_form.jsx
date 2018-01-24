import React from 'react';
import { Field, reduxForm } from 'redux-form';

const SimpleForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div className='row'>
        <label>First Name</label>
        <div>
          <Field
            name="person[first_name]"
            component="input"
            type="text"
            placeholder="First Name"
          />
        </div>
      </div>
      <div className='row'>
        <label>Last Name</label>
        <div>
          <Field
            name="person[last_name]"
            component="input"
            type="text"
            placeholder="Last Name"
          />
        </div>
      </div>
      <div className='row'>
        <label>Email</label>
        <div>
          <Field
            name="person[email]"
            component="input"
            type="email"
            placeholder="Email"
          />
        </div>
      </div>
      <div className='row'>
        <label>Favorite Color</label>
        <div>
          <Field name="person[favorite_color]" component="select">
            <option />
            <option value="ff0000">Red</option>
            <option value="00ff00">Green</option>
            <option value="0000ff">Blue</option>
          </Field>
        </div>
      </div>
      <div>
        <label htmlFor="employed">Employed</label>
        <div>
          <Field
            name="person[employed]"
            id="employed"
            component="input"
            type="checkbox"
          />
        </div>
      </div>
      <div className='row'>
        <label>Notes</label>
        <div>
          <Field name="person[notes]" component="textarea" />
        </div>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'simple', // a unique identifier for this form
})(SimpleForm);

