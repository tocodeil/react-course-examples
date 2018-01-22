import React from 'react';
import { Link, IndexLink } from 'react-router';

var App = React.createClass({
  render: function () {
    return (<div className="">
      <div className="top-bar">Yo Router</div>
      <nav>
        <IndexLink to="/" activeClassName="active">Main</IndexLink>
        <Link to="about" activeClassName="active">About</Link>
        <Link to="users" activeClassName="active">Users</Link>
      </nav>
      <div className="content">{this.props.children}</div>
    </div>);
  }
});

export default App;

