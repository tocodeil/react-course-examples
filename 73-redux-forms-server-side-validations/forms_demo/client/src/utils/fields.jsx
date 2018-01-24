import React from 'react';

export default function InputField(props) {
  const {
    input,
    label,
    type,
    meta: { touched, error, warning }
  } = props;

  return (
  <div className={`row ${error && 'field-error'} ${warning && 'field-warning'}`}>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <span className='error'>{error}</span>) ||
          (warning && <span className='warning'>{warning}</span>))}
    </div>
  </div>
  );
}

