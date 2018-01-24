import React from 'react';
import { connect } from 'react-redux';
import { getFormValues } from 'redux-form';


function FormValues(props) {
  const { values } = props;
  return (
    <div>
      <h2>Form Values</h2>
      <pre>
        {values ? JSON.stringify(values, 0, 2) : String(values)}
      </pre>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    values: getFormValues('simple')(state),
  };
}

export default connect(mapStateToProps)(FormValues);
