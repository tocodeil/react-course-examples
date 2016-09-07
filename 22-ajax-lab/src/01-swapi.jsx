/**
 * Lab 01:
 *
 * Write two components for showing data from swapi.co:
 *
 * Person component should show information about a specific character.
 * Film component should show information about a specific film.
 *
 * Both Person and Film show a list of the corresponding film/person,
 * allowing a user to expand from a Person to a Film she played in,
 * to another Person from that film and so on.
 */

import React from 'react';

const Person = React.createClass({
});

const Film = React.createClass({
});

export default React.createClass({
  render() {
    return <div>
      <Person id={1} />
    </div>
  }
});
