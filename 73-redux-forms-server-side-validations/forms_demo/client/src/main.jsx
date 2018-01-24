import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './store';
import SimpleForm from './simple_form';
import { SubmissionError } from 'redux-form';

import Panel from './panel';
import $ from 'jquery';

function translateServerErrors(serverErrors) {
  const result = {};
  for (let key of Object.keys(serverErrors)) {
    result[`person[${key}]`] = serverErrors[key].join(', ');
  }
  return Object.assign({}, result, {_error: "Submit Failed"});
}

function App(props) {
  async function submitResults(values) {
    try {
      await $.ajax({
        method: 'POST',
        data: values,
        url: '/people',
      });
    } catch (error) {
      const serverErrors = translateServerErrors(JSON.parse(error.responseText));
      throw new SubmissionError(serverErrors);
    }
  }

  return (
    <Provider store={store}>
      <div>
        <Panel />
        <SimpleForm onSubmit={submitResults} />
      </div>
    </Provider>
  );
}

ReactDOM.render(<App />, document.querySelector('main'));

