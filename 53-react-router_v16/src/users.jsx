import React from 'react';
import { Link } from 'react-router';
import Data from './appdata';

var Users = React.createClass({
  render: function () {
    var AllUsers = Data.AllUsers;
    
    return (<div>
      <p>Yo Im the users page</p>
      <ul>
        {AllUsers.map(function (user, index) {
          return <li><Link to={'/users/' + index}>{user.name}</Link></li>;
        })}
      </ul>
      <hr />
      {this.props.children}
    </div>);
  }
});

export default Users;

