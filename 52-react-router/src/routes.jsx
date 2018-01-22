import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import About from 'about';
import Users from 'users';
import App from 'app';
import Index from 'index';
import UserDetails from 'user-details';

var Routes = React.createClass({
  render: function () {
    return (<Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Index} />
        <Route path="about" component={About}/>
        <Route path="users" component={Users}>
          <Route path=":id" component={UserDetails} />
        </Route>
      </Route>
    </Router>);
  }
});

export default Routes;

