import React from 'react';
import Data from './appdata';

var UserDetails = React.createClass({
  render: function () {
    var AllUsers = Data.AllUsers;
    var userId = this.props.params.id;
    var user = AllUsers[userId];

    return (<div>
      <h4>User Details: {userId}</h4>
      <p><b>Name: </b>{user.name}</p>
      <p><b>Likes: </b>{user.likes}</p>
    </div>);
  }
});

export default UserDetails;

