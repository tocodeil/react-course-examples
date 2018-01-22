/**
 * Lab 01: Click per seconds
 *
 * Write a component that counts clicks per second.
 * Component should show a button and some text, and print
 * the click-per-seconds rate.
 */

import React from 'react';

export default class Cps extends React.Component{
  render() {
    return (
      <div>
        <button>Click Fast</button>
        <p>CPS rate: {0}</p>
      </div>
    );
  }
}
