import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './store';
import SimpleForm from './simple_form';
import FormValues from './form_values';

function App(props) {
  function showResults(values) {
    console.dir(values);
  }
    
  return (
    <Provider store={store}>
      <div>
        <SimpleForm onSubmit={showResults} />
        <FormValues />
      </div>
    </Provider>
  );
}

ReactDOM.render(<App />, document.querySelector('main'));

