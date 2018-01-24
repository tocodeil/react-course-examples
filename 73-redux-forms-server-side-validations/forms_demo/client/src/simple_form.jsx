import React from 'react';
import { Field, reduxForm } from 'redux-form';
import * as validations from './utils/validations';
import InputField from './utils/fields';

const SimpleForm = props => {
  const { error, handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      {error && <div className='form-errors'>{error}</div>}

      <Field
        name="person[first_name]"
        label="First Name"
        component={InputField}
        type="text"
        placeholder="First Name"
        validate={validations.required}
      />

    <Field
      name="person[last_name]"
      component={InputField}
      type="text"
      label="Last Name"
      placeholder="Last Name"
      validate={validations.required}
    />

  <Field
    name="person[email]"
    component={InputField}
    type="email"
    label="Email"
    placeholder="Email"
    validate={[validations.required, validations.gmail]}
  />

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

