import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './store';
import SimpleForm from './simple_form';
import Panel from './panel';
import $ from 'jquery';

function App(props) {
  function submitResults(values) {
    return $.ajax({
      method: 'POST',
      data: values,
      url: '/people',
    });
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

